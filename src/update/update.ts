
import { Database } from 'sqlite3';

// Define types
type Brick = {
  size: string;
  shape: string;
  color?: string;
};

interface LegoColorResponse {
  results?: {
    external_ids?: {
      BrickOwl?: {
        ext_descrs?: string[][];
      };
    };
  }[];
}

async function fetchData(): Promise<Brick[]> {
  const response = await fetch('https://rebrickable.com/api/v3/lego/colors/', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'key a5919f2c3e0e98bcac8afdadde89acd0'
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data: unknown = await response.json();
  const responseData = data as LegoColorResponse;

  // Check if 'results' is defined before accessing it
  const colors = responseData.results?.map(result => result.external_ids?.BrickOwl?.ext_descrs?.[0] ?? []);

  // Handle the case where 'colors' might be undefined
  const bricks: Brick[] = colors?.map(colorArray => ({
    size: 'default',
    shape: 'default',
    color: colorArray[0] ?? 'default'
  })) ?? [];
  
  return bricks;
}

function storeData(bricks: Brick[]) {
  const db = new Database('bricks.db');

  db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS bricks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      size TEXT,
      shape TEXT,
      color TEXT
    )`);

    const stmt = db.prepare('INSERT INTO bricks (size, shape, color) VALUES (?, ?, ?)');
    bricks.forEach(brick => {
      stmt.run(brick.size, brick.shape, brick.color);
    });
    stmt.finalize();

    console.log('Data stored successfully.');
  });

  db.close();
}

async function main() {
  try {
    const bricks = await fetchData();
    storeData(bricks);
  } catch (error) {
    console.error('Error fetching or storing data:', error);
  }
}

main();

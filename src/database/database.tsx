import fetch from 'node-fetch';
import sqlite3 from 'sqlite3';


type Brick = {
  size: string;
  shape: string;
  color: string;
};


async function fetchData(): Promise<Brick[]> {
  const response = await fetch('https://api.example.com/bricks');
  const data = await response.json();
  return data;
}


function storeData(bricks: Brick[]) {
  const db = new sqlite3.Database('bricks.db');

  db.serialize(function () {
    
    db.run(`CREATE TABLE IF NOT EXISTS bricks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      size TEXT,
      shape TEXT,
      color TEXT
    )`);

    // Insert data into the table
    const stmt = db.prepare('INSERT INTO bricks (size, shape, color) VALUES (?, ?, ?)');
    bricks.forEach((brick) => {
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
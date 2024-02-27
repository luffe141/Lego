import express, { Request, Response } from 'express';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

const app = express();

app.post('/post', (req: Request, res: Response) => {
  const config: AxiosRequestConfig = {
    method: 'post',
    url: 'http://jsonplaceholder.typicode.com/posts',
    data: req.body,
  };

  axios(config)
    .then((response: AxiosResponse) => {
      res.json(response.data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

app.put('/put', (req: Request, res: Response) => {
  const config: AxiosRequestConfig = {
    method: 'put',
    url: 'http://jsonplaceholder.typicode.com/posts/1',
    data: req.body,
  };

  axios(config)
    .then((response: AxiosResponse) => {
      res.json(response.data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

app.patch('/patch', (req: Request, res: Response) => {
  const config: AxiosRequestConfig = {
    method: 'patch',
    url: 'http://jsonplaceholder.typicode.com/posts/1',
    data: req.body,
  };

  axios(config)
    .then((response: AxiosResponse) => {
      res.json(response.data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

app.delete('/delete', (req: Request, res: Response) => {
  const config: AxiosRequestConfig = {
    method: 'delete',
    url: 'http://jsonplaceholder.typicode.com/posts/1',
  };

  axios(config)
    .then((response: AxiosResponse) => {
      res.json(response.data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

app.get('/get', (req: Request, res: Response) => {
  const config: AxiosRequestConfig = {
    method: 'get',
    url: 'http://jsonplaceholder.typicode.com/posts',
  };

  axios(config)
    .then((response: AxiosResponse) => {
      res.json(response.data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


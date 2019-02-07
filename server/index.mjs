import http from 'http';

import express from 'express';

import { setAppMiddlewares } from './middlewares/appMiddlewares';
import { setRoutes } from './routes';

const app = express();

setAppMiddlewares(app);
setRoutes(app);

const server = http.createServer(app);

server.listen(4201, () => {
  console.log('Server was started on port: 4201');
});

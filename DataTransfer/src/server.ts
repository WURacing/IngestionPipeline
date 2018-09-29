import * as express from 'express';
import { registerRoutes } from './routes';
import SocketServer from './socketServer';

const app = express();

registerRoutes(app);



console.log('server is gtg');

const server = app.listen(2020, () => {
    console.log('listening on 2020');
});

const sServer = new SocketServer(server);
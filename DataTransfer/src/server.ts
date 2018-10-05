import * as express from 'express';
import { registerRoutes } from './routes';
import SocketServer from './socketServer';

const app = express();

registerRoutes(app);



console.log('server is gtg');

const server = app.listen(process.env.PORT as any,  () => {
    console.log('listening on ' + process.env.PORT);
});

const sServer = new SocketServer(server);
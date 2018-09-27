import * as express from 'express';
import { registerRoutes } from './routes';

const app = express();

registerRoutes(app);

app.listen(400, () => {
    console.log('listening on 400');
});
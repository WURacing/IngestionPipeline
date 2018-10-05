import * as express from 'express';
import { registerRoutes } from './routes';

const app = express();

registerRoutes(app);

app.listen(process.env.PORT, () => {
    console.log('listening on ' + process.env.PORT);
});
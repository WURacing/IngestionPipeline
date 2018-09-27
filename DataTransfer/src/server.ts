import * as express from 'express';
import { registerRoutes } from './routes';

const app = express();

registerRoutes(app);

app.listen(2020, () => {
    console.log('listening on 2020');
});
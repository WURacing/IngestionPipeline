import { Express, Request, Response } from 'express';

export function registerRoutes(app: Express) {

    app.get('/ping', (req: Request, res: Response) => {
        res.send('pong');
    });

    app.get('/asset/:id', (req: Request, res: Response) => {
        res.json({
            code: 200,
            data: [
                {
                    id: 1,
                    packet: 'content'
                },
                {
                    id: 2,
                    packet: 'content'
                }
            ]
        });
    });

}
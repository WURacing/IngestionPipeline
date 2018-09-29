import * as WebSocket from 'ws';
import * as _ from 'lodash';
import * as shortid from 'shortid';

export default class SocketServer {

    public port: number;

    public server: any;

    constructor(expressServer: any) {
        this.port;
        this.server = new WebSocket.Server(
            { 
                server: expressServer,
                host: '0.0.0.0'
            }
        );

        this.server.on('open', this.open);
        this.server.on('connection', (conn: any) => {
            conn['id'] = shortid.generate();
            conn['role'] = 'reciever';
            conn.on('message', (msg) => {
                this.recieve(conn, msg);
            })
        });
    }

    private open = () => {}

    private recieve = (connection: any, message: string) => {
        if (message = 'CONN_ROLE:SENDER') {
            connection['role'] = 'sender';
        } else if (message = 'CONN_ROLE:RECIEVER') {
            connection['role'] = 'reciever';
        } else if (message = 'SESSION_START') {
            // init session in SQL db
        } else if (message = 'SESSION_END') {
            // end session in SQL db
        } else {
            _.forEach(this.server.connection, (client: any) => {
                console.log(client.id);
                if (client.role == 'reciever') {
                    if (client != connection && client.readyState === WebSocket.OPEN) {
                        console.log('sending data');
                        client.send(message);
                    }
                }
            });
        }
    }

}
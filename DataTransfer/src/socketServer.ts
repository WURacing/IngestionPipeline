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
                server: expressServer
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
        console.log('recieve to server ' + message);
        if (message == 'CONN_ROLE:SENDER') {
            console.log(1);
            connection['role'] == 'sender';
        } else if (message == 'CONN_ROLE:RECIEVER') {
            console.log(2);
            connection['role'] == 'reciever';
        } else if (message == 'SESSION_START') {
            console.log(3);
            // init session in SQL db
        } else if (message == 'SESSION_END') {
            console.log(4);
            // end session in SQL db
        } else {

            let msg = JSON.parse(message);
            if (msg.sensorId == '002') {
                // best viewed with line graph
                msg['visualizationType'] = 'line';
                msg['name'] = 'Engine Temp';
            } else if (msg.sensorId == '001') {
                // best viewed with val graph
                msg['visualizationType'] = 'value';
                msg['name'] = 'Car Is Active';
            }

            msg = JSON.stringify(msg);

            //console.log(this.server.clients);
            this.server.clients.forEach((client: any) => {
                console.log(client.id);
                if (client.role == 'reciever') {
                    if (client != connection && client.readyState === WebSocket.OPEN) {
                        console.log('sending data');
                        client.send(msg);
                    }
                }
            });
            /*
            _.forEach(this.server.clients, (client: any) => {
                console.log(client.id);
                if (client.role == 'reciever') {
                    if (client != connection && client.readyState === WebSocket.OPEN) {
                        console.log('sending data');
                        client.send(message);
                    }
                }
            });
            */
        }
    }

}
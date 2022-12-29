import { Logger } from '@nestjs/common';
import {
    SubscribeMessage,
    WebSocketGateway,
    OnGatewayInit,
    OnGatewayConnection,
    OnGatewayDisconnect,
    WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

const data = {
    "flow_id": "32d82b33-a87f-4158-8396-35b9a08b2729",
    "flow_operational_statistics": {
        "equity": 100000,
        "pnl": 100,
        "apr": 20,
        "volume": 150000,
        "bot_count": 2,
        "time_of_work": "5.20:16:56"
    }
}

@WebSocketGateway({
    cors: {
        origin: '*',
    },
    namespace: 'v1/statistic',
})
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    private wss: Server;
    private logger: Logger = new Logger('AppGateway');

    afterInit() {
        this.logger.log('Initialized!');
    }
    handleDisconnect(client: Socket) {
        this.logger.log(`Client connected: ${client.id}`);
    }

    handleConnection(client: Socket) {
        this.logger.log(`Client disconnected: ${client.id}`);
    }

    @SubscribeMessage('toMainBack')
    handleMessage(client: Socket, text: string): void {
        this.logger.log('Send');
        this.wss.emit('getData', data);
    }
}

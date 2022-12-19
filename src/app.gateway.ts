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
    "user_statitics": {
        "total_realized_pnl": [
            100,
            150,
            130
        ],
        "daily_realized_pnl": 100,
        "running_equity": [
            10000,
            15000,
            13000
        ],
        "total_realized_pnl_data": [
            {
                "date": "2022-11-28",
                "cum_pnl": 0
            }
        ],
        "daily_realized_pnl_data": [
            {
                "date": "2022-11-28",
                "cum_pnl": 100
            }
        ],
        "profit_distribution_data": {},
        "equity_allocation_data": [
            {
                "coin": "USDT",
                "allocation": 0.3
            }
        ],
        "bots_win_rate_data": {
            "profitable": 30,
            "losable": 20,
            "neutral": 50
        }
    },
    "status": {
        "code": "0.12.3",
        "message": "OK"
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

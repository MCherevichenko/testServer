import { Controller, Post, Get, Param, Body, Req, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHi(): string {
        return this.appService.hi();
    }

    @Post()
    getHello(@Body() body): string {
        return this.appService.createEmailCode(body.email);
    }

    @Post(':code')
    checkCode(@Param('code') code: string) {
        return this.appService.checkCode(code);
    }

    @Post('v1/session')
    sendSessionId(@Body() body) {
        return this.appService.createSession(body);
    }

    @Post('v1/keys')
    saveBybtKeys(@Body() body) {
        return this.appService.saveBybtKeys(body);
    }

    @Post('v1/sessions/:session/password')
    changePassword(@Param('session') sessionId: string, @Body() body) {
        return this.appService.forgotPassword(body, sessionId);
    }

    @Post('bots/create-bot')
    createBot(@Req() req) {
        return this.appService.createBot(req.body);
    }

    @Get('/v1/sessions/:sessionId/user-panel')
    userStat(@Param('sessionId') sessionId) {
        return {
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
    }

    @Get('bots/:userId')
    allUserBots() {
        return {
            bots: [
                {
                    id: 1,
                    type: 'grid tronic',
                    strategy: 'LONG',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 11669.78,
                    pnl: ' - 11, 669.78% ',
                },
                {
                    id: 2,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 3,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 4,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 5,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 6,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 7,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 8,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 9,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 10,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 11,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 12,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 13,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 14,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 15,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 16,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 17,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 18,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 19,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 20,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 21,
                    type: 'grid tronic',
                    strategy: 'LONG',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 9669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 22,
                    type: 'grid tronic',
                    strategy: 'LONG',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 9669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 23,
                    type: 'orderblock',
                    strategy: 'LONG',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 9669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 24,
                    type: 'orderblock',
                    strategy: 'LONG',
                    runtime: '3D 4H 23M',
                    risk: 'MEDIUM',
                    apr: 14669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 25,
                    type: 'astrobot',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'HIGHT',
                    apr: 14669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 26,
                    type: 'orderblock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 14669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 27,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 28,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'HIGHT',
                    apr: 12669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 29,
                    type: 'astrobot',
                    strategy: 'SPOT',
                    runtime: '3D 4H 23M',
                    risk: 'HIGHT',
                    apr: 10669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 30,
                    number: '10',
                    type: 'astrobot',
                    strategy: 'SPOT',
                    runtime: '3D 4H 23M',
                    risk: 'HIGHT',
                    apr: 10669.78,
                    pnl: '-11,669.78%',
                },
            ]
        }
    }

    @Get('bots/')
    allBots() {
        return {
            bots: [
                {
                    id: 1,
                    type: 'grid tronic',
                    strategy: 'LONG',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 11669.78,
                    pnl: ' - 11, 669.78% ',
                },
                {
                    id: 2,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 3,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 4,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 5,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 6,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 7,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 8,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 9,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 10,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 11,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 12,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 13,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 14,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 15,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 16,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 17,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 18,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 19,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 20,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 21,
                    type: 'grid tronic',
                    strategy: 'LONG',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 9669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 22,
                    type: 'grid tronic',
                    strategy: 'LONG',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 9669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 23,
                    type: 'orderblock',
                    strategy: 'LONG',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 9669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 24,
                    type: 'orderblock',
                    strategy: 'LONG',
                    runtime: '3D 4H 23M',
                    risk: 'MEDIUM',
                    apr: 14669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 25,
                    type: 'astrobot',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'HIGHT',
                    apr: 14669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 26,
                    type: 'orderblock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 14669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 27,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 28,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'HIGHT',
                    apr: 12669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 29,
                    type: 'astrobot',
                    strategy: 'SPOT',
                    runtime: '3D 4H 23M',
                    risk: 'HIGHT',
                    apr: 10669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 30,
                    number: '10',
                    type: 'astrobot',
                    strategy: 'SPOT',
                    runtime: '3D 4H 23M',
                    risk: 'HIGHT',
                    apr: 10669.78,
                    pnl: '-11,669.78%',
                },
            ]
        }
    }
}

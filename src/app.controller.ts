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
    sendSessionId(@Body() body): string {
        return this.appService.createSession(body);
    }

    @Post('v1/keys')
    saveBybtKeys(@Body() body): string {
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

    @Get('bots/:userId')
    allBots() {
        return {
            bots: [
                { id: 1, number: '01', type: 'grid tronic', strategy: 'LONG', runtime: '3D 4H 23M', risk: 'LOW', apr: '+11,669.78%', pnl: '-11,669.78%' },
                { id: 2, number: '02', type: 'grid tronic', strategy: 'LONG', runtime: '3D 4H 23M', risk: 'LOW', apr: '+11,669.78%', pnl: '-11,669.78%' },
                { id: 3, number: '03', type: 'grid tronic', strategy: 'LONG', runtime: '3D 4H 23M', risk: 'LOW', apr: '+11,669.78%', pnl: '-11,669.78%' },
                { id: 4, number: '04', type: 'orderblock', strategy: 'LONG', runtime: '3D 4H 23M', risk: 'LOW', apr: '+11,669.78%', pnl: '-11,669.78%' },
                { id: 5, number: '05', type: 'orderblock', strategy: 'LONG', runtime: '3D 4H 23M', risk: 'MEDIUM', apr: '+11,669.78%', pnl: '-11,669.78%' },
                { id: 6, number: '06', type: 'astrobot', strategy: 'SHORT', runtime: '3D 4H 23M', risk: 'HIGHT', apr: '+11,669.78%', pnl: '-11,669.78%' },
                { id: 7, number: '07', type: 'orderblock', strategy: 'SHORT', runtime: '3D 4H 23M', risk: 'LOW', apr: '+11,669.78%', pnl: '-11,669.78%' },
                { id: 8, number: '08', type: 'aftershock', strategy: 'SHORT', runtime: '3D 4H 23M', risk: 'LOW', apr: '+11,669.78%', pnl: '-11,669.78%' },
                { id: 9, number: '09', type: 'aftershock', strategy: 'SHORT', runtime: '3D 4H 23M', risk: 'HIGHT', apr: '+11,669.78%', pnl: '-11,669.78%' },
                { id: 10, number: '10', type: 'astrobot', strategy: 'SPOT', runtime: '3D 4H 23M', risk: 'HIGHT', apr: '+11,669.78%', pnl: '-11,669.78%' },
            ]
        }
    }
}

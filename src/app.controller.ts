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
        return { bot1: { id: 1, name: 'SuperBot' }, bot2: { id: 2, name: 'LazyBot' } }
    }
}

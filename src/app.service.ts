import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    public hi() {
        return 'Hellow';
    }

    public createEmailCode(email) {
        return '1234';
    }

    public checkCode(code) {
        return 1234;
    }

    public createSession(body) {
        return 'a3d49694-83a8-4f4d-b71f-0625aad75bcf';
    }

    public forgotPassword(body, sessionId) {
        return sessionId;
    }

    public createBot(settings) {
        return 'Bot created'
    }

    public saveBybtKeys(keys) {
        return 'We save your keys'
    }
}

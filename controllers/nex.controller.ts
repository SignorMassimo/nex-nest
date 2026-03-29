import { Controller, Get } from '@nestjs/common';

@Controller()
export class NexController {
    @Get('nex')
    nex() {
        return 'nex'
    }
}

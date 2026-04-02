import { Controller, Get } from '@nestjs/common';
import { nestHelper } from '../../../recipes/nex-nest/helper';

@Controller()
export class NexController {
    @Get('nex')
    nex() {
        nestHelper('nex-nest')
        return 'nex'
    }
}

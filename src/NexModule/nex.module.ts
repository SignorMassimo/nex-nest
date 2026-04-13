import { Module, type MiddlewareConsumer, type NestModule } from '@nestjs/common'
import { NexController } from './controllers/nex.controller'
import { GlobalLoggerMiddleware } from './middlewares/global-logging.middleware'

@Module({
    controllers: [NexController]
})
export class NexModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(GlobalLoggerMiddleware)
            .forRoutes('*')
    }
}

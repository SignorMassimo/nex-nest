import { Injectable, type NestMiddleware } from '@nestjs/common'
import type { NextFunction, Request, Response } from 'express'

@Injectable()
export class GlobalLoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log(`[${new Date().toLocaleTimeString()}] Request received for: ${req.method} ${req.originalUrl}`)
        next()
    }
}

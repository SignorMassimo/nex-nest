```typescript
import { Module } from '@nestjs/common'
import { NexModule } from 'nex-nest'

@Module({
    imports: [NexModule, ...],
    ...
})
export class AppModule {}

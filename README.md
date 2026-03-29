```typescript
import { Module } from '@nestjs/common'
import { NexModule } from './NexModule'

@Module({
    imports: [NexModule, ...],
    ...
})
export class AppModule {}
```

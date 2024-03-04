import * as Module from 'module';
import { CatsController } from './controller/cats.controller';
import { CatsService } from './service/cats.service';
import { Global } from '@nestjs/common';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {}

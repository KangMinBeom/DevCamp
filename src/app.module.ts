import * as Module from 'module';
import { BoardsModule } from './boards/boards.module';

@Module({
  import: [],
  imports: [BoardsModule],
})
export class AppModule {}

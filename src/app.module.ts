import * as Module from 'module';
import { BoardsModule } from './boards/boards.module';
import { AuthModule } from './auth/auth.module';

@Module({
  import: [],
  imports: [BoardsModule, AuthModule],
})
export class AppModule {}

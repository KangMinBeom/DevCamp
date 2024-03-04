import * as Module from 'module';
import { CatsModule } from './cat/cats.module';
import {MiddlewareConsumer, NestModule, RequestMethod} from "@nestjs/common";
import {LoggerMiddleware} from "./logger.middleware";
import * as path from "path";
import {CatsController} from "./cat/controller/cats.controller";

@Module({
  import: [CatsModule],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(logger)
            .forRoutes(CatsController);
    }
}

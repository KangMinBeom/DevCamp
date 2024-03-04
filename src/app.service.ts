import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '저의 이름은 강민범입니다.';
  }
}

import {
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController{

  @Get()
  findAll(@Req() request: Request): string {
    return 'this action returns all cats';
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }

  @Get(':id')
  findOne2(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }

  @Post()
  @HttpCode(204)
  create(): string {
    return 'This action adds a new cat';
  }

  @Post()
  @Header('Cache-Control', 'none')
  create1(): string {
    return 'This action adds a new cat';
  }
}

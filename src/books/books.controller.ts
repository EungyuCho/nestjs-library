import { Controller, Get } from '@nestjs/common';

@Controller('books')
export class BooksController {
  @Get()
  getMovie() {
    return 'This is book Controller';
  }
}

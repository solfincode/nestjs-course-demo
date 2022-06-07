import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dto';
import { countMessageDto } from './dtos/count-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessage() {
    return 'hello world';
  }

  @Post()
  createMessage(@Body() body: createMessageDto) {
    return body;
  }

  @Post('/count')
  countMessage(@Body() body: countMessageDto) {
    return body;
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return id;
  }
}

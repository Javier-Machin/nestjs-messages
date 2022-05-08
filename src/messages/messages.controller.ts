import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    console.log('yep');
  }

  @Post()
  createMessage() {
    console.log('yep');
  }

  @Get('/:id')
  getMessage() {
    console.log('yep');
  }
}

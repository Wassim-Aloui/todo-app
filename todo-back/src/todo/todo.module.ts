import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoSchema } from 'src/schemas/todo.schema';

@Module({
  controllers: [TodoController],
  providers: [TodoService],
  imports: [MongooseModule.forFeature([{ name: 'Todo', schema: TodoSchema }])]
})
export class TodoModule { }

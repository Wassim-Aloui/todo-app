import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from 'src/schemas/todo.schema';
import { todoDto } from './dto/create-todo.dto';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService) {

    }


    @Get()
    async getAllTodos(): Promise<Todo[]> {
        return this.todoService.findAllTodos();
    }

    @Post()
    async postTodo(@Body() todo: todoDto): Promise<Todo> {
        return this.todoService.createTodo(todo)
    }


    @Get(':id')
    async getTodoById(@Param('id') id: string): Promise<Todo> {

        const todo = await this.todoService.findTodoById(id);
        if (!todo) {

            throw new NotFoundException("Todo not found ")
        }

        return todo
    }

    @Put(':id')
    async updateTodo(@Param('id') id: string, @Body() todo: todoDto): Promise<Todo> {
        return this.todoService.updateTodoById(id, todo)
    }

    @Delete(':id')
    async deleteTodo(@Param('id') id: string): Promise<{ message: string; todo: Todo }> {

        const todo = await this.todoService.deleteTodoById(id);
        if (!todo) {

            throw new NotFoundException("Todo not found ")
        }


        return {
            message: 'Todo deleted successfully ',
            todo
        }
    }
}

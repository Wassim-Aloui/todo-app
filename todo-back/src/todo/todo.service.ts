import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Todo } from 'src/schemas/todo.schema';

@Injectable()
export class TodoService {
    constructor(
        @InjectModel(Todo.name)
        private todoModel : mongoose.Model<Todo>
    ){}



    async findAllTodos(): Promise<Todo[]> {
        return this.todoModel.find();
      }


    async createTodo(todo : Todo): Promise<Todo>{
        return this.todoModel.create(todo);
    }

    async findTodoById(id : string): Promise<Todo>{
        return this.todoModel.findById(id);
    }

    async updateTodoById(id : string , todo : Todo): Promise<Todo>{
        return this.todoModel.findByIdAndUpdate(id , todo ,{ new: true });
    }

    async deleteTodoById(id : string): Promise<Todo>{
        return this.todoModel.findByIdAndDelete(id);
    }

}

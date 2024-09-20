  import { Component, OnInit } from '@angular/core';
  import { todo } from 'node:test';
  import { Todo } from 'src/app/cors/models/todo.model';
  import { TodoService } from 'src/app/cors/services/todo.service';

  @Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })
  export class HomeComponent implements OnInit {

    constructor(private todoService: TodoService) { }

    tasks: Todo[] = [];
    title: string = '';
    description: string = '';
    selectedTask: any | null = null ;

    ngOnInit(): void {
      this.getAllTasks()
    }

    getAllTasks() {
      this.todoService.getTodos().subscribe(
        (taskList) => {
          this.tasks = taskList;
        }
      )
    }

    addTask(): void {
      if (this.title && this.description) {
        const newTodo: Todo = {
          title: this.title,
          description: this.description
        };
        
        this.todoService.addTodo(newTodo).subscribe(
          (task) => {
            this.tasks.push(task);
            this.title = '';
            this.description = '';
          }
        );
      }
    }

    deleteTask(id: any): void {
      if (confirm('Have you finished this task?')) {
        this.todoService.deleteTodo(id).subscribe(() => {
          this.getAllTasks();
        });
      }

   
    }
   

   
    getTaskById(id : any) {
      this.todoService.getTodoById(id).subscribe(
        (task)=>{
          this.selectedTask = task;
        }
      )
    }

    updateTask() {
      if (this.selectedTask) {
        this.todoService.updateTodo(this.selectedTask._id, this.selectedTask).subscribe(
          () => {
            this.getAllTasks();
          }
        );
      }
    }
    
  }

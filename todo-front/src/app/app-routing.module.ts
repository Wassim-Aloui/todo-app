import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'auth', loadChildren: () => import('./components/user/user.module').then(m => m.UserModule) },
  { path: 'todo', loadChildren: () => import('./components/todo/todo.module').then(m => m.TodoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

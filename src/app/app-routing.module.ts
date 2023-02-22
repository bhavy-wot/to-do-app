import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TodayComponent } from './today/today.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'today',
    component: TodayComponent,
  },
  {
    path: 'schedule',
    component: ScheduleComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

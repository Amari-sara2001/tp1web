import { Routes } from '@angular/router';
import {ListEmpComponent} from "./component/list-emp/list-emp.component";
import {NewEmpComponent} from "./components/new-emp/new-emp.component";
import {DetailEmpComponent} from "./component/detail-emp/detail-emp.component";

export const routes: Routes = [
  { path: 'list', component : ListEmpComponent},
  {path: 'add', component : NewEmpComponent},
  {path:'update/:id',component:DetailEmpComponent},
  {path: '', redirectTo : '/list' , pathMatch:'full'}
];

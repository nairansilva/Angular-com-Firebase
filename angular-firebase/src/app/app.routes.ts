import {Routes} from '@angular/router';
import { EditComponent } from './crud/edit/edit.component';


export const ROUTES: Routes = [
  { path: '', redirectTo: '/crud',  pathMatch: 'full' },
  { path: 'crud', component: EditComponent}
];

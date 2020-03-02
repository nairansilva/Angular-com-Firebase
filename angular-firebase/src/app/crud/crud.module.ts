import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { DiaperDataComponent } from './shared/diaper-data/diaper-data.component';
import { DiaperComponent } from './shared/diaper/diaper.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';






@NgModule({
  declarations: [EditComponent, ListComponent, DiaperDataComponent, DiaperComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatButtonModule
  ],
  exports: [
    EditComponent, ListComponent, MatTableModule
  ]
})
export class CrudModule { }

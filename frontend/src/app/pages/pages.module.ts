import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory/inventory.component';
import { ComponentsModule } from '../components/components.module';
import { ProcedureScheduleComponent } from './procedure-schedule/procedure-schedule.component';
import { ManageComponent } from './manage/manage.component';


@NgModule({
  declarations: [
    InventoryComponent,
    ProcedureScheduleComponent,
    ManageComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }

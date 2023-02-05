import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { ManageComponent } from './pages/manage/manage.component';
import { ProcedureScheduleComponent } from './pages/procedure-schedule/procedure-schedule.component';

const routes: Routes = [
  { path: 'all', component: InventoryComponent },
  { path: 'manage', component: ManageComponent },
  { path: 'procedure-schedule', component: ProcedureScheduleComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

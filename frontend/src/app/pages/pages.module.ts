import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory/inventory.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    InventoryComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './global/navigation/navigation.component';
import { ContentContainerComponent } from './containers/content-container/content-container.component';
import { ListItemComponent } from './list-item/list-item.component';



@NgModule({
  declarations: [
    NavigationComponent,
    ContentContainerComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavigationComponent,
    ContentContainerComponent,
    ListItemComponent,
  ]
})
export class ComponentsModule { }

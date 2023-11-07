import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentsComponent } from './components.component';



@NgModule({
  declarations: [
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ComponentsComponent
  ]
})
export class ComponentsModule { }

import { NgModule } from '@angular/core';
import { ComponentLibraryComponent } from './component-library.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [ComponentLibraryComponent, ButtonComponent],
  imports: [
  ],
  exports: [ComponentLibraryComponent]
})
export class ComponentLibraryModule { }

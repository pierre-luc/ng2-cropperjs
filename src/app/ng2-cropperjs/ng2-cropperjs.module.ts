import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2CropperComponent } from './ng2-cropper/ng2-cropper.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Ng2CropperComponent],
  exports: [Ng2CropperComponent]
})
export class Ng2CropperjsModule { }

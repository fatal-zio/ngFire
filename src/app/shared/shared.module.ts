import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyANbXGXlobafh1xcmNeg59VM8syw-4GXSQ'
    })
  ],
  exports: [CommonModule, FormsModule, AgmCoreModule]
})
export class SharedModule { }

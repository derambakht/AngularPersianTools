import { NgModule } from '@angular/core';
import { PersianToolsComponent } from './persian-tools.component';
import { NationalCodePipe } from './national-code.pipe';



@NgModule({
  declarations: [PersianToolsComponent, NationalCodePipe],
  imports: [
  ],
  exports: [PersianToolsComponent]
})
export class PersianToolsModule { }

import { Pipe, PipeTransform } from '@angular/core';
import { PersianToolsService } from './persian-tools.service';

@Pipe({
  name: 'nationalCode'
})
export class NationalCodePipe implements PipeTransform {

  constructor(private persianToolsService: PersianToolsService) { }

  transform(nationalCode: string): boolean {
      try {
          let number = this.persianToolsService.toEngNumber(nationalCode);
          let natCode = number.toString();

          while (natCode.length < 10)
              natCode = "0" + natCode;

          return this.persianToolsService.isValid(natCode);
      } catch (e) {
          return false;
      }

  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custpipes'
})
export class CustpipesPipe implements PipeTransform {

  transform(value: String,  name:String): String {
    return 'Name: '+name;
  }

}

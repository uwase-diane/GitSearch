import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'createdDate'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): any{
    let cY: any = new Date().getFullYear();
    let githubcY:any = new Date(value).getFullYear();
    let githubY = cY - githubcY;

    return githubY;
}
}
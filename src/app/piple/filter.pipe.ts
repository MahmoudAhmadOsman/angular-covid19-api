import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

 export class FilterPipe implements PipeTransform {

   transform(searchTerm: any, term: any): any {
    //Check if search term is undefined
    if(term === undefined) return searchTerm;

    //Else update the ninja array
    return searchTerm.filter(function(ninjas){
      return ninjas.country.toLowerCase().includes(term.toLowerCase());
    });
  }

}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

 export class FilterPipe implements PipeTransform {

   transform(searchTerm: any, term: any): any {
    //Check if search term is undefined
    if(term === undefined) return searchTerm;

    //Else update the searchTerm array
    return searchTerm.filter(function(showCountry){
      return showCountry.country.toLowerCase().includes(term.toLowerCase());
    });
  }

}
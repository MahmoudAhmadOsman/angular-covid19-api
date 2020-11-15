import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

    constructor(private htpp: HttpClient) {}

  //Create custom function
  getCovid(): Observable<any> {
    //https://jsonplaceholder.typicode.com/posts
    //https://api.covid19api.com/countries
    const URL = "https://corona.lmao.ninja/v3/covid-19/countries";
    return this.htpp.get(URL);
  }
}




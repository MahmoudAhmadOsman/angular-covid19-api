import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Covid19Service {
  servierError: string ="Unable to fetch data!."
  constructor(private htpp: HttpClient) { }
  
  getCovid(): Observable<any> {
    const URL = 'https://corona.lmao.ninja/v3/covid-19/countries';
    return this.htpp.get<any>(URL).pipe(catchError(this.handleError));
     
  } 
  handleError(error) {
    return throwError(error.message || 'Unable to fetch data!.');
  }
}

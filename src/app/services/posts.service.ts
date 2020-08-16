import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  //create variable for the view and then set that to the PostsService Service class
  //Also you need to use or impoort Angular HTTP Client
  constructor(private htpp: HttpClient) {}

  //Create custom function
  getPosts(): Observable<any> {
    //https://jsonplaceholder.typicode.com/posts
    //https://api.covid19api.com/countries
    const URL = "https://corona.lmao.ninja/v3/covid-19/countries";
    return this.htpp.get(URL);
  }
}

import { Covid19Service } from './../services/covid19.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit {

 title: string = "Coronavirus API ";

public CountryName:any = '';
  //Inject the covid Service here
  countries: any[];

  constructor(covidService: Covid19Service) {
    //subscrbe(res, err) -> takes res and err
    covidService.getCovid().subscribe(
      (res) => {
        console.log(res);
        //set the res to the countries array
        this.countries = res;
      },
      (err) => {
        console.log("error", err);
      }
    );
  }

  ngOnInit(): void {
  }

}

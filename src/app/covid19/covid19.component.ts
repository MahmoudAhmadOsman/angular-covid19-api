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
    totalRecords: String;
    page: Number=1;
  constructor(covidService: Covid19Service) {
    //subscrbe(res, err) -> takes res and err
  // 
    covidService.getCovid().subscribe(
      (data) => {
        console.log(data);
  // this.data = new Array<any>()
        //set the res to the countries array
        this.countries = data;

//countries = result
        //Total records
      this.totalRecords = data.countries.length;
      //console.log("Total Records: ", totalRecords);

      },
      (err) => {
        console.log("error", err);
      }
    );
  }

  ngOnInit(): void {
  }

}

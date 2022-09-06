import { Covid19Service } from './../services/covid19.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
// import "rxjs/add/operator/catch";
// import "rxjs/add/Observable/throw";
// import { Observable, throwError } from 'rxjs';
@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css'],
})
export class Covid19Component implements OnInit {
  title: string = 'Coronavirus API ';

  public CountryName: any = '';
  //Inject the covid Service here
  countries: any[];
  totalRecords: String;
  page: Number = 1;

  public error: any;

  constructor(covidService: Covid19Service, private toastr: ToastrService) {
    //subscrbe(res, err) -> takes res and err
    covidService.getCovid().subscribe(
      (data) => {
        //console.log(data);

        this.countries = data;

        //Total records
        this.totalRecords = data.countries.length;
        //console.log("Total Records: ", totalRecords);
      },
      (error) => {
        console.log('Ooops. There is an error: ', error);
        this.error = error.toString();
         
      }
    );
  }

  ngOnInit(): void {}
}

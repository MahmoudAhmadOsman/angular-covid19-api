import { FilterPipe } from './pipes/filter.pipe';
 import {NgxPaginationModule} from 'ngx-pagination'; 
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule }   from '@angular/forms';
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { AppRoutingModule } from "./app-routing.module";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
 
import { FooterComponent } from "./footer/footer.component";
import { Covid19Component } from './covid19/covid19.component';
import { ToastrModule } from 'ngx-toastr';
 
@NgModule({
  declarations: [
      AppComponent,
      NavComponent,
      AboutComponent,
      HomeComponent,
      FooterComponent,
      FilterPipe,
      Covid19Component
  ],
  imports: [BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ToastrModule.forRoot()
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule }   from '@angular/forms';
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { AppRoutingModule } from "./app-routing.module";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";

 
import { PostsComponent } from "./posts/posts.component";
import { FooterComponent } from "./footer/footer.component";
import { FilterPipe } from './piple/filter.pipe'; // for Template Driven Form Module

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    HomeComponent,
    PostsComponent,
    FooterComponent,
    FilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

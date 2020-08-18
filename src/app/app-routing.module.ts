import { PostsComponent } from "./posts/posts.component";

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { from } from "rxjs";

//Register ALL Routes here
const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },

  { path: "posts", component: PostsComponent },

  { path: "**", component: HomeComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

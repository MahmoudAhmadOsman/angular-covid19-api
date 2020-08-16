import { PostsComponent } from "./posts/posts.component";
import { StudentsComponent } from "./students/students.component";
import { ProductsComponent } from "./products/products.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { from } from "rxjs";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

//3rd step
//Register ALL Routes here
const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "products", component: ProductsComponent },
  { path: "students", component: StudentsComponent },
  { path: "posts", component: PostsComponent },

  { path: "404", component: PageNotFoundComponent },
  { path: "**", redirectTo: "404" }, // Wildcard route for a 404 page
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

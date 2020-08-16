import { PostsService } from "./../services/posts.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"],
})
export class PostsComponent implements OnInit {
  title: string = "Coronavirus API ";

  //Inject the post Service here
  //posts: any[];
  countries: any[];
  constructor(PostsService: PostsService) {
    //subscrbe(res, err) -> takes res and err
    PostsService.getPosts().subscribe(
      (res) => {
        console.log(res);
        //this.posts = res;
        this.countries = res;
      },
      (err) => {
        console.log("error", err);
      }
    );
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  title: string = "Home Page";
  // myName: string = "Mahmoud Osman";

  constructor() {
    //Return or show  name in the home component
    // gitName(){
    //   return this.myName;
    // }
  }

  ngOnInit(): void {}
}

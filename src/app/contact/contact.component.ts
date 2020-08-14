import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  // log to the console for testing purposes
  log(name) {
    console.log(name);
  }
  constructor() {}

  ngOnInit(): void {}
}

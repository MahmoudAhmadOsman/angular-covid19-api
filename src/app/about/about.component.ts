import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  profile = [
    {
      id: 1,
      name: "Mahmoud Osman",
      description:
        "Please, visit my website to learn more about me!!",
      education: "BS - Computer Science",
      email: "example@gmail.com",
      image: "/assets/images/mahmoud.jpg",
      phone: "651-555-5555",
      school: "Champlain College",
      year: 2019,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

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
        "I studied at Champlain College, and I have a bachelor's degree of computer science with minor in Web Design and Development. On the other side, I also have an associate degree of Computer Systems Management from Community College of Vermont.Additionally, I have three additional web certificates, a web design, web programming, and php programming from Champlain College. Moreover, I enjoy using modern web technologies where I alway keep looking forward to learn modern web technologies. Indeed, I use multiple web programming technologies such as HTML5, CSS3, JavaScript/ jQuery, Bootstrap, PHP / Laravel, Sass, Java / Grails / Spring Boot and more.Also, I use other Content Management Systems or CMS technologies such as Drupal and WordPress and I have built responsive and database driven applications.",
      education: "Bacholer's Degree",
      email: "mahmoudosman.som@gmail.com",
      image: "/assets/images/mahmoud.jpg",
      phone: "802-555-5555",
      school: "Champlain College",
      year: 2019,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

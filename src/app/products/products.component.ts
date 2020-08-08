import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  title: string = "All Products";

  products = [
    {
      id: 1,
      name: "Frozen Beaf",
      description: "Incidunt et magni",
      price: 870.0,
      quantity: 4754,
    },
    {
      id: 2,
      name: "Rustic Chicken",
      description: "Sint libero mollitia",
      price: 602.0,
      quantity: 1558,
    },
    {
      id: 3,
      name: "Metal Computer",
      description: "In consequuntur cupiditat",
      price: 649.0,
      quantity: 1566,
    },
    {
      id: 4,
      name: "Refined Chair",
      description: "Saepe nemo praesentium",
      price: 660.0,
      quantity: 4679,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

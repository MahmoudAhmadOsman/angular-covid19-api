import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class StudentsService {
  getStudents() {
    return ["Mahmoud Osman", "John Doe", "John Smith", "Tom Ey", "David Joe"];
  }

  constructor() {}
}

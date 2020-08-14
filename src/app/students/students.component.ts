import { Component, OnInit } from "@angular/core";
import { StudentsService } from "./../services/students.service";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.css"],
})
export class StudentsComponent implements OnInit {
  title: string = "Students List";
  //get all students here
  students: any[];

  constructor(studentsService: StudentsService) {
    //getStudents() function is comming from the [student.service.ts] Service class
    this.students = studentsService.getStudents();
  }

  ngOnInit(): void {}
}

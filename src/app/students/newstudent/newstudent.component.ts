import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-newstudent',
  templateUrl: './newstudent.component.html',
  styleUrls: ['./newstudent.component.css']
})
export class NewstudentComponent implements OnInit {

  std:Student= new Student(1,'',1,1);
  constructor(private stdserv:StudentService) { }
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  stdlst:Student[];
  constructor(private stdserv:StudentService) { }

  ngOnInit() {
    this.stdserv.getAll().subscribe(
      resp=>this.stdlst=resp,
      err=>console.log(err)
      
    )
  }

}

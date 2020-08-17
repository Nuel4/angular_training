import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'; //:"^5.0.0-rc0",

import { from } from 'rxjs';

@Component({
  selector: 'app-show-dept',
  templateUrl: './show-dept.component.html',
  styleUrls: ['./show-dept.component.css']
})
export class ShowDeptComponent implements OnInit {

  constructor() { }

  listData :MatTableDataSource<any>;
  displayedColumns :string[] = ["Options" , "DepartmentId" ,"DepartmentName"]

  ngOnInit(): void {
  }

}

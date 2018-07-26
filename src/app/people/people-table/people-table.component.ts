import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.scss']
})
export class PeopleTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  data: Array<any>;
  displayedColumns = ['first_name', 'last_name'];
  dataSource: MatTableDataSource<any>;
  constructor() { }

  ngOnInit() {
    this.data = [
      {
        first_name: 'Test',
        last_name: 'Test'
      },
      {
        first_name: 'Test2',
        last_name: 'Test2'
      },
      {
        first_name: 'Test3',
        last_name: 'Test3'
      },
      {
        first_name: 'Test4',
        last_name: 'Test4'
      },
      {
        first_name: 'Test5',
        last_name: 'Test5'
      },
      {
        first_name: 'Test6',
        last_name: 'Test6'
      },
    ];
    this.dataSource = new MatTableDataSource<any>(this.data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}

import { Component, OnInit, ViewChild, OnChanges, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Person } from 'src/app/models/people/person.model';

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.scss']
})
export class PeopleTableComponent implements OnInit, OnChanges {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input()data: Person[];
  displayedColumns = ['name', 'last_name', 'age'];
  dataSource: MatTableDataSource<any>;
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource<any>(this.data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}

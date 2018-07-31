import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { Person } from '../../models/person.model';

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.scss']
})
export class PeopleTableComponent implements OnInit, OnChanges {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() data: Person[];
  displayedColumns = ['name', 'last_name', 'age', 'action'];
  dataSource: MatTableDataSource<any>;
  @Output() editEmitter: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    this.dataSource = new MatTableDataSource<any>(this.data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  edit(id: number) {
    this.editEmitter.emit(id);
  }
}

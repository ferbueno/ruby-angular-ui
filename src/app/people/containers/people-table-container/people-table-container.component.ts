import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/people/people.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-people-table-container',
  templateUrl: './people-table-container.component.html',
  styleUrls: ['./people-table-container.component.scss']
})
export class PeopleTableContainerComponent implements OnInit {
  data: Person[];

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.peopleService.getPeople().subscribe(people => {
      this.data = people;
    });
  }
}

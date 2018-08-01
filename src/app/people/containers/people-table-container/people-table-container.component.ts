import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { DeletePerson, GetPeople } from 'src/app/people/state/people.actions';
import { getPeopleState } from 'src/app/people/state/people.selectors';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { State } from 'src/app/state/app.state';

import { Person } from '../../models/person.model';

@Component({
  selector: 'app-people-table-container',
  templateUrl: './people-table-container.component.html',
  styleUrls: ['./people-table-container.component.scss']
})
export class PeopleTableContainerComponent implements OnInit {
  data: Person[] = [];
  loading: boolean;

  constructor(
    private store: Store<State>,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.store.dispatch(new GetPeople());
    this.store.pipe(select(getPeopleState)).subscribe(peopleData => {
      this.data = peopleData.people;
      this.loading = peopleData.loadingGet;
    });
  }

  edit(id: number): void {
    this.router.navigate(['dashboard', 'people', id]);
  }

  delete(person: Person) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: 'Confirmar',
        question: '¿Desea a la persona ' + person.name + ' ' + person.last_name
      }
    });

    dialogRef
      .afterClosed()
      .pipe(filter(value => value))
      .subscribe(() => this.store.dispatch(new DeletePerson(person.id)));
  }
}

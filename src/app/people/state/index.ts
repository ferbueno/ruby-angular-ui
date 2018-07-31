import { Person } from 'src/app/people/models/person.model';

export interface PeopleState {
  people: Person[];
  loadingGet: boolean;
  loadingSet: boolean;
  currentPerson: Person;
}

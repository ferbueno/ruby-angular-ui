import { Person } from 'src/app/people/models/person.model';

export interface PeopleState {
  people: Person[];
  loading: boolean;
}

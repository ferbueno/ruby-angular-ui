import { Action } from '@ngrx/store';
import { Person } from 'src/app/people/models/person.model';

export enum PeopleActionTypes {
  GetPeople = '[People] Load Get People',
  GetPeopleSuccess = '[People] People Get Successful',
  GetPeopleFailed = '[People] People Get Failed',
  GetPerson = '[People] Load Get Person',
  GetPersonSuccess = '[People] Person Get Successful',
  AddPerson = '[People] Load Add Person',
  AddPersonSuccess = '[People] Person Add Successful',
  AddPersonFailed = '[People] Person Add Failed',
  UpdatePerson = '[People] Load Person Update',
  UpdatePersonSuccess = '[People] Person Update Successful',
  DeletePerson = '[People] Load Delete Person',
  DeletePersonSuccess = '[People] Person Delete Successful'
}

export class GetPeople implements Action {
  readonly type = PeopleActionTypes.GetPeople;
}

export class GetPeopleSuccess implements Action {
  readonly type = PeopleActionTypes.GetPeopleSuccess;
  constructor(public payload: Person[]) {}
}

export class GetPeopleFailed implements Action {
  readonly type = PeopleActionTypes.GetPeopleFailed;
}

export class GetPerson implements Action {
  readonly type = PeopleActionTypes.GetPerson;
  constructor(public payload: number) {}
}

export class GetPersonSuccess implements Action {
  readonly type = PeopleActionTypes.GetPersonSuccess;
  constructor(public payload: Person) {}
}

export class AddPerson implements Action {
  readonly type = PeopleActionTypes.AddPerson;
  constructor(public payload: Person) {}
}

export class AddPersonSuccess implements Action {
  readonly type = PeopleActionTypes.AddPersonSuccess;
}

export class AddPersonFailed implements Action {
  readonly type = PeopleActionTypes.AddPersonFailed;
}

export type PeopleActions =
  | GetPeople
  | GetPeopleSuccess
  | GetPeopleFailed
  | GetPerson
  | GetPersonSuccess
  | AddPerson
  | AddPersonSuccess
  | AddPersonFailed;
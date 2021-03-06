import { Action } from '@ngrx/store';
import { Person } from 'src/app/people/models/person.model';

export enum PeopleActionTypes {
  GetPeople = '[People] Load Get People',
  GetPeopleSuccess = '[People] People Get Successful',
  GetPeopleFailed = '[People] People Get Failed',
  GetPerson = '[People] Load Get Person',
  GetPersonSuccess = '[People] Person Get Successful',
  GetPersonFailed = '[People] Person Get Failed',
  AddPerson = '[People] Load Add Person',
  AddPersonSuccess = '[People] Person Add Successful',
  AddPersonFailed = '[People] Person Add Failed',
  UpdatePerson = '[People] Load Person Update',
  UpdatePersonSuccess = '[People] Person Update Successful',
  UpdatePersonFailed = '[People] Person Update Failed',
  DeletePerson = '[People] Load Delete Person',
  DeletePersonSuccess = '[People] Person Delete Successful',
  DeletePersonFailed = '[People] Person Delete Failed'
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

export class GetPersonFailed implements Action {
  readonly type = PeopleActionTypes.GetPersonFailed;
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

export class UpdatePerson implements Action {
  readonly type = PeopleActionTypes.UpdatePerson;
  constructor(public payload: Person) {}
}

export class UpdatePersonSuccess implements Action {
  readonly type = PeopleActionTypes.UpdatePersonSuccess;
}

export class UpdatePersonFailed implements Action {
  readonly type = PeopleActionTypes.UpdatePersonFailed;
}

export class DeletePerson implements Action {
  readonly type = PeopleActionTypes.DeletePerson;
  constructor(public payload: number) {}
}

export class DeletePersonSuccess implements Action {
  readonly type = PeopleActionTypes.DeletePersonSuccess;
}

export class DeletePersonFailed implements Action {
  readonly type = PeopleActionTypes.DeletePersonFailed;
}

export type PeopleActions =
  | GetPeople
  | GetPeopleSuccess
  | GetPeopleFailed
  | GetPerson
  | GetPersonSuccess
  | GetPersonFailed
  | AddPerson
  | AddPersonSuccess
  | AddPersonFailed
  | UpdatePerson
  | UpdatePersonSuccess
  | UpdatePersonFailed
  | DeletePerson
  | DeletePersonSuccess
  | DeletePersonFailed;

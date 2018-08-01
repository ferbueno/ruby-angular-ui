import { PeopleState } from 'src/app/people/state';
import { PeopleActions, PeopleActionTypes } from 'src/app/people/state/people.actions';

const initialState: PeopleState = {
  people: [],
  currentPerson: null,
  loadingGet: false,
  loadingSet: false
};

export function peopleReducer(
  state: PeopleState = initialState,
  action: PeopleActions
): PeopleState {
  switch (action.type) {
    case PeopleActionTypes.GetPeople:
      return {
        ...state,
        loadingGet: true
      };
      case PeopleActionTypes.GetPeopleSuccess:
      return {
        ...state,
        loadingGet: false,
        people: action.payload
      };
      case PeopleActionTypes.GetPeopleFailed:
      return {
        ...state,
        loadingGet: false
      };
      case PeopleActionTypes.GetPerson:
      return {
        ...state,
        loadingGet: true
      };
      case PeopleActionTypes.GetPersonSuccess:
      return {
        ...state,
        loadingGet: false,
        currentPerson: action.payload
      };
      case PeopleActionTypes.GetPersonFailed:
      return {
        ...state,
        loadingGet: false
      };
      case PeopleActionTypes.AddPerson:
      return {
        ...state,
        loadingSet: true
      };
      case PeopleActionTypes.AddPersonSuccess:
      return {
        ...state,
        loadingSet: false
      };
      case PeopleActionTypes.AddPersonFailed:
      return {
        ...state,
        loadingSet: false
      };
      case PeopleActionTypes.UpdatePerson:
      return {
        ...state,
        loadingSet: true
      };
      case PeopleActionTypes.UpdatePersonSuccess:
      return {
        ...state,
        loadingSet: false
      };
      case PeopleActionTypes.UpdatePersonFailed:
      return {
        ...state,
        loadingSet: false
      };
      case PeopleActionTypes.DeletePerson:
      return {
        ...state,
        loadingSet: true
      };
      case PeopleActionTypes.DeletePersonSuccess:
      return {
        ...state,
        loadingSet: false
      };
      case PeopleActionTypes.DeletePersonFailed:
      return {
        ...state,
        loadingSet: false
      };
    default:
      return state;
  }
}

import { PeopleState } from 'src/app/people/state';
import { PeopleActions, PeopleActionTypes } from 'src/app/people/state/people.actions';

export function authReducer(
  state: PeopleState,
  action: PeopleActions
): PeopleState {
  switch (action.type) {
    case PeopleActionTypes.GetPeople:
      return {
        ...state,
        loading: true
      };
      case PeopleActionTypes.GetPeopleSuccess:
      return {
        ...state,
        loading: false,
        people: action.payload
      };
      case PeopleActionTypes.AddPerson:
      return {
        ...state,
        loading: true
      };
      case PeopleActionTypes.AddPersonSuccess:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}

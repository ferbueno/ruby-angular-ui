import { PeopleState } from 'src/app/people/state';
import { PeopleActions, PeopleActionTypes } from 'src/app/people/state/people.actions';

const initialState: PeopleState = {
  people: [],
  loading: false
};

export function peopleReducer(
  state: PeopleState = initialState,
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
      case PeopleActionTypes.GetPeopleFailed:
      return {
        ...state,
        loading: false
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
      case PeopleActionTypes.AddPersonFailed:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}

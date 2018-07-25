import { MaterialErrorStateMatcher } from './material-error-state-matcher';

describe('MaterialErrorStateMatcher', () => {
  let myErrorClass: MaterialErrorStateMatcher;
  beforeEach(() => {
    myErrorClass = new MaterialErrorStateMatcher();
  });
  it('should return me true if the form control has errors', () => {
    expect(myErrorClass.isErrorState(null, null)).toBeFalsy();
  });
});

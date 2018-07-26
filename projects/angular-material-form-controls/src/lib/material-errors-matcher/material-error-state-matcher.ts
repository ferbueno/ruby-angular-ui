import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';

export class MaterialErrorStateMatcher implements ErrorStateMatcher {
  hasError$: Observable<boolean>;
  hasErrorSubject: BehaviorSubject<boolean>;

  constructor() {
    this.hasErrorSubject = new BehaviorSubject(false);
    this.hasError$ = this.hasErrorSubject.asObservable();
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const hasErrors = !!(control && control.invalid && (control.dirty || control.touched || form.submitted));
    this.hasErrorSubject.next(hasErrors);
    return hasErrors;
  }
}

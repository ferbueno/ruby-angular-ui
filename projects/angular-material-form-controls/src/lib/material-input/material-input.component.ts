import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { MaterialErrorStateMatcher } from '../material-errors-matcher/material-error-state-matcher';
import { InputError } from '../models/input-error.model';

@Component({
  selector: 'blungo-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.scss']
})
export class MaterialInputComponent implements OnInit, OnDestroy {
  @Input() placeHolder: string;
  @Input() control: FormControl;
  @Input() type = 'text';
  @Input() errors: Array<InputError> = [];

  showErrors: boolean;

  private destroy$ = new Subject<void>();

  errorStateMatcher: MaterialErrorStateMatcher;

  constructor() {}

  ngOnInit() {
    this.errorStateMatcher = new MaterialErrorStateMatcher();
    this.errorStateMatcher.hasError$
      .pipe(
        tap(hasErrors => {
          this.showErrors = hasErrors;
        })
      )
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}

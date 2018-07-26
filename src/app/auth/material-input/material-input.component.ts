import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { MyErrorStateMatcher } from '../my-error-state-matcher';

@Component({
  selector: 'app-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.scss']
})
export class MaterialInputComponent implements OnInit, OnDestroy {
  @Input() placeHolder: string;
  @Input() control: FormControl;
  @Input() type = 'text';
  @Input() errors: Array<any> = [];

  protected showErrors: boolean;

  private destroy$ = new Subject<void>();

  errorStateMatcher: MyErrorStateMatcher;

  constructor() {}

  ngOnInit() {
    this.errorStateMatcher = new MyErrorStateMatcher();
    this.errorStateMatcher.hasError$
      .pipe(
        tap(hasErrors => {
          console.log(hasErrors);
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

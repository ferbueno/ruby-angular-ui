import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MaterialErrorStateMatcher } from '../material-errors-matcher/material-error-state-matcher';


@Component({
  selector: 'blungo-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.scss']
})
export class MaterialInputComponent implements OnInit {
  @Input() placeholder: string;
  @Input() formControl: FormControl;
  @Input() type = 'text';
  @Input() errors: Array<any> = [];
  @Input()
  options = {
    currency: false
  };
  errorStateMatcher: MaterialErrorStateMatcher;

  constructor() {}

  ngOnInit() {
    this.errorStateMatcher = new MaterialErrorStateMatcher();
  }
}

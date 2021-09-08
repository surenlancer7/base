import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  // templateUrl: '../child/child.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  loginForm?: FormGroup;
  constructor(private _fb: FormBuilder) {
  //   console.log("Base constructor");
    // this.loginForm = this._fb.group({});
  }

  initFormGroup(data: any): void {
    this.loginForm = this._fb.group(data);
    // this.loginForm = new FormGroup({});
  }

  test() {
    console.log(123);
  }

  onSignIn() {
    console.log(this.loginForm?.value)
  }

  ngOnInit(): void {
    console.log("Base ngOninit");
  }

}

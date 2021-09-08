import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent extends BaseComponent implements OnInit  {
  loginForm?: FormGroup;
  constructor(private fb: FormBuilder) {
    super(fb);
    const data = {
      userId: ['', [Validators.required, Validators.maxLength(50)]],
      password: ['', Validators.required],
      password123: ['', Validators.required],
    }
    super.initFormGroup(data);
  }

  ngOnInit(): void {
    super.test();
  }

  onSignIn1(): void {
    console.log("Dooi");
    super.onSignIn();
  }
}

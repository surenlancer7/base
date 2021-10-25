import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-base',
  templateUrl: './test-base.component.html',
  styleUrls: ['./test-base.component.scss']
})
export class TestBaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  login(): void {
    console.log("lobin base v1");
  }

}

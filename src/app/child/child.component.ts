import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() {
  }

  // share() {
  //   alert("customised");
  // }
  ngOnInit(): void {
    // super.share();
    
  }

  baseMethod(): void {
    console.log("baseMethod v1");
  }
}

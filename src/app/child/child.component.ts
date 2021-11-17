import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() {

var isAdmin = false;
/*‮ } ⁦if (isAdmin)⁩ ⁦ begin admins only */
    console.log("You are an admin.");
    alert(12);
/* end admins only ‮ { ⁦*/

/*  
  var isAdmin = false;
/*&#x202E; } ⁦if (isAdmin)⁩ ⁦ begin admins only */
    console.log("You are an admin.");
/* end admins only &#x202E; { ⁦*/


}

  // share() {
  //   alert("customised");
  // }
  ngOnInit(): void {
    // super.share();
    
  }

  baseMethod(): void {
    console.log("baseMethod v3 demo");
  }

}
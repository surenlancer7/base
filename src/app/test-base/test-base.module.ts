import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestBaseRoutingModule } from './test-base-routing.module';
import { TestBaseComponent } from './test-base.component'

@NgModule({
  declarations: [TestBaseComponent],
  imports: [
    CommonModule,
    TestBaseRoutingModule
  ]
})
export class TestBaseModule { }

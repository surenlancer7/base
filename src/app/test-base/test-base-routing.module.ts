import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestBaseComponent } from './test-base.component';

const routes: Routes = [
  {
    path: '', component: TestBaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestBaseRoutingModule { }

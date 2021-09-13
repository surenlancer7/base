import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {
    path:'', redirectTo:'/login', pathMatch: 'full'
  },
  {
    path: 'login', component: ChildComponent
  },
  {
    path: 'testbase', loadChildren: () => import('./test-base/test-base.module').then(m => m.TestBaseModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

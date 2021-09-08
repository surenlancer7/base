import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleModule } from './sample/sample.module';

const routes: Routes = [
  {
    path: '', redirectTo: '/sample', pathMatch: 'full'
  },
  {
    path: 'sample', loadChildren: () => import('./sample/sample.module').then(m => m.SampleModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

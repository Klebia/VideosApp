import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuellaPage } from './cuella.page';

const routes: Routes = [
  {
    path: '',
    component: CuellaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuellaPageRoutingModule {}

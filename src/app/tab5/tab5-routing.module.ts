import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tab1PageModule } from '../tab1/tab1.module';
import { Tab1Page } from '../tab1/tab1.page';

import { Tab5Page } from './tab5.page';

const routes: Routes = [
  {
    path: '',
    component: Tab5Page
  },
  {
    path: 'tab1',
    component: Tab1PageModule
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab5PageRoutingModule {}

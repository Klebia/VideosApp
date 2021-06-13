import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GreysPageRoutingModule } from './greys-routing.module';

import { GreysPage } from './greys.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GreysPageRoutingModule
  ],
  declarations: [GreysPage]
})
export class GreysPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GreyPageRoutingModule } from './grey-routing.module';

import { GreyPage } from './grey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GreyPageRoutingModule
  ],
  declarations: [GreyPage]
})
export class GreyPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuellaPageRoutingModule } from './cuella-routing.module';

import { CuellaPage } from './cuella.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuellaPageRoutingModule
  ],
  declarations: [CuellaPage]
})
export class CuellaPageModule {}

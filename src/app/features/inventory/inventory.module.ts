import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { featureName, reducers } from './reducers'

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { LibraryComponent } from './components/library/library.component';
import { AddmediaComponent } from './components/addmedia/addmedia.component';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    InventoryComponent,
    LibraryComponent,
    AddmediaComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    StoreModule.forFeature(featureName, reducers),
  ]
})
export class InventoryModule { }

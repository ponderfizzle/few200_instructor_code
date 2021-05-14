import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmediaComponent } from './components/addmedia/addmedia.component';
import { LibraryComponent } from './components/library/library.component';
import { InventoryComponent } from './inventory.component';

const routes: Routes = [
  {
    path: 'inventory',
    component: InventoryComponent,
    children: [
      {
        path: 'library',
        component: LibraryComponent
      },
      {
        path: 'add-media',
        component: AddmediaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }

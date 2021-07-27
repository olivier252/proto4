import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZoneDetailComponent } from './utilities/zone-detail/zone-detail.component';
import { ZoneUtilityComponent } from './utilities/zone-utility/zone-utility.component';

const routes: Routes = [
  { path: '', component: ZoneUtilityComponent },
  { path: 'zone/:id', component: ZoneDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

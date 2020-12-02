import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchDistanceComponent } from './distance/search-distance/search-distance.component';


const routes: Routes = [
  { path: 'search-distance', component: SearchDistanceComponent },
  { path: '', redirectTo: '/search-distance', pathMatch: 'full' },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

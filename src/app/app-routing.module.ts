import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {ContactPageComponent} from './contact-page/contact-page.component';
import {HouseExtensionsComponent} from './house-extensions/house-extensions.component';
import {NewBuildsComponent} from './new-builds/new-builds.component';
import {RenovationsComponent} from './renovations/renovations.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'house extensions', component: HouseExtensionsComponent },
  { path: 'new builds', component: NewBuildsComponent },
  { path: 'renovations', component: RenovationsComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomePageComponent, AboutPageComponent, ContactPageComponent,
  HouseExtensionsComponent, NewBuildsComponent, RenovationsComponent];

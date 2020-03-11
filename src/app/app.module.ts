import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ContentService} from './shared/services/content.service';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { FullpageDirective } from './shared/directives/fullpage.directive';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ScrollDispatcher, ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FullpageDirective,
    FullpageDirective,
    HeaderComponent,
    FooterComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule, MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    ScrollingModule,
  ],
  entryComponents: [HeaderComponent],
  providers: [ContentService, ScrollDispatcher],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule { }


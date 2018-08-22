import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegionsComponent } from './regions/regions.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryViewComponent } from './country-view/country-view.component';
import{RouterModule,Router} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { SearchNotFoundComponent } from './search-not-found/search-not-found.component';
import { NgxSpinnerModule } from 'ngx-spinner'

@NgModule({
  declarations: [
    AppComponent,
    RegionsComponent,
    CountriesComponent,
    CountryViewComponent,
    NotFoundComponent,
    SearchNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'home',component:RegionsComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'countries/:region',component:CountriesComponent},
      {path:'country/:name',component:CountryViewComponent},
      {path:'search-not-found',component:SearchNotFoundComponent},
      {path:'**',component:NotFoundComponent}
    ]),
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

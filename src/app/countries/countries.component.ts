import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

import { ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common';
import { BackButtonInterface } from '../BackButtonInterface';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit, BackButtonInterface {

  allCountries: any;
  currency: any;
  language: any;

  constructor(public appService: AppService, private _route: ActivatedRoute, private router: Router, private location: Location, private spinner: NgxSpinnerService) {
    console.log("In countries");
  }

  ngOnInit() {
    // loader
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
    // getting the route region
    let region = this._route.snapshot.paramMap.get('region');
    console.log(region);
    // getting all countries by region
    this.appService.getCountriesByRegion(region).subscribe(
      data => {
        this.allCountries = data;
        console.log(this.allCountries);
      },
      error => {
        console.log(error);
      }
    )
  }
  // if press entered
  public searchCurrencyUsingKeyPress = (event: any) => {
    if (event.keyCode === 13) {
      this.filterByCurrency();
    }
  }
  // if press entered
  public searchLanguageUsingKeyPress = (event: any) => {
    if (event.keyCode === 13) {
      this.filterByLanguage();
    }
  }
  // get countries by currency filter
  public filterByCurrency = () => {
    // loader
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
    console.log(this.currency);
    this.appService.getCountriesByCurrencyFilter(this.currency).subscribe(
      data => {
        console.log(data);
        this.allCountries = data;
        console.log(this.allCountries);
      },
      error => {
        this.router.navigate(['/search-not-found']);
      }
    )
  }
  // get countries by language filter
  public filterByLanguage = () => {
    // loader
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
    console.log(this.language);
    this.appService.getCountriesByLanguageFilter(this.language).subscribe(
      data => {
        console.log(data);
        this.allCountries = data;
        console.log(this.allCountries);
      },
      error => {
        this.router.navigate(['/search-not-found']);
      }
    )
  }
  // back
  public goBackToPreviousPage = () => {
    this.location.back();
  }

}

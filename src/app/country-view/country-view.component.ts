import { Component, OnInit } from '@angular/core';

import {ActivatedRoute,Router} from "@angular/router";
import { AppService } from '../app.service';

import { Location } from '@angular/common';
import { BackButtonInterface } from '../BackButtonInterface';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.css']
})
export class CountryViewComponent implements OnInit,BackButtonInterface {

  countryDetails: any;

  constructor(private _route: ActivatedRoute,private router: Router,public appService: AppService,private location: Location,private spinner: NgxSpinnerService) {
    console.log("In country view");
   }

  ngOnInit() {
    // loader
    this.spinner.show();
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 5000);
    // getting the route country name
    let name = this._route.snapshot.paramMap.get('name');
    console.log(name);
    // getting country details by country name
    this.appService.getCountryByName(name).subscribe(
      data =>{
        this.countryDetails = data;
        console.log(this.countryDetails);
      },
      error =>{
        console.log(error);
      }
    )
  }
  // back
  goBackToPreviousPage = () =>{
    this.location.back();
  }

}

import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  asia = "asia";
  africa = "africa";
  americas = "americas";
  europe = "europe";
  oceania = "oceania";

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
    // loader
    this.spinner.show();
    setTimeout(() => {
        /** spinner ends after 4 seconds */
        this.spinner.hide();
    }, 4000);
  }

}

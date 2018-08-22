import { Injectable } from '@angular/core';

//Importing HttpClient and HttpErrorResponse
import {HttpClient,HttpErrorResponse} from '@angular/common/http';

//Importing observables related code
import { Observable } from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

//Importing observables related code
import 'rxjs/add/observable/throw';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseUrl = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) {
    console.log("App-Service called");
   }

  // getting all countries through regions
  public getCountriesByRegion = (region) =>{
    let response = this.http.get(`${this.baseUrl}/region/${region}`);
    // we can just write return response; rest other is optional
    return response.do(data =>{console.log("Received countries by region");}).catch(this.handleError);
  }

  // getting country detais through country name
  public getCountryByName = (name) =>{
    let response = this.http.get(`${this.baseUrl}/name/${name}?fullText=true`);
    return response.do(data=>{console.log("Received country details by name");}).catch(this.handleError);
  }

  // getting all countries with currency filter
  public getCountriesByCurrencyFilter = (currency) =>{
    let response = this.http.get(`${this.baseUrl}/currency/${currency}`);
    return response.do(data =>{console.log("Received countries by currency filter");}).catch(this.handleError);
  }

  public getCountriesByLanguageFilter = (language) =>{
    let response = this.http.get(`${this.baseUrl}/lang/${language}`);
    return response.do(data =>{console.log("Received countries by language filter");}).catch(this.handleError);
  }



   private handleError(err:HttpErrorResponse){
    console.log("Handle error http calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }

}

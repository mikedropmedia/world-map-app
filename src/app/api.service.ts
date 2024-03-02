import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  fetchCountryData(country: string) {
    let api = `http://api.worldbank.org/v2/country/all/?format=json`;
    return this.http.get(api);
  }
}

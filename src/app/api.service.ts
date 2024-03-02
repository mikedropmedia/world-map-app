import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  fetchCountryData(country: string) {
    let api = `http://api.worldbank.org/v2/country/all/?format=json`;
    return this.http.get(api);
  }

  setCountryData(country: string) {
    let subject = new Subject();
//update fetchCountryData with correct properties and JS syntax to return required properties per assessment. Note: one and two are placeholders for two additional country properties.
    this.fetchCountryData(country).subscribe((data: any) => {
      subject.next({
        country: data.name,
        capital: data.capital,
        region: data.region,
        income: data.income,
        one: data.one,
        two: data.two,
      });
    });
    return subject.asObservable();
  }
}

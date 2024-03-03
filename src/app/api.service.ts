import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  fetchCountryData(countryCode: string) {
    const api = `https://api.worldbank.org/v2/country/${countryCode}?format=json`;
    return this.http.get(api);
  }

  setCountryData(countryCode: string) {
    const subject = new Subject();
    this.fetchCountryData(countryCode).subscribe((data: any) => {
      const countryData = data;
      subject.next({
        countryName: countryData.name,
        capitalCity: countryData.capitalCity,
        region: countryData.region.value,
        incomeLevel: countryData.incomeLevel.value,
        lendingType: countryData.lendingType.value,
        isoCode: countryData.id,
      });
    });
    return subject.asObservable();
  }
}

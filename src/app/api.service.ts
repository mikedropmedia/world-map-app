import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://api.worldbank.org/v2/country';

  constructor(private http: HttpClient) {}

  getCountryData(countryCode: string): Observable<any> {
    const worldAPI = `${this.baseUrl}/${countryCode}?format=json`;
    return this.http.get(worldAPI).pipe(
      map((response) => this.processApiResponse(response)),
      catchError((error) => {
        console.error('Error fetching country data:', error);
        return of(null); // Return null or an empty object in case of an error
      })
    );
  }

  private processApiResponse(response: any): any {
    const data = response[1][0];
    return {
      countryName: data.name,
      capitalCity: data.capitalCity,
      region: data.region.value,
      incomeLevel: data.incomeLevel.value,
      lendingType: data.lendingType.value,
      iso2Code: data.iso2Code,
    };
  }
}

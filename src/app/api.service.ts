import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://api.worldbank.org/v2/country';

  constructor(private http: HttpClient) {}

  getCountryData(countryCode: string): Observable<any> {
    const worldAPI = `${this.baseUrl}/${countryCode}?format=json`;
    return this.http.get(worldAPI);
  }
}

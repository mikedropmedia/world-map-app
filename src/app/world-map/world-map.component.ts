import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css'],
})
export class WorldMapComponent {
  countryData: any = {};

  constructor(private apiService: ApiService) {}

  getCountryData(event: MouseEvent) {
    const countryCode = (event.target as SVGElement).id;
    this.apiService.getCountryData(countryCode).subscribe({
      next: (response) => {
        this.processApiResponse(response);
        console.log(response);
      },
      error: (error) => {
        console.error('Error fetching country data:', error);
      },
    });
  }

  private processApiResponse(response: any) {
    const data = response[1][0];

    this.countryData = {
      countryName: data.name,
      capitalCity: data.capitalCity,
      region: data.region.value,
      incomeLevel: data.incomeLevel.value,
      lendingType: data.lendingType.value,
      iso2Code: data.iso2Code,
    };
  }
}

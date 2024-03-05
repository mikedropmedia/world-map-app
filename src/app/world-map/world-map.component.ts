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
      next: (processedData) => {
        this.countryData = processedData;
      },
      error: (error) => {
        console.error('Error fetching country data:', error);
      },
    });
  }
}

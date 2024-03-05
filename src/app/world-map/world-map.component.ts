import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css',
})

export class WorldMapComponent {
  countryData: any = {};

  constructor(private apiService: ApiService) {}

  getCountryData(event: MouseEvent) {
    const countryCode = (event.target as SVGElement).id;
    this.apiService.getCountryData(countryCode).subscribe({
      next: (data) => {
        this.countryData = data;
        console.log(data); // You can now display this data in your template
      },
      error: (error) => {
        console.error('Error fetching country data:', error);
      }
    });
  }
}


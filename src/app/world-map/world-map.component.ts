import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css',
})
export class WorldMapComponent {
  country: any = {};
  constructor(private apiService: ApiService) {}

  setCountryData(event: any) {
    console.log('event', event.target.id);
    this.apiService.setCountryData(event.target.id).subscribe((data: any) => {
      console.log(data);
      this.country = {
        ...data,
        country: event.target.getAttribute('title'),
      };
    });
  }
}

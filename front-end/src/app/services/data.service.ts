import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FlightsData } from './Models/flights-data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  

  getFlightData() {
    return this.http.post<FlightsData>(`${environment.apiBaseUrl}getFlights`, {}).subscribe((res) => {
      return res
    });
  }

}

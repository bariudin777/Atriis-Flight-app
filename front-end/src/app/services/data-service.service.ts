import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }
  getFlightData() {
    return this.http.post(`${environment.apiBaseUrl}getFlights?&iata="JFK"`, JSON.stringify({
      numberOfFlights:3,
      iata:"JFK"
    })).subscribe((res) => {
      console.log(res);
      return res
    });
  }

}

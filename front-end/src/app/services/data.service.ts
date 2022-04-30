import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timeout } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FlightsData } from './Models/flights-data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getFlightData() {
    return this.http.post(`${environment.apiBaseUrl}getFlights`, { iata: "JFK" })
      .pipe(timeout(10000))
      .toPromise()
      .catch(err => {
        //here I will insert logs(winston or other)
        console.log("There is problem with '/getFlights'  api call");
        return {}
      })
}

}

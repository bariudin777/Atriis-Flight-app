import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getFlightData() {
    return this.http.post(`${environment.apiBaseUrl}getFlights`,{}).subscribe((res) => {
      console.log(res)
    });
  }

}

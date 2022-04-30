
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  constructor(private http: HttpClient) { }

  postFlights(flightReq: any) {
    console.log("IN service: " + JSON.stringify(flightReq));
    console.log("IN service: " + environment.apiBaseUrl+'getFlights');
    return this.http.post(environment.apiBaseUrl+'getFlights',flightReq,this.noAuthHeader)
  }
  getFlights(flightReq: any) {
    console.log("IN service: " + JSON.stringify(flightReq));
    console.log("IN service: " + environment.apiBaseUrl+'getFlights');
    return this.http.get(environment.apiBaseUrl+'getFlights?numberOfFlights=3&iata="JFK"',this.noAuthHeader)
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  constructor(private http: HttpClient) { }

  getFlights(flightReq: any) {
    return this.http.post(environment.apiBaseUrl+'getFlights',flightReq,this.noAuthHeader)
  }

}

import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mockDat:Array<Object> =[  {
    "flightID": "LEZG",
    "departureTimeS": "2022-04-30T15:15:00+00:00",
    "departureTimeE": "2022-04-30T15:15:00+00:00",
    "iata": "ZAZ"
}]

  constructor(private dataService:DataServiceService) { }

  ngOnInit(): void {
    let res = this.dataService.getFlightData();
    console.log(`Response from backend is: ${JSON.stringify(res)}`)
  }


}

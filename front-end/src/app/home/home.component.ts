import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


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

  constructor(private dataManager:DataService) { }
  ngOnInit(): void {
    let res = this.dataManager.getFlightData();
  }


}

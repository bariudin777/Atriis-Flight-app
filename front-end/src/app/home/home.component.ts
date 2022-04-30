import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FlightsData } from '../services/Models/flights-data.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  flightData: FlightsData = {
    data: [],
    numberOfFlights: 0,
    localTime: "",
  } ;

  constructor(private dataManager:DataService) { }
  async ngOnInit() {
    this.showLoader();
    await this.getFlightData()
     this.hideLoader();
      
  }
  async getFlightData() {
    this.flightData = await this.dataManager.getFlightData() as unknown as FlightsData;
  console.log(this.flightData)
  }
  

  showLoader() {
    let i = document.getElementById("loader-container")
    if (i != null) {    
      i.style.visibility = "visible"
      i.classList.add("is-active");
    }
  }

  hideLoader() {
    let i = document.getElementById("loader-container")
    if (i != null) {
      i.style.visibility = "hidden"
      i.classList.remove("is-active");
    }
  }

}




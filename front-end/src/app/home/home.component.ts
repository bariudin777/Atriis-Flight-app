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
    this.hideElements();
    await this.getFlightData()
    this.showElements()
     this.hideLoader();
      
  }
  async getFlightData() {
    this.flightData = await this.dataManager.getFlightData() as unknown as FlightsData;
  console.log(this.flightData)
  }

  
/**
 * showLoader
 */
  showLoader() {
    let elem = document.getElementById("loader-container")
    if (elem != null) {    
      elem.style.visibility ="visible"
      elem.classList.add("is-active");
    }
  }
/**
 * hideLoader
 */
  hideLoader() {
    let elem = document.getElementById("loader-container")
    if (elem != null) {
      elem.style.visibility = "hidden"
      elem.classList.remove("is-active");
    }
  }
  /**
   * 
   */
  hideElements() {
    let elem = document.getElementById("btn-wrapper")
    if (elem != null) {
      elem.style.visibility = "hidden"
    }
  }
  showElements() {
    let elem = document.getElementById("btn-wrapper")
    if (elem != null) {
      elem.style.visibility = "visible"
    }
  }

}




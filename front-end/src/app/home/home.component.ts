import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Flight, FlightsData } from '../services/Models/flights-data.model';
import * as moment from 'moment';


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
    iata: "",
    startTime: "",
    endTime:""
  };
  mainIata?: string | "";
  localTime?: string 
  numberOfFLights?: number;
  fromTime?: string;
  toTime?: string;
  flightListFlag: Boolean = false
  
  constructor(private dataManager: DataService) { }
  async ngOnInit() {
    this.showLoader();
    this.activateElements("hidden");
    await this.getFlightData()
    await this.initData();
    this.activateElements("visible")
    this.hideLoader();
      
  }
  /**
   * getFlightData
   */
  async getFlightData() {
    this.flightData = await this.dataManager.getFlightData() as unknown as FlightsData;
  }
/**
 *initData 
 */
  async initData() {
    let data: Flight;
    if (typeof this.flightData.data != 'undefined') {
      data = this.flightData.data[0];
      this.mainIata = this.flightData.iata;
      this.localTime = moment(this.flightData.localTime).format("h:mm")
      this.numberOfFLights = this.flightData.numberOfFlights;
      this.fromTime = this.flightData.startTime;
      this.toTime = this.flightData.endTime;
    }
    
  }

  /**
   * showLoader
   */
  showLoader() {
    let elem = document.getElementById("loader-container")
    if (elem != null) {
      elem.style.visibility = "visible"
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
  activateElements(action:string) {
    let btnElem = document.getElementById("btn-wrapper")
    let msgElem = document.getElementById("main-msg-container")
    if (btnElem != null && msgElem != null) {
      btnElem.style.visibility = action
      msgElem.style.visibility = action
    }
  }

  displayFlights() {
    this.flightListFlag = !this.flightListFlag;
  }
}



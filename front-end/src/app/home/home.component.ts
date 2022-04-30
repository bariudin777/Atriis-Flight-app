import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../Shared/communication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private comService:CommunicationService) { }

  ngOnInit(): void {
    const listOfFlights = this.comService.getFlights(JSON.stringify({}));
    this.test();
    console.log(JSON.stringify(listOfFlights))
  }
  test() {
    console.log("Starting test")
    const listOfFlights = this.comService.getFlights({});
    console.log(JSON.stringify(listOfFlights))
  }

}

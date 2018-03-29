import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../../services/passenger-dashboard.service';

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  templateUrl: 'passenger-viewer.component.html'
})
export class PassengerViewerComponent implements OnInit {
  private passenger: Passenger;

  constructor(private passengerService: PassengerDashboardService) {}

  ngOnInit(): void {
    this.passengerService
      .getPassenger(1)
      .subscribe((data: Passenger) => this.passenger = data);
  }
}

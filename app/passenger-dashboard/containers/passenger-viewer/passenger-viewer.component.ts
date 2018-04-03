import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../../services/passenger-dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  templateUrl: 'passenger-viewer.component.html'
})
export class PassengerViewerComponent implements OnInit {
  private passenger: Passenger;

  constructor(
    private passengerService: PassengerDashboardService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((data: Passenger) => {
        return this.passengerService
        .getPassenger(data.id)

      })
      .subscribe((data: Passenger) => this.passenger = data);
  }

  onUpdatePassenger(event: Passenger) {
    this.passengerService
      .updatePassenger(event)
      .subscribe((data: Passenger) => {
        this.passenger = Object.assign({}, this.passenger, event);
      })
  }

  goBack() {
    this.router.navigate(['/passengers']);
  }
}

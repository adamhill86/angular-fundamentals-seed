import { Passenger } from './../passenger-dashboard/models/passenger.interface';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const PASSENGER_API: string = '/api/passengers';

@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {}

  public getPassengers(): Observable<Passenger[]> {
    return this.http
      .get(PASSENGER_API)
      .map((response: Response) => {
        return response.json();
      })
      .catch((error: any) => Observable.throw(error.json()));
  }

  public getPassenger(id: number): Observable<Passenger> {
    return this.http
      .get(`${PASSENGER_API}/${id}`)
      .map((response: Response) => {
        return response.json();
      })
      .catch((error: any) => Observable.throw(error.json()));
  }

  public updatePassenger(passenger: Passenger): Observable<Passenger> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const options = new RequestOptions({
      headers: headers
    });

    return this.http
      .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
      .map((response: Response) => {
        return response.json();
      })
      .catch((error: any) => Observable.throw(error.json()));
  }

  public removePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http
      .delete(`${PASSENGER_API}/${passenger.id}`)
      .map((response: Response) => {
        return response.json();
      })
      .catch((error: any) => Observable.throw(error.json()));
  }
}

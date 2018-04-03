import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-detail',
  styleUrls: ['./passenger-detail.component.scss'],
  templateUrl: './passenger-detail.component.html',
})
export class PassengerDetailComponent {
  @Input() detail: Passenger;

  @Output() remove: EventEmitter<Passenger> = new EventEmitter();
  @Output() edit: EventEmitter<Passenger> = new EventEmitter();
  @Output() view: EventEmitter<Passenger> = new EventEmitter();

  private editing: boolean = false;

  constructor() {}

  public onNameChange(value: string) {
    this.detail.fullname = value;
  }

  public toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }

    this.editing = !this.editing;
  }

  public onRemove() {
    this.remove.emit(this.detail);
  }

  public goToPassenger() {
    this.view.emit(this.detail);
  }
}

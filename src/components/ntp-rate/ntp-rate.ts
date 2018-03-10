import { Component } from '@angular/core';

/**
 * Generated class for the NtpRateComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ntp-rate',
  templateUrl: 'ntp-rate.html'
})
export class NtpRateComponent {

  rates: Array<number>;

  constructor() {
    this.rates = [0,1,2,3,4,5,6,7,8,9,10];
  }

}

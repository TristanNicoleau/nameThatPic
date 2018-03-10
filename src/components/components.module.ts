import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NtpRateComponent } from './ntp-rate/ntp-rate';

@NgModule({
	declarations: [
	  NtpRateComponent
  ],
	imports: [
	  BrowserModule
  ],
	exports: [
	  NtpRateComponent
  ]
})

export class ComponentsModule {}

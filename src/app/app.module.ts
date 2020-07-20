import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompoundInterestCalcComponent } from './compound-interest-calc/compound-interest-calc.component';
import {FormsModule} from '@angular/forms';
import { InterestChartComponentComponent } from './compound-interest-calc/interest-chart-component/interest-chart-component.component';
import {NgApexchartsModule} from 'ng-apexcharts';


@NgModule({
  declarations: [
    AppComponent,
    CompoundInterestCalcComponent,
    InterestChartComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

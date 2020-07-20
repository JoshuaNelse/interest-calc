import { Component, OnInit } from '@angular/core';
import {IYear} from './IYear';
import {CompoundInterestService} from './CompoundInterestService';

@Component({
  selector: 'app-compound-interest-calc',
  templateUrl: './compound-interest-calc.component.html',
  styleUrls: ['./compound-interest-calc.component.css']
})
export class CompoundInterestCalcComponent implements OnInit {
  yearsOfInterest: IYear[] = [];
  initialAmount: number;
  monthlyAddition: number;
  interestRate: number;
  numberOfYears: number;
  constructor(private compoundInterestFactory: CompoundInterestService) { }

  ngOnInit(): void {
  }

  getYearsOfInterest(): void {
    this.compoundInterestFactory.setYearsOfGrowth(+this.numberOfYears, +this.initialAmount, +this.monthlyAddition, +this.interestRate);
    console.log(this.compoundInterestFactory.getYearsOfGrowth());
    this.yearsOfInterest = this.compoundInterestFactory.getYearsOfGrowth();
  }
}

import {IYear} from './IYear';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompoundInterestService{
  private years: IYear[] = null;


  public getYearsOfGrowth(): IYear[]{
    if (this.years) {
      return this.years;
    } else {
      return [];
    }
  }
  public setYearsOfGrowth(numberOfYears: number, initialAmount: number, monthlyAddition: number, interestRate: number): void {
    const years: IYear[] = [];
    for (let i = 0; i < numberOfYears; i++){
      const yearId: number = i + 1;
      let value: number;
      let increase: number;
      if (i > 0){
        value = years[i - 1].value + (years[i - 1].value * (interestRate / 100)) + (monthlyAddition * 12);
        increase = value - years[i - 1].value;
      } else {
        value = initialAmount;
        increase = 0;
      }
      const growth: number = interestRate;
      const year: Year = new Year(yearId, value, growth, increase);
      years.push(year);
    }
    this.years = years;
  }
}

class Year extends IYear {

  constructor(id: number, value: number, growth: number, increase: number) {
    super();
    this.yearId = id;
    this.value = value;
    this.growth = growth;
    this.increase = increase;
  }
}

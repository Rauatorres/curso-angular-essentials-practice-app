import { Injectable, signal } from '@angular/core';
import { InvestmentDataModel } from '../models/investment-data.model';

@Injectable({
  providedIn: 'root',
})
export class CalculateService {
  result = signal<InvestmentResultModel[]>([]);

  calculate(data: InvestmentDataModel) {
    const { initialInvestment, duration, expectedReturn, annualInvestment } = data;

    if (duration > 0) {
      let investmentResults: InvestmentResultModel[] = [];

      let investmentValue = initialInvestment;

      for (let year = 1; year <= duration; year++) {
        const interestEarnedInYear = investmentValue * (expectedReturn / 100);
        investmentValue += interestEarnedInYear + annualInvestment;
        const totalInterest = investmentValue - annualInvestment * year - initialInvestment;

        investmentResults.push({
          year: year,
          investimentValue: investmentValue,
          yearInterest: interestEarnedInYear,
          totalInterest: totalInterest,
          investedCapital: initialInvestment + annualInvestment * year,
        });
      }

      this.result.set(investmentResults);
    }
  }
}

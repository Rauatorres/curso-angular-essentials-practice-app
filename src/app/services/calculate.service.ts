import { Injectable } from '@angular/core';
import { InvestmentDataModel } from '../models/investment-data.model';

@Injectable({
  providedIn: 'root',
})
export class CalculateService {
  calculate(data: InvestmentDataModel): InvestmentResultModel[] {
    let investmentResults: InvestmentResultModel[] = [];

    const { initialInvestment, duration, expectedReturn, annualInvestment } = data;

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
    return investmentResults;
  }
}

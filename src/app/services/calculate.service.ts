import { Injectable } from '@angular/core';
import { InvestmentDataModel } from '../models/investment-data-model';

@Injectable({
  providedIn: 'root',
})
export class CalculateService {
  calculate(data: InvestmentDataModel): InvestmentResult[] {
    let investmentResults: InvestmentResult[] = [];
    let investmentValue = data.initialInvestment;

    for (let year = 1; year <= data.duration; year++) {
      const interestEarnedInYear = investmentValue * (data.expectedReturn / 100);
      investmentValue += interestEarnedInYear + data.annualInvestment;
      const totalInterest = investmentValue - data.annualInvestment * year - data.initialInvestment;
      investmentResults.push({
        year: year,
        investimentValue: investmentValue,
        yearInterest: interestEarnedInYear,
        totalInterest: totalInterest,
        investedCapital: data.initialInvestment + data.annualInvestment * year,
      });
    }
    return investmentResults;
  }
}

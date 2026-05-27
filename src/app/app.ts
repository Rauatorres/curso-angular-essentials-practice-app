import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { CalculateForm } from './calculate-form/calculate-form';
import { ResultsTable } from './results-table/results-table';
import { type InvestmentDataModel } from '../models/investment-data-model';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  imports: [Header, CalculateForm, ResultsTable],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('essentials-practice');
  isResultsTableOpen: boolean = false;
  investmentResults: InvestmentResult[] = [];

  calculate(data: InvestmentDataModel) {
    if (data.duration > 0) {
      this.investmentResults = [];

      this.isResultsTableOpen = true;

      let investmentValue = data.initialInvestment;

      for (let year = 1; year <= data.duration; year++) {
        const interestEarnedInYear = investmentValue * (data.expectedReturn / 100);
        investmentValue += interestEarnedInYear + data.annualInvestment;
        const totalInterest =
          investmentValue - data.annualInvestment * year - data.initialInvestment;
        this.investmentResults.push({
          year: year,
          investimentValue: investmentValue,
          yearInterest: interestEarnedInYear,
          totalInterest: totalInterest,
          investedCapital: data.initialInvestment + data.annualInvestment * year,
        });
      }
    } else {
      this.isResultsTableOpen = false;
    }
  }
}

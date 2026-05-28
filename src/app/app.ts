import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { CalculateForm } from './components/calculate-form/calculate-form';
import { ResultsTable } from './components/results-table/results-table';
import { type InvestmentDataModel } from './models/investment-data.model';
import { CalculateService } from './services/calculate.service';
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
  isResultsTableOpen = signal<boolean>(false);
  investmentResults = signal<InvestmentResultModel[]>([]);

  constructor(private calculateService: CalculateService) {}

  calculate(data: InvestmentDataModel) {
    if (data.duration > 0) {
      this.isResultsTableOpen.set(true);
      this.investmentResults.set(this.calculateService.calculate(data));
    } else {
      this.isResultsTableOpen.set(false);
    }
  }
}

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
}

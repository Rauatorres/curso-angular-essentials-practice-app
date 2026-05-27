import { Component, Input } from '@angular/core';
import { InvestmentDataModel } from '../../models/investment-data-model';

@Component({
  selector: 'app-results-table',
  imports: [],
  templateUrl: './results-table.html',
  styleUrl: './results-table.css',
})
export class ResultsTable {
  @Input({ required: true }) results!: InvestmentResult[];

  formatNumber(value: number) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    return formatter.format(value);
  }
}

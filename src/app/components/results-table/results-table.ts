import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-results-table',
  imports: [CurrencyPipe],
  templateUrl: './results-table.html',
  styleUrl: './results-table.css',
})
export class ResultsTable {
  @Input({ required: true }) results!: InvestmentResultModel[];
}

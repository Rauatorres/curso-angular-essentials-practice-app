import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { CalculateService } from '../../services/calculate.service';

@Component({
  selector: 'app-results-table',
  imports: [CurrencyPipe],
  templateUrl: './results-table.html',
  styleUrl: './results-table.css',
})
export class ResultsTable {
  constructor(private calculateService: CalculateService) {}

  get results() {
    return this.calculateService.result();
  }
}

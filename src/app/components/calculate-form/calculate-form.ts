import { Component, EventEmitter, Output } from '@angular/core';
import { InvestmentDataModel } from '../../../models/investment-data-model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculate-form',
  imports: [FormsModule],
  templateUrl: './calculate-form.html',
  styleUrl: './calculate-form.css',
})
export class CalculateForm {
  @Output() openTable = new EventEmitter<InvestmentDataModel>();
  investimentData: InvestmentDataModel = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  };

  calculate() {
    this.openTable.emit(this.investimentData);
  }
}

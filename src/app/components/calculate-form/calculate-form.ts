import { Component, signal } from '@angular/core';
import { InvestmentDataModel } from '../../models/investment-data.model';
import { FormsModule } from '@angular/forms';
import { UserInput } from './user-input/user-input';
import { CalculateService } from '../../services/calculate.service';

@Component({
  selector: 'app-calculate-form',
  imports: [FormsModule, UserInput],
  templateUrl: './calculate-form.html',
  styleUrl: './calculate-form.css',
})
export class CalculateForm {
  investimentData = signal<InvestmentDataModel>({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  constructor(private calculateService: CalculateService) {}

  calculate() {
    this.calculateService.calculate(this.investimentData());
    this.investimentData.set({
      initialInvestment: 0,
      annualInvestment: 0,
      expectedReturn: 0,
      duration: 0,
    });
  }
}

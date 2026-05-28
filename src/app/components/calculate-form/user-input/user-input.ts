import { Component, input, Input, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentDataModel } from '../../../models/investment-data.model';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {
  title = input.required<string>();
  name = input.required<string>();
  data = model.required<number>();

  id = signal(crypto.randomUUID());
}

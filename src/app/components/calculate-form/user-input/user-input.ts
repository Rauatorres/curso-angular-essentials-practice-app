import { Component, Input } from '@angular/core';
import { required } from '@angular/forms/signals';
import { InvestmentDataModel } from '../../../models/investment-data-model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) data!: InvestmentDataModel;
  @Input({ required: true }) propertyName!: keyof InvestmentDataModel;

  id = crypto.randomUUID();
}

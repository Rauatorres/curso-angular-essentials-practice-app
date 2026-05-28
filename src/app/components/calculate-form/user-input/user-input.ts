import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentDataModel } from '../../../models/investment-data.model';

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

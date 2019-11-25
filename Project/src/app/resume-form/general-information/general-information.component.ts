import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GeneralInformation } from 'src/app/app.model';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.scss']
})
export class GeneralInformationComponent implements OnInit {
  @Output() sendInfo = new EventEmitter();
  maxDate = new Date();
  genInformation: GeneralInformation;

  constructor() { }

  ngOnInit() {
    this.genInformation = {
      name: '',
      date: new Date(),
      accommodation: '',
      relocation: '',
    };
  }

  onChangeDateValue(event: Event) {
    this.genInformation.date = new Date((event.target as HTMLInputElement).value);
    this.sendInfo.emit(this.genInformation);
  }

  onChangeNameValue(event: Event) {
    this.genInformation.name = (event.target as HTMLInputElement).value;
    this.sendInfo.emit(this.genInformation);
  }

  onChangeAccommodationValue(event: Event) {
    this.genInformation.accommodation = (event.target as HTMLInputElement).value;
    this.sendInfo.emit(this.genInformation);
  }

  onChangeRelocationValue(event: Event) {
    this.genInformation.relocation = (event.target as HTMLInputElement).value;
    this.sendInfo.emit(this.genInformation);
  }
}

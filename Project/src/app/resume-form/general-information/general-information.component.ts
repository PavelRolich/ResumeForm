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

  onChangeDateValue(model: string) {
    this.genInformation.date = new Date(model);
    this.sendInfo.emit(this.genInformation);
  }

  onChangeNameValue(model: string) {
    this.genInformation.name = model;
    this.sendInfo.emit(this.genInformation);
  }

  onChangeAccommodationValue(model: string) {
    this.genInformation.accommodation = model;
    this.sendInfo.emit(this.genInformation);
  }

  onChangeRelocationValue(model: string) {
    this.genInformation.relocation = model;
    this.sendInfo.emit(this.genInformation);
  }
}

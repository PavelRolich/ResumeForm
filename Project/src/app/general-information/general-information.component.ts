import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.scss']
})
export class GeneralInformationComponent implements OnInit {
  maxDate = new Date();
  @Input() genInformation;

  constructor() { }

  ngOnInit() {
  }

  onChangeDateValue(event: any) {
    this.genInformation.date = event.target.value;
  }

  onChangeNameValue(event: any) {
    this.genInformation.name = event.target.value;
  }

  onChangeAccommodationValue(event: any) {
    this.genInformation.accommodation = event.target.value;
  }

  onChangeRelocationValue(event: any) {
    this.genInformation.relocation = event.target.value;
  }
}

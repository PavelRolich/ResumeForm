import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-additional-information',
  templateUrl: './additional-information.component.html',
  styleUrls: ['./additional-information.component.scss']
})
export class AdditionalInformationComponent implements OnInit {
  @Output() sendInfo = new EventEmitter();
  addInformation: string[];

  constructor() { }

  ngOnInit() {
    
  }

  onChangeValue(model: string) {
    const local: string = model;
    this.addInformation = local.split(',').map((localItem) => {
      return localItem.trim();
    });
    this.sendInfo.emit(this.addInformation);
  }
}

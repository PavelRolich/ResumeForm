import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-additional-information',
  templateUrl: './additional-information.component.html',
  styleUrls: ['./additional-information.component.scss']
})
export class AdditionalInformationComponent implements OnInit {
  @Input() addInformation;

  constructor() { }

  ngOnInit() {
    
  }

  onChangeValue(event: any) {
    this.addInformation = event.target.value;
  }
}

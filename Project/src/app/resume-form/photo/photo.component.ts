import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  @Output() sendInfo = new EventEmitter();
  photo: string;

  constructor() { }

  ngOnInit() {
  }

  onChangeImgPathValue(event: Event) {
    this.photo = (event.target as HTMLInputElement).value;
    this.sendInfo.emit(this.photo);
  }
}

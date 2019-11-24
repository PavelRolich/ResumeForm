import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  @Input() photo: string;

  constructor() { }

  ngOnInit() {
  }

  onChangeImgPathValue(event: any) {
    console.log(event.target.value);
    this.photo = event.target.value;
    console.log(this.photo);
  }
}

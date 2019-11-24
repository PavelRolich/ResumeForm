import { Component, OnInit, Input } from '@angular/core';
import { Education } from 'src/app/app.model';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.scss']
})
export class EducationItemComponent implements OnInit {
  @Input() education: Education;
  
  constructor() { }

  ngOnInit() {
    
  }
}

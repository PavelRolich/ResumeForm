import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Education } from '../../app.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  @Output() sendInfo = new EventEmitter();
  educationList = new Set<Education>();

  constructor() { }

  ngOnInit() {
  }

  addItem(periodStart: string, periodEnd: string, studyPlace: string, faculty: string, specialty: string, qualification: string) {
    const item: Education = {
      periodOfTime: {
        start: new Date(periodStart),
        end: new Date(periodEnd),
      },
      studyPlace,
      faculty,
      specialty,
      qualification,
    };
    this.educationList.add(item);
    this.sendInfo.emit(this.educationList);
  }

}

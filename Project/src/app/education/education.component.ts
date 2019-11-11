import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
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
  }

}

export interface Education {
  periodOfTime: {
    start: Date;
    end: Date;
  };
  studyPlace: string;
  faculty?: string;
  specialty?: string;
  qualification: string;
}

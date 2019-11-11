import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  workExperienceList = new Set<WorkExperience>();

  constructor() { }

  ngOnInit() {
  }

  addItem(start: string, end: string, job: string, scopeCompany: string, position: string, responsibility: string) {
    const item: WorkExperience = {
      periodOfTime: {
        start: new Date(start),
        end: new Date(end)
      },
      job,
      scopeCompany,
      position,
      responsibility: responsibility.split(',').map((localItem) => {
        return localItem.trim();
      }),
    };
    this.workExperienceList.add(item);
  }
}

export interface WorkExperience {
  periodOfTime: {
    start: Date;
    end: Date;
  };
  job: string;
  scopeCompany: string;
  position: string;
  responsibility: string[];
}

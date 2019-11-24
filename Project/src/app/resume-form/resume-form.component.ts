import { Component, OnInit } from '@angular/core';
import { ResumeObject } from '../app.model';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.scss']
})
export class ResumeFormComponent implements OnInit {

  resumeObject: ResumeObject = {
    photo: '',
    generalInformation: {
      name: '',
      date: new Date(),
      accommodation: '',
      relocation: '',
    },
    achievements: [],
    contacts: {
      phoneNumber: '',
      email: '',
      git: '',
      skype: '',
      linkedin: '',
    },
    education: [],
    additionalInformation: '',
    officialInformation: {
      careerObjective: '',
      desiredIncome: 0,
    },
    skills: [],
    workExperience: [],
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmitClick() {
    console.log(this.resumeObject);
  }
}

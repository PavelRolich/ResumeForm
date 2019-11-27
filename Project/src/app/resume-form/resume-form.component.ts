import { Component, OnInit } from '@angular/core';
import { ResumeObject } from '../app.model';
import { GetResumeDataService } from '../get-resume-data.service';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.scss'],
})
export class ResumeFormComponent implements OnInit {

  resumeObject: ResumeObject;

  constructor(private resumeService: GetResumeDataService ) { }

  ngOnInit() {
    this.resumeObject = {
      photo: '',
      generalInformation: null,
      achievements: [],
      contacts: null,
      education: [],
      additionalInformation: '',
      officialInformation: null,
      skills: [],
      workExperience: [],
    };
  }

  addGeneralInfo(genInfo) {
    this.resumeObject.generalInformation = genInfo;
  }

  addPhoto(photo) {
    this.resumeObject.photo = photo;
  }

  addAchievements(achiev) {
    this.resumeObject.achievements = achiev;
  }

  addContacts(contacts) {
    this.resumeObject.contacts = contacts;
  }

  addEducation(education) {
    this.resumeObject.education = education;
  }

  addInfo(addInfo) {
    this.resumeObject.additionalInformation = addInfo;
  }

  addOffInfo(offInfo) {
    this.resumeObject.officialInformation = offInfo;
  }

  addSkills(skills) {
    this.resumeObject.skills = skills;
  }

  addWorkExperience(workExp) {
    this.resumeObject.workExperience = workExp;
  }

  onSubmitClick() {
    console.log(this.resumeObject);
    this.resumeService.pushResume(this.resumeObject);
  }
}

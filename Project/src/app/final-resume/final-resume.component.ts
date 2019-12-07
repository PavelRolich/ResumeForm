import { Component, OnInit } from '@angular/core';
import { GetResumeDataService } from '../get-resume-data.service';
import { ResumeObject } from '../app.model';

@Component({
  selector: 'app-final-resume',
  templateUrl: './final-resume.component.html',
  styleUrls: ['./final-resume.component.scss'],
})
export class FinalResumeComponent implements OnInit {
  resumeObject: ResumeObject = {
    achievements: ['something', 'something', 'something'],
    // tslint:disable-next-line: max-line-length
    photo: 'https://www.google.com/search?tbm=isch&sxsrf=ACYBGNRdVHWESIGIGbTl8eoXZ-gV1hMUZQ:1575118043026&q=joker&chips=q:joker,online_chips:heath+ledger&sa=X&ved=0ahUKEwj69rv7-5HmAhUyMewKHRyqAbEQ4lYILSgD&biw=1366&bih=674&dpr=1#imgrc=OzkGCGnUNaNgRM:',
    generalInformation: {
      name: 'Ролич Павел Викторович',
      date: new Date('02.02.1999'),
      accommodation: 'Пинск',
      relocation: 'Минск',
    },
    contacts: {
      phoneNumber: '+375(29) 830 50 26',
      email: 'something',
      git: 'something',
      skype: 'something',
      linkedin: 'something',
    },
    education: [{
      periodOfTime: {
        start: new Date(),
        end: new Date(),
      },
      studyPlace: 'something',
      faculty: 'something',
      specialty: 'something',
      qualification: 'something',
    }],
    additionalInformation: 'something',
    officialInformation: {
      careerObjective: 'something',
      desiredIncome: 500,
    },
    skills: ['something', 'something', 'something', 'something'],
    workExperience: [{
      periodOfTime: {
        start: new Date(),
        end: new Date(),
      },
      job: 'something',
      scopeCompany: 'something',
      position: 'something',
      responsibility: ['something', 'something', 'something', 'something'],
    }],
  };

  constructor( private resumeService: GetResumeDataService ) { }

  ngOnInit() {
    //this.resumeObject = this.resumeService.getResume();
    /* this.resumeObject = {
      achievements: ['something', 'something', 'something'],
      // tslint:disable-next-line: max-line-length
      photo: 'https://www.google.com/search?tbm=isch&sxsrf=ACYBGNRdVHWESIGIGbTl8eoXZ-gV1hMUZQ:1575118043026&q=joker&chips=q:joker,online_chips:heath+ledger&sa=X&ved=0ahUKEwj69rv7-5HmAhUyMewKHRyqAbEQ4lYILSgD&biw=1366&bih=674&dpr=1#imgrc=OzkGCGnUNaNgRM:',
      generalInformation: {
        name: 'Ролич Павел Викторович',
        date: new Date('02.02.1999'),
        accommodation: 'Пинск',
        relocation: 'Минск',
      },
      contacts: {
        phoneNumber: '+375(29) 830 50 26',
        email: 'something',
        git: 'something',
        skype: 'something',
        linkedin: 'something',
      },
      education: [{
        periodOfTime: {
          start: new Date(),
          end: new Date(),
        },
        studyPlace: 'something',
        faculty: 'something',
        specialty: 'something',
        qualification: 'something',
      }],
      additionalInformation: 'something',
      officialInformation: {
        careerObjective: 'something',
        desiredIncome: 500,
      },
      skills: ['something', 'something', 'something', 'something'],
      workExperience: [{
        periodOfTime: {
          start: new Date(),
          end: new Date(),
        },
        job: 'something',
        scopeCompany: 'something',
        position: 'something',
        responsibility: ['something', 'something', 'something', 'something'],
      }],
    }; */
  }
}

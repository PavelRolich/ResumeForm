import { Component, OnInit } from '@angular/core';
import { GetResumeDataService } from '../get-resume-data.service';
import { ResumeObject } from '../app.model';

@Component({
  selector: 'app-final-resume',
  templateUrl: './final-resume.component.html',
  styleUrls: ['./final-resume.component.scss'],
})
export class FinalResumeComponent implements OnInit {
  resumeObject: ResumeObject = {};

  constructor( private resumeService: GetResumeDataService ) { }

  ngOnInit() {
    this.resumeObject = this.resumeService.getResume();
  }
}

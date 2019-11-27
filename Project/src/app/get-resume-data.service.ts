import { Injectable } from '@angular/core';
import { ResumeObject } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class GetResumeDataService {

  resumeObject: ResumeObject;

  constructor() { }

  pushResume(resumeObject): void {
    this.resumeObject = resumeObject;
  }

  getResume(): ResumeObject {
    return this.resumeObject;
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResumeFormComponent } from './resume-form/resume-form.component';
import { FinalResumeComponent } from './final-resume/final-resume.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeFormComponent,
    FinalResumeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

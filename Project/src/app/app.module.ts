import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResumeFormComponent } from './resume-form/resume-form.component';
import { FinalResumeComponent } from './final-resume/final-resume.component';
import { GeneralInformationComponent } from './resume-form/general-information/general-information.component';
import { ContactsComponent } from './resume-form/contacts/contacts.component';
import { OfficialInformationComponent, OnlyNumberDirective } from './resume-form/official-information/official-information.component';
import { SkillsComponent } from './resume-form/skills/skills.component';
import { AchievementsComponent } from './resume-form/achievements/achievements.component';
import { SkillsItemComponent } from './resume-form/skills/skills-item/skills-item.component';
import { AchievementsItemComponent } from './resume-form//achievements/achievements-item/achievements-item.component';
import { WorkExperienceComponent } from './resume-form/work-experience/work-experience.component';
import { WorkExperienceItemComponent } from './resume-form/work-experience/work-experience-item/work-experience-item.component';
import { EducationComponent } from './resume-form/education/education.component';
import { EducationItemComponent } from './resume-form/education/education-item/education-item.component';
import { AdditionalInformationComponent } from './resume-form/additional-information/additional-information.component';
import { PhotoComponent } from './resume-form/photo/photo.component';
import { GetResumeDataService } from './get-resume-data.service';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IMaskModule } from 'angular-imask';

const appRoutes: Routes = [
  { path: 'main', component: ResumeFormComponent },
  { path: 'resume', component: FinalResumeComponent },
  { path: '',   redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    ResumeFormComponent,
    FinalResumeComponent,
    GeneralInformationComponent,
    ContactsComponent,
    OfficialInformationComponent,
    SkillsComponent,
    AchievementsComponent,
    OnlyNumberDirective,
    SkillsItemComponent,
    AchievementsItemComponent,
    WorkExperienceComponent,
    WorkExperienceItemComponent,
    EducationComponent,
    EducationItemComponent,
    AdditionalInformationComponent,
    PhotoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    IMaskModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
    ),
  ],
  providers: [
    MatDatepickerModule,
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    GetResumeDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

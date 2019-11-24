import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResumeFormComponent } from './resume-form/resume-form.component';
import { FinalResumeComponent } from './final-resume/final-resume.component';
import { GeneralInformationComponent } from './general-information/general-information.component';
import { ContactsComponent } from './contacts/contacts.component';
import { OfficialInformationComponent, OnlyNumberDirective } from './official-information/official-information.component';
import { SkillsComponent } from './skills/skills.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { SkillsItemComponent } from './skills/skills-item/skills-item.component';
import { AchievementsItemComponent } from './achievements/achievements-item/achievements-item.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { WorkExperienceItemComponent } from './work-experience/work-experience-item/work-experience-item.component';
import { EducationComponent } from './education/education.component';
import { EducationItemComponent } from './education/education-item/education-item.component';
import { AdditionalInformationComponent } from './additional-information/additional-information.component';
import { PhotoComponent } from './photo/photo.component';

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
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

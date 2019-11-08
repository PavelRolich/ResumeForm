import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResumeFormComponent } from './resume-form/resume-form.component';
import { FinalResumeComponent } from './final-resume/final-resume.component';
import { ListItemComponent } from './list-item/list-item.component';
import { GeneralInformationComponent } from './general-information/general-information.component';
import { ContactsComponent } from './contacts/contacts.component';
import { OfficialInformationComponent } from './official-information/official-information.component';
import { SkillsComponent } from './skills/skills.component';
import { AchievementsComponent } from './achievements/achievements.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IMaskModule } from 'angular-imask';

@NgModule({
  declarations: [
    AppComponent,
    ResumeFormComponent,
    FinalResumeComponent,
    ListItemComponent,
    GeneralInformationComponent,
    ContactsComponent,
    OfficialInformationComponent,
    SkillsComponent,
    AchievementsComponent,
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
  ],
  providers: [
    MatDatepickerModule,
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

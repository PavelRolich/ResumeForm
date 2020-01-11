import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Contacts } from 'src/app/app.model';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  @Output() sendInfo = new EventEmitter();
  contacts: Contacts;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor() { }

  ngOnInit() {
    this.contacts = {
      phoneNumber: '+375(',
      email: '',
      git: '',
      skype: '',
      linkedin: '',
    };
  }

  onChangePhoneValue(model: string) {
    this.contacts.phoneNumber = model;
    this.sendInfo.emit(this.contacts);
  }

  onChangeEmailValue(model: string) {
    this.contacts.email = model;
    this.sendInfo.emit(this.contacts);
  }

  onChangeGitValue(model: string) {
    this.contacts.git = model;
    this.sendInfo.emit(this.contacts);
  }

  onChangeSkypeValue(model: string) {
    this.contacts.skype = model;
    this.sendInfo.emit(this.contacts);
  }

  onChangeLinkedInValue(model: string) {
    this.contacts.linkedin = model;
    this.sendInfo.emit(this.contacts);
  }
}

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
      phoneNumber: '',
      email: '',
      git: '',
      skype: '',
      linkedin: '',
    };
  }

  onChangePhoneValue(event: Event) {
    this.contacts.phoneNumber = (event.target as HTMLInputElement).value;
    this.sendInfo.emit(this.contacts);
  }

  onChangeEmailValue(event: Event) {
    this.contacts.email = (event.target as HTMLInputElement).value;
    this.sendInfo.emit(this.contacts);
  }

  onChangeGitValue(event: Event) {
    this.contacts.git = (event.target as HTMLInputElement).value;
    this.sendInfo.emit(this.contacts);
  }

  onChangeSkypeValue(event: Event) {
    this.contacts.skype = (event.target as HTMLInputElement).value;
    this.sendInfo.emit(this.contacts);
  }

  onChangeLinkedInValue(event: Event) {
    this.contacts.linkedin = (event.target as HTMLInputElement).value;
    this.sendInfo.emit(this.contacts);
  }
}

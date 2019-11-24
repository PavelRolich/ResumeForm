import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

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
  @Input() contacts;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor() { }

  ngOnInit() {
  }

  onChangePhoneValue(event: any) {
    this.contacts.phoneNumber = event.target.value;
  }

  onChangeEmailValue(event: any) {
    this.contacts.email = event.target.value;
  }

  onChangeGitValue(event: any) {
    this.contacts.git = event.target.value;
  }

  onChangeSkypeValue(event: any) {
    this.contacts.skype = event.target.value;
  }

  onChangeLinkedInValue(event: any) {
    this.contacts.linkedin = event.target.value;
  }
}

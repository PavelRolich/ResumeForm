import { Directive, ElementRef, HostListener, Input, OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-official-information',
  templateUrl: './official-information.component.html',
  styleUrls: ['./official-information.component.scss']
})
export class OfficialInformationComponent implements OnInit {
  @Input() offInformation;

  constructor() { }

  ngOnInit() {
  }

  onChangeCareerObjectiveValue(event: any) {
    this.offInformation.careerObjective = event.target.value;
  }

  onChangeDesiredIncomeValue(event: any) {
    this.offInformation.desiredIncome = event.target.value;
  }
}

@Directive({
  selector: '[appOnlyNumberDirective]'
})

export class OnlyNumberDirective {
  regexStr = '^[0-9]*$';
  constructor(private el: ElementRef) { }

  @Input() OnlyNumber: boolean;

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    const e = <KeyboardEvent> event;
    if (this.OnlyNumber) {
      if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+C
        (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+V
        (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+X
        (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
          // let it happen, don't do anything
          return;
        }
      const ch = String.fromCharCode(e.keyCode);
      const regEx =  new RegExp(this.regexStr);
      if (regEx.test(ch)) {
        return;
      } else {
        e.preventDefault();
      }
    }
  }
}

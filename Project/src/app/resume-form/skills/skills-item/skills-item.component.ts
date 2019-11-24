import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-skills-item',
  templateUrl: './skills-item.component.html',
  styleUrls: ['./skills-item.component.scss']
})
export class SkillsItemComponent {
  @Input() skill: string;
  @Output() clicked = new EventEmitter<string>();

  clickDelete() {
    this.clicked.emit(this.skill);
  }
}

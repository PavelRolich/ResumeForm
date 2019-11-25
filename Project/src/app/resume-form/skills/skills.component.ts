import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Output() sendInfo = new EventEmitter();
  skillsList = new Set();

  constructor() { }

  ngOnInit() {
  }

  onSelectSkill(selectedSkill: string) {
    if (selectedSkill !== '') {
      const localSkill = selectedSkill;
      this.skillsList.add(localSkill);
    }
    this.sendInfo.emit(this.skillsList);
  }

  onDeleteButtonClick(skill: string) {
    this.skillsList.delete(skill);
    this.sendInfo.emit(this.skillsList);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsList = new Set();

  constructor() { }

  ngOnInit() {
  }

  onSelectSkill(selectedSkill: string) {
    if (selectedSkill !== '') {
      const localSkill = selectedSkill;
      this.skillsList.add(localSkill);
    }
  }

  onDeleteButtonClick(event: any, skill: string) {
    this.skillsList.delete(skill);
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Input() skills;
  skillsList = new Set();

  constructor() { }

  ngOnInit() {
  }

  onSelectSkill(selectedSkill: string) {
    if (selectedSkill !== '') {
      const localSkill = selectedSkill;
      this.skillsList.add(localSkill);
    }
    this.skills = this.skillsList;
  }

  onDeleteButtonClick(event: any, skill: string) {
    this.skillsList.delete(skill);
    this.skills = this.skillsList;
  }
}

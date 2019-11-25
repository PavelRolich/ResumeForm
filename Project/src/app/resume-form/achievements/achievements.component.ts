import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {
  @Output() sendInfo = new EventEmitter();
  achievementsList = new Set();

  constructor() { }

  ngOnInit() {
  }

  onSelectAchievement(selectedAchievement: string) {
    if (selectedAchievement !== '') {
      const localAchievement = selectedAchievement;
      this.achievementsList.add(localAchievement);
    }
    this.sendInfo.emit(this.achievementsList);
  }

  onDeleteButtonClick(skill: string) {
    this.achievementsList.delete(skill);
    this.sendInfo.emit(this.achievementsList);
  }
}

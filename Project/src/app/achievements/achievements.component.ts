import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {
  achievementsList = new Set();

  constructor() { }

  ngOnInit() {
  }

  onSelectAchievement(selectedAchievement: string) {
    if (selectedAchievement !== '') {
      const localAchievement = selectedAchievement;
      this.achievementsList.add(localAchievement);
    }
  }

  onDeleteButtonClick(event: any, skill: string) {
    this.achievementsList.delete(skill);
  }
}

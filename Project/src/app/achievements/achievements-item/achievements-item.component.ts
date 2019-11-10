import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-achievements-item',
  templateUrl: './achievements-item.component.html',
  styleUrls: ['./achievements-item.component.scss']
})
export class AchievementsItemComponent {
  @Input() achievement: string;
  @Output() clicked = new EventEmitter<string>();

  clickDelete() {
    this.clicked.emit(this.achievement);
  }
}

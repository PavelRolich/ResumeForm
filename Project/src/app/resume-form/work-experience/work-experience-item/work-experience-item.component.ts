import { Component, OnInit, Input } from '@angular/core';
import { WorkExperience } from 'src/app/app.model';

@Component({
  selector: 'app-work-experience-item',
  templateUrl: './work-experience-item.component.html',
  styleUrls: ['./work-experience-item.component.scss']
})
export class WorkExperienceItemComponent implements OnInit {
  @Input() experience: WorkExperience;

  constructor() { }

  ngOnInit() {
  }

}

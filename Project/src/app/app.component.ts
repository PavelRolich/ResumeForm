import { Component } from '@angular/core';
import { GetResumeDataService } from './get-resume-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [GetResumeDataService],
})
export class AppComponent {
  title = 'Project';
}

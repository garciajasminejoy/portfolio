import { Component } from '@angular/core';
import { WORK_HISTORY } from './work-history.data';
import { TimelineComponent } from "../../shared/components/timeline/timeline.component";

@Component({
  selector: 'app-work-history',
  standalone: true,
  imports: [TimelineComponent],
  templateUrl: './work-history.component.html',
  styleUrl: './work-history.component.scss'
})
export class WorkHistoryComponent {
  workHistory = WORK_HISTORY;

}

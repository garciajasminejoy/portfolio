import { Component, Input, TemplateRef } from '@angular/core';
import { TimelineItem } from './timeline.interface';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  @Input({ required: true }) items: TimelineItem[] = [];
  @Input({ required: false }) timelineContentTemplateRef?: TemplateRef<HTMLElement>;
}

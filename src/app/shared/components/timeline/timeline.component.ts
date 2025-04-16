import { Component, Input, TemplateRef } from '@angular/core';
import { TimelineItem } from './timeline.interface';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  @Input({ required: true }) items: TimelineItem[] = [];
  @Input({ required: false }) timelineContentTemplateRef?: TemplateRef<any>;
}

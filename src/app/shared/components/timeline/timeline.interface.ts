import { TemplateRef } from "@angular/core";

export interface TimelineItem {
    label: string;
    data?: { [key: string]: any }
    // contentTemplateRef: TemplateRef<HTMLElement>;
}
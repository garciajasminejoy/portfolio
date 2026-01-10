import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss',
})
export class TechStackComponent {
  techStack = [
    {
      category: 'Frontend Development',
      items: [
        { name: 'Angular', iconFileName: 'angular-icon.svg' },
        { name: 'TypeScript', iconFileName: 'typescript-icon.svg' },
        { name: 'HTML', iconFileName: 'html-5.svg' },
        { name: 'CSS', iconFileName: 'css-3.svg' },
        { name: 'Bootstrap', iconFileName: 'bootstrap.svg' },
        { name: 'RxJS', iconFileName: 'reactivex.svg' },
      ],
    },
    {
      category: 'Backend Development',
      items: [
        { name: 'NodeJS', iconFileName: 'nodejs-icon.svg' },
        { name: 'Laravel', iconFileName: 'laravel.svg' },
        { name: 'NestJS', iconFileName: 'NestJS.svg' },
        { name: 'PostgreSQL', iconFileName: 'postgres.svg' },
        { name: 'MySQL', iconFileName: 'mysql.svg' },
      ],
    },
    {
      category: 'Testing',
      items: [{ name: 'Jasmine', iconFileName: 'jasmine.svg' }],
    },
    {
      category: 'Tools',
      items: [
        { name: 'Git', iconFileName: 'git-icon.svg' },
        { name: 'NPM', iconFileName: 'npm-icon.svg' },
      ],
    },
    {
      category: 'Design',
      items: [{ name: 'Figma', iconFileName: 'figma.svg' }],
    },
  ];
}

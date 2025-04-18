import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss'
})
export class TechStackComponent {

  list = [
    {
      name: 'Angular',
      iconFileName: 'angular-icon.svg'
    },
    {
      name: 'HTML',
      iconFileName: 'html-5.svg'
    },
    {
      name: 'CSS',
      iconFileName: 'css-3.svg'
    },
    {
      name: 'Typescript',
      iconFileName: 'typescript-icon.svg'
    },
    {
      name: 'NodeJS',
      iconFileName: 'nodejs-icon.svg'
    },
    {
      name: 'Jasmine',
      iconFileName: 'jasmine.svg'
    },
    {
      name: 'Laravel',
      iconFileName: 'laravel.svg'
    },
    {
      name: 'Git',
      iconFileName: 'git-icon.svg'
    },
    {
      name: 'Figma',
      iconFileName: 'figma.svg'
    },
    {
      name: 'Bootstrap',
      iconFileName: 'bootstrap.svg'
    },
    {
      name: 'NPM',
      iconFileName: 'npm-icon.svg'
    },
    {
      name: 'RxJS',
      iconFileName: 'reactivex.svg'
    },
  ];
}

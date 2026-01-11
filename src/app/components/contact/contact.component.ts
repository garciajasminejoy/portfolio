import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  socials = [
    {
      name: 'Email',
      url: 'mailto:garciajasminejoy@gmail.com',
      iconFileName: 'at-symbol.svg',
      accountName: 'garciajasminejoy@gmail.com',
    },
    {
      name: 'Github',
      url: 'https://github.com/garciajasminejoy',
      iconFileName: 'github.svg',
      accountName: 'garciajasminejoy',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jasmine-joy-garcia-904095163/',
      iconFileName: 'linkedin.svg',
      accountName: 'Jasmine Joy Garcia',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/hellojasgarcia/',
      iconFileName: 'instagram.svg',
      accountName: 'hellojasgarcia',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/hellojasgarcia/',
      iconFileName: 'fb.svg',
      accountName: 'Jasmine Garcia',
    },
  ];
}

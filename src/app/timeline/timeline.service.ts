import { Injectable } from '@angular/core';

import { Experience } from './experience';

@Injectable()
export class TimelineService {
  constructor() { }

  getExperiences(): Experience[] {
      return [
          {
              image: 'images/neudesic.jpg',
              heading: '2014',
              subheading: 'Neudesic',
              body: 'In March 2014 I began a year long internship at Neudesic\'s Amerishore Program. I acted as both a software quality assurance lead and business analyst during the implementation of a large custom built Sharepoint application.'
          },
          {
              image: 'images/UH.png',
              heading: 'May 2015',
              subheading: 'University of Houston',
              body: 'In May 2015 I graduated from University of Houston\'s C.T. Bauer College of Business with a B.B.A. in Management Information Systems.'
          },
          {
              image: 'images/accenture.jpg',
              heading: 'August 2015',
              subheading: 'Accenture',
              body: 'In August 2015 I relocated to Seattle to begin working with Accenture as a Systems Analyst. I acted as an analyst for 9 months on an SAP implementation for one of the largest retail companies in the world.'
          },
          {
              image: 'images/udacity.jpg',
              heading: 'July 2016',
              subheading: 'Udacity',
              body: 'In July of 2016 I relocated back to Houston and graduated from Udacity\'s Full Stack Web Developer Nanodegree program. I spent 4 months in the program pushing my Web Development skills to the next level with content and coaching that was built in collaboration with industry leaders like AT&T and Google.'
          },
          {
              image: 'images/future.jpg',
              heading: 'The Future',
              subheading: 'Working with you?',
              body: 'In the future I intend to take my skillset even further and master the web\'s newest technologies. Like Angular 2, React, ASP.NET Core, and others. Maybe we can build something amazing together.'
          }
      ];
  }
}

import { Injectable } from '@angular/core';

import { Project } from './project';

@Injectable()
export class ProjectsService {
  constructor() { }

  getProjects(): Project[] {
      return [
          {
              title: 'Cataloginator',
              image: 'images/work/cataloginator.png',
              github: 'https://github.com/nickmyers217/catalog',
              url: 'https://cataloginator.herokuapp.com/'
          },
          {
              title: 'Pubmeddler',
              image: 'images/work/pubmeddler.png',
              github: 'https://github.com/nickmyers217/pubmeddler',
              url: 'https://pubmeddler.herokuapp.com/'
          },
          {
              title: 'RESTful Rock Paper Scissors',
              image: 'images/work/restful.png',
              github: 'https://github.com/NickMyers217/AppEngine_RockPaperScissors'
          },
          {
              title: 'Raycaster',
              image: 'images/work/raycaster.png',
              github: 'https://github.com/nickmyers217/raycaster',
              url: 'http://nickmyers217.github.io/raycaster/'
          },
          {
              title: 'ES6 + WebGL',
              image: 'images/work/webgl.png',
              github: 'https://github.com/nickmyers217/es6_threejs_stuff',
              url: 'http://nickmyers217.github.io/es6_threejs_stuff/dist/'
          },
          {
              title: 'Raytracer',
              image: 'images/work/raytracer.png',
              github: 'https://github.com/nickmyers217/raytracer_practice',
              url: 'http://nickmyers217.github.io/raytracer_practice/'
          }
      ];
  }
}

import { Injectable } from '@angular/core';

import { Project } from './project';

@Injectable()
export class ProjectsService {
  constructor() { }

  getCategories(): string[] {
    return [
      'HTML5',
      'CSS3',
      'JS',
      'NodeJS',
      'Python',
      'Rails',
      'Bootstrap',
      'SQL',
      'REST',
      'Redux',
      'React'
    ];
  }

  getProjects(): Project[] {
    return [
      {
        title: 'Cataloginator',
        image: 'images/work/cataloginator.png',
        github: 'https://github.com/nickmyers217/catalog',
        url: 'https://cataloginator.herokuapp.com/',
        tags: ['html5', 'css3', 'js', 'python', 'bootstrap', 'sql', 'rest']
      },
      {
        title: 'Pubmeddler',
        image: 'images/work/pubmeddler.png',
        github: 'https://github.com/nickmyers217/pubmeddler',
        url: 'https://pubmeddler.herokuapp.com/',
        tags: ['html5', 'css3', 'js', 'rails', 'bootstrap', 'sql', 'rest']
      },
      {
        title: 'RESTful Rock Paper Scissors',
        image: 'images/work/restful.png',
        github: 'https://github.com/NickMyers217/AppEngine_RockPaperScissors',
        tags: ['python', 'rest']
      },
      {
        title: 'Raycaster',
        image: 'images/work/raycaster.png',
        github: 'https://github.com/nickmyers217/raycaster',
        url: 'http://nickmyers217.github.io/raycaster/',
        tags: ['html5', 'js']
      },
      {
        title: 'ES6 + WebGL',
        image: 'images/work/webgl.png',
        github: 'https://github.com/nickmyers217/es6_threejs_stuff',
        url: 'http://nickmyers217.github.io/es6_threejs_stuff/dist/',
        tags: ['html5', 'js', 'nodejs']
      },
      {
        title: 'Raytracer',
        image: 'images/work/raytracer.png',
        github: 'https://github.com/nickmyers217/raytracer_practice',
        url: 'http://nickmyers217.github.io/raytracer_practice/',
        tags: ['html5', 'js']
      },
      {
        title: 'Redux Minesweeper',
        image: 'images/work/minesweeper-redux.png',
        github: 'https://github.com/nickmyers217/minesweeper-redux-react',
        url: 'http://nickmyers217.github.io/minesweeper-redux-react',
        tags: ['js', 'nodejs', 'react', 'redux']
      }
    ];
  }
}

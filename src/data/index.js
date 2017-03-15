export const particlesConfig = {
  "particles": {
    "number": {
      "value": 40,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 0.4,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": false
};

export const skillsData = [
  {
    icons: ['ion-social-html5', 'ion-social-css3', 'ion-social-javascript'],
    title: 'Front End',
    desc: 'I can write HTML5 and CSS3 by hand and am up to date on many of the key developments in today\'s modern Javascript ecosystem.',
    animation: 'leftReveal'
  },
  {
    icons: ['ion-social-nodejs', 'ion-social-windows', 'ion-social-python'],
    title: 'Back End',
    desc: 'I\'ve built websites and API\'s backed by Ruby on Rails, ASP.NET MVC, Python\'s Flask framework, and several Node.js frameworks.',
    animation: 'topReveal'
  },
  {
    icons: ['ion-briefcase', 'glyphicons glyphicons-database'],
    title: 'Databases',
    desc: 'I have worked with SQL datbases and am formally educated in relational database theory, but I\'ve also spent some time with NoSQL solutions like CouchDB.',
    animation: 'rightReveal'
  },
  {
    icons: ['ion-social-angular'],
    title: 'Frameworks',
    desc: 'I have experience with a variety of popular frameworks like React, Angular 2, Bootstrap, and JQuery.',
    animation: 'leftReveal'
  },
  {
    icons: ['ion-android-desktop', 'ion-android-laptop', 'ion-android-phone-portrait'],
    title: 'Techniques',
    desc: 'I\'m well versed in Responsive Web Design, and understand how to achieve a pleasant mobile web experience.',
    animation: 'topReveal'
  },
  {
    icons: ['ion-social-tux', 'ion-social-github', 'glyphicon glyphicon-console'],
    title: 'Other',
    desc: 'I\'m not one to shy away from working on the terminal, and can configure a Linux server or work with Git.',
    animation: 'rightReveal'
  }
];

export const projectsData = {
  categories: [
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
  ],
  projects: [
    {
      title: 'Cataloginator',
      image: 'images/projects/cataloginator.png',
      github: 'https://github.com/nickmyers217/catalog',
      url: 'https://cataloginator.herokuapp.com/',
      tags: ['html5', 'css3', 'js', 'python', 'bootstrap', 'sql', 'rest']
    },
    {
      title: 'Pubmeddler',
      image: 'images/projects/pubmeddler.png',
      github: 'https://github.com/nickmyers217/pubmeddler',
      url: 'https://pubmeddler.herokuapp.com/',
      tags: ['html5', 'css3', 'js', 'rails', 'bootstrap', 'sql', 'rest']
    },
    {
      title: 'RESTful Rock Paper Scissors',
      image: 'images/projects/restful.png',
      github: 'https://github.com/NickMyers217/AppEngine_RockPaperScissors',
      tags: ['python', 'rest']
    },
    {
      title: 'Raycaster',
      image: 'images/projects/raycaster.png',
      github: 'https://github.com/nickmyers217/raycaster',
      url: 'http://nickmyers217.github.io/raycaster/',
      tags: ['html5', 'js']
    },
    {
      title: 'ES6 + WebGL',
      image: 'images/projects/webgl.png',
      github: 'https://github.com/nickmyers217/es6_threejs_stuff',
      url: 'http://nickmyers217.github.io/es6_threejs_stuff/dist/',
      tags: ['html5', 'js', 'nodejs']
    },
    {
      title: 'Raytracer',
      image: 'images/projects/raytracer.png',
      github: 'https://github.com/nickmyers217/raytracer_practice',
      url: 'http://nickmyers217.github.io/raytracer_practice/',
      tags: ['html5', 'js']
    },
    {
      title: 'Redux Minesweeper',
      image: 'images/projects/minesweeper-redux.png',
      github: 'https://github.com/nickmyers217/minesweeper-redux-react',
      url: 'http://nickmyers217.github.io/minesweeper-redux-react',
      tags: ['js', 'nodejs', 'react', 'redux']
    }
  ]
}

export const experienceData = [
  {
    image: 'images/experience/neudesic.jpg',
    heading: '2014',
    subheading: 'Neudesic',
    body: 'In March 2014 I began a year long internship at Neudesic\'s Amerishore Program. I acted as both a software quality assurance lead and business analyst during the implementation of a large custom built Sharepoint application.'
  },
  {
    image: 'images/experience/UH.png',
    heading: 'May 2015',
    subheading: 'University of Houston',
    body: 'In May 2015 I graduated from University of Houston\'s C.T. Bauer College of Business with a B.B.A. in Management Information Systems.'
  },
  {
    image: 'images/experience/accenture.jpg',
    heading: 'August 2015',
    subheading: 'Accenture',
    body: 'In August 2015 I relocated to Seattle to begin working with Accenture as a Systems Analyst. I acted as an analyst for 9 months on an SAP implementation for one of the largest retail companies in the world.'
  },
  {
    image: 'images/experience/udacity.jpg',
    heading: 'July 2016',
    subheading: 'Udacity',
    body: 'In July of 2016 I relocated back to Houston and graduated from Udacity\'s Full Stack Web Developer Nanodegree program. I spent 4 months in the program pushing my Web Development skills to the next level with content and coaching that was built in collaboration with industry leaders like AT&T and Google.'
  },
  {
    image: 'images/experience/alitek.png',
    heading: 'Feb 2017 - Present',
    subheading: 'Alitek',
    body: 'In February of 2017 I began working as a consultant at Alitek in Houston, TX. I currently act as a web developer for an Alitek partner company that implements software for oil & gas clients. I spend a lot of time working with full stack Javascript code!'
  },
  {
    image: 'images/experience/future.jpg',
    heading: 'The Future',
    subheading: 'Building the future',
    body: 'In the future I intend to take my skillset even further and master the web\'s newest technologies. I have my eyes set on progressive and hybrid web apps. Maybe we can build something amazing together.'
  }
];

export const footerData = {
  socialIcons: [
    {
      url: 'https://www.linkedin.com/in/nicholasmyers217',
      icon: 'ion-social-linkedin'
    },
    {
      url: 'https://github.com/nickmyers217',
      icon: 'ion-social-github'
    }
  ],
  resumePath: '/resume.pdf'
};
import { Component
       , OnInit
       , AfterViewInit
       , ElementRef
       } from '@angular/core';

import { NavbarComponent   } from './navbar';
import { HeroComponent     } from './hero';
import { SkillsComponent   } from './skills';
import { ProjectsComponent } from './projects';

import { Util } from './shared/util';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    NavbarComponent,
    HeroComponent,
    SkillsComponent,
    ProjectsComponent
  ]
})
export class AppComponent implements OnInit, AfterViewInit {
  brand = 'NM';

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    // TODO: Is there a better way to load these modules
    // into the DOM after the component?
    // They are pretty old and don't follow any module conventions
    Util.addScriptToDOM('js/particles.min.js', this.elementRef);
    Util.addScriptToDOM('js/particlesRun.js', this.elementRef);
    // TODO: Pull this code into the component
    // this will improve encapsulation and
    // seperation of concerns blah blah blah
    Util.addScriptToDOM('js/main.js', this.elementRef);
  }
}

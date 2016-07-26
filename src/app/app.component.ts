import { Component
       , AfterViewInit
       , ElementRef
       } from '@angular/core';
       
import { NavbarComponent   } from './navbar';
import { HeroComponent     } from './hero';
import { SkillsComponent   } from './skills';
import { ProjectsComponent } from './projects';
import { TimelineComponent } from './timeline';
import { ContactComponent  } from './contact';
import { FooterComponent   } from './footer';

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
        ProjectsComponent,
        TimelineComponent,
        ContactComponent,
        FooterComponent
    ]
})
export class AppComponent implements AfterViewInit {
    brand = 'NM';

    constructor(private elementRef: ElementRef) {}

    ngAfterViewInit() {
        // TODO: Is there a better way to load these modules
        // into the DOM after the component?
        // They are pretty old and don't follow any module conventions
        Util.addScriptToDOM('js/particles.min.js', this.elementRef)
            .then(() => {
                Util.addScriptToDOM('js/particlesRun.js', this.elementRef)
            })
            .then(() => {
                Util.addScriptToDOM('js/main.js', this.elementRef);
            })
    }
}

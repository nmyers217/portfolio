import { Component
       , OnInit
       , AfterViewInit
       } from '@angular/core';

import { Util } from '../shared/util';

@Component({
  moduleId: module.id,
  selector: 'app-hero',
  templateUrl: 'hero.component.html',
  styleUrls: ['hero.component.css']
})
export class HeroComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}

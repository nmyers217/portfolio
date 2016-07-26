import { Component, OnInit } from '@angular/core';

import { TimelineService } from './timeline.service';
import { Experience } from './experience';

@Component({
    moduleId: module.id,
    selector: 'app-timeline',
    templateUrl: 'timeline.component.html',
    styleUrls: ['timeline.component.css'],
    providers: [TimelineService]
})
export class TimelineComponent implements OnInit {
    experiences: Experience[];

    constructor(private timeService: TimelineService) {
    }

    ngOnInit() {
        this.experiences = this.timeService.getExperiences();
    }
}

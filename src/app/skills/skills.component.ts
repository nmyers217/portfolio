import { Component, OnInit } from '@angular/core';

import { Skill, SkillComponent } from './skill';
import { SkillsService } from './skills.service';

@Component({
    moduleId: module.id,
    selector: 'app-skills',
    templateUrl: 'skills.component.html',
    styleUrls: ['skills.component.css'],
    directives: [SkillComponent],
    providers: [SkillsService]
})
export class SkillsComponent implements OnInit {
    skills: Skill[];

    constructor(private skillsService: SkillsService) { 
    }

    ngOnInit() {
        this.skills = this.skillsService.getSkills();
    }
}

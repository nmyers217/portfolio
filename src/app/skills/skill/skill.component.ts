import { Component, Input } from '@angular/core';

import { Skill } from './skill';

@Component({
    moduleId: module.id,
    selector: 'app-skill',
    templateUrl: 'skill.component.html',
    styleUrls: ['skill.component.css']
})
export class SkillComponent {
    @Input() skill: Skill;

    constructor() { }
}

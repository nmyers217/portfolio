import { Component } from '@angular/core';

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
export class SkillsComponent {
  skills: Skill[];

  constructor(private skillsService: SkillsService) { 
      this.skills = skillsService.getSkills();
  }
}

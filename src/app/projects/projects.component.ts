import { Component, OnInit } from '@angular/core';

import { Project } from './project';
import { ProjectsService } from './projects.service';

@Component({
    moduleId: module.id,
    selector: 'app-projects',
    templateUrl: 'projects.component.html',
    styleUrls: ['projects.component.css'],
    providers: [ProjectsService]
})
export class ProjectsComponent implements OnInit {
    categories: string[];
    projects: Project[];    

    constructor(private projectsService: ProjectsService) { 
    }

    ngOnInit() {
        this.categories = this.projectsService.getCategories();
        this.projects = this.projectsService.getProjects();
    }
}

/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';
import { ProjectsService } from './projects.service';

describe('Component: Projects', () => {
  it('should create an instance', () => {
    let component = new ProjectsComponent(new ProjectsService());
    expect(component).toBeTruthy();
  });
});

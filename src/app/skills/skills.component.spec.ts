/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';
import { SkillsService   } from './skills.service'

describe('Component: Skills', () => {
  it('should create an instance', () => {
    let component = new SkillsComponent(new SkillsService());
    expect(component).toBeTruthy();
  });
});

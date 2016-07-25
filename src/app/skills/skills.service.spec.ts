/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { SkillsService } from './skills.service';

describe('Service: Skills', () => {
  beforeEach(() => {
    addProviders([SkillsService]);
  });

  it('should ...',
    inject([SkillsService],
      (service: SkillsService) => {
        expect(service).toBeTruthy();
      }));
});

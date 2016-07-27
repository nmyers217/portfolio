/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ContactService } from './contact.service';

describe('Service: Contact', () => {
  beforeEach(() => {
    addProviders([ContactService]);
  });

  it('should ...',
    inject([ContactService],
      (service: ContactService) => {
        expect(service).toBeTruthy();
      }));
});

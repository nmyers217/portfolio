/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { TimelineService } from './timeline.service';

describe('Service: Timeline', () => {
  beforeEach(() => {
    addProviders([TimelineService]);
  });

  it('should ...',
    inject([TimelineService],
      (service: TimelineService) => {
        expect(service).toBeTruthy();
      }));
});

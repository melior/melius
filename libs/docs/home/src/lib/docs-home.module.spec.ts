import { async, TestBed } from '@angular/core/testing';

import { DocsHomeModule } from './docs-home.module';

describe('DocsHomeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DocsHomeModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DocsHomeModule).toBeDefined();
  });
});

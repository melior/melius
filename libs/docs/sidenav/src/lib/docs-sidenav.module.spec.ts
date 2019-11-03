import { async, TestBed } from '@angular/core/testing';

import { DocsSidenavModule } from './docs-sidenav.module';

describe('DocsSidenavModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DocsSidenavModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DocsSidenavModule).toBeDefined();
  });
});

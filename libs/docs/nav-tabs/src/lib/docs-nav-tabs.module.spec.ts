import { async, TestBed } from '@angular/core/testing';

import { DocsNavTabsModule } from './docs-nav-tabs.module';

describe('DocsNavTabsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DocsNavTabsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DocsNavTabsModule).toBeDefined();
  });
});

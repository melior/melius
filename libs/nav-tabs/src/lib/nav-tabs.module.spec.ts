import { async, TestBed } from '@angular/core/testing';
import { NavTabsModule } from './nav-tabs.module';

describe('NavTabsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NavTabsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NavTabsModule).toBeDefined();
  });
});

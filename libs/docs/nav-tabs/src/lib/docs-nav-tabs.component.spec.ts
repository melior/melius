import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsNavTabsComponent } from './docs-nav-tabs.component';

describe('DocsNavTabsComponent', () => {
  let component: DocsNavTabsComponent;
  let fixture: ComponentFixture<DocsNavTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocsNavTabsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsNavTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

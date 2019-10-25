import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ElementRef,
  ViewChild,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { Swiper } from 'swiper/js/swiper.esm';

import { TabComponent } from '../tab';

@Component({
  selector: 'melius-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabGroupComponent implements OnInit {
  private tabContentSwiper?: Swiper;

  @ViewChild('tabGroupElement', { static: true })
  public readonly tabGroupElement: ElementRef<HTMLElement>;

  @ContentChildren(TabComponent, { descendants: true })
  public set tabs(tabs: QueryList<TabComponent>) {
    this.tabContentSwiper.removeAllSlides();

    tabs.forEach((tab, index) => {
      this.tabContentSwiper.addSlide(index, tab.tabElement.nativeElement);
    });

    this.tabLabels = tabs.map(({ label }) => label);
  }

  public tabLabels: string[];

  public ngOnInit(): void {
    this.tabContentSwiper = new Swiper(this.tabGroupElement.nativeElement, {
      direction: 'horizontal',
      containerModifierClass: 'melius-tab-group--',
      wrapperClass: 'melius-tab-group__tab-content-wrapper',
      slideClass: 'melius-tab',
      slideActiveClass: 'melius-tab--active',
      touchReleaseOnEdges: true,
    });
  }

  public onTabLabelClicked(index: number): void {
    this.tabContentSwiper.slideTo(index);
  }
}

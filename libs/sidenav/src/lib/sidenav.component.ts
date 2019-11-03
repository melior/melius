import {
  Component,
  ChangeDetectionStrategy,
  ElementRef,
  Renderer2,
  NgZone,
  Input,
  OnDestroy,
  ViewChild,
  ChangeDetectorRef,
  OnInit,
} from '@angular/core';

import { SidenavState } from './sidenav-state.model';
import { sidenavAnimations } from './sidenav-animations';

const scale = (
  num: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
) => ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

@Component({
  selector: 'melius-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: sidenavAnimations,
  exportAs: 'meliusSidenav',
})
export class MeliusSidenavComponent implements OnInit, OnDestroy {
  @Input()
  public handleWidth = 10;

  @Input()
  public stateChangeToleranceRatio = 0.4;

  @Input()
  public hasBackdrop = true;

  @ViewChild('sidenavElement', { static: true })
  public sidenavElement: ElementRef<HTMLElement>;

  @ViewChild('sidenavBackdropElement', { static: false })
  public sidenavBackdropElement: ElementRef<HTMLElement>;

  public state = SidenavState.Closed;
  public width?: number;
  public SidenavState = SidenavState;

  private previousState = SidenavState.Indeterminate;

  private startTouch?: TouchEvent;
  private xDiff?: number;

  constructor(
    private readonly renderer: Renderer2,
    private readonly ngZone: NgZone,
    private readonly changeDetectorRef: ChangeDetectorRef,
  ) {}

  public ngOnInit(): void {
    this.width = +this.sidenavElement.nativeElement.offsetWidth;

    this.ngZone.runOutsideAngular(() => {
      this.sidenavElement.nativeElement.addEventListener(
        'touchstart',
        this.onTouchStart.bind(this),
      );

      this.sidenavElement.nativeElement.addEventListener(
        'touchend',
        this.onTouchEnd.bind(this),
      );

      this.sidenavElement.nativeElement.addEventListener(
        'touchcancel',
        this.onTouchEnd.bind(this),
      );
    });
  }

  public ngOnDestroy(): void {
    this.removeTouchMoveEventListener();
  }

  public open(): void {
    this.setState(SidenavState.Open);
  }

  public onBackdropClicked(): void {
    this.setState(SidenavState.Closed);
  }

  private onTouchStart(event: TouchEvent): void {
    this.ngZone.run(() => {
      this.startTouch = event;
    });

    this.addTouchMoveEventListener();
  }

  private onTouchMove(event: TouchEvent): void {
    const start = this.startTouch.changedTouches[0];
    const move = event.changedTouches[0];

    this.ngZone.run(() => {
      this.xDiff = move.pageX - start.pageX;
    });

    if (
      this.state === SidenavState.Indeterminate ||
      (this.state === SidenavState.Closed && this.xDiff > 0) ||
      (this.state === SidenavState.Open && this.xDiff < 0)
    ) {
      if (this.state !== SidenavState.Indeterminate) {
        this.ngZone.run(() => {
          this.setState(SidenavState.Indeterminate);
        });
      }

      if (
        this.previousState === SidenavState.Open &&
        this.xDiff < 0 &&
        this.xDiff >= -this.width
      ) {
        this.setXPos(this.xDiff);
      } else if (
        this.previousState === SidenavState.Closed &&
        this.xDiff > 0 &&
        this.xDiff <= this.width
      ) {
        this.setXPos(-this.width + this.xDiff);
      }
    }
  }

  private onTouchEnd(): void {
    this.removeTouchMoveEventListener();

    if (this.previousState === SidenavState.Open) {
      this.setState(
        this.xDiff > -this.width * this.stateChangeToleranceRatio
          ? SidenavState.Open
          : SidenavState.Closed,
      );
    } else if (this.previousState === SidenavState.Closed) {
      this.setState(
        this.xDiff < this.width * this.stateChangeToleranceRatio
          ? SidenavState.Closed
          : SidenavState.Open,
      );
    }
  }

  private setXPos(xPos: number): void {
    this.ngZone.runOutsideAngular(() => {
      const backdropOpacity = scale(
        this.width - Math.abs(xPos),
        0,
        this.width,
        0,
        0.6,
      );

      requestAnimationFrame(() => {
        this.renderer.setStyle(
          this.sidenavElement.nativeElement,
          'transform',
          `translate3d(${xPos}px, 0, 0)`,
        );

        if (this.hasBackdrop) {
          this.renderer.setStyle(
            this.sidenavBackdropElement.nativeElement,
            'opacity',
            backdropOpacity,
          );
        }
      });
    });
  }

  private setState(state: SidenavState): void {
    this.ngZone.run(() => {
      this.previousState = this.state;
      this.state = state;

      this.changeDetectorRef.markForCheck();
    });
  }

  private addTouchMoveEventListener(): void {
    this.ngZone.runOutsideAngular(() => {
      this.sidenavElement.nativeElement.addEventListener(
        'touchmove',
        this.onTouchMove.bind(this),
      );
    });
  }

  private removeTouchMoveEventListener(): void {
    this.sidenavElement.nativeElement.removeEventListener(
      'touchmove',
      this.onTouchMove,
    );
  }
}

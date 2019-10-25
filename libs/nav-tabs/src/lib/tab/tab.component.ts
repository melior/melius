import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  Input,
} from '@angular/core';

@Component({
  selector: 'melius-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent {
  @Input()
  public label?: string;

  @ViewChild('tab', { static: true })
  public readonly tabElement: ElementRef;
}

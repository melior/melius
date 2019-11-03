import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'melius-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('elem', { static: true })
  public elemRef: ElementRef<HTMLElement>;

  public ngAfterViewInit(): void {}
}

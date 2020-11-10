import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'chart-donut',
  templateUrl: 'chart-donut.component.html',
  styleUrls: ['chart-donut.component.scss'],
})
export class ChartDonutComponent implements OnInit {
  @Input() percentage = 25;
  @Input() width = '35px';
  @Input() font = '12px';
  @Input() barWeight = '4px';

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.setProperty(
      '--percentage',
      this.percentage
    );
    this.elementRef.nativeElement.style.setProperty('--width', this.width);
    this.elementRef.nativeElement.style.setProperty(
      '--font-inside-size',
      this.font
    );
    this.elementRef.nativeElement.style.setProperty(
      '--margin-inside',
      this.barWeight
    );
  }
}

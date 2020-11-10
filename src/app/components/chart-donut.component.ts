import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'chart-donut',
  templateUrl: 'chart-donut.component.html',
  styleUrls: ['chart-donut.component.scss'],
})
export class ChartDonutComponent implements OnInit {
  @Input() percentage;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.setProperty(
      '--percentage',
      this.percentage
    );
  }
}

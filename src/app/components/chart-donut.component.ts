import { Component, Input } from '@angular/core';

@Component({
  selector: 'chart-donut',
  templateUrl: 'chart-donut.component.html',
  styleUrls: ['chart-donut.component.scss']
})

export class ChartDonutComponent {
  @Input() percentage: number;
}

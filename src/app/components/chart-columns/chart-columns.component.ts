import { Component, Input, OnInit } from '@angular/core';
import { ChartColumn } from './chart-column/chart-column.model';

@Component({
  selector: 'chart-columns',
  templateUrl: './chart-columns.component.html',
  styleUrls: ['./chart-columns.component.scss'],
})
export class ChartColumnsComponent implements OnInit {
  @Input() columns: ChartColumn[];

  constructor() {}

  ngOnInit(): void {}
}

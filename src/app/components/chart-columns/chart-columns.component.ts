import { Component, Input, OnInit } from '@angular/core';
import { Column } from './chart-column/chart-column.component';

@Component({
  selector: 'chart-columns',
  templateUrl: './chart-columns.component.html',
  styleUrls: ['./chart-columns.component.scss'],
})
export class ChartColumnsComponent implements OnInit {
  @Input() columns: Column[];

  constructor() {}

  ngOnInit(): void {}
}

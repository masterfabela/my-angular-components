import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ChartColumn } from './chart-column.model';
@Component({
  selector: 'chart-column',
  templateUrl: './chart-column.component.html',
  styleUrls: ['./chart-column.component.scss'],
})
export class ChartColumnComponent implements OnInit {
  @Input() columnData: ChartColumn = {};

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    if (this.columnData.percentage) {
      this.elementRef.nativeElement.style.setProperty(
        '--percentage',
        this.columnData.percentage + '%'
      );
    }
    if (this.columnData.color) {
      this.elementRef.nativeElement.style.setProperty(
        '--color',
        this.columnData.color
      );
    }
  }
}

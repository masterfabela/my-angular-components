import { Component, ElementRef, Input, OnInit } from '@angular/core';

export interface Column {
  color?: string;
  percentage?: number;
  name?: string;
}

@Component({
  selector: 'chart-column',
  templateUrl: './chart-column.component.html',
  styleUrls: ['./chart-column.component.scss'],
})
export class ChartColumnComponent implements OnInit {
  @Input() columnData: Column = {};

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

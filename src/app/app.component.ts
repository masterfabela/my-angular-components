import { Component } from '@angular/core';
import { ChartColumn } from './components/chart-columns/chart-column/chart-column.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-angular-components';

  newColums = [
    { percentage: 50 },
    { percentage: 40 },
    { percentage: 60 },
    { percentage: 55 },
    { percentage: 20 },
    { percentage: 69, color: 'red' },
    { percentage: 20, color: 'purple' },
    { percentage: 40 },
    { percentage: 40 },
    { percentage: 100 },
    { percentage: 20 },
  ];

  columnsDataChart: ChartColumn[] = this.asignColorsByPercentage(
    this.newColums
  );

  asignColorsByPercentage(columns: ChartColumn[]): ChartColumn[] {
    return columns.map((column) => {
      if (column.percentage > 70) {
        column.color = 'green';
      } else {
        column.color = 'red';
      }
      return column;
    });
  }
}

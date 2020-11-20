import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartColumnComponent } from './chart-column/chart-column.component';
import { ChartColumnsComponent } from './chart-columns.component';

@NgModule({
  declarations: [ChartColumnsComponent, ChartColumnComponent],
  imports: [CommonModule],
  exports: [ChartColumnsComponent],
})
export class ChartColumnsModule {}

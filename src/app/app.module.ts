import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartColumnsModule } from './components/chart-columns/chart-columns.module';
import { ChartDonutModule } from './components/chart-donut/chart-donut.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ChartDonutModule, ChartColumnsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

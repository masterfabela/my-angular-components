import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartColumnsModule } from './components/chart-columns/chart-columns.module';
import { ChartDonutModule } from './components/chart-donut/chart-donut.module';
import { HelpDialogModule } from './components/help-popup/help-dialog.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ChartDonutModule, ChartColumnsModule, MatButtonModule, HelpDialogModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartDonutModule } from './components/chart-donut.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartDonutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

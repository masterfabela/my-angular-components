import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ChartColumnsModule } from './components/chart-columns/chart-columns.module';
import { ChartDonutModule } from './components/chart-donut/chart-donut.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [ChartDonutModule, ChartColumnsModule],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-angular-components'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-angular-components');
  });
});

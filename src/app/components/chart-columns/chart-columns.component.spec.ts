import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartColumnsComponent } from './chart-columns.component';
import { ChartColumnsModule } from './chart-columns.module';

describe('ChartColumnsComponent', () => {
  let component: ChartColumnsComponent;
  let fixture: ComponentFixture<ChartColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ChartColumnsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

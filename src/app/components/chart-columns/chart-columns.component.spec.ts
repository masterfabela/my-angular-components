import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartColumnComponent } from './chart-column/chart-column.component';
import { ChartColumnsComponent } from './chart-columns.component';

describe('ChartColumnsComponent', () => {
  let component: ChartColumnsComponent;
  let fixture: ComponentFixture<ChartColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChartColumnComponent],
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

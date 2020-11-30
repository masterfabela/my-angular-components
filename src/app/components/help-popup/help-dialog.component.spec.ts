import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HelpDialogComponent } from './help-dialog.component';
import { HelpDialogModule } from './help-dialog.module';


describe('HelpDialogComponent', () => {
  let component: HelpDialogComponent;
  let fixture: ComponentFixture<HelpDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({imports: [HelpDialogModule]})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

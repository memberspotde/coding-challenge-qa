import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendFeatureHomeComponent } from './frontend-feature-home.component';

describe('FrontendFeatureHomeComponent', () => {
  let component: FrontendFeatureHomeComponent;
  let fixture: ComponentFixture<FrontendFeatureHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendFeatureHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendFeatureHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

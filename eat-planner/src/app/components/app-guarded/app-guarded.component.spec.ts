import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGuardedComponent } from './app-guarded.component';

describe('AppGuardedComponent', () => {
  let component: AppGuardedComponent;
  let fixture: ComponentFixture<AppGuardedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppGuardedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppGuardedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

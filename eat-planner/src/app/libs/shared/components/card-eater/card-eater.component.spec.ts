import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEaterComponent } from './card-eater.component';

describe('CardEaterComponent', () => {
  let component: CardEaterComponent;
  let fixture: ComponentFixture<CardEaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardEaterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardEaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

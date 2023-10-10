import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroducirComponent } from './introducir.component';

describe('IntroducirComponent', () => {
  let component: IntroducirComponent;
  let fixture: ComponentFixture<IntroducirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntroducirComponent]
    });
    fixture = TestBed.createComponent(IntroducirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

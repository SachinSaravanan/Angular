import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SachinnavigateComponent } from './sachinnavigate.component';

describe('SachinnavigateComponent', () => {
  let component: SachinnavigateComponent;
  let fixture: ComponentFixture<SachinnavigateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SachinnavigateComponent]
    });
    fixture = TestBed.createComponent(SachinnavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

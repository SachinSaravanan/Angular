import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SachincomponentComponent } from './chicken.component';

describe('SachincomponentComponent', () => {
  let component: SachincomponentComponent;
  let fixture: ComponentFixture<SachincomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SachincomponentComponent]
    });
    fixture = TestBed.createComponent(SachincomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

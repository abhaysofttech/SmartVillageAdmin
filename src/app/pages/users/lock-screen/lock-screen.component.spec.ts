import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockScreenComponent } from './lock-screen';

describe('LockScreenComponent', () => {
  let component: LockScreenComponent;
  let fixture: ComponentFixture<LockScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockScreenComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

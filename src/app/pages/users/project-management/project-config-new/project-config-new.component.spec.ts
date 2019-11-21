import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectConfigNewComponent } from './project-config-new.component';

describe('ProjectConfigNewComponent', () => {
  let component: ProjectConfigNewComponent;
  let fixture: ComponentFixture<ProjectConfigNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectConfigNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectConfigNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

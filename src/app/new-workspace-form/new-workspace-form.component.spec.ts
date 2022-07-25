import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWorkspaceFormComponent } from './new-workspace-form.component';

describe('NewWorkspaceFormComponent', () => {
  let component: NewWorkspaceFormComponent;
  let fixture: ComponentFixture<NewWorkspaceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWorkspaceFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewWorkspaceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

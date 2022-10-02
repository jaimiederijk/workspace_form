import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWorkspaceFormModeldrivenComponent } from './new-workspace-form-modeldriven.component';

describe('NewWorkspaceFormModeldrivenComponent', () => {
  let component: NewWorkspaceFormModeldrivenComponent;
  let fixture: ComponentFixture<NewWorkspaceFormModeldrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWorkspaceFormModeldrivenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewWorkspaceFormModeldrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

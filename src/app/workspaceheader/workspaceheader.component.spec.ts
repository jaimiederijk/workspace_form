import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceheaderComponent } from './workspaceheader.component';

describe('WorkspaceheaderComponent', () => {
  let component: WorkspaceheaderComponent;
  let fixture: ComponentFixture<WorkspaceheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkspaceheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkspaceheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

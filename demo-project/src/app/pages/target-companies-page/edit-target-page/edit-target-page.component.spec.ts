import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTargetPageComponent } from './edit-target-page.component';

describe('EditTargetPageComponent', () => {
  let component: EditTargetPageComponent;
  let fixture: ComponentFixture<EditTargetPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTargetPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTargetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetListPageComponent } from './target-list-page.component';

describe('TargetListPageComponent', () => {
  let component: TargetListPageComponent;
  let fixture: ComponentFixture<TargetListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

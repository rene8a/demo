import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetCompaniesPageComponent } from './target-companies-page.component';

describe('TargetCompaniesPageComponent', () => {
  let component: TargetCompaniesPageComponent;
  let fixture: ComponentFixture<TargetCompaniesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetCompaniesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetCompaniesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBuildsComponent } from './new-builds.component';

describe('NewBuildsComponent', () => {
  let component: NewBuildsComponent;
  let fixture: ComponentFixture<NewBuildsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBuildsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBuildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

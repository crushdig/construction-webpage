import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseExtensionsComponent } from './house-extensions.component';

describe('HouseExtensionsComponent', () => {
  let component: HouseExtensionsComponent;
  let fixture: ComponentFixture<HouseExtensionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseExtensionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseExtensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

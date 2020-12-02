import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularSaerchListComponent } from './popular-saerch-list.component';

describe('PopularSaerchListComponent', () => {
  let component: PopularSaerchListComponent;
  let fixture: ComponentFixture<PopularSaerchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularSaerchListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularSaerchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

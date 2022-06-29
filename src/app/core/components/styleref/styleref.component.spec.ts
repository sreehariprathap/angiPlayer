import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylerefComponent } from './styleref.component';

describe('StylerefComponent', () => {
  let component: StylerefComponent;
  let fixture: ComponentFixture<StylerefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StylerefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StylerefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

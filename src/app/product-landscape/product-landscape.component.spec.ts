import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLandscapeComponent } from './product-landscape.component';

describe('ProductLandscapeComponent', () => {
  let component: ProductLandscapeComponent;
  let fixture: ComponentFixture<ProductLandscapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLandscapeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLandscapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

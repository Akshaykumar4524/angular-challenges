import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDocComponent } from './service-doc.component';

describe('ServiceDocComponent', () => {
  let component: ServiceDocComponent;
  let fixture: ComponentFixture<ServiceDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

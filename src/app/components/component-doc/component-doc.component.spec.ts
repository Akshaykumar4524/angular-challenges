import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDocComponent } from './component-doc.component';

describe('ComponentDocComponent', () => {
  let component: ComponentDocComponent;
  let fixture: ComponentFixture<ComponentDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

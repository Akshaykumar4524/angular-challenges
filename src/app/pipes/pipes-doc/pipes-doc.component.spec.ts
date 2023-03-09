import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesDocComponent } from './pipes-doc.component';

describe('PipesDocComponent', () => {
  let component: PipesDocComponent;
  let fixture: ComponentFixture<PipesDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

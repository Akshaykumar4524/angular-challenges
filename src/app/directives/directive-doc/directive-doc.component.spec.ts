import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveDocComponent } from './directive-doc.component';

describe('DirectiveDocComponent', () => {
  let component: DirectiveDocComponent;
  let fixture: ComponentFixture<DirectiveDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

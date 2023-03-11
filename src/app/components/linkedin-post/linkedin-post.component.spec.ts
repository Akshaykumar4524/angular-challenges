import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinPostComponent } from './linkedin-post.component';

describe('LinkedinPostComponent', () => {
  let component: LinkedinPostComponent;
  let fixture: ComponentFixture<LinkedinPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedinPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedinPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

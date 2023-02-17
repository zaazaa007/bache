import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToileComponent } from './toile.component';

describe('ToileComponent', () => {
  let component: ToileComponent;
  let fixture: ComponentFixture<ToileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

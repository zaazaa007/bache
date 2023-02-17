import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParassoleComponent } from './parassole.component';

describe('ParassoleComponent', () => {
  let component: ParassoleComponent;
  let fixture: ComponentFixture<ParassoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParassoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParassoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

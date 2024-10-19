import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRowsComponent } from './create-rows.component';

describe('CreateRowsComponent', () => {
  let component: CreateRowsComponent;
  let fixture: ComponentFixture<CreateRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRowsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

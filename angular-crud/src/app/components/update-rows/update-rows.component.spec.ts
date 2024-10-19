import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRowsComponent } from './update-rows.component';

describe('UpdateRowsComponent', () => {
  let component: UpdateRowsComponent;
  let fixture: ComponentFixture<UpdateRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateRowsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

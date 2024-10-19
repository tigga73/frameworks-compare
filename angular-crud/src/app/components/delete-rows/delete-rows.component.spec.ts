import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRowsComponent } from './delete-rows.component';

describe('DeleteRowsComponent', () => {
  let component: DeleteRowsComponent;
  let fixture: ComponentFixture<DeleteRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteRowsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

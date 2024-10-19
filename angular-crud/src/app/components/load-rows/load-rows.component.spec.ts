import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadRowsComponent } from './load-rows.component';

describe('LoadRowsComponent', () => {
  let component: LoadRowsComponent;
  let fixture: ComponentFixture<LoadRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadRowsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

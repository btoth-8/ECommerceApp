import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizeDialogComponent } from './finalize-dialog.component';

describe('FinalizeDialogComponent', () => {
  let component: FinalizeDialogComponent;
  let fixture: ComponentFixture<FinalizeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalizeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

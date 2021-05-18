import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPandaButtonComponent } from './add-panda-button.component';

describe('AddPandaButtonComponent', () => {
  let component: AddPandaButtonComponent;
  let fixture: ComponentFixture<AddPandaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPandaButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPandaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetNathanComponent } from './character-sheet-nathan.component';

describe('CharacterSheetNathanComponent', () => {
  let component: CharacterSheetNathanComponent;
  let fixture: ComponentFixture<CharacterSheetNathanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterSheetNathanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSheetNathanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

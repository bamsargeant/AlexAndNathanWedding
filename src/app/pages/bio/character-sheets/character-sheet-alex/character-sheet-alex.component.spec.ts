import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetAlexComponent } from './character-sheet-alex.component';

describe('CharacterSheetAlexComponent', () => {
  let component: CharacterSheetAlexComponent;
  let fixture: ComponentFixture<CharacterSheetAlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterSheetAlexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSheetAlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

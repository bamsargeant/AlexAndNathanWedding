import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetTemplateComponent } from './character-sheet-template.component';

describe('CharacterSheetTemplateComponent', () => {
  let component: CharacterSheetTemplateComponent;
  let fixture: ComponentFixture<CharacterSheetTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterSheetTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSheetTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

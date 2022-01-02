import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-sheet-template',
  templateUrl: './character-sheet-template.component.html',
  styleUrls: ['./character-sheet-template.component.sass']
})
export class CharacterSheetTemplateComponent implements OnInit {

  @Input() characterName: string = '\u00A0';
  @Input() className: string = '\u00A0';
  @Input() subclassName: string = '\u00A0';

  @Input() playerName: string = '\u00A0';
  @Input() raceName: string = '\u00A0';
  @Input() alignmentName: string = '\u00A0';

  @Input() age: string = '\u00A0';
  @Input() eyes: string = '\u00A0';
  @Input() skin: string = '\u00A0';

  @Input() weight: string = '\u00A0';
  @Input() height: string = '\u00A0';
  @Input() hair: string = '\u00A0';

  constructor() { }

  ngOnInit(): void {
  }

}

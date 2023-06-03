import { Component, OnInit } from '@angular/core';
import { IconService } from './services/icon.service';
import { FieldType } from './types/field.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app-icons';
  icon: string = 'soc-icon';

  allFieldTypes: FieldType[] = [];

  field: FieldType = {} as FieldType;

  constructor(private _iconService: IconService) {
    this.field = {
      value: this.icon,
      viewValue: 'Text',
    };
    this.allFieldTypes = [
      { value: this.icon, viewValue: 'Text' },
      { value: this.icon, viewValue: 'Number' },
      { value: this.icon, viewValue: 'Date' },
      // Add more field types here as needed
    ];
  }
  ngOnInit(): void {
    this._iconService.registerIcons([this.icon]);
  }
}

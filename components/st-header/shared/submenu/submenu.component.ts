import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { StSubMenuModel } from '../st-header.model';

@Component({
   selector: 'submenu',
   styles: [require('./submenu.component.scss')],
   template: require('./submenu.component.html'),
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubmenuComponent {

   @Input() submenu: Array<StSubMenuModel> = [];
   @Input() qaTag: string;
   @Input() offset: number = 0;

   public getOffset(): Object {
      return {
         'margin-left': `${this.offset}px`
      };
   }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LazyLoadEvent, MenuItem } from 'primeng/api';
import { Column, Columntype } from 'src/app/core/Models/Column';
import { statusEnum } from 'src/app/core/Models/pageType';

@Component({
  selector: 'app-shared-grid',
  templateUrl: './shared-grid.component.html',
  styleUrls: ['./shared-grid.component.scss'],
})
export class SharedGridComponent {
  Columntypelst = Columntype;
  @Input() dataList: any[] = [];
  @Input() input: any = {
    sorting: '',
    maxResultCount: 10,
    search: '',
    skipCount: 0,
  };
  @Input() columns: Column[];
  @Input() Menuitems: MenuItem[];
  @Input() MenuActions: MenuItem[];

  @Input() exceededLimitNumber: number=0;
  @Output() Load: EventEmitter<LazyLoadEvent | any> = new EventEmitter();
  @Output() menuItemOpened: EventEmitter<LazyLoadEvent | any> = new EventEmitter();
  @Output() MenuActionsOpened: EventEmitter<LazyLoadEvent | any> = new EventEmitter();

  
  @Output() ActionOpened: EventEmitter<LazyLoadEvent | any> = new EventEmitter();
  @Output() paginatorChange: EventEmitter<LazyLoadEvent | any> = new EventEmitter();

  @Input()  first: number = 0;
  @Input()   rows: number = 10;

  onLazyLoad(event: LazyLoadEvent | any) {
    this.Load.emit(event);
  }
  openAction(event, rowData) {
    this.ActionOpened.emit(rowData);
    
  }
  toggleMenu(menu, event, rowData) {
    this.menuItemOpened.emit(rowData);
    menu.toggle(event);
  }
  toggleActionStatus(menu, event, rowData) {
    this.MenuActionsOpened.emit(rowData);
    menu.toggle(event);
  }
  @Input() getStatusSeverity

  onPageChange(event) {
    this.paginatorChange.emit(event);
  }

}

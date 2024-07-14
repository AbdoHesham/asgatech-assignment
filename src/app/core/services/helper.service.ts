import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PageType } from '../Models/pageType';

@Injectable({
  providedIn: 'root',
})
export class FormHelperService {
  constructor(private router: Router, public dialogService: DialogService) {}

  openPopup(
    headerTitle,
    Component,
    pageType: PageType = PageType.add,
    Id?
  ): DynamicDialogRef {
    if (Id == undefined) pageType = PageType.add;
    // if (pageType == PageType.edit) headerTitle = this.localizationService.instant('::Edit confirm setup' , this.subSpecialityName) ;
    // else if (pageType == PageType.view) headerTitle = this.localizationService.instant('::View Subspecialty') ;

    let ref: DynamicDialogRef = this.dialogService.open(Component, {
      draggable: true,
      header: headerTitle,
      width: '40vw',
      appendTo: 'body',
      data: { Id: Id, PageType: PageType },
    });
    return ref;
  }
}

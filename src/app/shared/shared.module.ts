import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { JsonPipe } from '@angular/common';

import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { ConnectionLostComponent } from './components/connection-lost/connection-lost.component';

import { ToastModule } from 'primeng/toast';
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { BlockUIModule } from 'primeng/blockui';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { TerminalModule } from 'primeng/terminal';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TimelineModule } from 'primeng/timeline';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeSelectModule } from 'primeng/treeselect';
import { TreeTableModule } from 'primeng/treetable';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DataViewModule } from 'primeng/dataview';
import { DeferModule } from 'primeng/defer';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DockModule } from 'primeng/dock';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { FocusTrapModule } from 'primeng/focustrap';
import { GalleriaModule } from 'primeng/galleria';
import { InplaceModule } from 'primeng/inplace';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { KnobModule } from 'primeng/knob';
import { ListboxModule } from 'primeng/listbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { SkeletonModule } from 'primeng/skeleton';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderModule } from 'primeng/slider';
import { SpeedDialModule } from 'primeng/speeddial';
import { SpinnerModule } from 'primeng/spinner';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SplitterModule } from 'primeng/splitter';
import { StepsModule } from 'primeng/steps';
import { StyleClassModule } from 'primeng/styleclass';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { ImageModule } from 'primeng/image';
import { MessagesModule } from 'primeng/messages';
import { HeaderInterceptor } from '../core/Interceptor/header.interceptor';
import { SharedGridComponent } from './components/shared-grid/shared-grid.component';
import { ErrorTooltipService } from './utils/ErrorMsgs';
import { EditorModule } from 'primeng/editor';
import { NgxPermissionsConfigurationStore, NgxPermissionsModule, NgxPermissionsStore, NgxRolesStore } from 'ngx-permissions';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
const PrimeComponent = [
  EditorModule,

  ToastModule,
  TabViewModule,
  AccordionModule,
  AutoCompleteModule,
  AvatarModule,
  AvatarGroupModule,
  BadgeModule,
  BlockUIModule,
  BreadcrumbModule,
  ButtonModule,
  CalendarModule,
  //CaptchaModule,
  CardModule,
  CarouselModule,
  CascadeSelectModule,
  //ChartModule,
  CheckboxModule,
  ChipModule,
  ChipsModule,
  //CodeHighlighterModule,
  ColorPickerModule,
  ConfirmDialogModule,
  ConfirmPopupModule,
  ContextMenuModule,
  DataViewModule,
  DeferModule,
  DialogModule,
  DividerModule,
  DockModule,
  //DragDropModule,
  DropdownModule,
  DynamicDialogModule,
  //EditorModule,
  FieldsetModule,
  FileUploadModule,
  FocusTrapModule,
  //FullCalendarModule,
  GalleriaModule,
  //GMapModule,
  InplaceModule,
  InputMaskModule,
  InputNumberModule,
  InputSwitchModule,
  InputTextModule,
  InputTextareaModule,
  KeyFilterModule,
  KnobModule,
  //LightboxModule,
  ListboxModule,
  MegaMenuModule,
  MenuModule,
  MenubarModule,
  MessageModule,
  MultiSelectModule,
  //OrderListModule,
  OrganizationChartModule,
  OverlayPanelModule,
  PaginatorModule,
  PanelModule,
  PanelMenuModule,
  PasswordModule,
  //PickListModule,
  ProgressBarModule,
  ProgressSpinnerModule,
  RadioButtonModule,
  RatingModule,
  RippleModule,
  ScrollPanelModule,
  ScrollTopModule,
  SelectButtonModule,
  SidebarModule,
  SkeletonModule,
  SlideMenuModule,
  SliderModule,
  SpeedDialModule,
  SpinnerModule,
  SplitButtonModule,
  SplitterModule,
  StepsModule,
  StyleClassModule,
  TableModule,
  TabMenuModule,
  TagModule,
  TerminalModule,
  TieredMenuModule,
  TimelineModule,
  ToggleButtonModule,
  ToolbarModule,
  TooltipModule,
  TreeModule,
  TreeSelectModule,
  TreeTableModule,
  TriStateCheckboxModule,
  VirtualScrollerModule,
  ImageModule,
  MessagesModule,
];
@NgModule({
  declarations: [
    ConnectionLostComponent,
    SharedGridComponent,
    PageNotFoundComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    PrimeComponent,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    HttpClientModule, // Ensure HttpClientModule is imported for TranslateHttpLoader
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
      isolate: false,
    }),
    NgxPermissionsModule.forChild(),
    // NgxPermissionsModule.forRoot(),
  ],
  exports: [
    PrimeComponent,
    SharedGridComponent,
    ConnectionLostComponent,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    ConnectionLostComponent,
    NgxPermissionsModule,
    TranslateModule,
    PageNotFoundComponent,
    HeaderComponent,
  ],
  providers: [
    ErrorTooltipService,
    NgxPermissionsStore,
    TranslateService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,
    },
    NgxPermissionsConfigurationStore,
    NgxRolesStore 
  ],
})
export class SharedModule {}

// required for AOT compilation
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
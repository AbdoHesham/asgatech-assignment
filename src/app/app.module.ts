import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { authGuard } from './core/guards/auth.guard';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { NativeScriptCommonModule } from '@nativescript/angular';
// import { WebViewModule } from '@nativescript-community/ui-webview/angular';

@NgModule({
  declarations: [AppComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    SharedModule,
    BrowserAnimationsModule,
    SpinnerComponent,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
      isolate: false,
    }),
    // NativeScriptCommonModule,
    // WebViewModule
  ],
  providers: [
    MessageService,
    ConfirmationService,
    DialogService,
    authGuard ,

    // TranslateService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
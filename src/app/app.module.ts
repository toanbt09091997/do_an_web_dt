import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";
import { AuthComponent } from './auth/auth.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslationService} from "./service-common/translate.service";
import {ToastrModule} from "ngx-toastr";
import {OAuthModule} from "angular-oauth2-oidc";
import { ChipCommonComponent } from './common/chip-common/chip-common.component';
import {MaterialModule} from "./module-common/material.module";
import {AdminPageComponent} from "./admin/admin-page/admin-page.component";
import {ColorPickerModule} from "ngx-color-picker";
import { AppSideNavComponent } from './common/app-side-nav/app-side-nav.component';

export const createTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
};
export const toastrConfig = {
  positionClass: 'toast-top-right',
  maxOpened: 3,
  autoDismiss: true,
  timeOut: 3000,
};
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AdminPageComponent,
    ChipCommonComponent,
    AppSideNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    RouterModule.forRoot(routes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }}),
    ToastrModule.forRoot(toastrConfig),
    MaterialModule,
    ColorPickerModule,
  ],
  exports: [ChipCommonComponent,MaterialModule,AppSideNavComponent],
  providers: [TranslationService],
  bootstrap: [AppComponent]
})

export class AppModule { }

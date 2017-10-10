import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  JigsawModule, JigsawRootModule, PopupService, TableCellCheckboxRenderer,
  TableHeadCheckboxRenderer
} from '@rdkmaster/jigsaw';

import {AppComponent} from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path: '**',
      component: AppComponent
    }]),
    TranslateModule.forRoot({}),
    JigsawModule,
    JigsawRootModule
  ],
  providers: [PopupService],
  bootstrap: [AppComponent],
  entryComponents: [
    TableHeadCheckboxRenderer, TableCellCheckboxRenderer
  ]
})
export class AppModule {
}

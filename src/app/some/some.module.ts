import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TestComponent} from '../test/test.component';
import {NbLayoutModule, NbSidebarModule, NbSidebarService} from '@nebular/theme';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {Router} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    NbLayoutModule,
    NbSidebarModule
  ],
  providers: [
    NbSidebarService
  ],
  exports: [
    TestComponent
  ],
  declarations: [
    TestComponent
  ]
})
export class SomeModule { }

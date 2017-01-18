import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyNewComponent } from './my-new/my-new.component';
import { HttpTestComponent } from './http-test/http-test.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponent,
    HttpTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

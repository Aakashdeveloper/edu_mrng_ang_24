import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { FormsService } from './forms/forms.service';
import { AfterSubmitComponent } from './after-submit/after-submit.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    AfterSubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    FormsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

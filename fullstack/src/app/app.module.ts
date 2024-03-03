import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'
import { HeaderComponent } from './Header/header.component';

@NgModule({

    // All the component and pipe
    declarations:[
        AppComponent,
        HeaderComponent
    ],

    // All modules
    imports:[
        BrowserModule
    ],

    // All the services
    providers:[],

    // only and only main component
    bootstrap:[AppComponent]
  
})

export class AppModule{}
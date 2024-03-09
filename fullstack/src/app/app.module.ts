import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'
import { HeaderComponent } from './Header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './home/Search/search.component';
import { QuickSearchComponent } from './home/QuickSearch/quickSearch.component';

@NgModule({

    // All the component and pipe
    declarations:[
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        SearchComponent,
        QuickSearchComponent
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
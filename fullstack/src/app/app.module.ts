import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { HeaderComponent } from './Header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './home/Search/search.component';
import { QuickSearchComponent } from './home/QuickSearch/quickSearch.component';
import { MyUpperPipe } from './pipes/myupper.pipe';
import { HomeService } from './services/home.service';
import { ListingComponent } from './listing/listing.component';
import { AppRoutingModule } from './app-routing.modules';
import { ListingService } from './services/listing.service';

@NgModule({

    // All the component and pipe
    declarations:[
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        SearchComponent,
        QuickSearchComponent,
        MyUpperPipe,
        ListingComponent
    ],

    // All modules
    imports:[
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
    ],

    // All the services
    providers:[
        HomeService,
        ListingService
    ],

    // only and only main component
    bootstrap:[AppComponent]
  
})

export class AppModule{}
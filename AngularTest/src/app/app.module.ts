import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component'
import { HeaderComponent } from './Header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.modules';
import { DetailsService } from './services/details.service';
import { NotFoundComponent } from './notfound/notfound.component';
import { HomeModule } from './home/home.module';
import { ListingModule } from './listing/listing.module';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from '../../../fullstack/src/app/login/login.component';

@NgModule({

    // All the component and pipe
    declarations:[
        AppComponent,
        HeaderComponent,
        FooterComponent,
        DetailsComponent,
        NotFoundComponent,
        LoginComponent
    ],

    // All modules
    imports:[
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        HomeModule,
        ListingModule
    ],

    // All the services
    providers:[
        DetailsService
    ],

    // only and only main component
    bootstrap:[AppComponent]
  
})

export class AppModule{}
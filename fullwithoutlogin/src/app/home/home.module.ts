import { NgModule } from '@angular/core';
import { HomeService } from '../services/home.service';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { QuickSearchComponent } from './QuickSearch/quickSearch.component';
import { SearchComponent } from './Search/search.component';

@NgModule({
    declarations:[
        HomeComponent,
        SearchComponent,
        QuickSearchComponent
    ],
    imports:[
        SharedModule
    ],
    providers:[
        HomeService
    ]

})

export class HomeModule{}
import { NgModule } from '@angular/core';
import { DetailsComponent } from '../details/details.component';
import { CostFilter } from '../filters/costFilter.component';
import { CuisineFilter } from '../filters/cuisineFilter.component';
import { RestSearchFilter } from '../pipes/searchFilter';
import { ListingService } from '../services/listing.service';

import { SharedModule } from '../shared/shared.module';
import { ListingComponent } from './listing.component';

@NgModule({
    declarations:[
        ListingComponent,
        RestSearchFilter,
        CuisineFilter,
        CostFilter,
    ],
    imports:[
        SharedModule
    ],
    providers:[
        ListingService
    ]

})

export class ListingModule{}
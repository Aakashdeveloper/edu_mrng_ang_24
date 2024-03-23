import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { NotFoundComponent } from './notfound/notfound.component';

const routes: Routes = [
    {path:'details',component:DetailsComponent},
    {path:'listing/:id',component:ListingComponent},
    {path:'',component:HomeComponent},
    {path:'**',pathMatch:'full',component:NotFoundComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    providers:[],
    exports:[RouterModule]
})

export class AppRoutingModule{}
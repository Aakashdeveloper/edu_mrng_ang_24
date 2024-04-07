import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.modules';
import { MyUpperPipe } from '../pipes/myupper.pipe';


@NgModule({
    declarations:[
        MyUpperPipe,
    ],
    imports:[
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        CommonModule
    ],
    exports:[
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        CommonModule,
        MyUpperPipe
    ]

})

export class SharedModule{}
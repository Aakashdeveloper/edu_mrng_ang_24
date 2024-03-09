import {Component} from '@angular/core';
import { ICity } from '../../model/location.model';

@Component({
    selector:'app-search',
    templateUrl:'./search.component.html',
    styleUrls:['./search.component.css']
})

export class SearchComponent{
    title:string = "Find Best Place Near You";

    cities:ICity[]= [
        {
          "_id": "6187738a62a1816f8858634e",
          "location_id": 4,
          "location_name": "Bibvewadi, Pune",
          "state_id": 2,
          "state": "Maharashtra",
          "country_name": "India"
        },
        {
          "_id": "6187738a62a1816f8858634d",
          "location_id": 1,
          "location_name": "Ashok Vihar Phase 3, New Delhi",
          "state_id": 1,
          "state": "Delhi",
          "country_name": "India"
        },
        {
          "_id": "6187738a62a1816f8858634f",
          "location_id": 8,
          "location_name": "Jeevan Bhima Nagar, Bangalore",
          "state_id": 3,
          "state": "Karnataka",
          "country_name": "India"
        },
        {
          "_id": "6187738a62a1816f88586350",
          "location_id": 13,
          "location_name": "Sector 13, Chandigarh",
          "state_id": 4,
          "state": "Punjab",
          "country_name": "India",
        }
      ]
}
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HomeService } from './home.service';
import { ICity } from '../model/location.model';
import { IRest } from '../model/rest.model';
import { IMeal } from '../model/meal.model';
import { environment } from 'src/environments/environment';

describe('HomeService',() => {
    let service: HomeService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule],
            providers:[HomeService]
        });
        service = TestBed.inject(HomeService);
        httpMock = TestBed.inject(HttpTestingController)
    });

    afterEach(() => {
        httpMock.verify()
    });


    it('Should be created',() => {
        expect(service).toBeTruthy()
    })


    it('Should retrieve city data',() => {
        const dummyCities: ICity[] = [
            {
                _id:'1',
                location_id: 1,
                location_name: 'loc1',
                state_id: 1,
                state: 'state1',
                country_name: 'cnt1'
            },{
                _id:'2',
                location_id: 2,
                location_name: 'loc2',
                state_id: 2,
                state: 'state2',
                country_name: 'cnt2'
            }
        ]

        service.getCityData().subscribe(cities => {
            expect(cities.length).toBe(2)
            expect(cities).toEqual(dummyCities)
        });

        const request = httpMock.expectOne(`${environment.apiUrl}/location`)
        expect(request.request.method).toBe('GET')
        request.flush(dummyCities)
    })
})
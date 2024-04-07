import {ICity} from './location.model';

describe('ICIty interface' ,() => {
    it('should have the correct properties',() => {
        const city:ICity = {
            
                _id:'1',
                location_id: 1,
                location_name: 'loc1',
                state_id: 1,
                state: 'state1',
                country_name: 'cnt1'
            
        }

        expect(city._id).toBeDefined()   
        expect(city.location_id).toBeDefined()   
        expect(city.location_name).toBeDefined()   
        expect(city.state_id).toBeDefined()   
        expect(city.state).toBeDefined()   
        expect(city.country_name).toBeDefined()   
    })
})
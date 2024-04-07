import { MyUpperPipe } from './myupper.pipe';

describe('TestMyUpper',() => {
    let pipe : MyUpperPipe;

    beforeEach(() => {
        pipe = new MyUpperPipe()
    })

    it('Change hello to HELLO',() => {
        const transformedValue = pipe.transform('hello','Upper');
        expect(transformedValue).toEqual('HELLO')
    })

    it('Change hello to hello',() => {
        const transformedValue = pipe.transform('hello','other');
        expect(transformedValue).toEqual('hello')
    })
})


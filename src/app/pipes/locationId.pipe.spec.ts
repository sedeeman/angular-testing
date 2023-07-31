import { LocationIdPipe } from './locationId.pipe';

describe('IdGeneratePipe', () => {
    it('create an instance', () => {
        const pipe = new LocationIdPipe();
        expect(pipe).toBeTruthy();
    });
});

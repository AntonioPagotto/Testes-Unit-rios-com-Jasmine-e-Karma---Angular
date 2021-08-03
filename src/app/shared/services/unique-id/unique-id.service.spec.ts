import { UniqueIdService } from "./unique-id.service";

describe(UniqueIdService.name, () => {
    // tudo o que quero testar

    let service: UniqueIdService = null;

    beforeEach(() => {
        service = new UniqueIdService();
    });

    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
    should generate id when called with prefix`, () => {
        const id = service.generateUniqueIdWithPrefix('app');
        expect(id.startsWith('app-')).toBeTrue();
    });

    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
    should not generate duplate IDs when called multiple times`, () => {
        const ids = new Set();
        for (let i = 0; i < 50; i++) {
            ids.add(service.generateUniqueIdWithPrefix('app'));
        }
        expect(ids.size).toBe(50);
    });

    it(`#${UniqueIdService.prototype.getNumberOfGenerateUniqueIds.name} 
    should return the number of generated ids when called`, () => {
        service.generateUniqueIdWithPrefix('app');
        service.generateUniqueIdWithPrefix('app');
        expect(service.getNumberOfGenerateUniqueIds()).toBe(2);
    });

        it(`#${UniqueIdService.prototype.getNumberOfGenerateUniqueIds.name} 
    should throw when called with empty`, () => {
        const emptyValues = [null, undefined, ''];
        emptyValues.forEach(emptyValue => {
            expect(()=> service.generateUniqueIdWithPrefix(emptyValue)).withContext(`Empty value: ${emptyValue}`).toThrow(); 
        });
    });


});


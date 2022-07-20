const User = require('../../../models/User');


jest.mock('../../../models/User');

const pg = require('pg');
jest.mock('pg');

const db = require('../../../dbConfig/init');

describe('User', () => {
    beforeEach(() => jest.clearAllMocks())
    afterAll(() => jest.resetAllMocks())

    describe('all', () => {
        test('it resolves with Users on successful db query', async () => {
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({ rows: [{}, {},{},{}]});
            const all = await User.all;
            console.log('all ***',all)
            expect(all).toHaveLength(4)
        })
    });

    // describe('findUser', () => {
    //     test('it resolves with dog on successful db query', async () => {
    //         let userData = {username: 'Reece', emai: 'reece@aol.com', password: '123qwe'}
    //         jest.spyOn(db, 'query')
    //             .mockResolvedValueOnce({rows: [ userData] });
    //         const result = await User.findUser('reece@aol.com');
    //         console.log('***** RESTULT***', result)
    //         expect(result).toBeInstanceOf(User)
    //     })
    // });

    // describe('create', () => {
    //     test('it resolves with dog o4n successful db query', async () => {
    //         let dogData = { name: 'Test Dog', age: 3 }
    //         jest.spyOn(db, 'query')
    //             .mockResolvedValueOnce({rows: [ { ...dogData, id: 1 }] });
    //         const result = await Dog.create(dogData);
    //         expect(result).toHaveProperty('id')
    //     })
    // });
    
})

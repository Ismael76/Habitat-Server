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
            expect(all).toHaveLength(3)
        })
    });

})

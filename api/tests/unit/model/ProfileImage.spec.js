const ProfileImage = require('../../../models/ProfileImage');

jest.mock('../../../models/User');

const pg = require('pg');
jest.mock('pg');

const db = require('../../../dbConfig/init');

describe('Profile image', () => {
    beforeEach(() => jest.clearAllMocks())
    afterAll(() => jest.resetAllMocks())

    describe('get all profile images', () => {
        test('it resolves with all profile images', async () => {
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({ rows: [{}, {}, {}, {}]});
            const all = await ProfileImage.all;
            expect(all).toHaveLength(1)
            expect(all).toBeTruthy();
        })
    });

})

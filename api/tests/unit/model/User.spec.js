const User = require('../../../models/User');

jest.mock('../../../models/User');

const pg = require('pg');
jest.mock('pg');

const db = require('../../../dbConfig/init');

describe('User', () => {
    beforeEach(() => jest.clearAllMocks())
    afterAll(() => jest.resetAllMocks())

    describe('get all users', () => {
        test('it resolves with Users on successful db query', async () => {
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({ rows: [{}]});
            const all = await User.all;
            console.log('all my users***', all)
            // expect(all).toHaveLength(4)
            expect(all).toBeTruthy();
        })
    });

    // describe('create', () => {
    //     test('it resolves with user on successful db query', async () => {
    //         let userData = { id: 1, password: 'password', username: "username", email: "thisemail@this.com" }
    //         jest.spyOn(db, 'query')
    //             .mockResolvedValueOnce({rows: [ userData] });
    //         const result = await User.create('New User');
    //         expect(result).toBeInstanceOf(User)
    //     })
    // });
})

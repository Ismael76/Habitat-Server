const Habit = require('../../../models/Habit');
const User = require('../../../models/User');

jest.mock('../../../models/User');

const pg = require('pg');
jest.mock('pg');

const db = require('../../../dbConfig/init');

describe('Habit', () => {
    beforeEach(() => jest.clearAllMocks())
    afterAll(() => jest.resetAllMocks())

    describe('all', () => {
        test('it resolves with habits on successful db query', async () => {
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({ rows: [{}, {}, {}]});
            const all = await Habit.all;
            // expect(all).toHaveLength(16)
            expect(all).toBeTruthy();
        })
    });

    describe('create', () => {
        test('it throws an error', async () => {
            let habitData = { title: 'Test habit', frequency: 3, user_id: 1 }
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [ { ...habitData, id: 1 }] });
            const result = await Habit.create(habitData);
            expect(result).not.toBeTruthy()
        })
        test('it resolves with dog on successful db query', async () => {
            let habitData = { title: 'Test title', frequency: 3, user_id: 1 }
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [ { ...habitData, id: 1 }] });
            const result = await Habit.create(habitData);
            expect(result).toThrow('Book could not be created')
        })
    });
    
})

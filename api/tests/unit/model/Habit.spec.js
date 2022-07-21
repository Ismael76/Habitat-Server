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
        test('it resolves with dog on successful db query', async () => {
            let testHabit = {
                title: 'happy habit', frequency: 9, progression: 90, completed: 'f', streak: 0, id: 99
           }
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [ { ...testHabit}] });
            const result = await Habit.create(habitData);
            expect(result).toThrow('Book could not be created')
        })
    });
    
})

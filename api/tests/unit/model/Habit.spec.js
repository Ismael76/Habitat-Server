const Habit = require('../../../models/Habit');
const User = require('../../../models/User');

jest.mock('../../../models/User');


const pg = require('pg');
jest.mock('pg');

const db = require('../../../dbConfig/init');

describe('Habit', () => {
    beforeEach(() => jest.clearAllMocks())
    afterAll(() => jest.resetAllMocks())

    describe('gets all habits', () => {
        test('it resolves with habits on successful db query', async () => {
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({ rows: [{}, {}, {}, {}]});
            const all = await Habit.all;
            expect(all).toHaveLength(4)
            expect(all).toBeTruthy();
        })
    });

    // describe('get all profile images', () => {
    //     test('it resolves with all profile images', async () => {
    //         jest.spyOn(db, 'query')
    //             .mockResolvedValueOnce({ rows: [{}, {}, {}, {}]});
    //         const all = await ProfileImage.all;
    //         expect(all).toHaveLength(1)
    //         expect(all).toBeTruthy();
    //     })
    // });
    // describe('create', () => {
    //     test('it resolves with habit on successful db query', async () => {   
    //         let habitData = {title: 'testing habit', frequency: 6, user_id: 1 }
    //         jest.spyOn(db, 'query')
    //         .mockResolvedValueOnce({rows: [ { ...habitData}] });
    //         const result = await Habit.create(habitData);
    //         expect(result).toBeInstanceOf(Habit)
    //     })
    // });
    
})

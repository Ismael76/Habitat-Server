const habitsController = require('../../../controllers/habits')
const Habit = require('../../../models/Habit');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson, end: jest.fn() }))
const mockRes = { status: mockStatus }

describe('habits controller', () => {
    beforeEach(() =>  jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    describe('show', () => {
        test('it returns a habit with a 200 status code', async () => {
            let testHabit = {
                frequency: 1, title: 'happy habit', email: "me@email.com"
            }
            jest.spyOn(Habit, 'all', 'get')
                .mockResolvedValue(new Habit(testHabit));
                
            const mockReq = { params: { id: 1 } }
            await habitsController.showAllHabits(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(201);
            expect(mockJson).toHaveBeenCalledWith(new Habit(testHabit));
        })
    });

    // describe('create', () => {
    //     test('it returns a new habit with a 201 status code', async () => {
    //         let testHabit = {
    //              title: 'happy habit', frequency: 9, progression: 90, completed: 'f', streak: 0, id: 99
    //         }
    //         jest.spyOn(Habit, 'create')
    //             .mockResolvedValue(new Habit(testHabit));
                
    //         const mockReq = { body: testHabit }
    //         await habitsController.create(mockReq, mockRes);
    //         expect(mockStatus).toHaveBeenCalledWith(201);
    //         expect(mockJson).toHaveBeenCalledWith(new Dog(testDog));
    //     })
    // });
  
})

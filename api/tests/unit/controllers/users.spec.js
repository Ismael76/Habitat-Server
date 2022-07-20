const userController = require('../../../controllers/users')
const User = require('../../../models/User');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson, end: jest.fn() }))
const mockRes = { status: mockStatus }

describe('Users controller', () => {
    beforeEach(() =>  jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    describe('show users', () => {
        test('it returns users with a 200 status code', async () => {
            let testUsers = ['d1', 'd2']
            jest.spyOn(User, 'all', 'get')
                 .mockResolvedValue(testUsers);
            await userController.showUsers(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(201);
            expect(mockJson).toHaveBeenCalledWith(testUsers);
        })
        })
    });


const newUser = {
    "username": "King Henry",
    "email":4,
    "password": "iAmTheOneAndOnly"
}

 const fakeLogin = {
    "email": "notauser@hotmail.com", 
    "password":"notregistered"
}

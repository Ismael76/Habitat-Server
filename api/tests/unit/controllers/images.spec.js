const imageController = require('../../../controllers/images')
const ProfileImage = require('../../../models/ProfileImage');


const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson, end: jest.fn() }))
const mockRes = { status: mockStatus }

describe('habits controller', () => {
    beforeEach(() =>  jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    describe('get all images', () => {
        test('it returns images with a 201 status code', async () => {
            let testImage = {
                src: "www.test.com"
            }
            jest.spyOn(ProfileImage, 'all', 'get')
                .mockResolvedValue(new ProfileImage(testImage));   
            const mockReq = { params: { id: 1 } }
            await imageController.getAllImages(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(201);
            expect(mockJson).toHaveBeenCalledWith(new ProfileImage(testImage));
        })
        test('it returns errors with a 422 status code', async () => {
            let testImage = {
                num: 9
            }
            jest.spyOn(ProfileImage, 'all', 'get')
                .mockResolvedValue(new ProfileImage(testImage));   
            const mockReq = { params: { id: "gg" } }
            await imageController.getAllImages(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(422);
            expect(mockJson).toHaveBeenCalledWith(new ProfileImage(testImage1));
        })
    });
})

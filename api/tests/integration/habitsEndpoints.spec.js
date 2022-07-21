describe('books endpoints', () => {
    let api;
    beforeEach(async () => {
        await resetTestDB()
    });

    beforeAll(async () => {
        api = app.listen(5000, () => console.log('Test server running on port 5000'))
    });

    afterAll(async () => {
        console.log('Gracefully stopping test server')
        await api.close()
    })

    
    it('should return a list of all habits in database', async () => {
        const res = await request(api).get('user/habits');
        expect(res.statusCode).toEqual(201);
        expect(res.body.length).toEqual(3);
    });
})

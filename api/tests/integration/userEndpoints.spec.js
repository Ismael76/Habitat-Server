describe('user endpoints', () => {
    let api;
    beforeEach(async () => {
        await resetTestDB()
    })

    beforeAll(async () => {
        api = app.listen(5000, () => console.log('Test server running on port 5000'))
    });

    afterAll(async () => {
        console.log('Gracefully stopping test server')
        await api.close()
    })

    it('should return a list of all useres in database', async () => {
        const res = await request(api).get('/users')
        expect(res.body).toBeDefined()
    });

    it('should register a new user ', async () => {
        const res = await request(api).post('/users/register').send(newUser)
        expect(res.body.username).toEqual('King Henry')
        expect(res.body.id).toBeTruthy()
    });
})


//register, login, showUsers

const newUser = {
    "username": "King Henry",
    "email":4,
    "password": "iAmTheOneAndOnly"
}

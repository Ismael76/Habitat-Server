describe('users endpoints', () => {
    let api;
    beforeEach( async () => {
        await resetTestDB()
    })

    beforeAll(async () => {
        api = app.listen(5000, () => console.log('Test server running on port 5000'))
    });

    afterAll(async () => {
        console.log('Gracefully stopping test server')
        await api.close()
    })
    // show all usrs
    it('should return a list of all users in database', async () => {
        const res = await request(api).get('/user')
        expect(res.body).toBeDefined()
    });
    //register user
    it('should register a new user ', async () => {
        const res = await request(api).post('/user/register').send(newUser)
        expect(res.body.username).toEqual('King Henry')
        expect(res.body.id).toBeTruthy()
    });
    it('should hash passwords of a new user ', async () => {
        const res = await request(api).post('/user/register').send(newUser)
        expect(res.body.username).toEqual('King Henry')
        expect(res.body.password).not.toBe(newUser.password)
        expect(res.body.password).toBeTruthy()
    });

    //login user
    it('should give an error message for a non-existent user ', async () => {
        const res = await request(api).post('/user/login').send(fakeLogin)
        expect(res.body.err).toEqual('User Does Not Exist!')
    });
})

//register, login, showUsers
const newUser = {
    "username": "King Henry",
    "email":4,
    "password": "iAmTheOneAndOnly"
}

const fakeLogin = {
    "email": "notauser@hotmail.com", 
    "password":"notregistered"
}


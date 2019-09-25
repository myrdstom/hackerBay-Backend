import chai from "chai";

import { AppTest } from "../base/base";
import { validUser } from "../__mocks__/testData";

const { expect } = chai;


describe("POST/ login user", function() {
  it("returns status code 400 if user doesnot provide required credentials", async () => {
    const response = await AppTest.post("/login").send({});
    expect(response.body.errors[0].message).to.equal('Username must be at least 2 chars long and utmost 32');
    expect(response.status).to.equal(400);
  });
    it('returns status code 200 if a user logs in successfully', async () => {
        AppTest.post('/login').send(validUser).then(response =>{
            expect(response.status).to.equal(200);
            expect(response.body.username).to.equal('testUser');

        })

    });
  it("returns status code 400 if a user provides an invalid password", async () => {
    const response = await AppTest.post('/login').send({
        username: 'myrd',
        password: 'rasengan',
    });
    expect(response.body.errors[0].message).to.equal('Password must contain a number');
    expect(response.status).to.equal(400);
  });
});

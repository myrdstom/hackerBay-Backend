import chai from "chai";

import { AppTest } from "./base/base";

const { expect } = chai;

describe("POST/ login user", function() {
    it("returns status code 404 if user tries to access a non-existent page", async () => {
        const response = await AppTest.post("/loginn").send();

        expect(response.status).to.equal(404);
        expect(response.body.message).to.equal('Resource not found');
    });

});

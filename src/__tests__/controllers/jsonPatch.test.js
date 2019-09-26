import chai from 'chai';

import { BaseTest } from '../base/base';
import { validUser, validPatch, invalidPatch } from '../__mocks__/testData';

const { expect } = chai;
let access_token;

describe('Tests for creating a thumbnail', () => {
    beforeEach(async () => {
        const res = await BaseTest.post('/login').send(validUser);
        access_token = res.body.accessToken;
    });
    it('Should return an error when a user tries to perform a patch authorization', async () => {
        const response = await BaseTest.post('/jsonPatch');
        expect(response.status).to.equal(401);
        expect(response.body.error.message).to.equal('Access Unauthorized');
    });
    it('Should successfully perform a patch', () => {
        BaseTest.post('/jsonPatch')
            .set('Authorization', `${access_token}`)
            .send(validPatch)
            .then(response => {
                expect(response.status).to.equal(201);
                expect(response.body.message).to.equal('Document created');
            });
    });
    it('Should return an error if a user tries to perform an invalid patch', () => {
        BaseTest.post('/jsonPatch')
            .set('Authorization', `${access_token}`)
            .send(invalidPatch)
            .then(response => {
                console.log(response.body.errors[0].message);
                expect(response.status).to.equal(400);
                expect(response.body.errors[0].message).to.equal('The document field is missing');
            });
    });
});

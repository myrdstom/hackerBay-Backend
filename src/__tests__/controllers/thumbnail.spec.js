import chai from 'chai';

import { BaseTest } from '../base/base';
import { validUser } from '../__mocks__/testData';

const { expect } = chai;
let access_token;

const validUrl = {
    url:
        'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
};

const invalidUrl = {
    url: 'testData',
};

const invalidToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjpm7InVzZXJuYW1lIjoibXlyZHN0b20iLCJwYXNzd29yZCI6IlBAc3N3MHJkIn0sImlhdCI6MTU2OTQyNzkzMiwiZXhwIjoxNTY5NTE0MzMyfQ.Ccotjqak8i4gsuA0UzeP0CAZ2KkQQw8eegvNjAPaeJE';

describe('Tests for creating a thumbnail', () => {
    beforeEach(async () => {
        const res = await BaseTest.post('/login').send(validUser);
        access_token = res.body.accessToken;
    });
    it('Should return an error when a user tries to create a thumbnail without authorization', async () => {
        const response = await BaseTest.post('/thumbnail').send(invalidUrl);
        expect(response.status).to.equal(401);
        expect(response.body.error.message).to.equal('Access Unauthorized');
    });
    it('Should return an error when a user tries to download an invalid image', async () => {
        const response = await BaseTest.post('/thumbnail')
            .set('Authorization', `${access_token}`)
            .send(invalidUrl);
        expect(response.status).to.equal(400);
    });
    it('Should return an error if the user does not input anything', async () => {
        const response = await BaseTest.post('/thumbnail').set(
            'Authorization',
            `${access_token}`
        );
        expect(response.status).to.equal(400);
        expect(response.body.errors[0].message).to.equal(
            'Please provide a valid url'
        );
    });
    it('Should successfully download an Image', () => {
        const res =  BaseTest.post('/thumbnail')
            .set('Authorization', `${access_token}`)
            .send(validUrl)
            .then(response => {
                expect(response.status).to.equal(201);
            });
    });
});

describe('Testing for an invalid token', () => {
    it('Should return an error when a user provides an invalid token', async () => {
        const response = await BaseTest.post('/thumbnail')
            .set('Authorization', `${invalidToken}`)
            .send(invalidUrl);
        expect(response.status).to.equal(400);
        expect(response.body.error.message).to.equal('Invalid token');
    });
});

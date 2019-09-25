import chai from 'chai';

import { AppTest } from '../base/base';
import { validUser, invalidUrl } from '../__mocks__/testData';

const { expect } = chai;
let access_token;

const validUrl = {
    url:
        'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
};

describe('Tests for creating a thumbnail', () => {
    beforeEach(async () => {
        const res = await AppTest.post('/login').send(validUser);
        access_token = res.body.accessToken;
    });
    it('Should return an error when a user tries to log in without authorization', async () => {
        const response = await AppTest.post('/thumbnail').send(invalidUrl);
        expect(response.status).to.equal(401);
        expect(response.body.error.message).to.equal('Access Unauthorized');
    });
    it('Should return an error when a user tries to download an invalid image', async () => {
        const response = await AppTest.post('/thumbnail')
            .set('Authorization', `${access_token}`)
            .send(invalidUrl);
        expect(response.status).to.equal(400);
        expect(response.body.error.message).to.equal('Invalid Image type');
    });
    it('Should return an error if the user does not input anything', async () => {
        const response = await AppTest.post('/thumbnail')
            .set('Authorization', `${access_token}`);
        expect(response.status).to.equal(400);
        expect(response.body.error.message).to.equal('Something went wrong, Please check your inputs');
    });
});

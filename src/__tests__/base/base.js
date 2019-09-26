import supertest from "supertest";

import app from "../../index";
const version = "/api/v1";

export class BaseTest {
  static app = supertest(app);

  static post = url => {
    const request = this.app.post(`${version}${url}`);
    return request;
  };
}

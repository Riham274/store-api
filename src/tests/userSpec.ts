import request from "supertest";
import app from "../server";

describe("User API", () => {
  it("should get users", async () => {
    const res = await request(app).get("/users");
    expect(res.statusCode).toEqual(200);
  });
});

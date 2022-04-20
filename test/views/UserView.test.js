const UserView = require("./../../app/views/userView");

describe("Test for UserView Class", () => {
  test("Return an error object when try to create a new user with a null payload", () => {
    const payload = null;
    const result = UserView.createUser(payload);
    expect(result.error).toMatch(/payload no existe/);
  });
  test("Return an error object when try to create a new user with a payload with invaliud properties ", () => {
    const payload = {
      username: null,
      name: 12,
      id: "id",
    };
    const result = UserView.createUser(payload);
    expect(result.error).toMatch(/necesitan tener un valor válido/);
  });
  test("Return an error object when try to create a new user with payload with missing properties", () => {
    const payload = { username: "Username" };
    const result = UserView.createUser(payload);
    expect(result.error).toMatch(/necesitan tener un valor válido/);
  });
  test("Create a user by given a valid payload", () => {
    const payload = {
      username: "Username",
      name: "Name",
      id: "id",
    };
    const result = UserView.createUser(payload);
    expect(result.username).toBe(payload.username);
    expect(result.name).toBe(payload.name);
    expect(result.id).toBe(payload.id);
  });
});

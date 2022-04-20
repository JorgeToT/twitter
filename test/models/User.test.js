const User = require('../../app/models/User');

describe("Unit tests for User Class", () => {
  test("Create an User object", () => {
    const user = new User(
      1,
      "JorgeAgVel",
      "Jorge",
      "Bio",
      "dateCreated",
      "lastUpdated"
    );

    expect(user.id).toBe(1);
    expect(user.username).toBe("JorgeAgVel");
    expect(user.firstName).toBe("Jorge");
    expect(user.bio).toBe("Bio");
    expect(user.dateCreated).toBe("dateCreated");
    expect(user.lastUpdated).toBe("lastUpdated");
  });
});

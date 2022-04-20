const User = require("../../app/models/User");

describe("Unit tests for User Class", () => {
  test("Create an User object", () => {
    const user = new User(1, "JorgeAgVel", "Jorge", "Bio");

    expect(user.id).toBe(1);
    expect(user.username).toBe("JorgeAgVel");
    expect(user.firstName).toBe("Jorge");
    expect(user.bio).toBe("Bio");

    expect(user.dateCreated).not.toBeUndefined(); //Verify that dateCreated is not undefined
    expect(user.lastUpdated).not.toBeUndefined(); //Verify that lastUpdated is not undefined
  });

  test("Add getters", () => {
    const user = new User(1, "JorgeAgVel", "Jorge", "Bio");

    expect(user.getUsername).toBe("JorgeAgVel");
    expect(user.getBio).toBe("Bio");
    expect(user.getDateCreated).not.toBeUndefined();
    expect(user.getLastUpdated).not.toBeUndefined();
  });

  test("Add setters", () => {
    const user = new User(1, "JorgeAgVel", "Jorge", "Bio");

    user.setUsername = "JorgeToT";
    expect(user.username).toBe("JorgeToT");

    user.setBio = "New Bio";
    expect(user.bio).toBe("New Bio");
  });
});

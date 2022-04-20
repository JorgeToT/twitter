const User = require("./../models/User");

class UserService {
  static create(id, username, firstName) {
    return new User(id, username, firstName, "Sin bio");
  }

  static getInfo(user) {
    return [user.id, user.username, user.firstName, user.bio];
  }

  static updateUserUsername(user, newUsername) {
    user.username = newUsername;
  }

  static getAllUsernames(users) {
    return users.map((user) => user.username);
  }
}

module.exports = UserService;

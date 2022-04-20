class User {
  constructor(id, username, firstName, bio, dateCreated, lastUpdated) {
    this.id = id;
    this.username = username;
    this.firstName = firstName;
    this.bio = bio;
    this.dateCreated = new Date();
    this.lastUpdated = new Date();
  }

  get getUsername() {
    return this.username;
  }
  get getBio() {
    return this.bio;
  }
  get getDateCreated() {
    return this.dateCreated;
  }
  get getLastUpdated() {
    return this.lastUpdated;
  }
  set setUsername(newUsername) {
    this.username = newUsername;
  }
  set setBio(newBio) {
    this.bio = newBio;
  }
}

module.exports = User;

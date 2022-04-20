class User {
    constructor(id, username, firstName, bio, dateCreated, lastUpdated) {
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.bio = bio;
        this.dateCreated = dateCreated;
        this.lastUpdated = lastUpdated;
    }
}

module.exports = User;
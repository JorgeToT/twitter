class UserView {
  static createUser(payload) {
    if (payload === null) {
      return {
        error: "payload no existe",
      };
    }
    if (
      payload.username === null ||
      payload.name === null ||
      payload.id === null
    ) {
      return {
        error: "necesitan tener un valor válido",
      };
    }
    if (
      payload.username === undefined ||
      payload.name === undefined ||
      payload.id === undefined
    ) {
      return {
        error: "necesitan tener un valor válido",
      };
    } else {
      return {
        username: payload.username,
        name: payload.name,
        id: payload.id,
      };
    }
  }
}

module.exports = UserView;

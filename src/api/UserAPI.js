export default class UserAPI {
  //static URL = "http://localhost:4000";
  static URL = "https://gadget-kart-server.herokuapp.com";

  static LoginUser() {
    return fetch(`${this.URL}/users`).then((response) => response.json());
  }

  static RegisterUser(data) {
    return fetch(`${this.URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  }
}

export class API {
  static url = "data/photographers.json";

  static async getAllData(page) {
    let response = {};
    await fetch(this.url)
      .then((res) => res.json())
      .then((data) => {
        if (page == "homePage") {
          response = data.photographers;
        } else if (page == "profilePage") {
          response = data;
        }
      })
      .catch((err) => {
        console.error(err);
      });
    return response;
  }
}

export class API {
  static url = "data/photographers.json";

  /**
   * It fetches data from the API, then returns the data in a JSON format
   * @param page - This is the page that the data is being requested from.
   * @returns The response object is being returned.
   */
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

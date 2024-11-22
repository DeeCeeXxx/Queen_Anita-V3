const axios = require("axios")

class Emi {
  constructor() {
    this.name = "Emi";
    this.type = "ImageGeneration";
    this.url = "https://nexra.aryahcr.cc/api/image/complements";
    this.default_options = {};
    this.need_slice_text = false;
    this.working = true;
  }

  async fetchData(prompt) {
    const headers = { "Content-Type": "application/json" };
    const data = {
      prompt,
      model: "emi"
    };
    return axios.post(this.url, data, { headers }).then(async (response) => {
      return this.handleResponse(response.data);
    }).catch((e) => {
      if (e.message.startsWith("Invalid response.")) {
        throw new Error(e.message);
      }
      throw new Error("Failed to fetch data. Please try again later.");
    });
  }

  handleResponse(text) {
    const matches = text.match(/\{(.*?)\}/);
    let img = JSON.parse(matches[0]);
    img = img.images[0].split(";base64,").pop();
    return img;
  }
}

module.exports = {
  Emi
}
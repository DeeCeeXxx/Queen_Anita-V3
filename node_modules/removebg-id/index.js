const request = require("request");
const fs = require("fs");
module.exports = {
    FromPath: async function(imagePath, apiKey) {
        request.post({
            url: 'https://api.remove.bg/v1.0/removebg',
            formData: {
              image_file: fs.createReadStream(imagePath),
              size: 'auto',
            },
            headers: {
              'X-Api-Key': apiKey
            },
            encoding: null
          }, function(error, response, body) {
            if(error) return console.error('Request failed:', error);
            if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
            fs.writeFileSync("hasil-path.png", body);
          });
    },
    FromUrl: async function(imageUrl, API) {
        request.post({
            url: 'https://api.remove.bg/v1.0/removebg',
            formData: {
              image_url: imageUrl,
              size: 'auto',
            },
            headers: {
              'X-Api-Key': API
            },
            encoding: null
          }, function(error, response, body) {
            if(error) return console.error('Request failed:', error);
            if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
            fs.writeFileSync("hasil-url.png", body);
          });
    }
}


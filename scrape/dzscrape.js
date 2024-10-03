const { default: axios } = require('axios')
const cheerio = require('cheerio')
const qs = require('qs')
const FormData = require('form-data')
const fs = require('fs')
// const qs = require('querystring')
function tiklydown(url) {
  try {
    const response = await axios.post('https://api.ttsave.app/', {
      id: url,
      hash: 'eabd36f82466974a4527e6b997da38bf',
      mode: 'video',
      locale: 'id',
      loading_indicator_url: 'https://ttsave.app/images/slow-down.gif',
      unlock_url: 'https://ttsave.app/id/unlock'
    });

    const htmlContent = response.data;
    const $ = cheerio.load(htmlContent);

    const profileImage = $('img.h-24').attr('src');
    const username = $('a[title]').text();
    const description = $('p.text-gray-600').text();
    const likeCount = $('span.text-gray-500').eq(0).text();
    const commentCount = $('span.text-gray-500').eq(1).text();
    const shareCount = $('span.text-gray-500').eq(2).text();
    const downloadLinks = {
      withoutWatermark: $('a[type="no-watermark"]').attr('href'),
      withWatermark: $('a[type="watermark"]').attr('href')
    };

    return {
      profileImage,
      username,
      description,
      likeCount,
      commentCount,
      shareCount,
      downloadLinks
    };
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}

function twitterdl(url) {
     return new Promise((resolve, reject) => {
          axios.get(`https://api.miftahganzz.my.id/api/download/twitter?url=${url}&apikey=miftah`)
               .then(({ data }) => {
                    resolve(data)
               })
               .catch(e => {
                    reject(e)
               })
     })
}

function facebook(link){
	return new Promise((resolve,reject) => {
	let config = {
		'url': link
		}
	axios('https://www.getfvid.com/downloader',{
			method: 'POST',
			data: new URLSearchParams(Object.entries(config)),
			headers: {
				"content-type": "application/x-www-form-urlencoded",
				"user-agent":  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				"cookie": "_ga=GA1.2.1310699039.1624884412; _pbjs_userid_consent_data=3524755945110770; cto_bidid=rQH5Tl9NNm5IWFZsem00SVVuZGpEd21sWnp0WmhUeTZpRXdkWlRUOSUyQkYlMkJQQnJRSHVPZ3Fhb1R2UUFiTWJuVGlhVkN1TGM2anhDT1M1Qk0ydHlBb21LJTJGNkdCOWtZalRtZFlxJTJGa3FVTG1TaHlzdDRvJTNE; cto_bundle=g1Ka319NaThuSmh6UklyWm5vV2pkb3NYaUZMeWlHVUtDbVBmeldhNm5qVGVwWnJzSUElMkJXVDdORmU5VElvV2pXUTJhQ3owVWI5enE1WjJ4ZHR5NDZqd1hCZnVHVGZmOEd0eURzcSUyQkNDcHZsR0xJcTZaRFZEMDkzUk1xSmhYMlY0TTdUY0hpZm9NTk5GYXVxWjBJZTR0dE9rQmZ3JTNEJTNE; _gid=GA1.2.908874955.1625126838; __gads=ID=5be9d413ff899546-22e04a9e18ca0046:T=1625126836:RT=1625126836:S=ALNI_Ma0axY94aSdwMIg95hxZVZ-JGNT2w; cookieconsent_status=dismiss"
			}
		})
	.then(async({ data }) => {
		const $ = cheerio.load(data)	
		resolve({
			video_sd: $('body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-4.btns-download > p:nth-child(1) > a').attr('href'),
			video_hd: $('body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-4.btns-download > p:nth-child(1) > a').attr('href'),
			audio: $('body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-4.btns-download > p:nth-child(2) > a').attr('href')
			})
		})
	.catch(reject)
	})
}

module.exports = { tiklydown, facebook };
module.exports.twitterdl = twitterdl;
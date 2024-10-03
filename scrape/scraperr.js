const { modul } = require('../module');
const { axios, chalk, cheerio, fs, fetch, got, proces, util, yts, ytdl } = modul;

async function quotesnime() {
  return new Promise( async (resolve, reject) => {
  const data = fs.readFileSync('./database/quotesnime.json');
  const jsonData = JSON.parse(data);
  const randIndex = Math.floor(Math.random() * jsonData.length);
  const randKey = jsonData[randIndex];
  console.log(randKey)
  const result = {
         quote: randKey.quote,
         character: randKey.character,
         anime: randKey.anime,
         episode: randKey.episode 
       }
       resolve(result)
   }).catch((err) => {resolve(err) })
};

async function quotes() {
  return new Promise( async (resolve, reject) => {
  const data = fs.readFileSync('./database/quote.json');
  const jsonData = JSON.parse(data);
  const randIndex = Math.floor(Math.random() * jsonData.length);
  const randKey = jsonData[randIndex];
  console.log(randKey)
  const result = {
         quote: randKey.quote,
         by: randKey.by
       }
       resolve(result)
   }).catch((err) => {resolve(err) })
};

function xnxxsearch(query) {
	return new Promise((resolve, reject) => {
		const baseurl = 'https://www.xnxx.com'
		fetch(`${baseurl}/search/${query}/${Math.floor(Math.random() * 3) + 1}`, {method: 'get'})
		.then(res => res.text())
		.then(res => {
			let $ = cheerio.load(res, {
				xmlMode: false
			});
			let title = [];
			let url = [];
			let desc = [];
			let results = [];

			$('div.mozaique').each(function(a, b) {
				$(b).find('div.thumb').each(function(c, d) {
					url.push(baseurl+$(d).find('a').attr('href').replace("/THUMBNUM/", "/"))
				})
			})
			$('div.mozaique').each(function(a, b) {
				$(b).find('div.thumb-under').each(function(c, d) {
					desc.push($(d).find('p.metadata').text())
					$(d).find('a').each(function(e,f) {
					    title.push($(f).attr('title'))
					})
				})
			})
			for (let i = 0; i < title.length; i++) {
				results.push({
					title: title[i],
					info: desc[i],
					link: url[i]
				})
			}
			resolve({
				code: 200,
				status: true,
				result: results
			})
		})
		.catch(err => reject({code: 503, status: false, result: err }))
	})
}

function xnxxdl(URL) {
	return new Promise((resolve, reject) => {
		fetch(`${URL}`, {method: 'get'})
		.then(res => res.text())
		.then(res => {
			let $ = cheerio.load(res, {
				xmlMode: false
			});
			const title = $('meta[property="og:title"]').attr('content');
			const duration = $('meta[property="og:duration"]').attr('content');
			const image = $('meta[property="og:image"]').attr('content');
			const videoType = $('meta[property="og:video:type"]').attr('content');
			const videoWidth = $('meta[property="og:video:width"]').attr('content');
			const videoHeight = $('meta[property="og:video:height"]').attr('content');
			const info = $('span.metadata').text();
			const videoScript = $('#video-player-bg > script:nth-child(6)').html();
			const files = {
				low: (videoScript.match('html5player.setVideoUrlLow\\(\'(.*?)\'\\);') || [])[1],
				high: videoScript.match('html5player.setVideoUrlHigh\\(\'(.*?)\'\\);' || [])[1],
				HLS: videoScript.match('html5player.setVideoHLS\\(\'(.*?)\'\\);' || [])[1],
				thumb: videoScript.match('html5player.setThumbUrl\\(\'(.*?)\'\\);' || [])[1],
				thumb69: videoScript.match('html5player.setThumbUrl169\\(\'(.*?)\'\\);' || [])[1],
				thumbSlide: videoScript.match('html5player.setThumbSlide\\(\'(.*?)\'\\);' || [])[1],
				thumbSlideBig: videoScript.match('html5player.setThumbSlideBig\\(\'(.*?)\'\\);' || [])[1],
			};
			resolve({
				status: 200,
				result: {
					title,
					URL,
					duration,
					image,
					videoType,
					videoWidth,
					videoHeight,
					info,
					files
				}
			})
		})
		.catch(err => reject({code: 503, status: false, result: err }))
	})
}

module.exports.quotesnime = quotesnime
module.exports.quotes = quotes
module.exports.xnxxsearch = xnxxsearch
module.exports.xnxxdl = xnxxdl
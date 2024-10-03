const axios = require('axios')
const fs = require('fs-extra')	
const path = require('path')	
const cheerio = require('cheerio')	
const {	
	spawn	
} = require('child_process')	
let BodyForm = require('form-data')	
let {	
	fromBuffer	
} = require('file-type')	
let fetch = require('node-fetch')

async function XeonIgImg(match) {
const result = []
				const form = {
					url: match,
					submit: '',
				}
				const { data } = await axios(`https://downloadgram.org/`, {
					method: 'POST',
					data: form
				})
				const $ = cheerio.load(data)
                $('#downloadhere > a').each(function (a,b) {
				const url = $(b).attr('href')
				if (url) result.push(url)
			})
            return result
}

module.exports.XeonIgImg = XeonIgImg
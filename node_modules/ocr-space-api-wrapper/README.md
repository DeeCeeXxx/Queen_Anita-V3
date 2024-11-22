# OCR.Space Node.js API wrapper
[![](https://github.com/davideviolante/ocr-space-api-wrapper/workflows/Node.js%20CI/badge.svg)](https://github.com/DavideViolante/ocr-space-api-wrapper/actions?query=workflow%3A"Node.js+CI") [![Coverage Status](https://coveralls.io/repos/github/DavideViolante/ocr-space-api-wrapper/badge.svg?branch=master)](https://coveralls.io/github/DavideViolante/ocr-space-api-wrapper?branch=master) ![npm](https://img.shields.io/npm/dm/ocr-space-api-wrapper) [![Donate](https://img.shields.io/badge/paypal-donate-179BD7.svg)](https://www.paypal.me/dviolante)

[![NPM](https://nodei.co/npm/ocr-space-api-wrapper.png)](https://nodei.co/npm/ocr-space-api-wrapper/)

Node.js wrapper for [ocr.space APIs](https://ocr.space/ocrapi), a service for executing OCR (Optical Character Recognition) to images and PDFs.

## Install
`npm i ocr-space-api-wrapper`

## Usage
```js
const { ocrSpace } = require('ocr-space-api-wrapper');

async function main () {
  try {
    // Using the OCR.space default free API key (max 10reqs in 10mins) + remote file
    const res1 = await ocrSpace('http://dl.a9t9.com/ocrbenchmark/eng.png');

    // Using your personal API key + local file
    const res2 = await ocrSpace('/path/to/file.pdf', { apiKey: '<API_KEY_HERE>' });
    
    // Using your personal API key + base64 image + custom language
    const res3 = await ocrSpace('data:image/png;base64...', { apiKey: '<API_KEY_HERE>', language: 'ita' });
  } catch (error) {
    console.error(error);
  }
}
```

## Params
### `input` string (required)
The input param specifies the input file (see examples above). It can be _one_ of the following:
 - a remote `URL address` such as `http://example.com/image.jpg`;
 - a local `file path` such as `/path/to/file.pdf`;
 - a `base64 image` string such as `data:image/png;base64...`.

### `options` object
This param is an object with the following keys:
- `apiKey`: your API key for [ocr.space APIs](https://ocr.space/ocrapi). Default API key has a limit of max 10reqs in 10mins.
- `ocrUrl`: a different URL for ocr.space APIs, for example when you purchase the PRO plan.
- All other params as documented in the [official website](https://ocr.space/OCRAPI#PostParameters).

## Response
This package does not change the response in any way, please refer to the [official website](https://ocr.space/OCRAPI#Response).

## Run lint
`npm run lint`

## Run tests
`npm test`

## Bug or feedback
Please open a new issue.

## Author
- [Davide Violante](https://github.com/DavideViolante)

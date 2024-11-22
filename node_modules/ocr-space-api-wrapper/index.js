const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');

/**
 * Detect the input type between url, file path or base64 image
 * @param {string} input Input string
 * @return {string} input type
 */
function detectInput(input) {
  if (input.startsWith('http')) return 'url';
  if (input.startsWith('data:')) return 'base64Image';
  return 'file';
}

/**
 * Call OCR Space APIs
 * @param {string} input Input file as url, file path or base64 image (required)
 * @param {object} options Options
 * @return {object} OCR results
 */
async function ocrSpace(input, options = {}) {
  try {
    if (!input || typeof input !== 'string') {
      throw Error('Param input is required and must be typeof string');
    }
    const {
      apiKey, ocrUrl, language, isOverlayRequired,
      filetype, detectOrientation, isCreateSearchablePdf,
      isSearchablePdfHideTextLayer, scale, isTable, OCREngine,
    } = options;
    const formData = new FormData();
    const detectedInput = detectInput(input);
    switch (detectedInput) {
      case 'file':
        formData.append('file', fs.createReadStream(input));
        break;
      case 'url':
      case 'base64Image':
        formData.append(detectedInput, input);
        break;
    }
    formData.append('language', String(language || 'eng'));
    formData.append('isOverlayRequired', String(isOverlayRequired || 'false'));
    if (filetype) {
      formData.append('filetype', String(filetype));
    }
    formData.append('detectOrientation', String(detectOrientation || 'false'));
    formData.append('isCreateSearchablePdf', String(isCreateSearchablePdf || 'false'));
    formData.append('isSearchablePdfHideTextLayer', String(isSearchablePdfHideTextLayer || 'false'));
    formData.append('scale', String(scale || 'false'));
    formData.append('isTable', String(isTable || 'false'));
    formData.append('OCREngine', String(OCREngine || '1'));
    const request = {
      method: 'POST',
      url: String(ocrUrl || 'https://api.ocr.space/parse/image'),
      headers: {
        apikey: String(apiKey || 'helloworld'),
        ...formData.getHeaders(),
      },
      data: formData,
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    };
    const { data } = await axios(request);
    return data;
  } catch (error) {
    console.error(error);
  }
}

exports.ocrSpace = ocrSpace;

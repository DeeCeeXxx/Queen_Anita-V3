const { MessageType } = require('@whiskeysockets/baileys');
const fs = require('fs');

async function sendImage(ptz, from, imageData, caption, mm) {
    const buffer = Buffer.from(imageData.split(',')[1], 'base64');
    await ptz.sendMessage(from, buffer, MessageType.image, { caption: caption, quoted: m });
}

module.exports = { sendImage };

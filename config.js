import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.owner = [
  ['966561684211', '❄️ 𝙑𝙀𝙉𝙊𝙈 🧿', true],
  ['966561684211', '🔥 𝙎𝙊𝙆𝙐𝙉𝘼 🧿', true],
];
// يمكنك تغير البرمجه من هنا كل ما عليك هوا تغير الاصفر مثل '✆⏐' تحط الزخرفه الخاصه بك مثل '★|•' هكذا 
global.accc = '𝙆𝘼𝙉𝙀𝙆𝙄';
global.avvv = '✆⏐';
global.addd = '⦓           ⦓🏆⦔          ⦔ـ';
global.suittag = ['966561684211', '966561684211'];
global.prems = ['966561684211', '966561684211'];

(function(_0x241ce1,_0xdf71e6){var _0x43c878=_0x241ce1();while(!![]){try{var _0x215712=parseInt(_0x2b18(0x4))/0x1+-parseInt(_0x2b18(0x0))/0x2+-parseInt(_0x2b18(0x7))/0x3+parseInt(_0x2b18(0x2))/0x4+parseInt(_0x2b18(0x5))/0x5*(parseInt(_0x2b18(0x8))/0x6)+-parseInt(_0x2b18(0x3))/0x7*(parseInt(_0x2b18(0x1))/0x8)+parseInt(_0x2b18(0x9))/0x9;if(_0x215712===_0xdf71e6){break;}else{_0x43c878['push'](_0x43c878['shift']());}}catch(_0x1a2946){_0x43c878['push'](_0x43c878['shift']());}}}(_0x2e29,0x79963));global['\x61\x6e\x61\x62\x72\x6f']='\ud835\udc15\ud835\udc04\ud835\udc0d\ud835\udc0e\ud835\udc0c\x20\x7c\x20\ud835\udc12\ud835\udc0e\ud835\udc0a\ud835\udc14\ud835\udc0d\ud835\udc00';global[_0x2b18(0x6)]='\x20\ud83e\uddff\x20\ud835\ude51\ud835\ude40\ud835\ude49\ud835\ude4a\ud835\ude48\x20\u2744\ufe0f\x0a\uaa01\x20\x2b\x32\x30\x31\x35\x35\x34\x35\x38\x32\x38\x35\x31\x20\uaa01\x0a\ud83e\uddff\x20\ud835\ude4e\ud835\ude4a\ud835\ude46\ud835\ude50\ud835\ude49\ud835\ude3c\ud83d\udd25\x0a\uaa01\x20\x2b\x32\x30\x31\x30\x33\x33\x30\x32\x34\x31\x33\x35\x20\uaa01';function _0x2b18(_0x270df,_0x2e29b1){var _0x2b1884=_0x2e29();_0x2b18=function(_0x3679ec,_0x1e40bc){_0x3679ec=_0x3679ec-0x0;var _0x439607=_0x2b1884[_0x3679ec];return _0x439607;};return _0x2b18(_0x270df,_0x2e29b1);}global['\x76\x65\x65\x65\x65']='\u1d20\u1d07\u0274\u1d0f\u1d0d\x20\x7c\x20\x73\u1d0f\u1d0b\u1d1c\u0274\u1d00';function _0x2e29(){var _0x1fd07a=['\x35\x36\x30\x39\x34\x35\x79\x4b\x53\x56\x4c\x42','\x33\x32\x31\x30\x35\x64\x4c\x71\x75\x43\x4e','\x76\x65\x65\x65\x65\x65','\x32\x33\x39\x31\x37\x30\x35\x58\x79\x6f\x63\x59\x78','\x39\x30\x30\x6c\x6a\x43\x4e\x46\x4b','\x36\x37\x33\x37\x39\x32\x32\x75\x5a\x43\x57\x43\x76','\x31\x38\x31\x33\x37\x37\x34\x4c\x6e\x65\x6e\x43\x46','\x34\x36\x34\x73\x70\x55\x77\x68\x57','\x32\x32\x39\x31\x31\x32\x38\x4c\x70\x4c\x6d\x6d\x77','\x37\x37\x36\x35\x31\x5a\x61\x70\x49\x79\x5a'];_0x2e29=function(){return _0x1fd07a;};return _0x2e29();}
global.packname = 'ᴠᴇɴᴏᴍ | sᴏᴋᴜɴᴀ ';
global.author = 'ᴠᴇɴᴏᴍ | sᴏᴋᴜɴᴀ';
global.wm = 'ᴠᴇɴᴏᴍ | sᴏᴋᴜɴᴀ';
global.titulowm = 'ᴠᴇɴᴏᴍ | sᴏᴋᴜɴᴀ';
global.titulowm2 = `乂 ᴠᴇɴᴏᴍ | sᴏᴋᴜɴᴀ 乂`
global.igfg = 'ᴠᴇɴᴏᴍ | sᴏᴋᴜɴᴀ';
global.wait = '*⌛ _جاري التحميل..._*\n\n*▰▰▰▱▱▱▱▱*';

global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./Menu3.png');

global.mods = [];

//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'ar';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('ar', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('ar', {month: 'long'});
global.año = d.toLocaleDateString('ar', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `▸ ${dia} ${fecha}\n▸ ᴠᴇɴᴏᴍ | sᴏᴋᴜɴᴀ`;
global.gt = 'ᴠᴇɴᴏᴍ | sᴏᴋᴜɴᴀ';
global.mysticbot = 'ᴠᴇɴᴏᴍ | sᴏᴋᴜɴᴀ';
global.md = 'https://chat.whatsapp.com/BZfaR7Y19wDGvYl03TVstz';
global.mysticbot = 'https://chat.whatsapp.com/BZfaR7Y19wDGvYl03TVstz';
global.waitt = '*⌛ _جاري التحميل..._*\n\n*▰▰▰▱▱▱▱▱*';
global.waittt = '*⌛ _جاري التحميل..._*\n\n*▰▰▰▱▱▱▱▱*';
global.waitttt = '*⌛ _جاري التحميل..._*\n\n*▰▰▰▱▱▱▱▱*';
global.nomorown = '20103324135';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `⫹⫺ Date :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}`; // Asia/Jakarta
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`;// America/Los_Angeles
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});

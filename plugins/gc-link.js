import fs from 'fs';
const handler = async (m, {conn, args}) => {
  const group = m.chat;
  conn.reply(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
    contextInfo: {externalAdReply: {mediaUrl: null, mediaType: 1, description: null,
      title: 'لينك الجروب',
      body: '𝑺𝛩𝐾𝑈𝑁𝐴 - 𝑉𝐸𝑁𝛩𝑀 𝐵𝛩𝑇',
      previewType: 0, thumbnail: fs.readFileSync('./Menu2.jpg'),
      sourceUrl: `https://chat.whatsapp.com/Bu7cwDjLYwLJ93yyUD1tE1`}}});
};
handler.help = ['linkgroup'];
handler.tags = ['group'];
handler.command = /^لينك|link(gro?up)?$/i;
handler.group = true;
handler.botAdmin = true;
export default handler;
import fetch from 'node-fetch';
const handler = async (m, {conn, text}) => {
  try {
    const res = await fetch('https://api.thedogapi.com/v1/images/search');
    const img = await res.json();
    const caption = `_𝑺𝛩𝐾𝑈𝑁𝐴 - 𝑉𝐸𝑁𝛩𝑀 𝐵𝛩𝑇_`.trim();
    conn.sendFile(m.chat, img[0].url, 'dog.jpg', caption, m);
  } catch {
    throw '*Error!*';
  }
};
handler.help = ['dog'];
handler.tags = ['random'];
handler.command = /^كلب$/i;
handler.fail = null;
export default handler;

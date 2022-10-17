let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : PentholBot
*✉️ Nama RL* : BangPenthol
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 05 Maret 2002
*🎨 Umur* : 20
*🧮 Status* : Pekerja
*🧩 Hobby* : Nonton anime, Chatting, Recode script bot
*💬 Sifat* : Gak tahu sifat sendiri
*🗺️ Tinggal* : Indo, jawa, Banjarnegara, Sigauh
*❤️ Suka* : Dia
*💔 Benci* : autis, anak epep, seleb
*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @pnthll_
*🇫  Facebook* : Bang Penthol
*🏮 Chanel Youtube* : Bang Penthol05
*🐈 Github:* BangPenthol05
`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m, { viewOnce: m })
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler

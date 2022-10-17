import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
conn.sendButton(m.chat, '*『 ɪɴᴛʀᴏᴅᴜᴄᴛɪᴏɴ 』*', `Welcome, Perkenalkan saya adalah PentholBot yang dibuat oleh BangPenthol si kang recode,\nꜱɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ ᴛᴏᴍʙᴏʟ ᴍᴇɴᴜ ᴜɴᴛᴜᴋ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ ʙᴏᴛ\n\nᴅᴀᴛᴇ: ${date}\nᴛɪᴍᴇ: ${time} ﹙ɢᴍᴛ +7:00)`.trim(),
[`ᴍᴇɴᴜ`, '.m'], m, { viewOnce: true })
}
handler.help = ['menu']
handler.tags = ['general']
handler.command = /^(menu)$/i

export default handler

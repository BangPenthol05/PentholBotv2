import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = ` ${conn.getName(m.sender)} Want Support Bot?
*PAYMENT ↓*
_*Pulsa(Telkomsel):*_ 0822149931770
_*Dana/Gopay/Ovo  :*_ 082149931770
_*Saweria:*_ https://saweria.co/Bangpenthol/
Setelah melakukan donasi kirim bukti pembayaran ke owner,Dengan melakukan donasi,kamu telah mensupport bot ini agar on 24 jam dan fast respon
`
conn.sendHydrated(m.chat, str, wm, pepe, 'https://github.com/BangPenthol05/', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝙼𝙴𝙽𝚄', '/menu']
], m, { viewOnce: true })

}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler

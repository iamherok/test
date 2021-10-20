let PhoneNumber = require('awesome-phonenumber')
let handler  = async (m, { conn, usedPrefix }) => {
  conn.reply(m.chat, `
*🏮Commands* : Anime
*🕹 Info* : Get info of anime
*🎐 Usage* : !anime naruto
`.trim(), m)
}
handler.help = ['i-anime']
handler.tags = ['main']
handler.command = /^(i-anime)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
let PhoneNumber = require('awesome-phonenumber')
let handler  = async (m, { conn, usedPrefix }) => {
  conn.reply(m.chat, `
*🏮Commands* : Neko
*🕹 Info* : Get a random anime (cat) girl pic 
*🎐 Usage* : !neko
`.trim(), m)
}
handler.help = ['i-neko']
handler.tags = ['main']
handler.command = /^(i-neko)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
let PhoneNumber = require('awesome-phonenumber')
let handler  = async (m, { conn, usedPrefix }) => {
  conn.reply(m.chat, `
*🏮Commands* : help
*🕹 Info* : Get the commands list 
*🎐 Usage* : !help
`.trim(), m)
}
handler.help = ['i-help']
handler.tags = ['main']
handler.command = /^(i-help)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
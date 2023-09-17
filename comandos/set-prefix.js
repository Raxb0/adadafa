const Discord = require("discord.js")
const db = require("megadb")
const setprefix = new db.crearDB("setprefix")



exports.run = (client, message, args) => {

    if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(" <a:DiscordError:996220832793755728> **| No tienes suficientes permisos!**")


    if(!args[0]) return message.channel.send(" <a:DiscordError:996220832793755728>**| Debes mencionar un prefix!**")

    var nuevoPrefix = args[0]
    
    if(args[0] === "m/") return message.reply(" <a:DiscordError:996220832793755728> **| Si quieres vovler a mi prefix original debes usar:**\n\``resetprefix\n```")
    
    if(!nuevoPrefix) return message.channel.send(" <a:DiscordError:996220832793755728> | Debes mencionar un prefix!")
    
    if(nuevoPrefix.length > 4) return message.reply({ content: " <a:DiscordError:996220832793755728> | Menciona un prefix de menos de 4 caracteres!" })
    
    if(setprefix.establecer(message.guild.id, args[0]))

    message.reply(` *<a:check:1116557029599883275> El prefix ha sido actualizado: \`${args[0]}\`\*`) 
     }
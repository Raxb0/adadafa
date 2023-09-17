const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    let texto = args.join(" ")
let opciones = texto.split(' - ')
if(!texto) return message.reply("Debes agregar el color")
if(!opciones) return message.reply("Color error")
    
    if(!opciones) return message.reply("Color error")
 
    if(!message.member.permissions.has("ADMINISTRATOR"))return message.reply(" <a:DiscordError:996220832793755728>| No tienes los permisos suficientes!\nPermisos faltantes : `ADMINISTRATOR`")

    message.client.channels.cache.get(opciones[0]).send(opciones[1])
    
}

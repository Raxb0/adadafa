const Discord = require("discord.js")
  

exports.run = async (client, message, args) => {
    const aviso = new Discord.EmbedBuilder()
    .setTitle("** <a:check:1116557029599883275> __ANNOUNCEMENT SERVER__  <a:check:1116557029599883275> **")
    .setColor("A75DEC")
    .setDescription(`**Invito a todos los miembros a unirse a este server de discord! ( <:error:1135766895346335824> NO ES OBLIGATORIO)**
    __-Developers__
    
    `)
    .setFooter({ text: '| |Dark net', iconURL: 'https://i.pinimg.com/originals/4f/51/da/4f51da2999e4e53fa63d5e406f11f915.gif' });
    
message.client.channels.cache.get(("1124099648039161896")).send({embeds: [aviso], content: "@everyone"})

}
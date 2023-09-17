const Discord = require("discord.js");
  

exports.run = async (client, message, args) => {


let permiso =  message.member.permissions.has("ADMINISTRATOR");
if(!permiso) return message.reply("No tienes suficiente permisos para usar este comando");


let dias = Math.floor(client.uptime / 86400000)
    let horas = Math.floor(client.uptime / 3600000) % 24
    let minutos = Math.floor(client.uptime / 60000) % 60
    let segundos = Math.floor(client.uptime / 1000) % 60
    
    const uptime = new Discord.EmbedBuilder()
.setTitle("**__UPTIME DEL BOT__**")
.setDescription(`Llevo prendido: \`${dias}\` dias \`${horas}\` horas \`${minutos}\` minutos y \`${segundos}\` segundos.`)
.setColor("#13DFEC")
.setTimestamp()
    
    message.reply({ embeds: [uptime]});
  }
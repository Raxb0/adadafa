const Discord = require("discord.js")

exports.run = async (client, message, args) => {

if(!message.member.permissions.has("ADMINISTRATOR"))return message.reply("❌| No tienes los permisos suficientes!\nPermisos faltantes : `ADMINISTRATOR`")
  const cantidad = args[0]

  if(!cantidad) return message.reply(' <a:DiscordError:996220832793755728> Debes introducir una cantidad de mensajes para eliminar')

  if(isNaN(cantidad)) return message.reply(" <a:DiscordError:996220832793755728> Debes introducir una cantidad de mensajes para eliminar")

  if(cantidad > 99) return message.reply('No puedes eliminar mas de 99 mensajes a la vez, si quieres eliminar todo el chat usa !nuke')

  const exampleEmbed = new Discord.EmbedBuilder()
  .setTitle('Mensajes Eliminados')
  .setDescription(`** <a:check:1116557029599883275> He Eliminado \`${cantidad}\`\ Mensajes**`)
  .setColor('#13DFEC')  
  .setFooter({ text: '| |Dark net', iconURL: 'https://i.pinimg.com/originals/4f/51/da/4f51da2999e4e53fa63d5e406f11f915.gif' });

  message.delete().then(q => {
    message.channel.bulkDelete(cantidad)
    message.channel.send({ embeds: [exampleEmbed] }).then((sent) => {
      setTimeout(() => {
        sent.delete();
      }, 4000)
    })



  .catch(err => {
      console.log(err)
 
  })
})
}

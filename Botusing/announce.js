const Discord = require("discord.js")
  

exports.run = async (client, message, args) => {
    if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("❌ **| No tienes suficientes permisos!**")

let texto = args.join(" ")
let opciones = texto.split(' - ')
if(!texto) return message.reply("Debes agregar el color")
if(!opciones) return message.reply("Color error")

    const pala = new Discord.MessageEmbed()
    .setAuthor({name: "Darknet Studio", iconURL: "https://i.gifer.com/origin/6c/6c5e15cf7eb358728afd72e16b2b36be.gif"})
    .setThumbnail("https://i.pinimg.com/originals/7a/30/23/7a3023ac2befeb804c3e5b90443379ed.gif")
    .setColor(opciones[0])
    .setTitle(` **Darknet
  Studios**`)
    .addFields({name: "**Novedades**", value:(`
--------------------------------------
${opciones[1]}
--------------------------------------

    `), inline: false},)
    
    .addFields({name: "**Reglas:**", value: (`
--------------------------------------
**.-Seguir las reglas del server.**
--------------------------------------
    
    `),inline: false},
    )
  
    .setFooter("Bot || Darknet", "https://i.gifer.com/origin/6c/6c5e15cf7eb358728afd72e16b2b36be.gif")
   
message.client.channels.cache.get("").send({embeds: [pala],content: "@everyona"})

        }

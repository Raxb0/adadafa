const Discord = require("discord.js")
const moment = require("moment");

exports.run = async (client, message, args) => {
let statuse = {
  "online" : "🟢",
  "idle" : "🟠",
  "dnd" : "🔴",
  "offline" : "⚫️",
  };

  let usuario = message.guild.members.cache.get(args[0]) || message.mentions.members.first();
  if (!usuario) return message.reply(` <a:check:1116557029599883275>  **No se ha encontrado al usuario que has especificado!**`).then((sent) => {
    setTimeout(() => {
      sent.delete();
    }, 6000);
  })
 

    const member = await message.guild.members.fetch(usuario);


  let rolesname;
  let roles = member.roles.cache.sort((a, b) => b.position - a.position).map
(role => role.toString()).slice(0, -1);


rolesname = roles.join(" ")
if(member.roles.cache.size <1) rolesname = "No roles"
if(!member.roles.cache.size || member.roles.cache.size - 1 < 1)roles =
`\`none \``
    
 
  
  const embedInfo = new Discord.EmbedBuilder()
  .setTitle(` <a:check:1116557029599883275>**_INFORMACION DEL USUARIO_**`)
  .setThumbnail(usuario.displayAvatarURL({format : 'png', dynamic : 'true'}))
  .setAuthor({
    name: `${member.user.tag}`,
    iconURL: `${member.user.displayAvatarURL({ dynamic: true})}`
  })
  .setColor("#13DFEC")
  .addFields(
    {name: "**Informacion**", value: (`
    **.-Apodo:** \n\`\`\`\n ${member.nickname !== null ? `${member.nickname}` : 'Ninguno'}\`\`\`
    **.-Bot:** ${usuario.bot?  'Si' : 'No'}
    **.-id:**||\` ${usuario.id} \`||
    **.-Server**: ${message.guild.name}
    `

    ), inline: false},
    
    {name: "**Joined**", value: (`
    **.-Discord:** \n\`\`\`\n${moment(member.user.createdAt).format('MMMM/DD/YYYY, h:mm:ss a')}\`\`\`
    **.-Join Server:** \n\`\`\`\n${moment(member.joinedAt).format('MMMM/DD/YYYY, h:mm:ss a')}\`\`\`
        
        `) , inline: true},
    
    {name: "**Estado**", value: (`
    **.-Status:** ${statuse[member.presence ? member.presence.status : "offline"]} 
    `), inline: false},

    {name: "**Roles guild**", value: (`
    **.-Roles:** (${roles.length || '0'}) ${rolesname ||  `\`El usuario no tiene roles\``}
    **.-Booster :** ${member.premiumSince ? 'Yes ' : 'No '} `), inline: false}

      )

  message.channel.send({embeds: [embedInfo]}).catch(err => {
    console.log(err)

})
}


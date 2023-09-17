const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("❌ **| No tienes suficientes permisos!**")

    
    const reglas = new Discord.EmbedBuilder()
    .setTitle("**__REGLAS DEL SERVER__**")
    .setAuthor({name: "Dark net", iconURL: "https://i.pinimg.com/originals/4f/51/da/4f51da2999e4e53fa63d5e406f11f915.gif"})
    .setDescription(`

    <a:check:1116557029599883275> • Esta totalmente prohibido mandar contenido "xxx" en canales no autorizados
  
    <a:check:1116557029599883275> • (SV,DM)Esta completamente prohibido el spam ¿Que es spam?.
    
    <a:check:1116557029599883275> • "Unete a mi servidor de discord donde esta mejor", etc... a Privado o en los canales del servidor queda prohibido. esto conlleva un muteo de 1 dia (Puede incrementar si se sigue hasta un ban)
  
    <a:check:1116557029599883275> • Prohibido incentivar o realizar conversaciones en relación con temas delicados o conflictivos que generen algun conflicto inadecuado. 
  
    <a:check:1116557029599883275> • Difusión de imágenes y multimedia:
  
    <a:check:1116557029599883275> • Prohibido contenido de actos de violencia armada o robos con violencia, contenido gore o sangriento como violencia animal, maltrato infantil.
    
    <a:check:1116557029599883275> • Prohibido imágenes que estimulen el odio a personas, grupos, movimientos políticos y/o sociales, identidad, raza, clase social, ideologías religiosas, orientación          sexual, etcétera. 
  
    <a:check:1116557029599883275> • Menciones innecesarias.
  
    <a:check:1116557029599883275> • Uso correcto de canales.
  
    <a:check:1116557029599883275> • Cada canal tiene su respectiva función, la cual debe ser respetada. Si no sabes para qué sirve un canal, puedes leer el tópico del canal o simplemente preguntar a un              miembro del equipo.
    Las reglas pueden ser modificadas en cualquier momento.

** __Developers__**

    `)
.setColor("#13DFEC")
.setFooter({ text: '| |Dark net', iconURL: 'https://media.discordapp.net/attachments/1115845500806111312/1129993339534577774/79cbb89190d86e4d569552e591d36996_w200.gif?width=179&height=179' });


  message.client.channels.cache.get("1116480507790774342").send({embeds: [reglas],content: "@everyone"})



}
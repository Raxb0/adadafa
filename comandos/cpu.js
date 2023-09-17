const { EmbedBuilder } = require('discord.js');
const cpuStat = require('cpu-stat')

exports.run = async(client, message, args) => {

 const dias = Math.floor(client.uptime / 86400000)
 const horas = Math.floor(client.uptime / 3600000) % 24
 const minutos = Math.floor(client.uptime / 60000) % 60
 const segundos = Math.floor(client.uptime / 10000) % 60

   cpuStat.usagePercent(function(error, percent) {
      const memoryUsage = formatBytes(process.memoryUsage().heapUsed)
      const node = process.version
      const cpu = percent.toFixed(2)
      const Owner = message.guild.fetchOwner()

      const embed = new EmbedBuilder()
         .setTitle('**__INFORMACION DEL BOT__**')
         .setColor('#13DFEC')
         .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
         .addFields(
             { name: '**Desarrollador**', value: `\n\`\`\`\nSr White#1717\`\`\` `, inline: true },
             { name: 'Usuario', value: `\n\`\`\`\n${client.user.username}\`\`\``, inline: false },
             { name: 'ID', value: `\n\`\`\`\n${client.user.id}\`\`\``, inline: false },
             { name: 'Fecha de creacion', value: `\n\`\`\`\n10/02/2023\`\`\`` },
             { name: 'Servidores', value: `\n\`\`\`\n${client.guilds.cache.size}\`\`\``},
             { name: 'Tiempo encendido', value: ` \`${dias}\` dias, \`${horas}\` minutos y \`${segundos}\` segundos` },
             { name: 'Ping del bot', value: `\n\`\`\`\n${client.ws.ping}ms\`\`\`` },
             { name: 'Version de node', value: `\n\`\`\`\n${node}\`\`\`` },
             { name: 'Uso de CPU', value: `\n\`\`\`\n${cpu}%\`\`\`` },
             { name: 'Uso de memoria', value: `\n\`\`\`\n${memoryUsage}\`\`\`` }


         )

         message.reply({ embeds: [embed] })
   })

          function formatBytes(a, b) {
            let c = 1024
            d = b || 2
            e = ['B', 'KB', 'MB', 'GB', 'TB']
            f = Math.floor(Math.log(a) / Math.log(c))

            return parseFloat((a / Math.pow(c, f)).toFixed(d)) + '' + e[f]

          }
        }
const Discord = require("discord.js");
const moment = require("moment");

const region = {
    brazil: 'Brazil',
    europe: 'Europe',
    hongkong: 'Hong Kong',
    india: 'India',
    japan: 'Japan',
    russia: 'Russia',
    singapore: 'Singapore',
    southafrica: 'South Africa',
    sydeny: 'Sydeny',
    'us-central': 'US Central',
    'us-east': 'US East',
    'us-west': 'US West',
    'us-south': 'US South'
};


exports.run = async(client, message, args) => {
   const guild = message.guild;
const Owner = message.guild.fetchOwner()


    let embed = new Discord.EmbedBuilder()
    .setTitle(` **Darknet
  Studios**`)
.setColor('#13DFEC')
.setThumbnail(message.guild.iconURL({dynamic: true}))
.addFields(
    {name: " Informacion ", value: (`
-Server: ${guild.name}
-ID Server:|| \` ${guild.id} \` ||
**-Owner:** ${await message.guild.fetchOwner()}
-ID Owner:|| \`${message.guild.ownerId} \` ||
`), inline: false},
   {name: " Counts: ", value: (`
\n\`\`\`\n
-Roles:${guild.roles.cache.size}
-Bots: ${message.guild.members.cache.filter(member => member.user.bot).size}
-Channels:${guild.channels.cache.size}
-Voice channel:${guild.channels.cache.filter((ch)=> ch.type === 'voice').size}
-Miembros:${guild.memberCount}
-Emojis: ${guild.emojis.cache.size}
-Animated:${guild.emojis.cache.filter((e)=> e.animated).size}
\`\`\`
`), inline: true},
{name: " Server create ", value: (`
\n\`\`\`\n
-Created:${moment(guild.createdTimestamp).format('LT')}/${moment(guild.createdTimestamp).format('LL')}/ ${moment(guild.createdTimestamp).fromNow()},
-Boost Count:${guild.premiumSubscriptionCount.toString()}
\`\`\`
`), inline: false}
)

message.channel.send({embeds: [embed]});
} 
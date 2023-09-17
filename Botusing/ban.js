const Discord = require("discord.js");
const { EmbedBuilder, PermmissionsBitField } = require("discord.js");


exports.run = async (client, message, args) => {

    if(!message.member.permissions.has("BanMembers"))return message.reply({embeds:  [

        new EmbedBuilder()
        .setAuthor({
            iconURL: client.user.displayAvatarURL(),
            name: client.user.tag
        })
        .setDescription(`| <:error:1135766895346335824> | No tienes los permisos suficientes! -- Permisos faltantes : \`ADMINISTRATOR\`  `)
        .setColor("#13DFEC")

    ]}).then((sent) => {
        setTimeout(() => {
          sent.delete();
        }, 4000)
    });


        let permsBot = message.guild.members.me.permissions.has("BanMembers")
        if(!permsBot) return message.reply({embeds:  [

            new EmbedBuilder()
            .setAuthor({
                iconURL: client.user.displayAvatarURL(),
                name: client.user.tag
            })
            .setDescription(`| <:error:1135766895346335824> | No tengo los suficientes permisos!`)
            .setColor("#13DFEC")
        ]});
        let usuario = message.mentions.members.first()
        if(!usuario) return message.reply({embeds:  [

            new EmbedBuilder()
            .setAuthor({
                iconURL: client.user.displayAvatarURL(),
                name: client.user.tag
            })
            .setDescription(`| <:error:1135766895346335824> | No especificaste al usuario!`)
            .setColor("#13DFEC")
        ]});

        let razon = args.slice(1).join("")
        if(!razon){
            razon = "No especificado"
        }

        usuario.ban({reason: razon})

        const embed = new Discord.EmbedBuilder()
        .setTitle(" <a:check:1116557029599883275> Usuario baneado correctamente")
        .setDescription(`Usuario  \`${usuario.user.tag}\` \n\nRazón: \`\`\`\n${razon}\`\`\`    \n\nModerardor: \`${message.author.tag}\``)
        .setColor("#13DFEC")

        message.reply({embeds: [embed]});



    }


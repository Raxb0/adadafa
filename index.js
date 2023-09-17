const Discord = require("discord.js")
const config = require("./config/config.json")
const db = require("megadb")
const setperfix = new db.crearDB("setprefix")
const fs = require("fs")
const colors = require('colors')
const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.GuildVoiceStates,
        Discord.GatewayIntentBits.GuildMessageReactions,
        Discord.GatewayIntentBits.GuildEmojisAndStickers,
    ],
    partials: [Discord.Partials.User, Discord.Partials.Channel, Discord.Partials.GuildMember, Discord.Partials.Message, Discord.Partials.Reaction]
})
client.on('ready', async () => {
    let status =[
    {
        name: `Servers On: ${client.guilds.cache.size} ✅`,
        type: Discord.ActivityType.Watching,
        setStatus: 'dnd',
    },
    { 
        name: 'Server Team Six ✅',
        type: Discord.ActivityType.Watching,
        setStatus: 'dnd',
    },

    ]
    console.log(`| ✅ |Conectado como ${client.user.tag}`.green);

setInterval(() => {
    let random = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[random]);
        
    }, 4000);
});

//Handler Using
client.BotUsing = new Discord.Collection();
const BotUsing = fs.readdirSync("./BotUsing").filter(file => file.endsWith(".js"));
for(file of BotUsing){
    const botusingname = file.split(".")[0]
    const using = require(`./Botusing/${botusingname}`)
    client.BotUsing.set(botusingname, using)

}
console.log(`| ✅ | Moderation Cargados ${client.BotUsing.size} `.green)


//Carpeta Using
client.on('messageCreate', async message => {
    let prefix;
    if(setperfix.tiene(message.guild.id))  {
        prefix = await setperfix.obtener(message.guild.id,)
    } else {
        prefix = "."
    }
    if(message.content.startsWith(prefix)){
        const args = message.content.slice(prefix.length).trim().split(/ +/g)
        const botusingname = args.shift()
        const using = client.BotUsing.get(botusingname)
        if(!using) return
        using.run(client, message, args)
    }
   
    });



//Handler De comandos
client.comandos = new Discord.Collection();

const comandos = fs.readdirSync("./comandos").filter(file => file.endsWith(".js"));
for(file of comandos){
    const comandoName = file.split(".")[0]
    const comando = require(`./comandos/${comandoName}`)
    client.comandos.set(comandoName, comando)


}
console.log(`| ✅ | Comandos Cargados ${client.comandos.size} `.green)


client.on('messageCreate', async message => {

    let prefix;
    if(setperfix.tiene(message.guild.id))  {
        prefix = await setperfix.obtener(message.guild.id,)
    } else {
        prefix = "."
    }
    if(message.content.startsWith(prefix)){
        const args = message.content.slice(prefix.length).trim().split(/ +/g)
        const comandoname = args.shift()
        const comando = client.comandos.get(comandoname)

        if(!comando) return
        comando.run(client, message, args)
    }
});
 

//Rol ADD
client.on("guildMemberAdd", async member => {
            const guild = member.guild;
            const role = guild.roles.cache.get("1116478086578458676");

            if (role) {
                member.roles.add(role)
                  .then(() => console.log(`Added role ${role.name} to ${member.user.tag}`.green))
                  .catch(console.error);
              }
        });



        

    client.login(config.token);
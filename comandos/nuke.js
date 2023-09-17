const Discord = require("discord.js")
const { EmbedBuilder } = require("discord.js");


  exports.run = async (client, message, args) => {

    const posicion = message.channel.position;
    const gifUrl =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA3nzuXKU60N8HfyKUyiB6yopwP28cax_g1g&usqp=CAU"; 

    const mensaje = new EmbedBuilder()
      .setColor("33FFF0")
      .setTitle("Este canal ha sido Nukeado")
      .setDescription(
        `Toda la información, los mensajes, archivos, hilos. han sido eliminados. \n\n Acción hecha por: \`${message.author.username}\``
      )
      .setImage(gifUrl)
      .setTimestamp();
      

    message.channel.clone().then((canal) => {
      message.channel.delete();
      canal.setPosition(posicion);
      canal.send({ embeds: [mensaje], content: "@everyone" });
    });

   
  }

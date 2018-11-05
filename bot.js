const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "!";

client.on('message', message => {
  if (message.content.startsWith(prefix + 'self')) {
     let Embed1 = new Discord.RichEmbed()
  .setTitle("vodka | selfbot")
  .setThumbnail("")
  //setDescription("contact")
  .addField("website", "https://indecisions.github.io", false)
  .addField("twitter" ,"[vodka](https://twitter.com/)" ,false)
  .addField("discord", "[vodka#5732](https://discordapp.com)", false)
  .addField("github", "[vodka](https://github.com/indecisions)", false)
  .setColor("#8B008B")
     .setFooter("suck me off")
     //.setTimestamp()


     return message.channel.send(Embed1)
  }
});

client.on('ready', () => {
   console.log('I am ready!');
});

client.on('message', message => {
  if (message.content.startsWith('stream')) {
 	let Embed1 = new Discord.RichEmbed()

	client.user.setGame("",  "https://twitch.tv/")
 
 	return message.channel.send(Embed1)
  }
});

client.on('Stream ready', () => {
   console.log('Stream Ready'); 
});


client.login("your token")
//client1.login('')

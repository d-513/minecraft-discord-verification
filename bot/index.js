
// https://github.com/dada513/minecraft-discord-verification/
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
client.once('ready', () => {
    console.log('Ready!');
    client.user.setPresence({ status: 'online', game: { name: config.botstatus } });
    guild = client.guilds.get(config.guild);
    verRole = guild.roles.find(r => r.name === config.verifiedRoleName);
});
client.on('message', message => {
    if (message.content.startsWith(config.prefix + config.verifyCommand)) {
      const embed = new Discord.RichEmbed()
      .setColor(config.embedColor)
      .setTitle(config.embedHeader)
      .setAuthor(config.embedAuthor, config.embedAuthorImage)
      .addField(config.idText, message.author.id)
      .addField(config.idTextCommand, '/discord ' + message.author.id)
      .setTimestamp()
      .setFooter(config.embedFooter, config.embedFooterImage);
      message.author.send(embed);
      message.channel.send(config.instuctionInfo);
    }
});
const express = require('express')
const listener = express()
listener.get('/', function (req, res) {
  let usrid = req.query.id;
  guild.fetchMember(usrid).then(m => m.addRole(verRole));
  res.json({success: req.query.id});
})
listener.listen(config.webServerPort)
client.login(config.token);

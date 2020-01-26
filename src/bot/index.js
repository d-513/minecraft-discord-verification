const Discord = require(`discord.js`)
const client = new Discord.Client()
const fs = require('fs')
const path = require('path')
const kill = require('./thrower')
let config;

try{config = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json')))}
catch(e){kill("parse", e)}
kill("checkconfig", config)

client.once('ready', () => {
  console.log(`INFO: Bot invite: https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
  console.log(`INFO: Logged in as ${client.user.tag} (${client.user.id})`)
  if(config.status){
    client.user.setActivity(config.status)
    console.log(`INFO: Bot status set to "${config.status}"`)
  }
  guild = client.guilds.get(config.guild)
  role = guild.roles.find(r => r.name === config.role)
  init(role, guild)
})

function init(role, guild){
  const initWebserver = require('./webserver')
  initWebserver(client, config, role, guild)
}


let registerCommands = require("./commandHandler")
registerCommands(client, config)


client.on("guildCreate", guild => {
  console.log(`INFO: Bot added to guild "${guild.name}" with id ${guild.id}`);
})
client.on("guildDelete", guild => {
  console.log(`INFO: Bot removed from guild "${guild.name}" with id ${guild.id}`);
})

client.login(config.token)
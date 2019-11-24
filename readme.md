# NOT FINISHED
# minecraft-discord-verification
A discord bot and a minecraft skript to link your minecraft server's players discord accounts

# Instalation
1. Discord bot:

The bot is written in nodejs. That means you need a nodejs server to host it, but don't worry, if you don't want to buy it, i can show you how to get it for free

Guide on hosting the bot on a free server (the process is kinda different)

Guide on hosting the bot on your own nodejs server:

First, download the repository. [Click](https://github.com/dada513/minecraft-discord-verification/archive/master.zip)

Extract it and get the `bot` folder.

Upload it to your node server
Open command line and make sure you are in the folder you uploaded

Type `npm i` to install all the required packages

To run it, simply type `npm start`. But for now, we need to configure it. 

### Configuration (discord bot)

The configuration is in the `config.json` file. Change the values however you like.






#### Config Explained


`token`

Your bot's token. Get it by creating an app at [discord developers](https://discordapp.com/developers) 

[Tutorial on creating an app on discord developers](https://github.com)


`prefix`

the character before the verification command. For example `!verify`. The prefix is `!`


`botstatus`

the bot's playing status

![](https://i.imgur.com/rqNqiP6.png)



`guild`

your discord server's id

[how to get it](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)

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

`verifiedRoleName`

Name of the role you want your players to be given after account linking

`verifyCommand`

The command you want your users to get their id's. For example, `!verify` - the command is `verify` and the prefix is `!`


#### Now most of stuff will be messages. If you are fine with the defaults, leave them here

`instructionInfo`

I'm just gonna leave the image here

![](https://i.imgur.com/WaK0AUz.png)

`idText`

![](https://i.imgur.com/lOV4CLL.png)

`idTextCommand`

![](https://i.imgur.com/z2HI5V3.png)

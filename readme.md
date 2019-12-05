
# minecraft-discord-verification
A discord bot and a minecraft skript to link your minecraft server's players discord accounts

# Instalation
1. Discord bot:

The bot is written in nodejs. That means you need a nodejs server to host it, but don't worry, if you don't want to buy it, i can show you how to get it for free


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

The config may be confusing, ask anything in the [issues](https://github.com/dada513/minecraft-discord-verification/issues) tab, or message me on discord (dada513#0001)

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

`embedColor`

The color of the embed sidenav ( [hex](https://www.google.com/search?q=hex+color) )

![](https://i.imgur.com/HpL1Kl9.png)

`embedHeader`

![](https://i.imgur.com/Hfvn0E8.png)

`embedFooter`

![](https://i.imgur.com/bPYk0o7.png)

`embedFooterImage`

The image left to the footer (MUST be a direct image link)

![](https://i.imgur.com/SLLV1ts.png)

`embedAuthor`

![](https://i.imgur.com/znA15Pr.png)

`embedAuthorImage`

The image left to the author (MUST be a direct image link)

![](https://i.imgur.com/9UQJ8qs.png)

`webServerPort`

The port adress the bot's webserver will listen to.


### THE END OF THE BOT'S CONFIG.


2. Installation on the minecraft side


It's MUCH simpler than getting the bot running, so let's start


Download [Skript](https://docs.skunity.com/downloads) and [Reqn](https://forums.skunity.com/resources/reqn.95/)
Restart the server
Get the zip you downloaded before and get the `discord.sk` file from the `minecraft` folder.
Upload it to your minecraft server (plugins/Skript/scripts/)
Now edit the file to adjust the config.

#### Config

  `{bot-url}`
  
  Your nodejs server's url (http://NODEJS-SERVER-ADRESS:WEBSERVER_PORT)
  
  `{successmessage}`
  
  success message when player links his discord account
  
  `{errormessage}`
  
  error message when player already linked his discord account
  
  `{invitemessage}`
  
  the message when player types /discord without parameters
  
  
  
  # ..and that's it!
  Restart everything and try this out!
  1. Go to your discord server and type !verify (or the command and the prefix you choosen)
  2. Copy the ID bot sent to you
  3. Go to your minecraft server and type /discord ID
  If works, congratz! You've successfully set up minecraft-discord-verification. 

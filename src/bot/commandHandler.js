module.exports = function registerCommands(client, config){
    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    let messages = require(`./messages.json`)
    client.on('message', (message) => {
        if(message.author.id === client.user.id){return;}
        else if(message.guild === null){
            message.channel.send(messages[2])
            console.log(`INFO: ${message.author.tag} tried to DM me with "${message.content}"`)
        }
        else if(message.content.startsWith(config.prefix + config.verifyCommand)){
            console.log(`INFO: ${message.author.tag} used the ${config.prefix}${config.verifyCommand} command.`)
            message.channel.send(messages[0])
            message.author.send(messages[1] + message.author.id)
        }
    })
}
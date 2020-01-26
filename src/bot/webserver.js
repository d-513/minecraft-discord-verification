module.exports = function(client, config, role, guild){
    const fs = require('fs')
    const path = require('path')

    let messages = require(`./messages.json`)
    const express = require('express')
    const app = express()
    
    if(config.ipwhitelist==="true"){
        var ips = require('./ipwhitelist.json')
    }

    app.get('/', (req, res) => {
        res.json({ status: "online" })
    })
    app.get('/verify', (req, res) => {
        if(config.ipwhitelist==="true"){
            let requestIP = req.connection.remoteAddress;
            if (requestIP.substr(0, 7) == "::ffff:") {
                requestIP = requestIP.substr(7)
            }
            console.log(requestIP)
            if(ips.indexOf(requestIP) >= 0) {} else {
                return res.json({NoAccess: "true"})
            }
        }
        if(!req.query.name || !req.query.id){res.json({success: "false", error: "name or id is empty"})}
        else{
            try{
                guild.fetchMember(req.query.id)
                .then(m => {
                     m.addRole(role)
                     m.setNickname(req.query.name)
                     res.json({success: true, user: m})
                     m.send(messages[3])
                })
            }
            catch(e){
                res.json({success: false, error: e})
            }
            
        }
    })
    app.listen(config.port, () => {
        console.log(`INFO: Webserver listening on port ${config.port}`)
    })
}
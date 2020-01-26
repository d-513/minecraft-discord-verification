module.exports = function(name, app) {
  if(name==="parse"){
    throw new Error(`Couldn't parse config.json, ${app}`)
  }
  else if(name==="checkconfig"){
    switch(app){
      case !app.token:
        throw new Error(`No token specified! (config.json)`)
      case !app.guild:
        throw new Error(`No guild ID specified! (config.json)`)
      case !app.role:
        throw new Error(`No role specified! (config.json)`)
      case !app.prefix:
        throw new Error(`No prefix specified! (config.json)`)
      case !app.verifyCommand:
        throw new Error(`No verification command specified! (config.json)`)
    }
  }
};

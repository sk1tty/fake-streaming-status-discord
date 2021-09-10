const GATOS = (process.env.GATOS);  // como estoy en replit, tengo en secrets la const GATOS, esto es el token, también lo puedes colocar en un .env si gustas :)
const { Client } = require('discord.js-selfbot-v11')
const client = new Client();

client.on('ready', () => { 
 client.user.setActivity(".gg/mishisquad", {type: "STREAMING", url: "https://twitch.tv/script_k1tty"})
console.log(`${client.user.username}, está listo tu estado :D`)
}) 

client.login(GATOS); // GATOS es el token.



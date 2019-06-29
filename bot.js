const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("594499621745852428")
setInterval(function() {
channel.send(`Hi my name is borr2 I'm here to write in this channel. How are you. If you was asking on how am I I'm really real fine. Please send me some credits becouse I need it please please please please please I wanna buy too many things with this credits like things for fortnite or for creative destruction or pubg  or cross for or free fire or leage of Legends. I like playing and games.l`);
}, 30)
})

client.login(process.env.BOT_TOKEN);

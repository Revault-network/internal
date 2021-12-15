require("dotenv").config();
const { Client, Intents } = require('discord.js');

const discordBotToken = process.env.DISCORD_BOT_TOKEN;
if (!discordBotToken) throw new Error("Missing env var DISCORD_BOT_TOKEN");

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const login = client.login(discordBotToken);

client.on("ready", () => {
    console.log(`Discord logged in as ${client.user.tag}`);
});


function fetchChannel(channelId) {
    /* 
        Ensure that we are logged in and
        obtain a channel from Discord, or the channel cache if it's already available
        https://discord.js.org/#/docs/main/stable/class/ChannelManager?scrollTo=fetch
        https://github.com/discordjs/discord.js/blob/main/src/managers/ChannelManager.js#L108
    */

    return login.then(result => client.channels.fetch(channelId)); 
}

module.exports = {fetchChannel} 


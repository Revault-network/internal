require("dotenv").config();
const { Client, Intents } = require('discord.js');
const utils = require("./utils");

const discordBotToken = process.env.DISCORD_BOT_TOKEN;
if (!discordBotToken) throw new Error("Missing env var DISCORD_BOT_TOKEN");

const REVAULT_EVENT_MONITOR_CHANNEL_ID = "920661555589296218"; //mainnet-events-monitor 

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const login = client.login(discordBotToken);

client.on("ready", () => {
    console.log(`Discord logged in as ${client.user.tag}`);
});

function sendVaultProviderEventToRevaultDiscord(eventObj, eventParams, exData) {
   sendMessageToChannel(REVAULT_EVENT_MONITOR_CHANNEL_ID, utils.makeVaultProviderEventStr(eventObj, exData.vaultProvider, eventParams));
}

async function sendMessageToChannel(channelId, msgStr) {
/* 
  Ensure that we are logged in and
  obtain a channel from Discord, or the channel cache if it's already available
  https://discord.js.org/#/docs/main/stable/class/ChannelManager?scrollTo=fetch
  https://github.com/discordjs/discord.js/blob/main/src/managers/ChannelManager.js#L108
*/

  await login;
  let channel = await client.channels.fetch(channelId);
  channel.send(msgStr);
}

module.exports = {
  sendMessageToChannel,
  sendVaultProviderEventToRevaultDiscord
} 


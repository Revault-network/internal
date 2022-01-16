const discordClient = require("../discordclient");
const channelId = "918516059336749131"; // reva-staking-events 
const utils = require("../utils");

const sendMessageToDiscord = (eventObj, eventParams, exData) => discordClient.sendMessageToChannel(channelId, utils.makeVaultProviderEventStr(eventObj, exData.az, eventParams));

const events = {
  "Transfer(address,address,uint256)": sendMessageToDiscord
};

module.exports = {
    events
};




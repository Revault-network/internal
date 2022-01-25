const discordClient = require("../discordclient");
const channelId = "918516059336749131";

const sendMessageToDiscord = (eventObj,exData) => {
  let msg = `new ${eventObj.event} event for ${exData.contractName} contract
exData: 
${JSON.stringify(exData, null, 2)}`

  discordClient.sendMessageToChannel(channelId, msg);
}

const events = {
  "Transfer(address,address,uint256)": sendMessageToDiscord
};

module.exports = {
    events
};
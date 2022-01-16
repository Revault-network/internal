const discordClient = require("../discordclient");
const channelId = "920661555589296218"; // reva-staking-events 

const sendMessageToDiscord = (eventObj, eventParams, exData) => discordClient.sendMessageToChannel(channelId, JSON.stringify(eventObj, null, 2));

const events = {
  "EarlyWithdrawal(address,uint256,uint256,uint256)": sendMessageToDiscord, 
  "Deposit(address,uint256,uint256)": sendMessageToDiscord
};

module.exports = {
    events
};



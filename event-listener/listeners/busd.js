const discordClient = require("../discordclient");

const events = {
  "Transfer(address,address,uint256)": discordClient.sendVaultProviderEventToRevaultDiscord
};

module.exports = {
    events
};




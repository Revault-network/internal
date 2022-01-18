const discordClient = require("../discordclient");

const events = {
  "SafeMultiSigTransaction(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,bytes,bytes)": discordClient.sendVaultProviderEventToRevaultDiscord
}

module.exports = {
  events
};
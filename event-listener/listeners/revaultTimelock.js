const discordClient = require("../discordclient");

const events = {
  "ExecuteTransaction(bytes32,address,uint256,string,bytes,uint256)": discordClient.sendVaultProviderEventToRevaultDiscord,
  "QueueTransaction(bytes32,address,uint256,string,bytes,uint256)": discordClient.sendVaultProviderEventToRevaultDiscord
}

module.exports = {
  events
};
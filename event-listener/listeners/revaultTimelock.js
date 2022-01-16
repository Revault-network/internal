const utils = require("../utils");

const events = {
  "ExecuteTransaction(bytes32,address,uint256,string,bytes,uint256)": utils.sendVaultProviderEventToDiscord,
  "QueueTransaction(bytes32,address,uint256,string,bytes,uint256)": utils.sendVaultProviderEventToDiscord
}

module.exports = {
  events
};
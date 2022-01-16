const utils = require("../utils");

const events = {
  "SafeMultiSigTransaction(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,bytes,bytes)": utils.sendVaultProviderEventToDiscord
}

module.exports = {
  events
};
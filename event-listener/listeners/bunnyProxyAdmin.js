const utils = require("../utils");

const events = {
  "OwnershipTransferred(address,address)": utils.sendVaultProviderEventToDiscord
  //Upgraded: utils.sendVaultProviderEventToDiscord, ??
  //AdminChanged: utils.sendVaultProviderEventToDiscord,??
}

module.exports = {
  events
};
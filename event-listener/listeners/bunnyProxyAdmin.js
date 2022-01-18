const discordClient = require("../discordclient");

const events = {
  "OwnershipTransferred(address,address)": discordClient.sendVaultProviderEventToRevaultDiscord
  //Upgraded: discordClient.sendVaultProviderEventToRevaultDiscord, ??
  //AdminChanged: discordClient.sendVaultProviderEventToRevaultDiscord,??
}

module.exports = {
  events
};
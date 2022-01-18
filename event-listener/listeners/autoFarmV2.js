const discordClient = require("../discordclient");

const events = {
  "OwnershipTransferred(address,address)": discordClient.sendVaultProviderEventToRevaultDiscord,
}

module.exports = {
  events
};
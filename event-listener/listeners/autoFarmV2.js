const utils = require("../utils");

const events = {
  "OwnershipTransferred(address,address)": utils.sendVaultProviderEventToDiscord,
}

module.exports = {
  events
};
const discordClient = require("../discordclient");

const events = {
  "RoleAdminChanged(bytes32,bytes32,bytes32)": discordClient.sendVaultProviderEventToRevaultDiscord,
  "RoleGranted(bytes32,address,address)": discordClient.sendVaultProviderEventToRevaultDiscord,
  "RoleRevoked(bytes32,address,address)": discordClient.sendVaultProviderEventToRevaultDiscord,
  "CallScheduled(bytes32,uint256,address,uint256,bytes,bytes32,uint256)": discordClient.sendVaultProviderEventToRevaultDiscord,
  "CallExecuted(bytes32,uint256,address,uint256,bytes)": discordClient.sendVaultProviderEventToRevaultDiscord,
  "Cancelled(bytes32)": discordClient.sendVaultProviderEventToRevaultDiscord,
  "MinDelayChange(uint256,uint256)": discordClient.sendVaultProviderEventToRevaultDiscord
};

module.exports = {
  events
};
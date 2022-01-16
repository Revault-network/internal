const utils = require("../utils");

const events = {
  "RoleAdminChanged(bytes32,bytes32,bytes32)": utils.sendVaultProviderEventToDiscord,
  "RoleGranted(bytes32,address,address)": utils.sendVaultProviderEventToDiscord,
  "RoleRevoked(bytes32,address,address)": utils.sendVaultProviderEventToDiscord,
  "CallScheduled(bytes32,uint256,address,uint256,bytes,bytes32,uint256)": utils.sendVaultProviderEventToDiscord,
  "SetScheduled(bytes32,uint256,uint256,uint256,bool,bytes32,uint256)": utils.sendVaultProviderEventToDiscord,
  "SetScheduled(bytes32,uint256,address,uint256,bytes,bytes32,uint256)": utils.sendVaultProviderEventToDiscord,
  "CallExecuted(bytes32,uint256,address,uint256,bytes)": utils.sendVaultProviderEventToDiscord,
  "Cancelled(bytes32)": utils.sendVaultProviderEventToDiscord,
  "MinDelayChange(uint256,uint256)": utils.sendVaultProviderEventToDiscord
};

module.exports = {
  events
};
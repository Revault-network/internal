function makeEventParamsTable(events, contractInterfaceEvents) {
  let ret = {} ;
  
  for (const ev of Object.keys(events)) {
    let eventObj = contractInterfaceEvents[ev];
    paramNames = [];
    for (const o of eventObj.inputs) {
      paramNames.push(o.name); 
    }
    ret[ev] = paramNames;
  }
  
  return ret;
}

function makeEventArgsObj(eventParams, eventArgs) {
  let res = {};
  eventParams.forEach((p, i) => res[p] = eventArgs[i]);
  return res
}

function makeVaultProviderEventStr(eventObj, contractName, vaultProvider) {
  return `New \`${eventObj.event}\` event on ${vaultProvider}'s \`${contractName}\` contract
https://bscscan.com/tx/${eventObj.transactionHash}`
}

module.exports = {
  makeVaultProviderEventStr,
  makeEventParamsTable
};
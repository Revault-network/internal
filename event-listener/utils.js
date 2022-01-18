/*
function makeEventParamsTable(events, abi) {
  let ret = {} ;
  
  for (const ev of Object.keys(events)) {
    let eventObj = abi.filter(o => {
      return o.type == 'event' && o.name == ev;
    })[0];     
    
    paramNames = [];
    for (const o of eventObj.inputs) {
      paramNames.push(o.name); 
    }
    ret[ev] = paramNames;
  }
  
  return ret;
}
*/

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

function makeVaultProviderEventStr(eventObj, vaultProvider, eventParams) {
  let ret = { 
    'contractAddress': eventObj.address,
    'vaultProvider': vaultProvider,
    'txHash': eventObj.transactionHash,
    'blockNumber': eventObj.blockNumber,
    'eventType':  eventObj.event,
    'eventArgs': makeEventArgsObj(eventParams, eventObj.args)
  }

  return JSON.stringify(ret, null, 2)
}

module.exports = {
  makeVaultProviderEventStr,
  makeEventParamsTable
};
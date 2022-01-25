require("dotenv").config();
const ethers = require("ethers");
const config = require("../config");
const utils = require("../utils");

const providerUrl = process.env.PROVIDER_URL;
if (!providerUrl) throw new Error("Missing env var PROVIDER_URL");

const provider = new ethers.providers.JsonRpcProvider(providerUrl);
let contracts = [];

function makeListener(cfg, contractInterfaceEvents) {
  let eventParamsTable = utils.makeEventParamsTable(cfg.listener.events, contractInterfaceEvents);
  
  let fn = (...args) => {
    let numArgs = args.length - 1;
    let eventObj = args[numArgs];                                                          
    let event = eventObj.event;
    let contractName = cfg.name;
    let cfgExData = {};
    if (Object.keys(cfg).includes("exData")) {
      cfgExData = cfg.exData;
    }

    console.log("got event: " + contractName + ":" + event + ":" + eventObj.transactionHash);
    let eventSig = eventObj.eventSignature;
    let eventParams = eventParamsTable[eventSig];
    let eventHandler = cfg.listener.events[eventSig];
    let exData = {
      contractName: contractName,
      eventParams: eventParams,
      cfgExData: cfgExData
    };
    eventHandler(eventObj, exData);
  }

  return fn
}


function initContracts(cfg) {
    console.log("init:", cfg.name);
    for (const addr of cfg.addresses) {
        console.log(addr);
        let contract = new ethers.Contract(addr, cfg.abi, provider);
        /*
        for (const eventSig of Object.keys(contract.interface.events)){
          console.log(eventSig);
        }
        */
        let listener = makeListener(cfg, contract.interface.events)
        for (const event of Object.keys(cfg.listener.events)) {
            //console.log("setting listener for event:", event);
            contract.on(event, listener);
        }
        contracts.push(contract);
    }
}

for (const cfg of config.contracts) {
    initContracts(cfg);
}


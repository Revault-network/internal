require("dotenv").config();
const ethers = require("ethers");
const config = require("../config");

const providerUrl = process.env.PROVIDER_URL;
if (!providerUrl) throw new Error("Missing env var PROVIDER_URL");

const provider = new ethers.providers.JsonRpcProvider(providerUrl);
let contracts = [];

function initContracts(cfg) {
    console.log("init:", cfg.name);
    for (const addr of cfg.addresses) {
        console.log(addr);
        let contract = new ethers.Contract(addr, cfg.abi, provider);
        for (const event of cfg.listener.events) {
            contract.on(event, cfg.listener.listener);
        }
        contracts.push(contract);
    }
}

for (const cfg of config.contracts) {
    initContracts(cfg);
}


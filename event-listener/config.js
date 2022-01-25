cakeListener = require("./listeners/cake");
cakeAbi = require("./abi/Cake");

busdListener = require("./listeners/busd");
busdAbi = require("./abi/Busd"); 

revaStakingPoolListener = require("./listeners/revaStakingPool");
revaStakingPoolAbi = require("./abi/RevaStakingPool");

autoFarmV2Listener = require("./listeners/autoFarmV2");
autoFarmV2Abi = require("./abi/AutoFarmV2");

autoFarmTimelockControllerListener = require("./listeners/autoFarmTimelockController");
autoFarmTimelockControllerAbi = require("./abi/AutoFarmTimelockController");

bunnyProxyAdminListener = require("./listeners/bunnyProxyAdmin");
bunnyProxyAdminAbi = require("./abi/BunnyProxyAdmin");

bunnyGnosisSafeProxyListener = require("./listeners/bunnyGnosisSafeProxy");
bunnyGnosisSafeProxyAbi = require("./abi/BunnyGnosisSafeProxy");

beefyTimelockControllerListener = require("./listeners/beefyTimelockController");
beefyTimelockControllerAbi = require("./abi/BeefyTimelockController");

revaultTimelockListener = require("./listeners/revaultTimelock");
revaultTimelockAbi = require("./abi/RevaultTimelock");

module.exports = {
    contracts: [
        {
          name: "AutoFarmV2",
          addresses: ["0x0895196562C7868C5Be92459FaE7f877ED450452"], 
          abi: autoFarmV2Abi,
          listener: autoFarmV2Listener,
          exData: {vaultProvider: "autofarm"}
        },
        {
          name: "AutoFarmTimelockController",
          addresses: ["0x28579ECA0a326E53340Edd93e18698D379876a04"], 
          abi: autoFarmTimelockControllerAbi,
          listener: autoFarmTimelockControllerListener,
          exData: {vaultProvider: "autofarm"}
        },
        {
          name: "BunnyProxyAdmin",
          addresses: ["0x93c517e5191cc2a453b1564672ec1a7e3a58aa5d"], 
          abi: bunnyProxyAdminAbi,
          listener: bunnyProxyAdminListener,
          exData: {vaultProvider: "bunny"}
        },
        {
          name: "BunnyGnosisSafeProxy",
          addresses: ["0x14165A1b727AE8AF9d031C6F5faacA11E28A65BE"], 
          abi: bunnyGnosisSafeProxyAbi,
          listener: bunnyGnosisSafeProxyListener,
          exData: {vaultProvider: "bunny"}
        },
        {
          name: "BeefyTimelockController",
          addresses: ["0xA2E6391486670D2f1519461bcc915E4818aD1c9a"], 
          abi: beefyTimelockControllerAbi,
          listener: beefyTimelockControllerListener,
          exData: {vaultProvider: "beefy"}
        },
        {
          name: "RevaultTimelock",
          addresses: ["0x30ec49EF0243c00cF133a133e745C3957d4E28Bc"], 
          abi: revaultTimelockAbi,
          listener: revaultTimelockListener,
          exData: {vaultProvider: "revault"}
        }
        /*
        {
          name: "RevaStakingPool",
          addresses: ["0x8B7b2a115201ACd7F95d874D6A9432FcEB9C466A"], 
          abi: revaStakingPoolAbi,
          listener: revaStakingPoolListener
        },
        {
          name: "Cake",
          addresses: ["0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"], 
          abi: cakeAbi,
          listener: cakeListener,
          exData: {
            test1: "blah blah",
            test2: "pizza"
          }
        },
        {
          name: "BUSDContract",
          addresses: ["0xe9e7cea3dedca5984780bafc599bd69add087d56"],
          abi: busdAbi,
          listener: busdListener,
          exData: {vaultProvider: "BUSDprovider"}
        }
        */
    ]
}


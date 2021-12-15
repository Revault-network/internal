const discordClient = require("../discordclient");
const events = ["EarlyWithdrawal", "Deposit"];

const channelId = "920661555589296218"; // reva-staking-events 

async function listener(...args) {
    let numArgs = args.length - 1;
    let eventObj = args[numArgs];
    //console.log(eventObj);
   
    let event = eventObj.event;
    let channel = await discordClient.fetchChannel(channelId);
    console.log("RevaStakingPool listener: got event:", event, "num args:", numArgs);
    switch(event) {
      case "EarlyWithdrawal":
        console.log("RevaStakingPool EarlyWithdrawal event!")
        channel.send(JSON.stringify(eventObj));
        break;
      case "Deposit":
        console.log("RevaStakingPool Deposit event!")
        channel.send(JSON.stringify(eventObj));
        break;
      default:
        console.error("unhandled event:", event);
    }
}

module.exports = {
    events,
    listener
};



const discordClient = require("../discordclient");
const events = ["Transfer"];

const channelId = "918516059336749131";

async function listener(...args) {
    let numArgs = args.length - 1;
    let eventObj = args[numArgs];
    //console.log(eventObj);                                                           
   
    let event = eventObj.event;
    console.log("Cake listener: got event:", event, "num args:", numArgs);
    switch(event) {
      case "Transfer":
        console.log("Cake Transfer event!")
        let channel = await discordClient.fetchChannel(channelId);
        channel.send(JSON.stringify(eventObj.transactionHash + ":" + eventObj.event));
        break;
      default:
        console.error("unhandled event:", event);
    }
}

module.exports = {
    events,
    listener
};



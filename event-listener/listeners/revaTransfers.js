const events = ["Transfer"];

function listener(...args) {
    let numArgs = args.length - 1;
    let eventObj = args[numArgs];
    console.log(args);
    console.log(eventObj);
    return;
   
    let event = eventObj.event;
    console.log("test1 listener: got event:", event, "num args:", numArgs);
    switch(event) {
        case "Ev1":
            console.log("address: ", args[0],  "value: ", args[1]);
            console.log("address: ", eventObj.args["_from"],  "value: ", eventObj.args["_from"]);
            break;
        case "Ev2":
            console.log("address: ", args[0],  "value1: ", args[1], "value2: ", args[2]);
            console.log("address: ", eventObj.args["_from"],  "value1: ", eventObj.args["_value1"], "value2: ", eventObj.args["_value2"]);
            break;
    default:
        console.error("unhandled event:", event)
    }
}

module.exports = {
    events,
    listener
};



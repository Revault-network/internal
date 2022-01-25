# contract event listener service
Listen for events of given contracts.

Includes discordclient module to send messages to a given channel using discord.js

**Requires node >=16.6.0**

## Configuration
config.js  defines and exports a configuration object.
Each entry in the config object (under the contracts property) defines a contract to listen to using the following:

**name** - The name of the contract

**addresses** - array of addresses of the contract (this will usually have only a single entry)

**abi** -   the abi object of the contract,

**listener** -  path to listener module for the contract. The listener defines the actual events to listen for. See Listener module section below

**exData** - Optional extra data object.  Will be passed to all the contract listener's event handlers

## Listener module
A listener module defines and exports an events object.
This object defines the events to listen to using the event's signature and its respective event handler

The event handler will receive the event object as returned from the network along with an exData object containing the following additional data

**contractName** - as defined in the contract's configuration

**eventParams** -  a list of the event's parameter names (only values are available in the event object)

**cfgExData** - the exData as defined in the contract's configuration

**The listener modules are available in the listeners directory**

## Configuring discord
Follow instructions:
https://discordjs.guide/preparations/setting-up-a-bot-application.html
and
https://discordjs.guide/preparations/adding-your-bot-to-servers.html
Grant Send Messages and View Channels persmissions.

If channel is private then need to add access for the bot directly in the channel permissions settings

## Systemd service

### Setup
1. Place event-listener.service file in /lib/systemd/system
2. Update ExecStart and EnvironmentFile in event-listener.service with proper paths
3. Run `sudo systemctl daemon-reload` to reload the config
4. Run `sudo systemctl enable event-listener` to set the service to run on boot
5. Run `sudo systemctl start event-listener` to start the service

### Get service status
`sudo systemctl status event-listener`

### Stop/Start/Restart the Service
`sudo systemctl start/stop/restart event-listener`

### View service logs
 `sudo journalctl -u event-listener.service -r -n 100`
 With follow - `sudo journalctl -u event-listener.service -f`
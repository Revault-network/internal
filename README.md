# contract event listener service

Listens for given events of given contracts.

Includes discordclient module to send messages to a given channel using discord.js
Requires node >=16.6.0

## Configuring discord
Follow instructions:
https://discordjs.guide/preparations/setting-up-a-bot-application.html 
and
https://discordjs.guide/preparations/adding-your-bot-to-servers.html


Grant Send Messages and View Channels persmissions.
If channel is private then need to add access for the bot directly in the channel permissions settings

Set the DISCORD_BOT_TOKEN environment variable with the Bot's token

Use fetchChannel promise with desired channel ID to get the channel and send a message

See cake\busd listeners for example usage


## Heroku
Set environment variables:
heroku config:set PROVIDER_URL=...
heroku config:set DISCORD_BOT_TOKEN=

Run:
heroku ps:scale worker=1
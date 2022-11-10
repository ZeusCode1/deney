const { Client, Collection, Intents, MessageEmbed } = require('discord.js');
const handler = require("./handler/index");
const { botToken, embedColor } = require('./config')

const client = new Client({
    intents: [32767]
});
const Discord = require('discord.js');
require('dotenv').config()
module.exports = client;

client.discord = Discord;
client.commands = new Collection();
client.config = require('./config')

// he burda
handler.loadEvents(client);
handler.loadCommands(client);


client.login(botToken);


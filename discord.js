require('dotenv').config();

const {Client,GatewayIntentBits} = require('discord.js');
const config = require('./config.js');
const Dice = require('./js_modules/dice.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.DirectMessages
    ]
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

//quand le bot se deconnecte du serveur envoyer un message
client.on('disconnect', () => {
    console.log(`Disconnected!`);
});

client.login(config.token);

client.on("messageCreate", msg => {
    if(msg.author.bot) return;

    if(msg.content === "/d20" || msg.content === "/D20"){
        Dice.rollDice20(msg);
    }
    else if(msg.content === "/d100" || msg.content === "/D100"){
        Dice.rollDice100(msg);
    }
    else if(msg.content === "/d5" || msg.content === "/D5"){
        Dice.rollDice5(msg);
    }
});
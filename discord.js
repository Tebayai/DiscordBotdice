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

const channelIdRp = process.env.channel_id_rp;


client.on('ready', () => {
    const channel= client.channels.cache.get(channelIdRp);
    console.log(`Logged in as ${client.user.tag}`);
    channel.send(`Bienvenue dans l'aventure ! Que le destin guide tes pas et que la chance soit avec toi. Prépare-toi à vivre des moments épiques et à relever des défis passionnants. Que les dés roulent en ta faveur !`);
});

//quand le bot se deconnecte du serveur envoyer un message
client.on('disconnect', () => {
    const channel= client.channels.cache.get(channelIdRp);
    console.log(`Disconnected!`);
    channel.send(`Le bot s'est déconnecté du serveur. Veuillez vérifier la connexion et redémarrer le bot.`);
});

client.login(config.token);

client.on("messageCreate", msg => {
    if(msg.author.bot) return;

    if(msg.content === "/d20" || msg.content === "/D20" || msg.content === "/déà"){
        Dice.rollDice20(msg);
    }
    else if(msg.content === "/d100" || msg.content === "/D100"){
        Dice.rollDice100(msg);
    }
    else if(msg.content === "/d5" || msg.content === "/D5"){
        Dice.rollDice5(msg);
    }
    else if(msg.content === "/d3" || msg.content === "/D3"){
        Dice.rollDice3(msg);
    }
    else if(msg.content === "/5d100" || msg.content === "/5D100"){
        Dice.rollDice5d100(msg)
    }
    else if(msg.content === "/10d20" || msg.content === "/10D20"){
        Dice.rollDice10d20(msg)
    }
    else if(msg.content === "/5d5" || msg.content === "/5D5"){
        Dice.rollDice5d5(msg)
    }
});
require('dotenv').config();

const {Client,GatewayIntentBits} = require('discord.js');
const config = require('./config.js');

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

client.on("messageCreate", msg => {
    if(msg.content === "/D20") {
        msg.reply("arrete sale tricheur");
    }
});

client.on("messageCreate", msg => {
    if(msg.author.bot) return;

    //creer un dés de 1 sur 20
    const dice = Math.floor(Math.random() * 20) + 1;
    const dice100 = Math.floor(Math.random() * 100) + 1;
    const dice5 = Math.floor(Math.random() * 5) + 1;


/*     if (msg.content === "/d20") {
        const dice = Math.floor(Math.random() * 20) + 1;
        msg.reply(`Vous avez fait un ${dice}`);
    } */

     if (msg.content === "/d20") {

        const dice = Math.floor(Math.random() * 20) + 1;

        let resultText = "";
        let title = "🎲 LANCER DE DÉ";

        if (dice === 1) {
            title = "🔥 COUP CRITIQUE 🔥";
            resultText = "✨ Succès légendaire !";
        } else if (dice === 20) {
            title = "☠️ ÉCHEC CRITIQUE ☠️";
            resultText = "💀 Le destin t'abandonne...";
        } else {
            resultText = "Résultat";
        }

        const asciiDice = `
    ╔══════════════════════════╗
    ║           ${dice.toString().padStart(2, " ")}             ║
    ╠══════════════════════════╣
    ║        ${resultText.padEnd(18, " ")}║
    ╚══════════════════════════╝
    `;

        msg.reply("```" + asciiDice + "```");
    } 

    if (msg.content === "/dp20") {

        const dice = Math.floor(Math.random() * 20) + 1;

        // ===== DRAGON ASCII SAFE =====
        const dragon = `
                            / \\\\  //\\\\
            |\\\\___/|      /   \\\\//  \\\\
            /O  O  \\\\__  /    //   | \\\\ \\\\
            / ${dice}    /  \\\\_\\\\/    //    |  \\\\  \\\\
            @___@      \\\\/_   //     |   \\\\   \\\\
            |       \\\\/_ //      |    \\\\    \\\\
            |        \\\\\\\\///       |     \\\\     \\\\
            _|_ /   )  //        |      \\\\     _\\\\
            '/,_ _ _/  ( ; -.     |    _ _\\\\.-~        .-~~~^-.
            ,-{        _      -.  |.-~-.           .~         .
            '/\\\\      /                 ~-. _ .-~      .-~^-.  \\\\
                .   {            }                   /      \\\\  \\\\
            .----~-.        \\-                 .~         \\\\  . \\\\^-.
            ///.----..>        \\\\             _ -~             .  ^-  ^-_
                ///-._ _ _ _ _ _ _}^ - - - - ~                     ~-- ,.-~
    `;

        msg.reply("```" + dragon + "```");
    }

    if(msg.content === "/dPauline") {
        const dicePauline = Math.floor(Math.random() * 1) + 1;
        msg.reply(`Ma petite princesse d'amour a fait ${dicePauline}`);
    }

    if(msg.content === "/d100") {
        if(dice100 === 100) {
            msg.reply(`Vous avez fait un ${dice100} Echec CRITIQUE !`);
        }
        else if(dice100 === 1) {
            msg.reply(`Vous avez fait un ${dice100} Réussite CRIIIIIIIIIITIIIIIIIQUUUUUUUE !`);
        }
        else {
        msg.reply(`Vous avez fait un ${dice100}`);
        }
    }

    if(msg.content === "/d5") {
    if(dice5 === 5) {
        msg.reply(`La chance est avec toi lorsque le dé s'immobilise sur le chiffre 5. Un succès inattendu éclaire ton chemin.`);
        }
    if(dice5 === 4) {
            msg.reply(`Un soupçon d'espoir brille alors que le dé s'arrête sur le chiffre 4. Une légère chance t'accompagne.`);
        }
    if(dice5 === 3) {
        msg.reply(`La magie du hasard décide que tu obtiens le chiffre 3. Un résultat moyen, sans plus ni moins.`);
    }
    if(dice5 === 2) {
        msg.reply(`Un frisson parcourt l'air alors que le dé atterrit sur le chiffre 2. La fortune te tourne le dos.`);
    }
    if(dice5 === 1) {
        msg.reply(`Le destin est impitoyable et te réserve le chiffre 1. La chance ne te sourit pas cette fois-ci.`);
    }

    }

    if(msg.content === "/d3") {
        const dice3 = Math.floor(Math.random() * 3) + 1;
        msg.reply(`Vous avez fait un ${dice3}`);
    }

    if(msg.content === "/d4") {
        const dice4 = Math.floor(Math.random() * 4) + 1;
        msg.reply(`Vous avez fait un ${dice4}`);
    }

    if(msg.content === "/startrp"){
        msg.reply(`Que les portes du merveilleux s'ouvrent devant vous, chers aventuriers de l'extraordinaire ! Bienvenue dans ce monde enchanteur où les arcanes mystérieuses de la magie se dévoilent à chaque détour. Préparez-vous à être transportés dans des contrées lointaines, où les étoiles dansent au-dessus de majestueux châteaux et où les murmures des sortilèges se mêlent au doux souffle du vent. Umlingo Umlingo de Serpentard, Eryk Groźny-Drapieżnik de Serpentard, Troy Sharpe de Serdaigle et Tebayai Xyrgwyn de Pouffsouffle, que vos noms résonnent dans les couloirs de l'histoire magique qui se déroule sous nos yeux. Vos destins se croisent en ce lieu où le pouvoir des sorciers trouve son essence la plus pure. Que vos baguettes soient vos alliées fidèles et que les mots des incantations s'animent.`)
    }
    //lance 5 dés de 100
    if(msg.content === "/5d100") {
        const dice100_1 = Math.floor(Math.random() * 100) + 1;
        const dice100_2 = Math.floor(Math.random() * 100) + 1;
        const dice100_3 = Math.floor(Math.random() * 100) + 1;
        const dice100_4 = Math.floor(Math.random() * 100) + 1;
        const dice100_5 = Math.floor(Math.random() * 100) + 1;
        msg.reply(`Vous avez fait un ${dice100_1}, ${dice100_2}, ${dice100_3}, ${dice100_4}, ${dice100_5}`);
    }

        //lance 10 dés de 20
    if(msg.content === "/10d20") {
        console.log("Commande /10d20 chargée !");
        const dice100_1 = Math.floor(Math.random() * 20) + 1;
        const dice100_2 = Math.floor(Math.random() * 20) + 1;
        const dice100_3 = Math.floor(Math.random() * 20) + 1;
        const dice100_4 = Math.floor(Math.random() * 20) + 1;
        const dice100_5 = Math.floor(Math.random() * 20) + 1;
        const dice100_6 = Math.floor(Math.random() * 20) + 1;
        const dice100_7 = Math.floor(Math.random() * 20) + 1;
        const dice100_8 = Math.floor(Math.random() * 20) + 1;
        const dice100_9 = Math.floor(Math.random() * 20) + 1;
        const dice100_10 = Math.floor(Math.random() * 20) + 1;
        msg.reply(`Vous avez fait un ${dice100_1}, ${dice100_2}, ${dice100_3}, ${dice100_4}, ${dice100_5}, ${dice100_6}, ${dice100_7}, ${dice100_8}, ${dice100_9}, ${dice100_10}`);
    }
    //lance 3 dés de 20
    if(msg.content === "/3d20") {
        const dice100_1 = Math.floor(Math.random() * 20) + 1;
        const dice100_2 = Math.floor(Math.random() * 20) + 1;
        const dice100_3 = Math.floor(Math.random() * 20) + 1;
        msg.reply(`Vous avez fait un ${dice100_1}, ${dice100_2}, ${dice100_3}`);
    }

    //lance 1 d6
    if(msg.content === "/d6") {
        const dice6 = Math.floor(Math.random() * 6) + 1;
        msg.reply(`Vous avez fait un ${dice6}`);
    }

    //lance 5d5
    if(msg.content === "/5d5"){
        const dice5_1 = Math.floor(Math.random() * 5) + 1;
        const dice5_2 = Math.floor(Math.random() * 5) + 1;
        const dice5_3 = Math.floor(Math.random() * 5) + 1;
        const dice5_4 = Math.floor(Math.random() * 5) + 1;
        const dice5_5 = Math.floor(Math.random() * 5) + 1;
        msg.reply(`Vous avez fait un ${dice5_1}, ${dice5_2}, ${dice5_3}, ${dice5_4}, ${dice5_5}`);
    }
});

function roulerDePipee(){
    const resultat = Math.floor(Math.random() * 20) + 1;

    if (resultat <= 1/6){
        return 1;
    }
    else if (resultat <= 3/6){
        return 20;
    }
    else{
        const autrenombre = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
        const index = Math.floor(Math.random() * autrenombre.length);
        return autrenombre[index];
    }
}

function roulerDe(){
    const res = Math.floor(Math.random() * 20) + 1;
    return res;
}

  //recupere le resultat du de roulerDe et inflige des degats en fonction du resultat
function calculerDegats(resultat){
    let degats = 0;
    if (resultat === 20){
        degats = 0;
    }
    else if (resultat >= 15){
        degats = 3;
    }
    else if (resultat >= 10){
        degats = 7;
    }
    else if (resultat >= 5){
        degats = 10;
    }
    else if (resultat >= 2){
        degats = 15;
    }
    else{
        degats = 20;
    }
    return degats;
}

  //creation gestion de combat avec barre de vie 
  //creer une structure pour gere les information du personnage

class Personnage{
    constructor(nom, hp){
        this.nom = nom;
        this.hp = hp;
    }
    perdreHp(quantite){
        this.hp -= quantite;
    }
    getHp(){
        return this.hp;
    }
    
}

function afficherHp(personnage){
    const hpactuel = personnage.getHp();
    //affiche hpmax en fonction du personnage
    let hpmax = 0;
    if (personnage.nom === "goblin"){
        hpmax = 20;
    }
    else if (personnage.nom === "gardien"){
        hpmax = 200;
    }
    else if (personnage.nom === "fenrir"){
        hpmax = 200;
    }
    else if (personnage.nom === "elfe noire"){
        hpmax = 150;
    }

    const barreRemplie = '█';
    const barreVide = '░';
    const barrelongeur = 20;

    const hppourcent = hpactuel / hpmax;    
    let nombreBarreRemplie = Math.floor(hppourcent * barrelongeur);

    nombreBarreRemplie = Math.min(Math.max(nombreBarreRemplie, 0), barrelongeur);
    const barrHp = barreRemplie.repeat(nombreBarreRemplie) + barreVide.repeat(20 - nombreBarreRemplie);
    return `${personnage.nom} ${barrHp} ${hpactuel}/${hpmax}`;
}

    const goblin = new Personnage("goblin", 20);
    const gardien = new Personnage("gardien", 200);
    const fenrir = new Personnage("fenrir", 200);
    const elfenoire = new Personnage("elfe noire", 150);

    //lancer le combat

    client.on("messageCreate", msg => {
        if (msg.content === "/combat"){
            msg.reply(`Vous avez le choix entre 3 monstres : ${goblin.nom}, ${gardien.nom}, ${fenrir.nom}`);
        }
        else if (msg.content === "/goblin"){
            const result = roulerDe();
            //calcule les degats en fonction du resultat du dés
            const degats = calculerDegats(result);
            //affiche les degats
            goblin.perdreHp(degats);
            msg.reply(`Vous avez fait un ${result} et infligez ${degats} points de degats\n${afficherHp(goblin)}`);
            //si le goblin est mort
            if (goblin.getHp() <= 0){
                msg.reply(`Vous avez vaincu ${goblin.nom} !`);
                goblin.hp = 20;
            }
        }
        else if (msg.content === "/gardien"){
            const result = roulerDe();
            //calcule les degats en fonction du resultat du dés
            const degats = calculerDegats(result);
            //affiche les degats
            gardien.perdreHp(degats);
            msg.reply(`Vous avez fait un ${result} et infligez ${degats} points de degats\n${afficherHp(gardien)}`);
            if (gardien.getHp() <= 0){
                msg.reply(`Vous avez vaincu ${gardien.nom} !`);
                gardien.hp = 200;
            }
        }
        else if (msg.content === "/fenrir"){
            const result = roulerDe();
            //calcule les degats en fonction du resultat du dés
            const degats = calculerDegats(result);
            //affiche les degats
            fenrir.perdreHp(degats);
            msg.reply(`Vous avez fait un ${result} et infligez ${degats} points de degats\n${afficherHp(fenrir)}`);
            if (fenrir.getHp() <= 0){
                msg.reply(`Vous avez vaincu ${fenrir.nom} !`);
                fenrir.hp = 200;
            }
        }
        else if (msg.content === "/elfenoire"){
            const result = roulerDe();
            //calcule les degats en fonction du resultat du dés
            const degats = calculerDegats(result);
            //affiche les degats
            elfenoire.perdreHp(degats);
            msg.reply(`Vous avez fait un ${result} et infligez ${degats} points de degats\n${afficherHp(elfenoire)}`);
            if (elfenoire.getHp() <= 0){
                msg.reply(`Vous avez vaincu ${elfenoire.nom} !`);
                elfenoire.hp = 150;
            }
        }
        else if (msg.content === "/resetfight"){
            goblin.hp = 20;
            gardien.hp = 200;
            fenrir.hp = 200;
            elfenoire.hp = 150;
            msg.reply(` ${afficherHp(goblin)}\n${afficherHp(gardien)}\n${afficherHp(fenrir)}\n${afficherHp(elfenoire)}`);
        }
    });

//recuperer les message privé et les afficher dans la console
client.on('messageCreate', msg => {
    if (msg.channel.type === 'DM') {
        console.log(`DM received from ${msg.author.tag}: ${msg.content}`);
    }
});

client.on('messageCreate', async msg => {
    if (msg.content.startsWith('/clearmsg')){
        if(!msg.member.permissions.has("MANAGE_MESSAGES")){
            return msg.channel.send("Vous n'avez pas la permission d'utiliser cette commande");
        }
        let args = msg.content.split(" ");
        if(args.length !== 2 || isNaN(args[1])){
            return msg.channel.send("Veuillez indiquer le nombre de messages à supprimer");
        }
        const amount = parseInt(args[1]);
        if(amount < 1 || amount > 99){
            return msg.channel.send("Le nombre de message doit être compris entre 1 et 99");
        }
        const fetched = await msg.channel.messages.fetch({limit: amount});
        msg.channel.bulkDelete(fetched)
            .catch(error => msg.channel.send(`Erreur lors de la suppression des messages : ${error}`));
    }
});

client.login(config.token);
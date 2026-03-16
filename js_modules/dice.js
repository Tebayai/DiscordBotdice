//Initialisation différent dés simple D20, D100, D5
function rollDice20(msg){
    const dice20 = Math.floor(Math.random() * 20) + 1;
    msg.reply(`Vous avez fait un ${dice20}`);
}

function rollDice100(msg){
    const dice100 = Math.floor(Math.random() * 100) + 1;
    msg.reply(`Vous avez fait un ${dice100}`);
}

function rollDice5(msg){
    const dice5 = Math.floor(Math.random() * 5) + 1;
    msg.reply(`Vous avez fait un ${dice5}`);
}

module.exports = {
    rollDice20,
    rollDice100,
    rollDice5
};




/* function rollDice20(msg) {
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

function rollDice100(msg) {
    const dice = Math.floor(Math.random() * 100) + 1;
    msg.reply(`Vous avez fait un ${dice}`);
}

function rollDice5(msg) {
    const dice = Math.floor(Math.random() * 5) + 1;
    msg.reply(`Vous avez fait un ${dice}`);
}

function dragonDice(msg) {
    const dice = Math.floor(Math.random() * 20) + 1;

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

module.exports = {
    rollDice20,
    rollDice100,
    rollDice5,
    dragonDice
};

 */



























/* if (msg.content === "/d20") {
    const dice = Math.floor(Math.random() * 20) + 1;
    msg.reply(`Vous avez fait un ${dice}`);
}


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
} */
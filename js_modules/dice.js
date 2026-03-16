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

function rollDice3(msg){
    const dice3 = Math.floor(Math.random() * 3) + 1;
    msg.reply(`Vous avez fait un ${dice3}`);
}


//Initialisation différents dés spécifiques 5d100, 10d20, 5d5
function rollDice5d100(msg){
    const dice1 = Math.floor(Math.random() * 100) + 1;
    const dice2 = Math.floor(Math.random() * 100) + 1;
    const dice3 = Math.floor(Math.random() * 100) + 1;
    const dice4 = Math.floor(Math.random() * 100) + 1;
    const dice5 = Math.floor(Math.random() * 100) + 1;
    msg.reply(`5 dés 100: ${dice1} ${dice2} ${dice3} ${dice4} ${dice5}`)
}

function rollDice10d20(msg){
    const dice1 = Math.floor(Math.random() * 20) + 1;
    const dice2 = Math.floor(Math.random() * 20) + 1;
    const dice3 = Math.floor(Math.random() * 20) + 1;
    const dice4 = Math.floor(Math.random() * 20) + 1;
    const dice5 = Math.floor(Math.random() * 20) + 1;
    const dice6 = Math.floor(Math.random() * 20) + 1;
    const dice7 = Math.floor(Math.random() * 20) + 1;
    const dice8 = Math.floor(Math.random() * 20) + 1;
    const dice9 = Math.floor(Math.random() * 20) + 1;
    const dice10 = Math.floor(Math.random() * 20) + 1;
    msg.reply(`10 dés 20: ${dice1} ${dice2} ${dice3} ${dice4} ${dice5} ${dice6} ${dice7} ${dice8} ${dice9} ${dice10}`)
}

function rollDice5d5(msg){
    const dice1 = Math.floor(Math.random() * 5) + 1;
    const dice2 = Math.floor(Math.random() * 5) + 1;
    const dice3 = Math.floor(Math.random() * 5) + 1;
    const dice4 = Math.floor(Math.random() * 5) + 1;
    const dice5 = Math.floor(Math.random() * 5) + 1;
    msg.reply(`5 dés 5: ${dice1} ${dice2} ${dice3} ${dice4} ${dice5}`)
}


//exportation des fonctions pour les utiliser dans discord.js
module.exports = {
    rollDice20,
    rollDice100,
    rollDice5,
    rollDice3,
    rollDice5d100,
    rollDice10d20,
    rollDice5d5
};

/*

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

    if(msg.content === "/startrp"){
        msg.reply(`Bienvenue dans l'aventure ! Que le destin guide tes pas et que la chance soit avec toi. Prépare-toi à vivre des moments épiques et à relever des défis passionnants. Que les dés roulent en ta faveur !`);
    }
    //lance 3 dés de 20
    if(msg.content === "/3d20") {
        const dice100_1 = Math.floor(Math.random() * 20) + 1;
        const dice100_2 = Math.floor(Math.random() * 20) + 1;
        const dice100_3 = Math.floor(Math.random() * 20) + 1;
        msg.reply(`Vous avez fait un ${dice100_1}, ${dice100_2}, ${dice100_3}`);
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
     */
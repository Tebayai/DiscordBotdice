

  //creation gestion de combat avec barre de vie 
  //creer une structure pour gere les information du personnage

/* class Personnage{
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
    }); */
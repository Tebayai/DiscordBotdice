// js_modules/fight.js
const fights = new Map(); // combats actifs par channel

// Classe pour un ennemi
class Enemy {
    constructor(name, hp) {
        this.name = name;
        this.maxHp = hp;
        this.hp = hp;
    }

    takeDamage(amount) {
        this.hp -= amount;
        if (this.hp < 0) this.hp = 0;
    }

    isDead() {
        return this.hp <= 0;
    }

    getHpBar(length = 20) {
        const filled = Math.round((this.hp / this.maxHp) * length);
        const empty = length - filled;
        const bar = '█'.repeat(filled) + '░'.repeat(empty);
        return `${this.name}: ${bar} ${this.hp}/${this.maxHp}HP`;
    }
}

// Crée un combat dans un channel
function startFight(channel, enemiesString) {
    // Exemple : "goblin,40 loup,20"
    const enemiesArray = enemiesString.split(' ');
    const enemies = enemiesArray.map(e => {
        const [name, hpStr] = e.split(',');
        return new Enemy(name, parseInt(hpStr));
    });

    fights.set(channel.id, enemies);

    let message = "**Combat lancé !**\n";
    enemies.forEach(e => message += e.getHpBar() + '\n');
    channel.send(message);
}

// Attaque un ennemi avec un dé 20
function dfight(channel, targetName) {
    if (!fights.has(channel.id)) {
        return channel.send("Aucun combat en cours dans ce channel !");
    }

    const enemies = fights.get(channel.id);
    const target = enemies.find(e => e.name.toLowerCase() === targetName.toLowerCase());
    if (!target) return channel.send(`Aucun ennemi nommé "${targetName}" trouvé !`);

    const dice = Math.floor(Math.random() * 20) + 1;
    let damage = dice === 20 ? 20 : dice === 1 ? 1 : dice;

    target.takeDamage(damage);

    // Message résultat attaque
    let msg = `${target.name} a reçu ${damage} dégâts !\n`;

    enemies.forEach(e => {
        msg += e.isDead() ? `${e.name}: mort\n` : e.getHpBar() + '\n';
    });

    channel.send(msg);

    // Vérifier si tous morts
    if (enemies.every(e => e.isDead())) {
        channel.send("🎉 Félicitations ! Tous les ennemis sont morts !");
        fights.delete(channel.id);
    }
}

module.exports = { startFight, dfight };
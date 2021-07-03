class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    init() {}
    preload() {}
    create() {
        this.sound.play('playBGMF');
    }
    update() {}
    // This collision function will run a specific function depending on 
    //what two object are colliding
    checkCollision(player, object, resultFunction) {
        if(player.x < object.x + object.width &&
            player.x + player.width > object.x &&
            player.y < object.y + object.height &&
            player.height + player.y > y)
            { resultFunction};
    }
    monsterCollision() {
        //returns the player to menu upon colliding with the monster
        this.scene.play("menuScene");
    }
}
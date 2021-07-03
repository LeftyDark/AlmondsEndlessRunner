class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    init() {}
    preload() {
        this.load.image('ground','./assets/Sprites/placeholder_ground.png');
        this.load.image('player', './assets/Sprites/noun_runningman_20.png');
        //running person by Kathleen Black from the Noun Project
        this.load.image('obstacle', './assets/Sprites/placeholder_obstacle_20.png');
        //obstacle by Ian Rahmadi Kurniawan from the Noun Project
        this.load.image('monster', './assets/Sprites/placeholder_deathbox.png');
    }

    create() {
        this.sound.play('playBGMF');
        this.MAX_VELOCITY = 500;
        this.physics.world.gravity.y = 1000;
        this.cameras.main.setBackgroundColor('#CCC');

        //creating ground
        this.ground = this.add.group();
        for( let i = 0; i < game.config.width; i += 20) {
            let groundTile = this.physics.add.sprite(i, game.config.height - 20, 'ground').setOrigin(0);
            groundTile.body.immovable = true;
            groundTile.body.allowGravity = false;
            this.ground.add(groundTile);
        }
        this.player = this.physics.add.sprite(game.config.width/2, game.config.height-100, 'player');
        this.physics.add.collider(this.player, this.ground);
        this.obstacle = this.physics.add.sprite(game.config.width*0.8, game.config.height-100, 'obstacle');
        this.physics.add.collider(this.obstacle, this.ground);
        this.airObstacle = this.physics.add.sprite(game.config.width*0.8, game.config.height-350, 'obstacle');
        this.airObstacle.body.allowGravity = false;
        this.monster = this.physics.add.sprite(game.config.width-590, game.config.height-260, 'monster');
        this.physics.add.collider(this.monster, this.ground);
    }
    update() {}
    // This collision function will run a specific function depending on 
    //what two object are colliding
    checkCollision(object1, object2, resultFunction) {
        if(object1.x < object2.x + object2.width &&
            object1.x + object1.width > object2.x &&
            object1.y < object2.y + object2.height &&
            object1.height + object1.y > y)
            { resultFunction(object1, object2)};
    }
    monsterPlayerCollision(player, monster) {
        //returns the player to menu upon colliding with the monster
        this.scene.play("menuScene");
    }
    monsterObstacleCollision(obstacle, monster) {
        //Need to make this delete the obstacle
    }
}
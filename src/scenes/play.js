class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    init() {}
    preload() {
        this.load.image('ground','./assets/Sprites/placeholder_ground.png');
        this.load.image('player', './assets/Sprites/noun_runningman_10.png');
        this.load.spritesheet('playerSprite', './assets/Sprites/beanman-running.png', {frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 7});
        //running person by Kathleen Black from the Noun Project
        this.load.image('obstacle', './assets/Sprites/enemy_bean-export.png');
        this.load.image('monster', './assets/Sprites/placeholder_deathbox.png');
    }

    create() {
        gameBGM = this.sound.add('playBGMF');
        gameBGM.loop = true;
        gameBGM.play();
        this.sound.play('playBGMF');
        this.ACCELERATION = 500;
        this.MAX_X_VEL = 500;
        this.MAX_Y_VEL =  5000;
        this.JUMP_VELOCITY = -1000;
        this.physics.world.gravity.y = 1000;
        this.cameras.main.setBackgroundColor('#CCC');

        //defining jump key
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        //creating ground
        this.ground = this.add.group();
        for( let i = 0; i < game.config.width; i += 20) {
            let groundTile = this.physics.add.sprite(i, game.config.height - 20, 'ground').setOrigin(0);
            groundTile.body.immovable = true;
            groundTile.body.allowGravity = false;
            this.ground.add(groundTile);
        }
        //creating the different objects in scene. 
        this.player = new Player(this, game.config.width/2, game.config.height-100, 'playerSprite');
        this.player.setCollideWorldBounds(true);
        this.physics.add.collider(this.player, this.ground);
        this.monster = this.physics.add.sprite(game.config.width-590, game.config.height-260, 'monster');
        this.monster.body.immovable = true;
        this.monster.body.allowGravity = false;
        this.physics.add.collider(this.monster, this.ground);

        //creating the animations
        this.moveAni = this.anims.create({
            key: 'playerMove',
            frames: this.anims.generateFrameNumbers('playerSprite', { start: 0, end: 7, first: 0}),
            frameRate: 8,
            repeat: -1
        });
        this.player.anims.play('playerMove', 8, true);

        //creating lists of ground and air obstacles
        gObstacleList = []
        aObstacleList = []
        this.gObstacleTimer = this.time.addEvent(
            {
                delay: 3000,
                callback: ()=> this.CreateGroundObstacle(),
                callbackScope: this,
                loop: true,
            }
        )
        this.aObstacleTimer = this.time.addEvent(
            {
                delay: 2500,
                callback: ()=> this.CreateAirObstacle(),
                callbackScope: this,
                loop: true,
            }
        )
        this.CreateGroundObstacle();
        this.CreateAirObstacle();
    }
    update() {
        this.player.update();
        gObstacleList.forEach(obstacle => this.obstacleDelete(obstacle, this.monster));
        aObstacleList.forEach(obstacle => this.obstacleDelete(obstacle, this.monster));
        gObstacleList.forEach(obstacle => this.pushPlayer(this.player, obstacle));
        aObstacleList.forEach(obstacle => this.dropPlayer(this.player, obstacle));
        this.gameOver(this.player, this.monster);
    }
    // This function will delete an obstacle when it collides with the monster at the edge of the screen.
    //It has a slight bug where if the two obstacles are both colliding at the same time, it will fail to delete 1 of them.
    obstacleDelete(object1, object2) {
        if (object1.x < object2.x + object2.width && 
            object1.x + object1.width > object2.x && 
            object1.y < object2.y + object2.height &&
            object1.height + object1.y > object2. y) {
                object1.destroy();
        } else {
            return false;
        }
    }
    gameOver(player, monster) {
        //returns the player to menu upon colliding with the monster
        if (player.x < monster.x + monster.width && 
            player.x + player.width > monster.x && 
            player.y < monster.y + monster.height &&
            player.height + player.y > monster. y) {
                this.sound.stopAll();
                this.scene.start("menuScene");
        } else {
            return false;
        }
    }
    pushPlayer(player, gObstacle) {
        //function for player getting pushed while they are colliding with a ground obstacle
        if (player.x < gObstacle.x + gObstacle.width && 
            player.x + player.width > gObstacle.x && 
            player.y < gObstacle.y + gObstacle.height &&
            player.height + player.y > gObstacle. y) {
                player.setVelocityX(gObstacle.moveSpeed);
        } else {
            player.setVelocityX(0);
        }
    }
    dropPlayer(player, aObstacle) {
        //function for player falling after they collide with an air obstacle
        if (player.x < aObstacle.x + aObstacle.width && 
            player.x + player.width > aObstacle.x && 
            player.y < aObstacle.y + aObstacle.height &&
            player.height + player.y > aObstacle. y) {
                player.setVelocityY(50);
    } else { return false;}
    }
    CreateGroundObstacle() {
        //generates a new Ground Obstacle
        this.gObstacle = new Obstacle(this, game.config.width*0.8, game.config.height-100, 'obstacle');
        this.gObstacle.setVelocityX(this.gObstacle.moveSpeed);
        this.physics.add.collider(this.gObstacle, this.ground);
        gObstacleList.push(this.gObstacle);
    }
    CreateAirObstacle() {
        //generates a new Air Obstacle
        this.aObstacle = new Obstacle(this, game.config.width*0.9, game.config.height-400, 'obstacle');
        this.aObstacle.setVelocityX(this.aObstacle.moveSpeed-20);
        this.aObstacle.body.allowGravity = false;
        aObstacleList.push(this.aObstacle);
    }
}
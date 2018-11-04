import 'phaser'
import Keyboard = Phaser.Input.Keyboard;

export default class Main extends Phaser.Scene {
    constructor(config: GameConfig) {
        super(config);
    }

    preload(): void {
        this.load.image('logo', 'assets/logo.png');
    }

    create(): void {
        let logo = this.add.image(450, 100, 'logo');
        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: 'Power2',
            yoyo: true,
            loop: -1
        });
    }

    update(): void {

    }
}

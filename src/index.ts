import 'phaser';
import Main from './Main';

new Phaser.Game({
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: [
        Main
    ]
});

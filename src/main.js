/*
Name :Erick Tung
Project name: EVIL CUPIT
date: 4 /11
time take : more than 10 hr
*/

/*
Implement the speed increase that happens after 30 seconds in the original game (5)
Randomize each spaceship's movement direction at the start of each play (5)
Add your own (copyright-free) background music to the Play scene (5)
Create a new scrolling tile sprite for the background (5)
Allow the player to control the Rocket after it's fired (5)
Replace the UI borders with new artwork (10)
Create a new title screen (e.g., new artwork, typography, layout) (10)
Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20)
Create new artwork for all of the in-game assets (rocket, spaceships, explosion) (20) 
Create and implement a new weapon (w/ new behavior and graphics) (20)
Implement a simultaneous two-player mode (30)
*/
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height /15;
let borderPadding = borderUISize /3;

// reserve keyboard variables
let keyL, keyR, keyLEFT, keyRIGHT,keyG,keyF,keyA,keyD;

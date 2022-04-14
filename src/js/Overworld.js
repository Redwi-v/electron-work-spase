import GameObject from './GameObject';
import OverworldMap from './OverworldMap';
import DirectionInput from './user_Interfase/DirectionInput';
//images
import DemoLower from '../images/maps/DemoLower.png';
import heroAsset from '../images/characters/people/hero.png';
import shadowSrc from '../images/characters/shadow.png';
import npc1Src from '../images/characters/people/npc1.png';

export default class Overworld {
	constructor(config) {
		this.canvas = config.canvas;
		this.ctx = this.canvas.getContext('2d');
	}

	startGameLoop() {
		const step = () => {
			//Clerar off the canvas
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

			//Draw Lower layer
			this.map.drawLowerImage(this.ctx);

			//Draw overworld Objects
			Object.values(this.map.gameObjecs).forEach(object => {
				object.update({
					arrow: this.directionIput.direction,
				});
				object.sprite.draw(this.ctx);
			});

			//Draw Upper layer
			this.map.drawUpperImage(this.ctx);

			requestAnimationFrame(() => {
				step();
			});
		};
		step();
	}

	init() {
		this.map = new OverworldMap(window.OverworldMaps.DemoRoom);
		this.directionIput = new DirectionInput();
		this.directionIput.init();
		// this.directionIput.direction;

		this.startGameLoop();
	}
}

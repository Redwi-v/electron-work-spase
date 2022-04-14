import GameObject from './GameObject';
import utils from './utils';
import Person from './Person';
//images
import DemoRoomLowerSrc from '../images/maps/DemoLower.png';
import DemoRoomUpperSrc from '../images/maps/DemoUpper.png';
import KeatchenLower from '../images/maps/KitchenLower.png';
import KeatchenUpper from '../images/maps/KitchenUpper.png';
import npc1Src from '../images/characters/people/npc1.png';

export default class OverworldMap {
	constructor(config) {
		this.gameObjecs = config.gameObjecs;

		this.lowerImage = new Image();
		this.lowerImage.src = config.lowerSrc;

		this.upperImage = new Image();
		this.upperImage.src = config.upperSrc;
	}

	drawLowerImage(ctx) {
		ctx.drawImage(this.lowerImage, 0, 0);
	}

	drawUpperImage(ctx) {
		ctx.drawImage(this.upperImage, 0, 0);
	}
}

window.OverworldMaps = {
	DemoRoom: {
		lowerSrc: DemoRoomLowerSrc,
		upperSrc: DemoRoomUpperSrc,
		gameObjecs: {
			hero: new Person({
				x: utils.withGrid(5),
				y: utils.withGrid(6),
				isPlayerControlled: true,
			}),

			npc1: new Person({
				x: utils.withGrid(7),
				y: utils.withGrid(9),
				src: npc1Src,
			}),
		},
	},

	Kitchen: {
		lowerSrc: KeatchenLower,
		upperSrc: KeatchenUpper,
		gameObjecs: {
			hero: new GameObject({
				x: 5,
				y: 6,
			}),

			npc1: new GameObject({
				x: 3,
				y: 6,
				src: npc1Src,
			}),
		},
	},
};

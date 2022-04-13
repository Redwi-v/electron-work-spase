import DemoLower from '../images/maps/DemoLower.png';
import heroAsset from '../images/characters/people/hero.png';

export default class Overworld {
	constructor(config) {
		this.canvas = config.canvas;
		this.ctx = this.canvas.getContext('2d');
	}

	init() {
		const image = new Image();
		image.onload = () => {
			this.ctx.drawImage(image, 0, 0);
		};
		image.src = DemoLower;

		const hero = new Image();
		hero.onload = () => {
			this.ctx.drawImage(
				hero,
				0, //left cut
				0, //top cut
			);
		};
		hero.src = heroAsset;
	}
}

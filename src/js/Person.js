import GameObject from './GameObject';

export default class Person extends GameObject {
	constructor(config) {
		super(config);
		this.movingProgressRemining = 0;

		this.direction = 'left';

		this.directionUpdate = {
			up: ['y', -1],
			down: ['y', 1],
			left: ['x', -1],
			right: ['x', 1],
		};

		this.isPlayerControlled = config.isPlayerControlled || false;
	}

	update(state) {
		this.updatePosition();

		if (this.isPlayerControlled && this.movingProgressRemining === 0 && state.arrow) {
			this.direction = state.arrow;
			this.movingProgressRemining = 1;
		}
	}

	updatePosition() {
		if (this.movingProgressRemining > 0) {
			const [property, change] = this.directionUpdate[this.direction];
			this[property] += change;
			this.movingProgressRemining -= 1;
		}
	}
}

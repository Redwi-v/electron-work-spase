import { useEffect, useRef } from 'react';
import style from './game.module.scss';
import Overworld from '../../js/Overworld';

const Game = props => {
	const canvas = useRef(null);

	useEffect(() => {
		if (canvas) {
			const overworld = new Overworld({
				canvas: canvas.current,
			});
			overworld.init();
		}
	}, [canvas]);

	return (
		<div className={style.game}>
			<canvas className={style.canvas} ref={canvas} width='352' height='198'></canvas>
		</div>
	);
};

export default Game;

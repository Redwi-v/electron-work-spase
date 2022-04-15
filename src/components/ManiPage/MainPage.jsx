import { NavLink } from 'react-router-dom';
import style from './mainPage.module.scss';

const MainPage = props => {
	return (
		<div className='container'>
			<menu className={style.menu}>
				<NavLink className={style.link} to='game'>
					game
				</NavLink>
				<NavLink className={style.link} to='about'>
					About
				</NavLink>
				<NavLink className={style.link} to=''>
					Exit
				</NavLink>

				<button id='close'>close</button>
			</menu>
		</div>
	);
};

export default MainPage;

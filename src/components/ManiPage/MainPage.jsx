import { NavLink } from 'react-router-dom';

const MainPage = props => {
	return (
		<div className=''>
			<menu className='menu'>
				<NavLink to='game'>game</NavLink>
				<NavLink to='game'>game</NavLink>
				<NavLink to='game'>game</NavLink>
			</menu>
		</div>
	);
};

export default MainPage;

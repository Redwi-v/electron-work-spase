import { Route, Routes } from 'react-router-dom';
import Game from './components/Game/Game';
import MainPage from './components/ManiPage/MainPage';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/game' element={<Game />} />
			</Routes>
		</div>
	);
}

export default App;

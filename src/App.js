import { Route, Routes } from 'react-router-dom';
import Game from './components/Game/Game';
import MainPage from './components/ManiPage/MainPage';
import About from './components/About/About';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/game' element={<Game />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</div>
	);
}

export default App;

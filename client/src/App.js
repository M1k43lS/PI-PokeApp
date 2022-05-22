import './App.css';
import { Route, Switch } from 'react-router';
import Home from './components/Home/Home';
import PokeCreate from './components/PokeCreate/PokeCreate';
import LandingPage from './components/Landing/landing';
import Error from './components/Error/Error';
import Detail from './components/Detail/Detail';
function App() {
	return (
		<div >
			<Switch>
				<Route exact path='/'>
					<LandingPage />
				</Route>
				<Route path='/home'>
					<Home />
				</Route>
				<Route path='/create'>
					<PokeCreate />
				</Route>
				<Route path='/pokemons/:id'>
					<Detail />
				</Route>
				<Route>
					<Error />
				</Route>
			</Switch>
		</div>
	);
}

export default App;

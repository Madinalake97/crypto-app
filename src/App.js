import { React, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { ThemeProvider } from './context/ThemeContext';
import Home from './routes/Home';
import SignUp from './routes/SignUp';
import SignIn from './routes/SignIn';
import Account from './routes/Account';
import CoinPage from './routes/CoinPage';
import axios from 'axios';
import Footer from './components/Footer';
import { AuthContextProvider } from './context/AuthContext';

function App() {
	const [coin, setCoin] = useState([]);

	const url =
		'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true';

	useEffect(() => {
		axios.get(url).then((response) => {
			setCoin(response.data);
			// console.log(response.data);
		});
	}, [url]);
	return (
		<ThemeProvider>
			<AuthContextProvider>
				<NavBar />
				<Routes>
					<Route path='/' element={<Home coins={coin} />} />
					<Route path='/signin' element={<SignIn />} />
					<Route path='/signup' element={<SignUp />} />
					<Route path='/account' element={<Account />} />
					<Route path='/coin/:coinId' element={<CoinPage />}>
						<Route path=':coinId' />
					</Route>
				</Routes>
				<Footer />
			</AuthContextProvider>
		</ThemeProvider>
	);
}

export default App;

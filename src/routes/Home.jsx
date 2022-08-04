import React from 'react';
import CoinSearch from '../components/CoinSearch';
import Trending from '../components/Trending';

const Home = ({ coins }) => {
	// console.log(coins);
	return (
		<>
			<CoinSearch coins={coins} />
			<Trending />
		</>
	);
};

export default Home;

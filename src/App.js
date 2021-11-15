//essential imports
import { useState, useEffect } from 'react';

//API imports
import { API } from './config.js';

//Component imports
import Table from './components/Table/Table';
import TableRow from './components/TableRow/TableRow';

//Style imports
import styles from './App.module.scss';

function App() {

	const [houses, setHouses] = useState([]);
	const [activeHouse, setActiveHouse] = useState({});

	useEffect(() => {
		fetch(API)
			.then(response => response.json())
			.then(response => setHouses(response))
	}, [])

	function setActiveHouseOnClick(house) {
		setActiveHouse(house)
	}

	return (
		<div className={ styles.app }>
			<Table>
				{
					houses.map((house, i) => (
						<TableRow key={i} onClick={() => setActiveHouseOnClick(house)}>{house.name}</TableRow>
					))
				}
			</Table>
			<div>
				{ activeHouse.name }
			</div>
		</div>
	);
}

export default App;

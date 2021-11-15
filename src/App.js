//essential imports
import { useState, useEffect } from 'react';

//API imports
import { API } from './config.js';
import fetchData from './hooks/fetchData';

//Component imports
import Table from './components/Table/Table';
import TableRow from './components/TableRow/TableRow';
import DetailView from './components/DetailView/DetailView';

//Style imports
import styles from './App.module.scss';

function App() {

	const [houses, setHouses] = useState([]);
	const [activeHouse, setActiveHouse] = useState({});
	const [founderName, setFounderName] = useState();
	const [currentLord, setCurrentLord] = useState();
	const [overlord, setOverlord] = useState();
	const [heir, setHeir] = useState();
	const [swornMembers, setSwornMembers] = useState([]);
	const [cadetBranches, setCadetBranches] = useState([]);
	const [seats, setSeats] = useState([]);
	const [titles, setTitles] = useState([]);
	const [ancestralWeapons, setAncestralWeapons] = useState([]);

	useEffect(() => {
		fetch(API)
			.then(response => response.json())
			.then(response => setHouses(response))
	}, [])

	useEffect(() => {
		fetchData(activeHouse.founder)
			.then(response => setFounderName(response.name))
			.catch(err => {
				setFounderName("")
			})

		fetchData(activeHouse.currentLord)
			.then(response => setCurrentLord(response.name))
			.catch(err => {
				setCurrentLord("")
			})

		fetchData(activeHouse.overlord)
			.then(response => setOverlord(response.name))
			.catch(err => {
				setOverlord("")
			})

		fetchData(activeHouse.heir)
			.then(response => setHeir(response.name))
			.catch(err => {
				setHeir("")
			})

		if (Object.keys(activeHouse).length > 0) {
			// get all sworn members if there are any
			if (activeHouse.swornMembers.length > 0) {
				Promise.all(activeHouse.swornMembers.map(url =>
					fetch(url).then(response => response.json())
				)).then(members => {
					let memberArray = members.map(member => member.name)

					setSwornMembers(memberArray)
				}).catch(err => {
					console.warn(err)
				})
			} else {
				setSwornMembers([])
			}

			// get all cadet branches if there are any
			if (activeHouse.cadetBranches.length > 0) {
				Promise.all(activeHouse.cadetBranches.map(url =>
					fetch(url).then(response => response.json())
				)).then(branches => {
					let branchesArray = branches.map(branch => branch.name)

					setCadetBranches(branchesArray)
				}).catch(err => {
					console.warn(err)
				})
			} else {
				setCadetBranches([])
			}

			// clear out empty array if there are no titles
			let titleArray = activeHouse.titles.filter(title => title)
			setTitles(titleArray)

			// clear out empty array if there are no seats
			let seatArray = activeHouse.seats.filter(seat => seat)
			setSeats(seatArray)

			// clear out empty array if there are no ancestral weapons
			let ancestralWeaponArray = activeHouse.ancestralWeapons.filter(weapon => weapon)
			setAncestralWeapons(ancestralWeaponArray)
		}

	}, [activeHouse])

	function setActiveHouseOnClick(house) {
		setActiveHouse(house)
	}

	function closeActiveHouse() {
		setActiveHouse({})
		setSwornMembers([])
		setCadetBranches([])
		setTitles([])
		setSeats([])
		setAncestralWeapons([])
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
			<DetailView
				isActive={Object.keys(activeHouse).length > 0}
				houseName={activeHouse.name}
				houseRegion={activeHouse.region}
				coatOfArms={activeHouse.coatOfArms}
				words={activeHouse.words}
				founder={founderName}
				founded={activeHouse.founded}
				currentLord={currentLord}
				overlord={overlord}
				heir={heir}
				swornMembers={swornMembers}
				cadetBranches={cadetBranches}
				ancestralWeapons={ancestralWeapons}
				seats={seats}
				titles={titles}
				onClick={() => closeActiveHouse()}
			/>
		</div>
	);
}

export default App;

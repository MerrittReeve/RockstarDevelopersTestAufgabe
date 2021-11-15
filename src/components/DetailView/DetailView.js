//Essential imports
import React from 'react';
import propTypes from 'prop-types';

//Style imports
import styles from './DetailView.module.scss';

function DetailView({
	houseName,
	houseRegion,
	coatOfArms,
	words,
	titles,
	seats,
	currentLord,
	heir,
	overlord,
	founded,
	founder,
	diedOut,
	ancestralWeapons,
	cadetBranches,
	swornMembers,
	onClick,
	isActive
}) {
	return (
		<div className={`${styles.detail} ${isActive ? styles['detail-open'] : ''}`}>
			<button className={`${styles.close} ${isActive ? styles['is-active'] : ''}`} onClick={onClick}>X</button>
			<div>
				{houseName ? <h3>House Name: {houseName}</h3> : null}
				{houseRegion ? <h4>Region Name: {houseRegion}</h4> : null}
				{coatOfArms ? <p>Coat of Arms: {coatOfArms}</p> : null}
			</div>
			<div>
				{words ? <p>Words: {words}</p> : null}
				{titles.length > 0 ? <p>Titles: {titles.join(", ")}</p> : null}
				{seats.length > 0 ? <p>Seats: {seats.join(", ")}</p> : null}
			</div>
			<div>
				{currentLord ? <p>Current Lord: {currentLord}</p> : null}
				{heir ? <p>Heir: {heir}</p> : null}
				{overlord ? <p>Overlord: {overlord}</p> : null}
			</div>
			<div>
				{founded ? <p>Founded: {founded}</p> : null}
				{founder ? <p>Founder: {founder}</p> : null}
				{diedOut ? <p>Died Out: {diedOut}</p> : null}
			</div>
			<div>
				{ancestralWeapons.length > 0 ? <p>Ancestral Weapons: {ancestralWeapons.join(", ")}</p> : null}
				{cadetBranches.length > 0 ? <p>Cadet Branches: {cadetBranches.join(", ")}</p> : null}
				{swornMembers.length > 0 ? <p>Sworn Members: {swornMembers.join(", ")}</p> : null}
			</div>
		</div>
	)
}

DetailView.propTypes = {
	titles: propTypes.array,
	seats: propTypes.array,
	ancestralWeapons: propTypes.array,
	cadetBranches: propTypes.array,
	swornMembers: propTypes.array,
}

DetailView.defaultProps = {
	titles: [],
	seats: [],
	ancestralWeapons: [],
	cadetBranches: [],
	swornMembers: [],
}

export default DetailView;
//Essential imports
import React from 'react';
import propTypes from 'prop-types';

//Style imports
import styles from './Table.module.scss';

function Table({ children }) {
	return (
		<table className={ styles.table }>
			<tbody className={ styles.body }>
				{children}
			</tbody>
		</table>
	)
}

Table.propTypes = {
	children: propTypes.any
}

export default Table;
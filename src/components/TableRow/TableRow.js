//Essential imports
import React from 'react';
import propTypes from 'prop-types';

//Style imports
import styles from './TableRow.module.scss';

function TableRow({ children, onClick }) {
	return (
		<tr className={styles.row} onClick={ onClick }>
			<td className={ styles.data }>{children}</td>
		</tr>
	)
}

TableRow.propTypes = {
	children: propTypes.any,
	onClick: propTypes.func,
}

TableRow.defaultProps = {
	onCLick: () => { }
}

export default TableRow;
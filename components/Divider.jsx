import React from 'react';
import styles from './Divider.module.css';

const Divider = () => {
	return (
		<div className={styles.dividerContainer}>
			<div className="container">
				<div
					style={{
						borderTop: '1px solid #AAAAAA',
						width: '100%',
						height: '1px',
					}}
				/>
			</div>
		</div>
	);
};

export default Divider;

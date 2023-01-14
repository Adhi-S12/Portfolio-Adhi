import React from 'react';
import styles from './WantToWork.module.css';

const WantToWork = () => {
	return (
		<footer id="contact" className={styles.wanttoworkcontainer}>
			<div className="container">
				<div className={styles.flexcontainer}>
					<h5 className={styles.sectionTitle}>Want to work?</h5>
					<p className={styles.sectionSubtitle}>
						If you need a modern and powerful website for your business startup
						or personally, I am available for work. You can email me directly at{' '}
						<span className={styles.highlight}>
							adhipathipandiyan.s12@gmail.com
						</span>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default WantToWork;

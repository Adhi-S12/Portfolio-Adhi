import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
	return (
		<div className={styles.navContainer}>
			<header className="container">
				<div className={styles.navbar}>
					<h2 className={styles.logo}>Adhi</h2>
					<nav>
						<ul className={styles.navList}>
							<li className={styles.navItem}>My Work</li>
							<li className={styles.navItem}>Get In Touch</li>
						</ul>
					</nav>
				</div>
			</header>
		</div>
	);
};

export default Navbar;

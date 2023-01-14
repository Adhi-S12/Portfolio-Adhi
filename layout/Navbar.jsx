import React from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
	return (
		<div className={styles.navContainer}>
			<header className="container">
				<div className={styles.navbar}>
					<h2 className={styles.logo}>
						<Link href="/">Adhi</Link>
					</h2>
					<nav>
						<ul className={styles.navList}>
							<li className={styles.navItem}>
								<Link href="/projects">My Work</Link>
							</li>
							<li className={styles.navItem}>
								<Link href="#contact">Get In Touch</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</div>
	);
};

export default Navbar;

import React from 'react';
import styles from './HeroSection.module.css';
import Button from '../components/Button';

const HeroSection = () => {
	return (
		<section className={styles.heroContainer}>
			<div className="container">
				<h1 className={styles.title}>
					Hi, I’m Adhi, Web <span className={styles.highlight}>Designer </span>
					and Full-Stack <span className={styles.highlight}>Developer</span>
				</h1>
				<p className={styles.subtitle}>
					I design and build beautiful websites for businesses around the world.
					If you need a modern and powerful website send me an email. If we are
					a good fit, I’ll send you a time and cost estimate.
				</p>
				<Button text="See My Work" marginBottom={150} marginTop={40} />
			</div>
		</section>
	);
};

export default HeroSection;

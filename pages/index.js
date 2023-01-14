import React from 'react';
import Head from 'next/head';
import styles from '../styles/Main.module.css';
import Navbar from '../layout/Navbar';
import Divider from '../components/Divider';
import HeroSection from '../layout/HeroSection';
import SkillsSection from '../layout/SkillsSection';
import LatestWork from '../layout/LatestWork';
import WantToWork from '../layout/WantToWork';

export default function Home() {
	return (
		<React.Fragment>
			<Head>
				<title>Adhi - Web Developer & Designer Portfolio</title>
				<meta
					name="description"
					content="Adhipathi Pandiyan - Portfolio website showcasing the products I created as a web designer and developer"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<Navbar />
				<Divider marginTop={0} marginBottom={150} />
				<HeroSection />
				<Divider marginTop={150} marginBottom={100} />
				<SkillsSection />
				<Divider marginTop={0} marginBottom={0} />
				<LatestWork />
				<Divider />
				<WantToWork />
				<Divider />
				<p className={styles.copyright}>© All rights reserved - Adhi</p>
			</main>
		</React.Fragment>
	);
}

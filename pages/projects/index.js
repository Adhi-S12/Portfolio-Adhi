import React from 'react';
import Head from 'next/head';
import Navbar from '../../layout/Navbar';
import styles from '../../styles/Main.module.css';
import Divider from '../../components/Divider';
import ProjectsPage from '../../layout/ProjectsPage';

const Projects = () => {
	return (
		<React.Fragment>
			<Head>
				<title>Portfolio - Adhi - Web Developer & Designer</title>
			</Head>
			<main className={styles.main}>
				<Navbar />
				<Divider />
				<ProjectsPage />
			</main>
		</React.Fragment>
	);
};

export default Projects;

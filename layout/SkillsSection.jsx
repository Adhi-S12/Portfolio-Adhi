import React from 'react';
import styles from './SkillsSection.module.css';
import Image from 'next/image';
import webdesignicon from '../public/assets/WebDesign.png';
import backendicon from '../public/assets/Backend.png';
import frontendicon from '../public/assets/Frontend.png';

const Card = ({
	title = 'Title',
	content = 'Content',
	icon = { webdesignicon },
}) => {
	return (
		<div className={styles.skillCard}>
			<Image src={icon} width={80} height={80} alt={title} />
			<h3 className={styles.cardTitle}>{title}</h3>
			<p className={styles.cardContent}>{content}</p>
		</div>
	);
};

const SkillsSection = () => {
	return (
		<section className={styles.skillsContainer}>
			<div className="container">
				<h2 className={styles.skillsTitle}>My Skills</h2>
				<div className={styles.skillListContainer}>
					<Card
						title="Web Design"
						content="I am a web designer with a passion for creating visually appealing and user-friendly designs. I have experience with tools such as Figma and AdobeXD, and am proficient in design principles such as typography and color theory."
						icon={webdesignicon}
					/>
					<Card
						title="Front-end Development"
						content="I have experience in building dynamic and interactive user interfaces. I am proficient in modern frontend technologies such as React and Next.js, and have experience in implementing web designs using HTML, CSS, and JavaScript."
						icon={frontendicon}
					/>
					<Card
						title="Back-end Development"
						content="I have experience in building and maintaining the server-side of web applications. I am proficient in technologies such as Node.js and Express, and have experience in implementing server-side logic and integrating with databases."
						icon={backendicon}
					/>
				</div>
			</div>
		</section>
	);
};

export default SkillsSection;

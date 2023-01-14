import React from 'react';
import styles from './LatestWork.module.css';
import chatAppImage from '../public/assets/chatAppImage.png';
import aiGenImage from '../public/assets/aiGenImage.png';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../components/Button';

const projects = [
	{
		id: 1,
		latestwork: true,
		title: 'Chat App Website',
		tags: [ 'Website Design', 'Nextjs', 'Concept' ],
		projectDescription:
			'This is a homepage design and build for  a concept project - a chat application. I have designed the page first then built the website using Next js, HTML5, CSS3',
		image: chatAppImage,
		link: 'https://chatapp-iiiz04q1u-adhipathipandiyan-s.vercel.app/',
	},
	{
		id: 2,
		latestwork: true,
		title: 'OpenAI Image Generator',
		tags: [ 'OpenAI API', 'Nextjs', 'Image Generation' ],
		projectDescription:
			'This website utilizes OpenAI Image Generation API to create images based on user input. I used Lottie animations for visually appealing loading screens while user waits for image generation, and the site is constructed using Next.js.',
		image: aiGenImage,
		link: 'https://openai-image-generation-chi.vercel.app/',
	},
];

const ProjectBlock = ({
	latestwork = false,
	title,
	tags = [ 'Web Design, Nextjs' ],
	projectDescription,
	image,
	link = '#',
}) => {
	return (
		<article className={styles.projectBlock}>
			<div className={styles.leftside}>
				{latestwork && <p className={styles.latestWorkTag}>latest work</p>}
				<h4 className={styles.projectTitle}>{title}</h4>
				<div className={styles.tagsContainer}>
					{tags.map((tag, idx) => (
						<span key={idx} className={styles.tag}>
							{tag}
						</span>
					))}
				</div>
				<p className={styles.projectDescription}>{projectDescription}</p>
				<Link href={link} target="_blank">
					<Button text="See this project" marginTop={40} />
				</Link>
			</div>
			<div className={styles.rightside}>
				<Image src={image} className={styles.projectImage} alt={title} />
			</div>
		</article>
	);
};

const LatestWork = () => {
	return (
		<div className={styles.latestWorkContainer}>
			<div className="container">
				<div className={`${styles.projectsList}`}>
					{projects.map((project) => (
						<ProjectBlock
							key={project.id}
							latestwork={project.latestwork}
							title={project.title}
							tags={project.tags}
							projectDescription={project.projectDescription}
							image={project.image}
							link={project.link}
						/>
					))}
				</div>
				<Link href="#" className={styles.viewAllProjects}>
					View All Projects {'->'}
				</Link>
			</div>
		</div>
	);
};

export default LatestWork;

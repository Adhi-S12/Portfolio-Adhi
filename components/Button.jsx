import React from 'react';
import styles from './Button.module.css';

const Button = ({ text, marginTop = 10, marginBottom = 10 }) => {
	return (
		<button
			className={`${styles.baseStyles} classes`}
			style={{ marginTop, marginBottom }}
		>
			{text}
		</button>
	);
};

export default Button;

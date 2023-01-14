import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en" style={{ scrollBehavior: 'smooth' }}>
			<Head>
				<title>Adhipathi Pandiyan - Developer Portfolio</title>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

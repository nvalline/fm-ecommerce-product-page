import type { Metadata } from 'next';
import { Kumbh_Sans } from 'next/font/google';
import './globals.css';

const kumbhSans = Kumbh_Sans({
	style: ['normal'],
	subsets: ['latin'],
	variable: '--font-kumbh-sans',
	weight: ['400', '700']
});

export const metadata: Metadata = {
	title: 'Frontend Mentor | E-commerce product page',
	description: 'A beautiful product page'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${kumbhSans.variable} font-sans`}>{children}</body>
		</html>
	);
}

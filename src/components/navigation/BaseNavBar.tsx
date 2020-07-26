import * as React from 'react';

interface BaseNavBarProps {
	rightOffset: number; // Percentage of nav bar width
	animationLength?: number;
}

const SERVICES_SECTION_ID = '#services';
const WORK_SECTION_ID = '#work';
const ABOUT_SECTION_ID = '#about';
const BLOG_SECTION_ID = '#blog';
const CONTACT_SECTION_ID = '#contact';

function isNavLinkActive(identifier: string): boolean {
	const element = document.querySelector(identifier);

	if (!element) {
		return false;
	}

	const boundingBox = element.getBoundingClientRect();
	const boundingBoxCenter = boundingBox.top + boundingBox.height * 0.5;

	// If the fills at least half of the viewport, we should class it as the currently 'active' section
	return (
		boundingBox.top >= 0 &&
		boundingBox.left >= 0 &&
		boundingBoxCenter <=
			(window.innerHeight || document.documentElement.clientHeight)
	);
}

export const BaseNavBar: React.FC<BaseNavBarProps> = props => {
	const [activeLink, setActiveLink] = React.useState('');

	const style: React.CSSProperties = {
		right: `${props.rightOffset}%`,
		transition: `right ${props.animationLength ?? 0}s`,
	};

	return (
		<nav id="navigation" style={style}>
			<span
				className={`nav-link ${
					activeLink === SERVICES_SECTION_ID ? 'active' : ''
				}`}
				onClick={() => setActiveLink(SERVICES_SECTION_ID)}
			>
				<a href={SERVICES_SECTION_ID}>Services</a>
			</span>

			<span
				className={`nav-link ${activeLink === WORK_SECTION_ID ? 'active' : ''}`}
				onClick={() => setActiveLink(WORK_SECTION_ID)}
			>
				<a href={WORK_SECTION_ID}>Work</a>
			</span>

			<span
				className={`nav-link ${
					activeLink === ABOUT_SECTION_ID ? 'active' : ''
				}`}
				onClick={() => setActiveLink(ABOUT_SECTION_ID)}
			>
				<a href={ABOUT_SECTION_ID}>About</a>
			</span>

			<span
				className={`nav-link ${activeLink === BLOG_SECTION_ID ? 'active' : ''}`}
				onClick={() => setActiveLink(BLOG_SECTION_ID)}
			>
				<a href={BLOG_SECTION_ID}>Blog</a>
			</span>

			<span
				className={`nav-link ${
					activeLink === CONTACT_SECTION_ID ? 'active' : ''
				}`}
				onClick={() => setActiveLink(CONTACT_SECTION_ID)}
			>
				<a href={CONTACT_SECTION_ID}>Contact</a>
			</span>
			{props.children}
		</nav>
	);
};

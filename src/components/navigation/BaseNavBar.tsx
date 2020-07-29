import * as React from 'react';

interface BaseNavBarProps {
	rightOffset: number;
	animationLength?: number;
}

const SERVICES_SECTION_ID = '#services';
const WORK_SECTION_ID = '#work';
const ABOUT_SECTION_ID = '#about';
const BLOG_SECTION_ID = '#blog';
const CONTACT_SECTION_ID = '#contact';

export const SCROLLING_UP_CLASS = 'scroll-up';
export const SCROLLING_DOWN_CLASS = 'scroll-down';
let previousScrollPosition = 0;

export function handleScrolling() {
	const { body } = document;
	const currentScrollPosition = window.pageYOffset;

	if (
		currentScrollPosition === 0 ||
		currentScrollPosition === previousScrollPosition
	) {
		body.classList.remove(SCROLLING_DOWN_CLASS);
		body.classList.remove(SCROLLING_UP_CLASS);
		return;
	}

	if (
		currentScrollPosition > previousScrollPosition &&
		!body.classList.contains(SCROLLING_DOWN_CLASS)
	) {
		body.classList.remove(SCROLLING_UP_CLASS);
		body.classList.add(SCROLLING_DOWN_CLASS);
	} else if (
		currentScrollPosition < previousScrollPosition &&
		!body.classList.contains(SCROLLING_UP_CLASS)
	) {
		body.classList.remove(SCROLLING_DOWN_CLASS);
		body.classList.add(SCROLLING_UP_CLASS);
	}

	previousScrollPosition = currentScrollPosition;
}

export const BaseNavBar: React.FC<BaseNavBarProps> = props => {
	const [activeLink, setActiveLink] = React.useState('');

	const style: React.CSSProperties = {
		right: `${props.rightOffset}%`,
		transition: `right ${props.animationLength ?? 0}s, transform.5s`,
	};

	React.useEffect(() => {
		window.addEventListener('scroll', handleScrolling);

		return () => window.removeEventListener('scroll', handleScrolling);
	});

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

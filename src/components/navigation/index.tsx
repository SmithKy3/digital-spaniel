import * as React from 'react';
import { ThemeContext } from 'styled-components';
import { BaseNavBar } from './BaseNavBar';
import { MobileNavBar } from './MobileNavBar';
import 'Styles/navigation.less';

const TABLET_WIDTH = 1024;

export const NavBar: React.FC<{}> = () => {
	const mediaQuery = window.matchMedia(`(max-width: ${TABLET_WIDTH}px)`);
	const [isSmallDevice, setIsSmallDevice] = React.useState(mediaQuery.matches);

	function handleResize() {
		setIsSmallDevice(mediaQuery.matches);
	}

	React.useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	});

	return isSmallDevice ? <MobileNavBar /> : <BaseNavBar rightOffset={0} />;
};

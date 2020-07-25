import * as React from 'react';
import { ThemeContext } from 'styled-components';
import { BaseNavBar } from './BaseNavBar';
import { MobileNavBar } from './MobileNavBar';
import 'Styles/navigation.less';

export const NavBar: React.FC<{}> = () => {
  const theme = React.useContext(ThemeContext);
  const mediaQuery = window.matchMedia(`(max-width: ${theme.sizing.tablet}px)`);
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

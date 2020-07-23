import '~/index.less';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { theme } from 'Common/theme';
import { ThemeProvider } from 'styled-components';
import { NavBar } from 'Components/navigation';
import { Home } from './pages/Home';

const App: React.FC<{}> = () => {
	return (
		<>
			<NavBar />

			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
			</Switch>
		</>
	);
};

window.addEventListener('DOMContentLoaded', () => {
	const appContainer = document.querySelector('#root');

	if (!appContainer) {
		throw new Error('Fatal launch error, app container not found.');
	}

	ReactDOM.render(
		<ThemeProvider theme={theme}>
			<HashRouter>
				<App />
			</HashRouter>
		</ThemeProvider>,
		appContainer
	);
});

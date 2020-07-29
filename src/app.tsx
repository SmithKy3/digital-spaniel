import 'Styles/app.less';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from 'Components/Navigation';
import { Landing } from 'Components/Landing';
import { Services } from 'Components/Services';
import { Work } from 'Components/Work';
import { Footer } from 'Components/Footer';
import { getRecentProjectsData, RecentProjectsData } from 'Data/api';

interface WorkData {
	recentProjects: RecentProjectsData[];
}
export let WorkDataContext: React.Context<WorkData>;

const App: React.FC<{}> = () => {
	return (
		<>
			<NavBar />
			<Landing />
			<Services />
			<Work />
			<Footer />
		</>
	);
};

window.addEventListener('DOMContentLoaded', async () => {
	const appContainer = document.querySelector('#root');

	if (!appContainer) {
		throw new Error('Fatal launch error, app container not found.');
	}

	const workData = {
		recentProjects: await getRecentProjectsData(),
	};
	WorkDataContext = React.createContext(workData);

	ReactDOM.render(
		<WorkDataContext.Provider value={workData}>
			<App />
		</WorkDataContext.Provider>,
		appContainer
	);
});

import * as React from 'react';
import { WorkDataContext } from '~/app';
import 'Styles/work.less';
import { ProjectSliderTab } from './ProjectSliderTab';

export const RecentProjects: React.FC<{}> = () => {
	const [activeFilter, setActiveFilter] = React.useState(false);
	const projectsData = React.useContext(WorkDataContext).recentProjects;
	const projectSliders = projectsData.map(projectDatum => (
		<ProjectSliderTab key={projectDatum.title} data={projectDatum} />
	));

	return (
		<div id="content">
			<h2>
				Some of our <br />
				<span>recent projects</span>
			</h2>

			<div id="project-sliders-wrapper">{projectSliders}</div>
		</div>
	);
};

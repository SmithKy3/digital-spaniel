import * as React from 'react';
import { WorkDataContext } from '~/app';
import 'Styles/work.less';
import { ProjectCard } from './ProjectCard';

enum ProjectCategories {
	All = 'all',
	Branding = 'branding',
	WebDesign = 'web-design',
	DigitalMarketing = 'digital-marketing',
}

export const RecentProjects: React.FC<{}> = () => {
	const [activeFilter, setActiveFilter] = React.useState('all');

	const workData = React.useContext(WorkDataContext);
	const filteredProjects = workData.recentProjects.filter(
		project => activeFilter === 'all' || activeFilter === project.category
	);
	const renderableProjects = filteredProjects.map(projectDatum => (
		<ProjectCard key={projectDatum.title} data={projectDatum} />
	));

	return (
		<div id="content">
			<h2>
				Some of our <br />
				<span>recent projects</span>
			</h2>

			<div id="projects-filters">
				<div
					className={activeFilter === ProjectCategories.All ? 'active' : ''}
					onClick={() => setActiveFilter(ProjectCategories.All)}
				>
					All
				</div>
				<div
					className={
						activeFilter === ProjectCategories.Branding ? 'active' : ''
					}
					onClick={() => setActiveFilter(ProjectCategories.Branding)}
				>
					Branding
				</div>
				<div
					className={
						activeFilter === ProjectCategories.WebDesign ? 'active' : ''
					}
					onClick={() => setActiveFilter(ProjectCategories.WebDesign)}
				>
					Web Design
				</div>
				<div
					className={
						activeFilter === ProjectCategories.DigitalMarketing ? 'active' : ''
					}
					onClick={() => setActiveFilter(ProjectCategories.DigitalMarketing)}
				>
					Digital Marketing
				</div>
			</div>

			<div id="projec-cards-wrapper">{renderableProjects}</div>
		</div>
	);
};

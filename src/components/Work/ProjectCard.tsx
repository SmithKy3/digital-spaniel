import * as React from 'react';
import { RecentProjectsData } from 'Data/api';

interface ProjectSliderProps {
	data: RecentProjectsData;
}

export const ProjectCard: React.FC<ProjectSliderProps> = props => {
	const [isHovered, setHovered] = React.useState(false);
	const { data } = props;

	return (
		<div
			className="project-card"
			onMouseOver={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<img src={data.image} />

			<div className="project-card-info" style={{ opacity: isHovered ? 1 : 0 }}>
				<h4>{data.title}</h4>

				<p>{data.description}</p>

				<h3 className="project-slider-link">
					<a href={data.fullProjectUrl}>Full Project</a>
				</h3>
			</div>
		</div>
	);
};

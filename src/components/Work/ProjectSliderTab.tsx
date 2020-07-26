import * as React from 'react';
import { RecentProjectsData } from 'Data/api';

interface ProjectSliderProps {
	data: RecentProjectsData;
}

export const ProjectSliderTab: React.FC<ProjectSliderProps> = props => {
	const [isHovered, setHovered] = React.useState(false);

	const { data } = props;

	return (
		<div
			className="project-slider"
			onMouseOver={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<img src={data.image} />

			<div
				className="project-slider-info"
				style={{ opacity: isHovered ? 1 : 0 }}
			>
				<h4>{data.title}</h4>
				<p>
					{data.description}
					<span className="project-slider-link">
						<a href={data.fullProjectUrl}>Full Project</a>
					</span>
				</p>
			</div>
		</div>
	);
};

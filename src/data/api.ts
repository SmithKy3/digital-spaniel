import recentProjects from 'Data/recent-projects.json';

type GenericDataResponse = Record<string, string>;

enum DataTypes {
	RecentProjects = 'recentProjects',
	CaseStudies = 'caseStudies',
}

enum RecentProjectKeys {
	title = 'project title',
	description = 'project description',
	url = 'project url',
	imageName = 'project image name',
	category = 'project category',
}

export interface RecentProjectsData {
	image: string;
	title: string;
	description: string;
	fullProjectUrl: string;
	category: string;
}

export async function getRecentProjectsData(): Promise<RecentProjectsData[]> {
	return recentProjects.map(rawDatum => {
		const image = require(`Images/${rawDatum[RecentProjectKeys.imageName]}.png`)
			.default;

		return {
			image,
			title: rawDatum[RecentProjectKeys.title],
			description: rawDatum[RecentProjectKeys.description],
			fullProjectUrl: rawDatum[RecentProjectKeys.url],
			category: rawDatum[RecentProjectKeys.category],
		};
	});
}

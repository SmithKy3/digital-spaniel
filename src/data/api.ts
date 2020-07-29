import * as helpers from 'Common/helpers';
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
		const title = helpers.upperFirstEveryWord(
			rawDatum[RecentProjectKeys.title]
		);
		const description = helpers.upperFirstLetter(
			rawDatum[RecentProjectKeys.description]
		);

		return {
			image,
			title,
			description,
			fullProjectUrl: rawDatum[RecentProjectKeys.url],
			category: rawDatum[RecentProjectKeys.category],
		};
	});
}

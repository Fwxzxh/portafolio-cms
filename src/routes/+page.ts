import type { SanityDevExperience, SanityProject, Skill, Skills } from '$lib/types/sanity';
import sanityClient, { processProjectEntries } from '$lib/utils/sanity';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const workExperience: SanityDevExperience[] = await sanityClient.fetch(
		'*[_type == "devExperience"] | order(startDate desc)'
	);

	const rawProjects: SanityProject[] = await sanityClient.fetch("*[_type == 'project']");

	const skills: Skill[] = await sanityClient.fetch("*[_type == 'skills'][0].skillList");
	const projects = rawProjects.map(processProjectEntries);

	return {
		workExperience,
		projects,
		skills
	};
};

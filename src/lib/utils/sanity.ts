import type {
	ProcessedImageContent,
	ProcessedProject,
	ProcessedTextContent,
	RawImageContent,
	RawTextContent,
	SanityProject
} from '$lib/types/sanity';
import { createClient, type ClientConfig } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const config: ClientConfig = {
	projectId: '6qxooq2h',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2024-09-29'
};

const sanityClient = createClient(config);

export default sanityClient;

export function processProjectEntries(rawProject: SanityProject) {
	const builder = imageUrlBuilder(sanityClient);
	const projectImageUrl = builder.image(rawProject.image).url();

	const processedProject: ProcessedProject = {
		name: rawProject.name,
		company: rawProject.company,
		dateAcomplished: rawProject.dateAccomplished,
		stack: rawProject.stack,
		slug: rawProject.slug,
		projectImageUrl,
		content: rawProject.content.map(processProjectContent)
	};

	return processedProject;
}

/**
 * Function to process the content of the sanity content tag
 * @param {RawTextContent | RawImageContent} content - The content from sanity
 * @returns {ProcessedTextContent | ProcessedImageContent} the content cleaned up and processed with the fields that are needed
 */
function processProjectContent(
	content: RawTextContent | RawImageContent
): ProcessedTextContent | ProcessedImageContent {
	if (content._type == 'block') {
		const processedTextContent: ProcessedTextContent = {
			type: 'text',
			style: content.style,
			textToRender: content.children.map((elem) => elem.text).join('\n')
		};

		return processedTextContent;
	} else {
		const builder = imageUrlBuilder(sanityClient);
		const projectImageUrl = builder.image(content).url();

		console.log(projectImageUrl);

		const processedImage: ProcessedImageContent = {
			type: 'image',
			url: projectImageUrl
		};

		return processedImage;
	}
}

import { json } from '@sveltejs/kit';

function delay(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

// @ts-ignore
export async function POST({ request }) {
	const { contactMail, contactName, informationAboutProject } = await request.json();
	console.log(JSON.stringify({ contactName, contactMail, informationAboutProject }));

	await delay(2000);

	return json({ emailSentSuccesfully: true });
}

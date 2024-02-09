import { search } from '$lib/services.js';

export const load = async ({ url }) => {
	const query = (url.searchParams.get('q') || '').replace(/\s+/g, '');

	const filters = url.searchParams.get('filters') || '';

	const contents = await search({ query, filters });

	return {
		contents,
	};
};

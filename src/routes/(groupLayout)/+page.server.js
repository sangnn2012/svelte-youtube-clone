import { homePage } from '$lib/services';
import { fail, redirect } from '@sveltejs/kit';

export const load = async () => {
    return {
        contents: homePage(),
    }
}

export const actions = {
    search: async ({request}) => {
        const data = await request.formData();
        const query = data.get('query')

        if (!query) {
            return fail(400, {
                error: 'empty query',
            });
        }
        throw redirect(301, `/result?q=${query}`);
    }
}
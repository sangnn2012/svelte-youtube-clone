import { X_RapidAPI_Key } from '$env/static/private';
import { error } from '@sveltejs/kit';
import Axios from 'axios';
import { HOME_PAGE, VIDEO_DETAILS, VIDEO_COMMENTS, RELATED_CONTENT, SEARCH_RESULT } from '../routes/data';

const axios = Axios.create({
	baseURL: 'https://youtube138.p.rapidapi.com/',
	headers: {
		'X-RapidAPI-Key': X_RapidAPI_Key,
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	},
	params: {
		hl: 'en',
		gl: 'US'
	}
});
export const homePage = () => {
	try {
		// const result = await axios('home/');

		// return result.data.contents;

		return HOME_PAGE;
	} catch (e) {
		throw error(500, {
			message: 'an error occurred, refresh the page and try again'
		});
	}
};

export const search = ({ query, filters }) => {
	try {
		// const result = await axios('search/', {
		// 	params: {
		// 		q: query,
		// 		cursor: filters
		// 	}
		// });
		
		// return result.data;
		return SEARCH_RESULT;
	} catch (error) {
		console.error(error);
	}
};
export const getVideoDetails = (id) => {
	try {
		// const result = await axios('video/details/', {
		// 	params: {
		// 		id
		// 	}
		// });
		// return result.data;
		return VIDEO_DETAILS;
	} catch (e) {
		throw error(500, {
			message: 'an error occurred, refresh the page and try again'
		});
	}
};
export const getVideoComments = (id) => {
	try {
		// const result = await axios('video/comments/', {
		// 	params: {
		// 		id
		// 	}
		// });

		// return result.data;
		return VIDEO_COMMENTS;
	} catch (e) {
		throw error(500, {
			message: 'an error occurred, refresh the page and try again'
		});
	}
};
export const getRelatedContent = (id) => {
	try {
		// const result = await axios('video/related-contents/', {
		// 	params: {
		// 		id
		// 	}
		// });

		// return result.data.contents;
		return RELATED_CONTENT;
	} catch (e) {
		throw error(500, {
			message: 'an error occurred, refresh the page and try again'
		});
	}
};
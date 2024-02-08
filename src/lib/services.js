import { X_RapidAPI_Key } from '$env/static/private';
import { error } from '@sveltejs/kit';
import Axios from 'axios';

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
		return SAMPLE_VIDEO_LIST;
	} catch (e) {
		throw error(500, {
			message: 'an error occurred, refresh the page and try again'
		});
	}
};

export const search = async ({ query, filters }) => {
	try {
		// const result = await axios('search/', {
		// 	params: {
		// 		q: query,
		// 		cursor: filters
		// 	}
		// });
		return SAMPLE_VIDEO_LIST;
		return result.data;
	} catch (error) {
		console.error(error);
	}
};
export const getVideoDetails = async (id) => {
	try {
		const result = await axios('video/details/', {
			params: {
				id
			}
		});
		return result.data;
	} catch (e) {
		throw error(500, {
			message: 'an error occurred, refresh the page and try again'
		});
	}
};
export const getVideoComments = async (id) => {
	try {
		const result = await axios('video/comments/', {
			params: {
				id
			}
		});

		return result.data;
	} catch (e) {
		throw error(500, {
			message: 'an error occurred, refresh the page and try again'
		});
	}
};
export const getRelatedContent = async (id) => {
	try {
		const result = await axios('video/related-contents/', {
			params: {
				id
			}
		});

		return result.data.contents;
	} catch (e) {
		throw error(500, {
			message: 'an error occurred, refresh the page and try again'
		});
	}
};

const SAMPLE_VIDEO_LIST = [
	{
		type: "video",
		video: {
			author: {
				avatar: [
					{
						height: 68,
						url: "https://yt3.ggpht.com/nVEgcnbTGngVxzKnJOr-T1QKJJPQW_1ZdCkNyrxHohaF2VzYpfZggE9HuLVIHT4wMMSZjJumZQ=s68-c-k-c0x00ffffff-no-rj",
						width: 68
					}
				],
				badges: [
					{
						text: "Verified",
						type: "VERIFIED_CHANNEL"
					}
				],
				canonicalBaseUrl: "/@disneyxd",
				channelId: "UCktaw9L-f65LzUUdjmCFkbQ",
				title: "Disney XD"
			},
			badges: [
				"LIVE"
			],
			isLiveNow: true,
			lengthSeconds: null,
			movingThumbnails: null,
			publishedTimeText: null,
			stats: {
				"viewers": 7962
			},
			thumbnails: [
				{
					height: 202,
					url: "https://i.ytimg.com/vi/Fjp2TdlTTIU/hq720_live.jpg?sqp=CPy0ja4G-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA1jBiTO4MCX4OkgazKSpKUASY69g",
					width: 360
				},
				{
					height: 404,
					url: "https://i.ytimg.com/vi/Fjp2TdlTTIU/hq720_live.jpg?sqp=CPy0ja4G-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAByzCcER1pIBVZXzFQeP16mUcFjQ",
					width: 720
				}
			],
			title: "🔴 LIVE! Phineas and Ferb Season 1 Full Episodes! | @disneyxd",
			videoId: "Fjp2TdlTTIU"
		}
	}
]
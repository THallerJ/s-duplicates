import axios from 'axios';

export const getPaginatedResponse = async (url, token, limit, offset) => {
	const response = await axios
		.get(url, {
			params: {
				offset: offset,
				limit: limit,
			},
			headers: {
				Authorization: 'Bearer ' + token,
			},
		})
		.then(async (resp) => {
			if (resp.data.next) {
				return resp.data.items.concat(
					await getPaginatedResponse(url, token, limit, offset + limit)
				);
			} else {
				return resp.data.items;
			}
		})
		.catch((err) => {
			console.log(err);
		});

	return response;
};

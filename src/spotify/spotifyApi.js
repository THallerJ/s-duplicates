import axios from "axios";

const getPaginatedResponse = async (url, token, limit, offset, retries) => {
	let count = 0;
	try {
		const resp = await axios.get(url, {
			params: {
				offset: offset,
				limit: limit,
			},
			headers: {
				Authorization: "Bearer " + token,
			},
		});

		if (resp.data.next) {
			setTimeout(async () => {
				return resp.data.items.concat(
					await getPaginatedResponse(url, token, limit, offset + limit, 0)
				);
			}, 1000);
		} else {
			return resp.data.items;
		}
	} catch (e) {
		count++;
		if (count < 3) getPaginatedResponse(url, token, limit, offset, retries + 1);
		console.log(e);
	}
};

export const getPlaylists = async (token, userName) => {
	const limit = 50;
	const url = `https://api.spotify.com/v1/users/${userName}/playlists`;

	const res = await getPaginatedResponse(url, token, limit, 0, 0);
	return res;
};

export const getPlaylistTracks = async (token, playlistId) => {
	const limit = 100;
	const url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks?`;

	return await getPaginatedResponse(url, token, limit, 0, 0);
};

export const getSavedTracks = async (token) => {
	const limit = 50;
	const url = `https://api.spotify.com/v1/me/tracks`;

	return await getPaginatedResponse(url, token, limit, 0, 0);
};

export const removeSavedTrack = async (token, id) => {
	const response = await axios
		.delete("https://api.spotify.com/v1/me/tracks", {
			params: {
				ids: id,
			},
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		.then(async (resp) => {
			return resp;
		})
		.catch((err) => {
			console.log(err);
		});

	return response;
};

export const removePlaylistTrack = async (token, uri, playlistId) => {
	const tracks = [{ uri: uri }];

	const response = await axios
		.delete(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			data: {
				tracks: tracks,
			},
		})
		.then(async (resp) => {
			return resp;
		})
		.catch((err) => {
			console.log(err);
		});

	return response;
};

export const getTrackArtists = (track) => {
	return track.track.artists
		.map((artist) => {
			return artist.name;
		})
		.join(", ");
};

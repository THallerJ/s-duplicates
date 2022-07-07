const sortByKey = (tracks) => {
	return tracks.sort((a, b) => {
		if (getTrackArtist(a) > getTrackArtist(b)) return 1;
		if (getTrackArtist(a) < getTrackArtist(b)) return -1;

		if (getTrackTitle(a) > getTrackTitle(b)) return 1;
		if (getTrackTitle(a) < getTrackTitle(b)) return -1;

		return 0;
	});
};

export const getDuplicateTracks = (tracks) => {
	const sortedTracks = sortByKey(tracks);

	let dups = [];
	let tempDups = [];
	let flag = false;
	let prev = null;

	sortedTracks.forEach((track) => {
		const currKey = getTrackKey(track);
		let prevKey = null;

		if (prev) prevKey = getTrackKey(prev);

		if (prev && (currKey.includes(prevKey) || prevKey.includes(currKey))) {
			if (!flag) tempDups.push(prev);
			tempDups.push(track);
			flag = true;
		} else {
			prev = track;
			if (tempDups.length) {
				dups.push(tempDups);
				tempDups = [];
			}
			flag = false;
		}
	});

	return dups;
};

const getTrackTitle = (track) => {
	return track.track.name;
};

const getTrackArtist = (track) => {
	return track.track.artists[0].name;
};

const getTrackKey = (track) => {
	return getTrackArtist(track) + getTrackTitle(track);
};

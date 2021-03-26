const { LinkedQueue } = require('@oresoftware/linked-queue');

export const getDuplicateTracks = (tracks) => {
	const sortedTracks = tracks.sort((a, b) => {
		if (getTrackArtist(a) > getTrackArtist(b)) return 1;
		if (getTrackArtist(a) < getTrackArtist(b)) return -1;

		if (getTrackTitle(a) > getTrackTitle(b)) return 1;
		if (getTrackTitle(a) < getTrackTitle(b)) return -1;
	});

	const q = new LinkedQueue();

	let dups = [];
	let tempDups = [];

	let qFlag = false; // tracks whether item at head of q has been added to tempDups

	sortedTracks.forEach((track) => {
		if (q.peek()) {
			const currKey = getTrackKey(track);
			const qKey = getTrackKey(q.peek().value);

			while (!currKey.includes(qKey) && !qKey.includes(currKey) && q.peek()) {
				q.shift();
			}

			if (currKey.includes(qKey) || qKey.includes(currKey)) {
				if (!qFlag) tempDups.push(q.shift().value);
				tempDups.push(track);
				qFlag = true;
			} else {
				qFlag = false;
				if (tempDups.length > 0) {
					dups.push(tempDups);
					tempDups = [];
				}
				q.shift();
			}
		}

		q.push(track);
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

# Spotify Duplicates

## Description

[Spotify Duplicates](https://sduplicates.netlify.app) helps you find and remove duplicate songs in your library.

Duplicate songs may appear in your library because Spotify treats different versions of the same song as entirely separate songs. So, a user may--for example--unwittingly have the single version, album version, and a remastered version of the same song saved in their library or playlist.

## Find Duplicates Algorithm

Several apps exist that provide a similar functionality to [Spotify Duplicates](https://sduplicates.netlify.app). However, the algorithm that most of these apps use to find duplicate tracks only identify tracks that share the same ID. This is problematic since duplicate tracks don't necessarily share the same ID, which means that many duplicates are invisible to these algorithms.

My algorithm avoids this issue by sorting the songs by a key '[Artist][song]'. Songs with similar titles created by the same artist then appear next to each other in the list of songs. This makes checking for matching songs easy as we iterate through the list of songs.

The full algorithm is below:

```
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

	let qFlag = false;

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


```

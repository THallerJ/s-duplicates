# Spotify Duplicates

## Description

[Spotify Duplicates](https://sduplicates.netlify.app) helps you find and remove duplicate songs in your library.

Duplicate songs may appear in your library because Spotify treats different versions of the same song as entirely separate songs. So, a user may--for example--unwittingly have the single version, album version, and remastered version of the same song saved in their library or playlist.

## Find Duplicates Algorithm

Several apps exist that provide a similar functionality to [Spotify Duplicates](https://sduplicates.netlify.app). However, the algorithm that most of these apps use to find duplicate tracks only identify tracks that share the same ID. This is problematic since duplicate tracks don't necessarily share the same ID, which means that many duplicates are invisible to these algorithms.

My algorithm avoids this issue by sorting the songs by a key '[Artist][song]'. Songs with similar titles created by the same artist then appear next to each other in the list of songs. This makes checking for matching songs easy as we iterate through the list of songs.

The full algorithm is below:

```
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


```

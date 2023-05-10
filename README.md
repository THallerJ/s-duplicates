# SDuplicates

## Description

[SDuplicates](https://sduplicates.netlify.app) helps you find and remove duplicate songs in your library.

Duplicate songs may appear in your library because Spotify treats different versions of the same song as entirely separate songs. So, a user may--for example--unwittingly have the single version, album version, and remastered version of the same song saved in their library or playlist.

_NOTE: The app has not been approved by Spotify, and as such remains in development mode_

## Find Duplicates Algorithm

Several apps exist that provide a similar functionality to [SDuplicates](https://sduplicates.netlify.app). However, the algorithm that most of these apps use to find duplicate tracks only identify tracks that share the same ID. This is problematic since duplicate tracks don't necessarily share the same ID, which means that many duplicates are invisible to these algorithms.

My algorithm avoids this issue by sorting the songs by a key such that songs with similar titles created by the same artist then appear next to each other in the sorted list of songs. This makes checking for matching songs easy as we iterate through the list of songs.

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

![capture](https://github.com/THallerJ/s-duplicates/assets/26337084/6c8dab3f-8eeb-4376-ae13-26dfc56c9343)
<a href="url"><img src="https://github.com/THallerJ/s-duplicates/assets/26337084/61560de5-f5b4-42ae-b9c0-402c6a04965c" height="720"></a>

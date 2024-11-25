import {
    LastFmRecentlyListenedTrackType,
    LastFmRecentlyListenedTracksType,
} from "@constants/main/types";

export default async function getLastFmRecentlyListenedTrack() {
    const lastfmApiKey = "c0b01a2372e0ab5afe519afe63a1c5ff";
    const apiUrl = "https://ws.audioscrobbler.com/2.0";
    const apiMethod = "user.getrecenttracks&user=psyxph";
    const data = await fetch(
        `${apiUrl}/?method=${apiMethod}&api_key=${lastfmApiKey}&format=json`,
        {
            method: "GET",
            headers: { "user-agent": "psyxph" },
        }
    )
        .then((res) => res.json() as Promise<LastFmRecentlyListenedTracksType>)
        .then((recentTracks) => recentTracks?.recenttracks.track?.[0])
        .then((recentTrack) => {
            const filteredImages = recentTrack.image?.filter((image) =>
                ["small", "medium", "large"].includes(image?.size)
            );
            const data: LastFmRecentlyListenedTrackType = {
                image_url:
                    filteredImages?.[filteredImages.length - 1]?.["#text"],
                artist: recentTrack.artist?.["#text"],
                title: recentTrack.name,
            };

            return data;
        });

    return data;
}

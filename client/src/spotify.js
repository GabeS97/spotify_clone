// Scopes allow Spotify users using third-party apps the confidence that only the information they choose will be shared
const scopes = [
    "user-read-email",
    "playlist-read-private",
    "playlist-read-collaborative",
    "user-read-email",
    "streaming",
    "user-read-private",
    "user-library-read",
    // "user-library-modify",
    "user-top-read",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-follow-read",
].join(',');

const params = {
    scopes,
    client_id: 'a41776d974e54f5caae0beb00d00e4b2',
    response_type: 'token',
    redirect_uri: "http://localhost:3000",

}

const queryParamsString = new URLSearchParams(params).toString();


export const AUTH_URL =
    'https://accounts.spotify.com/authorize?' + queryParamsString

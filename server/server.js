const express = require('express');
require('dotenv').config();
const app = express();


app.get('/login', (req, res) => {
    const state = process.env.STATE
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
        'user-read-private',
        'user-read-email'
    ].join(',')

    const params = new URLSearchParams({
        response_type: 'code',
        client_id: process.env.CLIENT_ID,
        scope: scopes,
        redirect_uri: process.env.REDIRECT_URI,
        state: state
    })

    res.redirect('https://accounts.spotify.com/authorize?' + params)
})


app.get('/callback', (req, res) => {
    console.log(req.query.code)
})

app.listen(3001)

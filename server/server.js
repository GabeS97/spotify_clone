const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken

    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken
    })

    spotifyApi
        .refreshAccessToken()
        .then((data) => {
            console.log(data.body)
            // Save the access token so that it's used in future calls
        }).catch(() => {
            res.sendStatus(400)
        })
})

app.post("/login", (req, res) => {
    const code = req.body.code

    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
    })

    spotifyApi
        .authorizationCodeGrant(code)
        .then(data => {
            res.json({
                accessToken: data.body.access_token,
                refreshToken: data.body.refresh_token,
                expiresIn: data.body.expires_in,
            })
        })
        .catch(err => {
            console.log(err.message);
            res.sendStatus(400)
        })
})

app.listen(3001)
const admin = require('firebase-admin');
const functions = require('firebase-functions');
const express = require('express');
const app = express();
const cameras = require('./cameras');

app.get('/getCameras', (request, response) => {
  response.set('Cache-Control', 'public, max-age=0, s-maxage=6000');//600 = 10 minutes
  response.json(cameras);
});

exports.app = functions.https.onRequest(app);

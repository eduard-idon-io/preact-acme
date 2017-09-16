import express from 'express'
import { h } from 'preact'
import render from 'preact-render-to-string'
import Page from './Page'

const functions = require('firebase-functions');
const app = express();

app.get('/page', (req, res) => {
	let html = render(<Page />);

  res.send(`<!DOCTYPE html>${html}`);
});

exports.app = functions.https.onRequest(app);
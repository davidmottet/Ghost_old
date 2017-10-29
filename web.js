'use strict';
const { log } = console;

const http = require('http');
const https = require('https');
const { readFileSync } = require('fs');
const path = require('path');
const { renderFile } = require('ejs');


const web = exports = module.exports = {};

web.server = () => {
	http.createServer((_req, _res) => {
		_res.writeHead(200);
		_res.end('Hello world\n');
	}).listen(8000);
}

web.secureServer = () => {
	const options = {
		key: readFileSync('./keys/key.pem'),
		cert: readFileSync('./keys/cert.pem')
	}

	https.createServer(options, (_req, _res) => {
		switchMethod(_req, _res);
	}).listen(8000);
}

function switchMethod(_req, _res) {
	const { method, url } = _req;
	const urlParse = path.parse(url);

	switch (method) {
		case "GET":
			if (urlParse.ext) {
				getFile(_res)
			} else {
				getPage(_res, urlParse);
			}
		default:
			_res.writeHead(405);
			_res.end('Method not Allowed');
	}
}


function getPageError(_res, _urlParse) {
	
}

function getPage(_res, _urlParse) {
	const { name, dir } = _urlParse;
	const data = {title: 'App'};
	const options = {};

	renderFile('./www/site/index.ejs', data, options, (_err, _str) => {
		if (_err) {
			_res.writeHead(404, {
				'Content-Type': 'text/html'
			});
			// getPageError
		} else {
			_res.writeHead(200, {
				'Content-Type': 'text/html'
			});
		}
		_res.end(_str);
	})
}


function getFile(_res) {
	_res.writeHead(200);
	_res.end('Hello world\n');
}
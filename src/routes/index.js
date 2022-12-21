////////////////////////////////////////
// webfinger-mastodon
// Copyright (c) 2022 Jonathan Hardison
////////////////////////////////////////

var express = require('express');
var config = require('../config');

//import initializeDB from '../db';
var statusController = require('../controllers/status');
var webfingerController = require('../controllers/webfinger')

let router = express();

//middleware

// v1 //
var v1Base = "/v1";
var wellKnownBase = "/.well-known"

router.use(`${v1Base}/status`, statusController({config}));
router.use(`${wellKnownBase}/webfinger`, webfingerController({config}));


module.exports = router;
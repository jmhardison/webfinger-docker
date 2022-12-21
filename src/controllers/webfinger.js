////////////////////////////////////////
// webfinger-mastodon
// Copyright (c) 2022 Jonathan Hardison
////////////////////////////////////////

var express = require('express');
var Router = express.Router;


module.exports = ({config}) => {
    let api = Router();
    
    // general
    api.get('/', (req, res) => {
        res.type("application/jrd+json").json({
            subject:"acct:jhardison@mastodon.social",
            aliases:
            [
                "https://mastodon.social/@jhardison",
                "https://mastodon.social/users/jhardison"
            ],
            links:
            [
                {
                    rel:"http://webfinger.net/rel/profile-page",
                    type:"text/html",
                    href:"https://mastodon.social/@jhardison"
                },
                {
                    rel:"self",
                    type:"application/activity+json",
                    href:"https://mastodon.social/users/jhardison"
                },
                {
                    rel:"http://ostatus.org/schema/1.0/subscribe",
                    template:"https://mastodon.social/authorize_interaction?uri={uri}"
                }
            ]
        }).status(200);
    });
    
    return api;
}
////////////////////////////////////////
// webfinger-mastodon
// Copyright (c) 2022 Jonathan Hardison
////////////////////////////////////////

'use strict'; 
class Config{

 constructor(){
    this.port = process.env.PORT || 3005;
 }

}
module.exports = Config;
import { lchmod } from 'fs';

var express = require('express');
var request = require('request');
var app = express();

http.createServer(function(req,res){
    //request is a new visitor
    request({
        url: "htps://blockchain.info/stats?format=json",
        json: true
    },function(error,response,body){
        console.log(body.market_price_usd);
    });

    console.log("hi I'm a bitcoin user" + req.url);
    res.end("bitcoin to the moon");
    }).listen(8080);
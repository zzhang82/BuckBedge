var express = require('express');
var request = require('request');
var bodyparser = require('body-parser');
var bitcore = require("bitcore-lib");
var app = express();

/*request({
    url:"https://blockchain.info/stats?format=json",
    json: true
},function(err,response,body){
    btcPrice = body.market_price_usd;
    btcBlocks = body.n_blocks_total;
});*/

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

var Http_URL = 8080;

app.get("/",function(req,res){
    res.sendFile(__dirname+ "/index.html");
    //res.send("Bitcoin update: " + btcPrice);
});

//app.get("/block",function(req,res){
    //res.send("Current BlockHeight: " + btcBlocks);
    //html uses
    
//});

app.post("/wallet", function(req,res){
    var brainsrc = req.body.brainsrc;
    //console.log(brainsrc);
    //Buffer to solve the binary data for JS
    var input = new Buffer(brainsrc);
    //hash crpyto
    var hash = bitcore.crypto.Hash.sha256(input);
    //big number add
    var bn = bitcore.crypto.BN.fromBuffer(hash);
    //key set up and transisition
    var pk = new bitcore.PrivateKey(bn).toWIF();
    var addy = new bitcore.PrivateKey(bn).toAddress();
    res.send("The Brain Wallet of:  "+brainsrc+ "<br>Addy: " + addy + "<br>Private Key: " + pk);
})

app.listen(Http_URL,function(){
    console.log("app is runing at localhost:" + Http_URL);
})


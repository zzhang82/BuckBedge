var request = require("request");

function getPrice(x){
    request({
        url:"https://blockchain.info/stats?format=json",
        json: true
    },function(err,response,body){
        btcPrice = body.market_price_usd;
        btcBlocks = body.n_blocks_total;
        x(btcPrice,btcBlocks);
    });
}

function hello(){
    console.log("hello");
}

//lambda function for the runtime purposes
getPrice(function(icecream,blog){ 
    console.log(icecream);
    console.log(blog);
    hello();
});




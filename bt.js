var key ="";
var secrect = "";

blocktrail = require('blocktrail-sdk');

client = blocktrail.BlocktrailSDK({
    apikey: key, 
    apiSecrect: secrect,
    network: "BTC", 
    testnet: false
});

//create the new wallet
//need further private set
client.createNewWallet("myWallet","mypassword",
function(err,wallet){
    //console.log(wallet);
    wallet.getNewAddress(function(err,address){
        //new wallet address
        console.log(address);
    })
});

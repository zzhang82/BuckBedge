function typical (a,b,c){
    var x = a+b;
    c(x);
};

//lambda
typical(3,3, function(nachos){
    console.log(nachos);
});


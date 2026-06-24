// used in time consuming fun

function add(a,b,cb){ // cb - call back
 let result = a+b;
 cb(result);
}

add(2,3, function(val){
    console.log("high order fun")
    console.log(val);
});

// function return function

function sum(a,b,cb){
    let ans = a+b;
    cb(ans);
    return () => console.log(ans);
}

let resFun = sum(1,1, () => {});
resFun();
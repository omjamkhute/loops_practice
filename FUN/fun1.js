// function

function sayH(){
    console.log("hello bol")
}
sayH()

function add(a,b){
    console.log(a/b);
}

add(2,3)

function mul(a,b){
    let ans = a*b;
    return ans;
}
let res = mul(3,4)
console.log(res)

// unlimited arguments
function unAdd(){
   let ans = 0;
   for(let j=0; j<arguments.length;j = j+1){
    ans = ans + arguments[j];
   }
   return ans;
}

let result = unAdd(1,2,3,4,55);
console.log(result);

// using spread operators
function spAdd(...num){
    let ans = 0;
    for(let i = 0; i<num.length; i++){
        ans = ans + num[i];
    }
    return ans;
}

let res1 = spAdd(2,3,4);
console.log(res1);
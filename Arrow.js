// arrow fun : Scope is global

// syntax ----------------------------------------------
const sayhello = () => {
  console.log("this is arrow function");
};
sayhello();

// 2
const addd = (a,b) => {
    return a+b; 
};
console.log(addd(1,2));

// short cut 
const add1 = (c,d) => c+d;
console.log(add1(4,5));

//-------------------------------------------------------

//arguments key words
// not support arroe function used spread operator  
// spread
const add2 = (...nums) => {
    let ans1 = 0;
    for(let i=0; i<nums.length;i++){
        ans1 = ans1 + nums[i];
    }
    return ans1;
}
let res2 = add2(1,2,3,4);
console.log("this is spread :"+res2);
// --------------------------------------------------------


// hoisting----------------------------------------------
// call first and define later still work js add them in memory

byeSay();

function byeSay(){
    console.log("bye");
}
// but not work in arrow function-------------------------------

 
// this key word
// this refer window in arrow function

const obj = {
    value: 22,
    myFun: () => {
        console.log(this);
    },
};
obj.myFun(); // refered window

const obj1 = {
    value: 22,
    myFun: function ()  {
        console.log(this.value);
    },
};
obj1.myFun(); // 22



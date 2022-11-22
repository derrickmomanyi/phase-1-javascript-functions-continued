function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}   
console.log(saturdayFun());


function mondayWork(activity= "go to the office"){
    return `This Monday, I will ${activity}.`
}
function wrapAdjective(){
    const innerFunction = function (name = "special"){
        return `You are *${name}*!`;
        

    };
      return innerFunction; 
      }

 console.log(wrapAdjective())     


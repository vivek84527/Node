// Anonomys Function
var sum=function(a,b){
    return a+b
}
console.log(sum(100,200))

// callBackFunction
function complexEx(add){
    console.log(add(100,200))
}
complexEx(function add(a,b){
    return a+b
})
let arr= [1,2,3,4,5,6]

//stimulate absence of forEach
Array.prototype.forEach = null

if(!Array.prototype.forEach){
    Array.prototype.forEach = function(callback){
        for (let item of this){
            callback(item)
        }
    }
}

arr.forEach((item)=>{
    console.log(2 *item)
})
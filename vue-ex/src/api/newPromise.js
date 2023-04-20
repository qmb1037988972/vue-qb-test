var a = 2
// var setTime = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         if(a === 1) {
//             console.log(a)
//             resolve(a)
//         }else {
//             reject(2)
//         }
//     }, 1)
// })
// setTime.then((res) =>{
//     console.log(res, 'res')
// }).catch((err) => {
//     console.log(err, 'err')
// })

function simplePromise(callBack) {
    this.reject = function(val) {
        console.log(val, 'val')
    }
    this.resolve = function(val) {
        console.log(val, 'val')
    }
    callBack(this.resolve, this.reject);
}
simplePromise.prototype.then = function(callBack) {
    callBack();
}

var setTime2 = new simplePromise((resolve, reject) => {
    setTimeout(()=> {
        if(a === 1) {
            console.log(a)
            resolve(a)
        }else {
            console.log(2)
            reject(2)
        }
    }, 1)
})
setTime2.then(res => {
    console.log(res, 'res2')
})
//structure of Promise
const myPromise = new Promise((resolve, reject) => {
 resolve("success")
//rejected
})
 // promise resolve caalback called
 .then (value  => {
    console.log(value)
 })
//Promise reject callback called
.catch(err => {
    console.log(err)
})
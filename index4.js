function a(){
    return Promise.resolve("a")
}
async function b(){
    return "b"
}
console.log(a())
console.log(b())
// Generator
function* range(start,end){
    while(start < end){
        //return value and wait until next execution
        yield start;
        start += 1
    }
}
for (i of range(1,10)){
    console.log(i)
}
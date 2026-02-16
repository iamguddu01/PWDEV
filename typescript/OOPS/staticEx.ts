// Static class cannot be accesse by class its access by class name reference
class Counter{
    static count : number = 0
    constructor(){
        Counter.count++
    }
}
console.log(Counter.count)
const cntr = new Counter()
console.log(Counter.count)
const cntr2 = new Counter()
console.log(Counter.count)


// YOu cant do that 
// console.log(cntr.count)
// console.log(cntr2.count)

class MathUtils{
    static add(a:number, b:number):number{
        return a+b
    }
    static subtract(a:number, b:number):number{
        return a-b
    }
}
// const math1 = new MathUtils() //❌
console.log(MathUtils.add(5,7)) // ✅
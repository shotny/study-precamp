let time1 = 10
// undefined

setInterval(function(){
    if(time1 >= 0){
        console.log(time1)
        time1 = time1 - 1
    }
}, 1000)
// 2
// VM1818:3 10
// VM1818:3 9


let time = 180
// undefined

setInterval(function(){
    if(time >= 0){
        let min = Math.floor( time / 60 )
        let second = String(time % 60).padStart(2, "0")
        console.log(min + ":" + second)
        time = time - 1
    }
}, 1000)
2
// VM2734:7 3:00
// VM2734:7 2:59
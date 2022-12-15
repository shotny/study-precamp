
// 인증번호 생성 로직

Math.floor( Math.random() * 1000000 )
// 894514
String (Math.floor( Math.random() * 1000000 ))
// '143387'
String (Math.floor( Math.random() * 1000000 ))
// '460505'

// 여섯자리 수가 안 나오면 앞에서부터 0으로 채우게함
String (Math.floor( Math.random() * 1000000 )).padStart(6, "0")
// '000587'
String (Math.floor( Math.random() * 1000000 )).padStart(6, "0")
// '483627'
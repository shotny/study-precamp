const join = () => {
    // 이메일, 이름 비밀번호2, 휴대폰번호, 지역, 성별이 모두 입려됐고
    // 비밀번호 더블체크까지 끝나면 disable=false 로 변경
}

// 입력칸 이동
const changeFocus1 = () =>{
    let ph1 = document.getElementById("ph1").value
    if(ph1.length === 3) {
        document.getElementById("ph2").focus()
    }
}

const changeFocus2 = () =>{
    let ph2 = document.getElementById("ph2").value
    if(ph2.length === 4){
        document.getElementById("ph3").focus()
    }
}

// 인증번호 전송 버튼 활성화 
const sendOn = () => {
    let ph1 = document.getElementById("ph1").value
    let ph2 = document.getElementById("ph2").value
    let ph3 = document.getElementById("ph3").value
    if(ph1.length ===3 && ph2.length ===4 & ph3.length === 4){
        document.getElementById("sendButton").removeAttribute("disabled")
        document.getElementById("sendButton").style = "border: 1px solid #0068FF; background-color: #FFFFFF; color: #0068FF; cursor: pointer;"
    }
}

// 인증 로직
let authStarted = false
let auth = () =>{
    if(authStarted === false){
        authStarted = true

        // 인증확인 버튼 활성화
        document.getElementById("finishButton").disabled = false
        document.getElementById("finishButton").style.backgroundColor = "#0068FF";
        
        // 타이머 띄우기
        let time = 180
        let timer
        timer = setInterval(function(){
            if(time >= 0){
                let min = Math.floor(time/60)
                let sec = String(time % 60).padStart(2, "0")
                document.getElementById("timer").innerText = min + ":" + sec
                time = time-1
            } else {
                // 3분 내로 버튼 안 누르면 인증확인 버튼 비활성화  & 토큰 정보 "000000", 시간"3:00"
                document.getElementById("finishButton").disabled = true
                document.getElementById("finishButton").style = "color: #ffffff; border: 1px solid #D2D2D2;"
                document.getElementById("valNum").innerText = "000000"
                document.getElementById("timer").innerText = "3:00"
                authStarted = false
                clearInterval(timer)
            }
        }, 1000)

        if(document.getElementById("finishButton").onclick && time >= 0) {
            //3분 이내 인증확인 -> "인증이 완료되었습니다" 알림
            alert('인증이 완료되었습니다.')
            clearInterval(timer)
            document.getElementById("finishButton").disabled = true
            document.getElementById("finishButton").innerText = "인증 완료"

        }
        getToken();
    } else {
        // 작동중일 때
    }
}

// 토큰정보 생성
const getToken = () =>{
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("valNum").innerText = token
}

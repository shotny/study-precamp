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
        document.getElementById("sendButton").style = "background-color: #FFFFFF; color: #0068FF; cursor: pointer;"
    }
}

// 토큰정보 생성
const getToken = () =>{
    
}

// 타이머 띄우기

// 인증확인 버튼 활성화

//3분 이내 인증확인 -> "인증이 완료되었습니다" 알림

// 3분 도안 버튼 안 누르면 인증확인 버튼 비활성화 +회색으로 & 토큰 정보 "000000", 시간"3:00"

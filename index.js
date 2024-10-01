//DOMContentLoaded 이벤트 사용
// => DOM이 완전히 로드된 후에 JS 코드가 실행되도록 보장할 수 있다.

document.addEventListener('DOMContentLoaded', 
    function(){
        // 사용할 DOM 선언하기 : getElementById, querySelector
const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('ueser-input');
const sendButton = document.getElementById('send-button');
const buttonIcon = document.getElementById('button-icon');
const info = document.querySelector('info');



// #send-button 버튼 클릭 시 이벤트 추가하기 : addEventListener
sendButton.addEventListener('click', sendMessage); //함수 호출할때는 sendMessage()이렇게 안씀!



// sendMessage() 함수 정의하기
function sendMessage(){
    // 1. 받아온 값 저장하기 : trim()함수 사용
    const message = userInput.value.trim();

    // 2. 공백만 입력받았을 때 send하지 않기

    if (message === ''){ //message가 비어있다면
        return
    }else{  //message가 비어있지 않다면
        appendMessage('user', message);
        
        setTimeout(() => {
            appendMessage('bot', 'Made By Jeonghoon\n');
            //사용자 & 봇의 메세지 전다이 끝나면 전송 버튼으로 바꾼다.
            buttonIcon.classList.add('fa-solid', 'fa-paper-plane');
            buttonIcon.classList.remove('fas', 'fa-spinner', 'fa-pulse');
        }, 1000); //1000은 1초
        return
    }
    // 3. 사용자가 입력한 message 화면에 띄우기(container)
}

function appendMessage(sender, message){ //sender가 user인지 bot인지에 따라 다름
    info.style.display = 'none';

    // 사용자 & 봇이 메세지를 전송할 떄에는 로딩 아이콘을 사용한다.
    buttonIcon.classList.add('fas', 'fa-spinner', 'fa-pulse');
    buttonIcon.classList.remove('fa-solid', 'fa-paper-plane');

    // 메세지를 담을 node 생성하기
    const chatElement = document.createElement('div'); // 전체 채팅 박스
    const messageElement = document.createElement('div'); // 채팅 텍스트가 들어갈 박스
    const iconElement = document.createElement('div'); // 사용자/봇 아이콘이 들어갈 박스
    const icon = document.createElement('i'); // 사용자/봇 아이콘 그 자체

    chatElement.classList.add('chat-box');
    iconElement.classList.add('icon');
    messageElement.classList.add(sender);   // 전송자가 사용자인지 봇인지 명시

    messageElement.innerText = message;

    if (sender === 'user'){ // 사용자일 때
        icon.classList.add('fa-regular', 'fa-user');    // 유저 아이콘 설정
        iconElement.setAttribute('id', 'user-icon');        // 아이디를 #user-icon으로 변경
    }else{  //봇일 때
        icon.classList.add('fa-solid', 'fa-robot'); // 봇 아이콘 설정
        iconElement.setAttribute('id', 'bot-icon'); // 아이디를 #bot-icon으로 설정
    }

    //정의한 Node를 트리에 연결
    iconElement.appendChild(icon);  // 아이콘 박스에 icon 추가
    chatElement.appendChild(iconElement); // 전체 채팅 박스에 아이콘 박스 추가
    chatElement.appendChild(messageElement); // #chat-log에 전체 채팅 박스 연결 : 화면에 표시하는 기능
    chatLog.appendChild(chatElement); // 
}
    });




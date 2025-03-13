## Overview
사용자의 현재 위치를 기반으로 날씨 정보를 가져와 표시하기

### The challenge
- 사용자의 현재 위치(위도, 경도) 가져오기
- OpenWeatherMap API를 이용해 해당 위치의 날씨 정보 요청
- 받은 데이터를 화면에 표시 (도시 이름, 날씨 상태, 온도)
- 위치 정보를 가져오지 못하면 경고 메시지 출력

### Built with
- HTML, CSS, JavaScript
- Weather API

## What I learned

### ✅ navigator.geolocation.getCurrentPosition()
사용자의 현재 위치를 얻을 수 있는 메서드
- 두 가지 주요 매개변수를 받음
1. 성공 콜백 함수: 위치 정보가 정상적으로 반환되었을 때 호출되는 함수.
2. 오류 콜백 함수 (옵션): 위치 정보를 가져오는 데 실패했을 때 호출되는 함수.
```javascript
navigator.geolocation.getCurrentPosition(function(position) {
  console.log(position.coords.latitude);  // 위도
  console.log(position.coords.longitude); // 경도
}, function(error) {
  console.error(error); // 오류 처리
});
```
- position과 error는 각각 성공 콜백과 오류 콜백 함수에서 자동으로 제공되는 인자

### ✅ Weather API
: 사용자의 위도와 경도를 기반으로, 날씨 데이터를 제공하는 API 서비스. 
<https://openweathermap.org/api> <- 회원가입 후 API를 발급받을 수 있다. (무료)

```javascript
// 사용 예시
const lat = position.coords.latitude;
const lon = position.coords.longitude;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`; // 위도, 경도, api
```
위도, 경도 api 키 넣기 

### ✅ fetch()
웹에서 데이터를 가져오거나 보낼 수 있는 JavaScript 함수
서버에서 데이터를 받아오거나, 서버로 데이터를 전송할 때 사용됨.
프론트엔드에서 백엔드로 요청을 보내는 것.

- fetch(): 기본적으로 URL을 인자로 받음. 서버에 요청을 보내고, 응답을 기다림.
- then(): 요청이 성공적으로 끝났을 때 실행되는 코드. 
- catch(): 오류가 발생했을 때 실행되는 코드.

### ✅ REST API
**서버와 클라이언트(웹사이트나 앱)**가 HTTP 요청을 사용해 데이터를 주고받는 방법
- 서버: 데이터를 저장하고, 수정하고, 삭제하는 곳
- 클라이언트: 그 데이터를 요청하고, 받아서 보여주는 곳

### ✅ HTTP 요청
웹 브라우저나 앱에서 서버로 보내는 메시지
주로 서버에서 데이터를 요청하거나 서버에 데이터를 보낼 때 사용됨.
- HTTP: Hypertext Transfer Protocol의 약자, 웹에서 데이터를 주고받는 규칙 
- 요청(Request): 클라이언트(웹 브라우저, 앱 등)가 서버에 보내는 메시지

### ✅ then
비동기 코드(시간이 걸리는 코드)가 끝난 후 실행할 작업을 지정하는 메서드
1. fetch(url) → 백엔드에 데이터 요청 (시간이 걸림)
2. 백엔드가 응답을 보내면 then() 안의 코드 실행
```javascript
// ex
fetch("https://api.example.com/data")
  .then((response) => response.json()) // 응답을 JSON으로 변환
  .then((data) => console.log(data));  // 변환된 데이터 출력
```
즉, then()은 비동기 작업이 끝난 후 실행할 코드를 넣는 곳으로, fetch() 같이 시간이 걸리는 함수 뒤에 사용함.
응답을 처리하거나, 데이터를 화면에 표시하는 데 사용됨.


### ✅ 왜 응답을 json 으로 변환할까?
: 서버에서 받은 데이터를 자바스크립트가 이해할 수 있는 형태로 바꾸기 위해서

서버에서 오는 데이터는 단순한 문자로 되어 있음. 이 문자를 자바스크립트 객체로 바꿔야 데이터를 쉽게 다룰 수 있음

예를 들어, 날씨 데이터에서 온도나 날씨 상태 같은 값을 가져오려면, 그 데이터를 객체 형태로 바꿔야 쉽게 꺼낼 수 있음. 그래서 **response.json()**을 사용해서 데이터를 변환하는 것임.
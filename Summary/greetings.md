## Overview
로그인 창 만들기

### Built with
- HTML, CSS, JavaScript
- local storage API

### The challenge
1. 브라우저 실행 시 로컬스토리지에서 유저 정보 확인
2. 정보가 없으면 로그인 폼 보이게 하고, 제출 시 유저 이름 저장 후 환영 메시지 표시
3. 정보가 있으면 바로 환영 메시지 표시
4. 새로고침해도 유저 이름이 남아 있어 환영 메시지 계속 표시됨

## What I learned

### ✅ console.dir(요소);

요소에 어떤 속성이 있는지 알아볼 때 사용함.

### ✅ required

값이 비어 있으면 제출 불가

### ✅ maxlength

입력 가능한 최대 문자 수 제한

### ✅ placeholder

입력 전 힌트 텍스트 표시

### ✅ input의 유효성 검사 하기 위해선 **input이 form 안에 있어야 한다.**

- input을 form 안에 넣었을 경우, enter 치면 웹사이트 새로고침됨. → form을 submit하면 새로고침 되는 게 기본 동작이기 때문.

### ✅ submit해도 새로고침 되지 않게 하는 법

preventDefault(): 기본 이벤트 동작을 막는 메서드

```JavaScript
// ex
function onLoginSubmit(event){ // event: 방금 일어난 event에 대한 정보가 담겨 있음.
    event.preventDefault(); // 기본 제출 동작(새로고침)을 막음
}

loginForm.addEventListener('submit', onLoginSubmit);
```

- 모든 EvenetListener function의 **첫 번째 인자**는 항상 **방금 일어난 event 객체**에 대한 정보를 제공

Q. 새로고침은 왜 방지할까?
A. 폼이 제출되면 기본적으로 페이지가 새로 고침됨.
이러면 입력한 데이터가 사라지거나 처리 로직이 끊김.
그래서 event.preventDefault();로 새로 고침을 막아서
데이터를 처리하고 화면을 업데이트할 수 있도록 하는 것임.

### ✅ classList
요소의 클래스 목록을 관리하는 객체

주요 메서드
- add(className) : 클래스 추가
- remove(className) : 클래스 제거
- toggle(className) : 클래스가 있으면 제거, 없으면 추가
- contains(className) : 해당 클래스가 있는지 확인 (boolean 반환)

```JavaScript
//ex
const element = document.querySelector("#myElement")
element.classList.add("active") // 클래스 추가
```
### ✅ innerText
요소의 텍스트 콘텐츠를 읽거나 수정하는 속성
```JavaScript
//ex
greeting.innerText = `Hello ${username}`;
```
### ✅ local storage API
: 브라우저에 데이터를 영구적으로 저장하는 데 사용하는 Web Storage의 한 종류임. key-value 형태로 데이터를 저장하며, 브라우저를 닫아도 데이터가 사라지지 않음

+ 로컬 스토리지는 **문자열**만 저장 가능하다. (따라서, JSON.stringify() 메서드로 문자열로 변환해 저장한다.)

- setItem(key, value) : 로컬 스토리지에 데이터를 저장하는 메서드
  브라우저를 닫거나 새로고침해도 데이터가 유지됨
  사용자 정보를 저장하거나, 설정값을 유지할 때 유용
- getItem(key): 로컬 스토리지에서 데이터를 읽음
- removeItem(key): 로컬 스토리지에서 데이터를 삭제

```JavaScript
// ex
localStorage.setItem("animal", "dog"); 
//animal이라는 "key"에 "dog"라는 값 저장
```
key: 저장할 데이터의 이름 (문자열)
value: 저장할 데이터의 값 (문자열로 변환 가능)

### ✅ 생성한 변수명이 반복 사용될 경우, 대문자 변수로 저장하는 게 좋다(관습)


### ✅ 코드 리뷰
savedUsername: 로컬스토리지에서 username 값을 가져와 저장함

case1)
  if (savedUsername == null): 유저 정보가 없을 때
  로그인 폼을 화면에 보이게 함
  submit 이벤트 발생 시 onLoginSubmit 함수 실행하도록 설정함

case2)
  else: 유저 정보가 있을 때
  환영 메시지를 화면에 보이게 함 (paintGreetings() 호출)



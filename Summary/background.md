## Overview
랜덤하게 백그라운드 변경

## What I learned

### ✅ DOM
: "Document Object Model"의 약자로, 웹 문서의 구조와 내용을 객체로 표현한 모델.
-  HTML 요소들을 자바스크립트로 객체처럼 다루면서 내용을 수정하거나, 스타일을 바꾸거나, 이벤트를 추가할 수 있음

### ✅ createElement("태그이름")
새로운 HTML 요소를 동적으로 생성할 때 사용하는 메서드
- "태그이름": 생성하고자 하는 HTML 태그의 이름
- 이 메서드는 지정한 태그의 빈 요소를 만들어 DOM에 추가되기 전에 사용자가 원하는 설정을 할 수 있게 해줌.

```javascript
// div 태그 요소 생성
const newDiv = document.createElement("div");

// 생성한 div에 텍스트 추가
newDiv.innerText = "Hello, World!";

// 생성한 div를 body에 추가
document.body.appendChild(newDiv);
```
### ✅ appendChild(요소)
DOM 요소에 자식 요소를 추가하는 메서드(HTML 안에 새로운 태그를 추가하는 기능)
```javascript
const parent = document.querySelector("#parent"); // 부모 태그 선택
const child = document.createElement("p"); // 새로운 <p> 태그 만들기
child.innerText = "나는 새로 추가된 문장이야."; // 내용 넣기

parent.appendChild(child); // 부모 태그 안에 추가하기
```
- #parent 태그 안에 <p>나는 새로 추가된 문장이야.</p> 가 들어감.

### ✅ createElement vs appendChild
- createElement("태그명"): 새로운 HTML 요소(태그)를 만들기
- appendChild(요소): 만든 요소를 추가하기

=> createElement로 태그를 만들고, appendChild로 추가

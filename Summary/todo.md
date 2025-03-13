## Overview
todo list 만들기

### The challenge
1. 할 일 목록을 로컬 스토리지에서 불러오기
- 저장된 할 일 목록을 로컬 스토리지에서 가져와 화면에 표시.
2. 새로운 할 일 추가
- 사용자가 입력한 할 일을 목록에 추가하고 로컬 스토리지에 저장.
3. 할 일 삭제 
- 각 할 일 옆의 삭제 버튼을 눌러 해당 할 일을 목록과 로컬 스토리지에서 제거.
4. 할 일 목록 업데이트 
- 할 일이 추가되거나 삭제되면 목록을 로컬 스토리지에 자동으로 저장하여 페이지를 새로고침해도 상태가 유지됨.

### Built with
- HTML, CSS, JavaScript 
- Local Storage

## What I learned

### ✅ const vs let
- const: 재할당 불가
- let: 재할당 가능

### ✅ addEventListener(event, handler) 
이벤트를 "추가"하는 게 아니라, **특정 이벤트가 발생했을 때, 실행할 함수를 등록**하는 것.
즉, 이벤트 자체를 발생시키는 게 아니라 이벤트가 발생했을 때 실행할 동작을 지정하는 역할.

- element: 이벤트를 감지할 HTML 요소 
- event: 감지할 이벤트 이름 ('click', 'submit', 'keydown', 등)
- handler: 이벤트 발생 시 실행할 함수

```javascript
// ex
function handleTodoSubmit(event) {
event.preventDefault();
}

todoForm.addEventListener('submit', handleTodoSubmit);// "todoForm"이라는 폼 요소에서 submit 이벤트가 발생하면 handleTodoSubmit 함수를 실행해라
```
### ✅ 이벤트가 발생한 요소 구하는 방법
```javascript
//ex. 클릭된 버튼 지우기
button.addEventListener('click', deleteTodo);

function deleteTodo(event){
  const li = event.target.parentElement;
  // event.target: 이벤트가 발생한 요소(=button)을 가리킴
  // event.target.parentElement: 이벤트가 발생한 요소(=button)의 부모 요소(li)를 반환
  li.remove();
}
```
- event.target: 이벤트가 발생한 요소를 가리킴
- parentElement: 그 요소의 부모 요소를 반환함.

### ✅ JSON.stringify()
객체나 배열을 JSON **문자열**로 변환하는 메서드
객체를 문자열로 바꿔서 저장하거나 전송할 때 사용(ex. 로컬 스토리지에 데이터를 저장할 때나 API로 데이터를 전송할 때 주로 사용됨.)
```javascript
const toDos = ["할 일 1", "할 일 2", "할 일 3"]; // 배열 
const toDosString = JSON.stringify(toDos); // 배열 -> 문자열 

console.log(toDosString); // ["할 일 1","할 일 2","할 일 3"]. 문자열 (배열처럼 보이지만 실제로는 문자열임.)
console.log(typeof toDosString); // "string"
```
Q. 배열을 문자열로 저장하는 이유?
A. localStorage나 다른 저장소는 **문자열**만 저장할 수 있기 때문(배열 저장 불가함)

### ✅ JSON.parse()
JSON 문자열을 JavaScript **객체**로 변환하는 메서드
```javascript
const jsonString = '{"name": "John", "age": 30}'; // JSON 형식의 문자열
const person = JSON.parse(jsonString); // JSON 문자열 -> JavaScript 객체로 변환함.
console.log(person); // { name: 'John', age: 30 }. 객체로 변환됨.
```
### ✅ forEach()
배열의 각 요소를 처리하는 함수를 반복적으로 호출함.
- 반환값이 없다.
```javascript
array.forEach(function(element, index, array) {
  // 요소마다 실행할 코드
});
```
- element: 배열의 각 요소 
- index: 각 요소의 인덱스 (선택 사항)
- array: forEach()가 실행된 배열 자체 (선택 사항)

### ✅ 화살표 함수
```javascript
const 함수명 = (매개변수1, 매개변수2) => {
  // 함수 본문
};
// 화살표 함수는 보통은 const를 많이 사용함, 값을 변경할 필요가 없기 때문.
```
- 매개변수는 괄호 안에 나열하고, 화살표 => 뒤에 함수 본문을 작성함. 
- 한 줄짜리 함수는 {}을 생략할 수 있음.

### ✅ .filter()
배열의 메서드로, 주어진 조건을 만족하는 요소들만 **새로운 배열**로 반환하는 기능을 함.
배열에서 필터링해서 새로운 배열을 만든다고 생각하면 됨.
- 조건이 true일 때 그 요소를 새로운 배열에 넣고, false일 때 그 요소는 새로운 배열에 포함되지 않음
```javascript
const numbers = [1, 2, 3, 4, 5];

// 짝수만 고르기
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);  // [2, 4]. true인 2, 4만 필터링 되어서 새로운 배열로 만들어 짐.
```
- filter()는 배열을 하나씩 돌면서 조건을 체크함.
- 조건을 만족하는 것만 새로운 배열에 넣어줌.

### ✅ typeof
값의 데이터 타입을 알아내는 연산자
```javascript
console.log(typeof 42);         // "number"
console.log(typeof 'hello');    // "string"
```
### ✅ parseInt()
문자열을 정수로 변환하는 함수
cf) parse는 문자열을 해석하여 다른 형식으로 변환하는 작업임.

### ✅ Date.now()
: 현재 시간을 밀리초 단위로 반환하는 메서드 => 실행할 때마다 **고유한 값** 생성이 가능하다. 

```javascript
const newTodoObj = {
text: "새로운 할 일",
id: Date.now() // 현재 시간을 밀리초 단위로 반환
};
console.log(newTodoObj.id);  // 1678704000000 (예시 값)
```

### ✅ createElement() VS appendChild()
- createElement(): 새로운 HTML 요소를 생성하는 메서드. 
appendChild(): 이미 생성된 요소를 부모 요소에 추가하는 메서드.

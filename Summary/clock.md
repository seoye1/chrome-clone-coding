## Overview
시계 만들기

## What I learned

### ✅ setInterval(콜백함수, 시간)
일정 시간마다 **반복적**으로 실행하는 함수.
- 시간은 밀리 초 간격으로 적는다. (1000ms = 1초)
- cf) interval: 간격
```JavaScript
//ex
function sayHello(){
    console.log('hello');
}
setInterval(sayHello, 5000); // 5초마다 한 번씩 실행
```

### ✅ setTimeout(콜백함수, 시간)
지정한 시간 후에 **한 번만** 실행되는 함수
- 시간은 밀리 초 간격으로 적는다. (1000ms = 1초)
- 타임아웃: 일정 시간 동안 작업이 완료되지 않으면, 해당 작업을 강제로 중단시키는 개념.
```JavaScript
//ex
setTimeout(() => {
  console.log("5초 후 실행");
}, 5000); // 5초 후에 한 번만 "5초 후 실행"이 출력됨
```
### ✅ 선택자 띄어쓰기
- 부모 > 자식 요소 찾기 → 띄어쓰기 사용 ("div p")
- 하나의 요소를 특정할 때 → 띄어쓰기 없이 ("h1#title")

### ✅ id vs class 차이
id는 하나의 요소만 특정할 때 사용, class는 여러 요소를 그룹화할 때 사용
- id: 중복 불가
- class: 중복 허용

### ✅ Date()
new Date()를 호출하면 현재 날짜와 시간을 나타내는 Date 객체가 만들 수 있음.
```JavaScript
const date = new Date();
console.log(date);  // 현재 날짜와 시간을 가져오는 객체가 만들어지고, 출력됨.
```
메서드들
- .getHours(): 현재 시간을 반환
- .getMinutes(): 현재 분을 반환 
- .getSeconds(): 현재 초를 반환 
- .getDate(): 현재 날짜(1~31)를 반환 
- .getMonth(): 현재 월(0~11)을 반환 (1월은 0, 12월은 11)
- .getFullYear(): 현재 연도를 반환

### ✅ new 키워드
생성자 함수를 호출해서 새로운 객체를 만드는 데 사용되는 키워드. 쉽게 말해서, new는 새로운 인스턴스를 만들 때 사용하는 것.

### ✅ 생성자 함수
객체를 **만드는 틀**. JavaScript에서 객체를 만들 때 사용할 수 있는 템플릿 함수를 만들 수 있음.

### ✅ 인스턴스란?
클래스나 생성자 함수를 통해 생성된 **실제 객체**를 의미함.

### ✅ padStart(targetLength, padString)
문자열 앞에 문자를 추가하는 메서드
- targetLength: 최종 문자열의 길이
- padString: 채울 문자 (기본값은 공백)

```JavaScript
//ex
const hours = String(date.getHours()).padStart(2, "0"); 
// 2글자가 되어야 하고 그렇지 않다면 앞을 "0"으로 채워라.
```


const todoForm = document.querySelector('#todo-form');
const toDoInput = todoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

const TODOS_KEY = "todos"; // 로컬 스토리지 키 이름임.

let toDos = []; // ⚠️ let으로 쓴 이유: 배열을 업데이트할 수 있도록 하기 위해서(const로 선언하면 배열 자체를 변경할 수 없음.)

function saveToDos(){ // toDos 배열을 localStorage에 집어 넣는 역할
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // 배열을 문자열 형태로 바꿔서 localStroage에 저장
  // 즉, "[\"할 일 1\", \"할 일 2\", \"할 일 3\"]"라는 문자열로 변환됨.
}

function deleteTodo(event){
  const li = event.target.parentElement;
  // event.target: 이벤트가 발생한 요소(=button)을 가리킴
  // event.target.parentElement: 이벤트가 발생한 요소(=button)의 부모 요소(li)를 반환
  li.remove();

  // toDos 배열에서 삭제하려는 할 일(li)을 제외한 나머지 할 일만 남기기 위한 필터링 작업
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // toDo의 id가 li의 id와 다른 것만 남겨라
  // li.id는 문자열 타입. toDo.id는 숫자 타입
  // 따라서, parseInt를 통해 li.id를 숫자 타입으로 바꿔줌. (비교하려면 타입이 같아야 하기 때문)

  saveToDos();
}

function paintToDo(newTodo){
  const li = document.createElement('li');

  // toDo.id는 할 일(toDo)을 고유하게 식별하기 위한 고유 아이디
  // 이 아이디는 보통 Date.now()로 생성한 현재 시간(밀리초 단위)을 사용하여 각 할 일을 구별하는데 사용됨. 이 값은 항상 고유하기 때문에, 각 할 일에 대해 고유한 값을 부여할 수 있음.
  li.id=newTodo.id; // <li> 요소의 id 속성을 newTodo.id로 설정

  const span = document.createElement('span');
  span.innerText = newTodo.text; // newTodo 객체의 text 속성을 span 요소의 텍스트로 설정
  const button = document.createElement('button');
  button.innerText = '❎';
  button.addEventListener('click', deleteTodo);
  li.appendChild(span); // span은 li의 자식이 됨
  li.appendChild(button); // li 안에 button이 들어감
  toDoList.appendChild(li); // li를 실제 html에 넣음
}

function handleTodoSubmit(event) {
  event.preventDefault(); // 새로 고침 방지(이유: 폼을 제출하면 기본적으로 페이지가 새로 고침됨. 새로 고침을 방지하지 않으면 할 일을 추가할 때마다 페이지가 새로고침되고, 페이지가 다시 로드되면 입력한 내용이 사라짐. 아직 로컬 스토리지에 저장하지 않았기 때문에 그대로 입력한 내용이 날라감.)

  const newTodo = toDoInput.value; // toDoInput.value: input 필드에서 사용자가 입력한 텍스트
  toDoInput.value = ''; // 입력 필드 빈 값으로 초기화
  const newTodoObj = { // 객체로 만든 이유: id로 각각의 li item을 구별하기 위해
    text:newTodo,
    id:Date.now() // .now()는 현재 시간을 밀리초 단위로 반환하는 메서드
  };

  // push: 배열의 끝에 새로운 요소 추가
  toDos.push(newTodoObj); // 배열의 마지막에 newTodoObj 객체 삽입.
  paintToDo(newTodoObj);
  saveToDos();
}

todoForm.addEventListener('submit', handleTodoSubmit); // "todoForm"이라는 폼 요소에서 submit 이벤트가 발생하면 handleTodoSubmit 함수를 실행해라

const savedToDos = localStorage.getItem(TODOS_KEY); // toDos 값을 가져옴. 없을 시 null 반환

// 로컬 스토리지에 저장된 toDos를 불러와 화면에 표시하는 역할
if(savedToDos !== null){ // 저장된 toDos가 있다면
  const parsedToDos = JSON.parse(savedToDos); // JSON 문자열을 객체로 변환
  toDos = parsedToDos; // toDos 배열을 통째로 parsedToDos라는 객체로 바꾸는 것
  // ⚠️ -> 요소 하나하나를 변환하는 게 아니라, 그냥 기존 배열을 새로운 배열로 덮어쓰기하는 것.
  parsedToDos.forEach(paintToDo); // forEach()로 배열의 각 요소를 paintToDo() 함수에 전달.
  // ⚠️ 함수를 바로 실행하는 게 아니라, forEach가 실행할 함수를 자체를 전달하는 것이기 때문에 뒤에 괄호 안 붙임.
}
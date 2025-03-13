
function getClock(){
  const date = new Date(); // Date 객체 생성
  const hours = String(date.getHours()).padStart(2, "0"); // 숫자에서 문자형으로 변환. 2글자가 되어야 하고 그렇지 않다면 "0"으로 채워라.
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`; // .을 통해 clock 객체의 속성 중 innerText 속성에 접근함.
}

getClock(); // 웹사이트가 로드 되자마자 getClock을 즉시 호출(이거 안 하면, 1초 뒤에 시간이 출력되기 때문에)
setInterval(getClock,1000); // 1초마다 반복해서 실행